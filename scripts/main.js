'use strict';

// ╔══════════════════════════════════════════════════════════════╗
// ║                  ГЛАВНЫЙ СКРИПТ                              ║
// ║  Управляет корзиной, отрисовкой меню, отправкой заказов      ║
// ║                                                              ║
// ║  Подключает (должны быть подключены ДО этого файла):         ║
// ║    настройки.js    — токены и ключи                          ║
// ║    данные-меню.js  — список блюд                             ║
// ║    переводы.js     — тексты на двух языках                   ║
// ╚══════════════════════════════════════════════════════════════╝


// ══════════════════════════════════════════════════════════════════
//  ГЛОБАЛЬНОЕ СОСТОЯНИЕ ПРИЛОЖЕНИЯ
//  Все важные переменные собраны в одном месте
// ══════════════════════════════════════════════════════════════════

let текущийЯзык   = localStorage.getItem('lang')  || 'ru';
let текущаяТема   = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

let корзина          = [];          // Список добавленных блюд
let типЗаказа        = null;        // 'cafe' | 'pickup' | 'delivery' | 'browse'
let номерСтола       = null;        // Номер стола (только для типа 'cafe')
let инфоДоставки     = null;        // Имя, телефон, адрес (для типа 'delivery')
let активнаяКатегория = 'all';      // Активный фильтр категорий
let индексСлайда     = 0;           // Текущий слайд в галерее блюда
let активноеБлюдоId  = null;        // ID открытого блюда в модалке

// Данные QR-гостя — запоминаем имя/телефон, чтобы не вводить повторно
let данныеQrГостя = null;


// ══════════════════════════════════════════════════════════════════
//  ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ══════════════════════════════════════════════════════════════════

// Короткий способ получить элемент по id
const получитьЭл = id => document.getElementById(id);

// Получить перевод по ключу (с fallback на русский)
const перевод = ключ => ПЕРЕВОДЫ[текущийЯзык]?.[ключ] ?? ПЕРЕВОДЫ.ru[ключ] ?? ключ;

// Проверить: это сессия QR-гостя за столиком?
function этоСессияQrГостя() {
  return типЗаказа === 'cafe' && номерСтола !== null;
}


// ══════════════════════════════════════════════════════════════════
//  СОХРАНЕНИЕ И ЗАГРУЗКА ДАННЫХ ИЗ localStorage
// ══════════════════════════════════════════════════════════════════

function загрузитьКорзину() {
  try {
    const сохранено = localStorage.getItem('cart');
    корзина = сохранено ? JSON.parse(сохранено) : [];
  } catch {
    корзина = [];
  }
}

function сохранитьКорзину() {
  try { localStorage.setItem('cart', JSON.stringify(корзина)); } catch {}
}

function загрузитьДанныеQrГостя() {
  try {
    const сырые = localStorage.getItem('tableGuestData');
    if (сырые) данныеQrГостя = JSON.parse(сырые);
  } catch {
    данныеQrГостя = null;
  }
}

function сохранитьДанныеQrГостя(имя, телефон) {
  данныеQrГостя = { имя, телефон };
  try { localStorage.setItem('tableGuestData', JSON.stringify(данныеQrГостя)); } catch {}
}


// ══════════════════════════════════════════════════════════════════
//  ТЕМА (Светлая / Тёмная)
// ══════════════════════════════════════════════════════════════════

function применитьТему() {
  document.documentElement.setAttribute('data-theme', текущаяТема);

  const иконкаЛуна = получитьЭл('iconMoon');
  const иконкаСолнце = получитьЭл('iconSun');

  if (иконкаЛуна)   иконкаЛуна.style.display   = текущаяТема === 'dark' ? 'none' : '';
  if (иконкаСолнце) иконкаСолнце.style.display = текущаяТема === 'dark' ? ''     : 'none';
}

// Следим за системной темой браузера
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    текущаяТема = e.matches ? 'dark' : 'light';
    применитьТему();
  }
});


// ══════════════════════════════════════════════════════════════════
//  ЯЗЫК (Русский / Кыргызский)
// ══════════════════════════════════════════════════════════════════

function применитьЯзык() {
  document.documentElement.setAttribute('lang', текущийЯзык);

  // Обновляем кнопку переключения языка
  const кнопкаЯзыка = получитьЭл('langToggle');
  if (кнопкаЯзыка) кнопкаЯзыка.textContent = текущийЯзык.toUpperCase();

  // Переводим все элементы с атрибутом data-i18n
  document.querySelectorAll('[data-i18n]').forEach(эл => {
    const ключ = эл.dataset.i18n;
    const текст = перевод(ключ);
    if (текст && эл.tagName !== 'INPUT' && эл.tagName !== 'TEXTAREA') {
      эл.textContent = текст;
    }
  });

  // Подсвечиваем активную кнопку языка
  document.querySelectorAll('.lang-pill').forEach(кнопка => {
    кнопка.classList.toggle('active', кнопка.dataset.lang === текущийЯзык);
  });
}


// ══════════════════════════════════════════════════════════════════
//  УВЕДОМЛЕНИЕ (Toast — всплывающая подсказка)
// ══════════════════════════════════════════════════════════════════

function показатьУведомление(сообщение, мсек = 3000) {
  const эл = получитьЭл('toast');
  if (!эл) return;

  эл.textContent = сообщение;
  эл.classList.add('show');
  clearTimeout(эл._таймер);
  эл._таймер = setTimeout(() => эл.classList.remove('show'), мсек);
}


// ══════════════════════════════════════════════════════════════════
//  МОДАЛЬНЫЕ ОКНА
// ══════════════════════════════════════════════════════════════════

function открытьМодалку(id) {
  const эл = получитьЭл(id);
  if (эл) эл.classList.add('open');
}

function закрытьМодалку(id) {
  const эл = получитьЭл(id);
  if (эл) эл.classList.remove('open');
}

function заблокироватьПрокрутку()   { document.body.classList.add('locked'); }
function разблокироватьПрокрутку() { document.body.classList.remove('locked'); }


// ══════════════════════════════════════════════════════════════════
//  КОРЗИНА — ЛОГИКА ДОБАВЛЕНИЯ / ИЗМЕНЕНИЯ КОЛИЧЕСТВА
// ══════════════════════════════════════════════════════════════════

// Добавить блюдо в корзину
// item    — объект блюда из МЕНЮ
// вариант — объект { label, price } если у блюда есть варианты, иначе null
function добавитьВКорзину(item, вариант) {
  const корзинаБылаПустой = корзина.length === 0;

  // Уникальный ID позиции: id блюда + вариант (если есть)
  const ключПозиции = вариант ? `${item.id}_${вариант.label}` : String(item.id);
  const цена        = вариант ? вариант.price : item.price;
  const суффикс     = вариант ? ` (${вариант.label})` : '';
  const название    = (текущийЯзык === 'ru' ? item.name : (item.nameKg || item.name)) + суффикс;

  const существующая = корзина.find(п => п.ключ === ключПозиции);

  if (существующая) {
    // Блюдо уже в корзине — увеличиваем количество
    существующая.кол++;
  } else {
    // Новое блюдо — добавляем
    корзина.push({
      ключ:      ключПозиции,
      id:        item.id,
      название,
      цена,
      фото:      item.image,
      кол:       1,
    });
  }

  сохранитьКорзину();
  обновитьЗначокКорзины();
  отрисоватьМеню();
  показатьУведомление(`${перевод('toast-added')} ${название}`);

  // При первом добавлении — подсветить кнопку корзины
  if (корзинаБылаПустой) подсветитьКнопкуКорзины();
}

function увеличитьКоличество(ключ) {
  const позиция = корзина.find(п => п.ключ === ключ);
  if (позиция) {
    позиция.кол++;
    сохранитьКорзину();
    обновитьЗначокКорзины();
    отрисоватьМеню();
    отрисоватьТоварыКорзины();
  }
}

function уменьшитьКоличество(ключ) {
  const позиция = корзина.find(п => п.ключ === ключ);
  if (!позиция) return;

  позиция.кол--;
  if (позиция.кол <= 0) {
    корзина = корзина.filter(п => п.ключ !== ключ);
  }

  сохранитьКорзину();
  обновитьЗначокКорзины();
  отрисоватьМеню();
  отрисоватьТоварыКорзины();
}

function удалитьИзКорзины(ключ) {
  корзина = корзина.filter(п => п.ключ !== ключ);
  сохранитьКорзину();
  обновитьЗначокКорзины();
  отрисоватьМеню();
  отрисоватьТоварыКорзины();
}


// ══════════════════════════════════════════════════════════════════
//  КОРЗИНА — ОТОБРАЖЕНИЕ (бейдж, строка итого, список товаров)
// ══════════════════════════════════════════════════════════════════

function обновитьЗначокКорзины() {
  const всегоТоваров = корзина.reduce((с, п) => с + п.кол, 0);

  // Обновляем бейджи на всех кнопках корзины
  ['cartBadge', 'bottomBadge'].forEach(id => {
    const эл = получитьЭл(id);
    if (!эл) return;
    эл.textContent    = всегоТоваров;
    эл.style.display  = всегоТоваров > 0 ? 'flex' : 'none';
  });

  обновитьПолоскуИтого();
}

// Полоска внизу экрана — показывает количество блюд и сумму
function обновитьПолоскуИтого() {
  const полоска = получитьЭл('cartSummaryBar');
  if (!полоска) return;

  if (!корзина.length) {
    полоска.style.display = 'none';
    return;
  }

  const всегоТоваров = корзина.reduce((с, п) => с + п.кол, 0);
  const всегоСумма   = корзина.reduce((с, п) => с + п.кол * п.цена, 0);

  const элТекст = получитьЭл('cartSummaryText');
  const элЦена  = получитьЭл('cartSummaryPrice');

  if (элТекст) {
    // Правильное склонение: 1 блюдо / 2 блюда / 5 блюд
    const слово = текущийЯзык === 'ru'
      ? (всегоТоваров === 1 ? 'блюдо' : (всегоТоваров >= 2 && всегоТоваров <= 4 ? 'блюда' : 'блюд'))
      : 'тамак';
    элТекст.textContent = `${всегоТоваров} ${слово}`;
  }

  if (элЦена) элЦена.textContent = `${всегоСумма} ${перевод('currency')}`;
  полоска.style.display = 'flex';
}

// Анимируем кнопку корзины при первом добавлении
let анимацияКорзиныПоказана = false;
function подсветитьКнопкуКорзины() {
  if (анимацияКорзиныПоказана) return;
  анимацияКорзиныПоказана = true;

  const кнопка = получитьЭл('bnCart') || получитьЭл('cartBtn');
  if (!кнопка) return;

  кнопка.classList.add('pulse-cart');
  setTimeout(() => кнопка.classList.remove('pulse-cart'), 1200);
}

// Рисуем список товаров внутри модалки корзины
function отрисоватьТоварыКорзины() {
  const обёртка     = получитьЭл('cartItems');
  const элПустая    = получитьЭл('cartEmpty');
  const элИтогоОбёртка = получитьЭл('cartTotalWrap');
  const элИтого     = получитьЭл('cartTotalPrice');

  if (!обёртка) return;

  if (корзина.length === 0) {
    обёртка.innerHTML         = '';
    элПустая.style.display    = '';
    элИтогоОбёртка.style.display = 'none';
    проверитьКнопкуОтправки();
    return;
  }

  элПустая.style.display       = 'none';
  элИтогоОбёртка.style.display = '';
  обёртка.innerHTML            = '';

  let итого = 0;

  корзина.forEach(позиция => {
    const подитог = позиция.цена * позиция.кол;
    итого += подитог;

    const строка = document.createElement('div');
    строка.className = 'cart-row';
    строка.innerHTML = `
      <img class="cart-row-img" src="${позиция.фото}" alt="${позиция.название}"
           loading="lazy" onerror="this.src='${ЗАГЛУШКА_ФОТО}'">
      <div class="cart-row-info">
        <div class="cart-row-name">${позиция.название}</div>
        <div class="cart-row-price">${позиция.цена} ${перевод('currency')}</div>
      </div>
      <button class="cart-row-del" onclick="удалитьИзКорзины('${позиция.ключ}')"
              aria-label="${перевод('remove')}">×</button>
      <div class="cart-row-bottom">
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="уменьшитьКоличество('${позиция.ключ}')">−</button>
          <span class="qty-val">${позиция.кол}</span>
          <button class="qty-btn" onclick="увеличитьКоличество('${позиция.ключ}')">+</button>
        </div>
        <span class="cart-row-total">${подитог} ${перевод('currency')}</span>
      </div>`;
    обёртка.appendChild(строка);
  });

  элИтого.textContent = `${итого} ${перевод('currency')}`;
  проверитьКнопкуОтправки();
}


// ══════════════════════════════════════════════════════════════════
//  МЕНЮ — ОТРИСОВКА КАРТОЧЕК
// ══════════════════════════════════════════════════════════════════

function отрисоватьМеню() {
  const сетка = получитьЭл('menuGrid');
  if (!сетка) return;
  сетка.innerHTML = '';

  // Фильтрация по активной категории
  let отфильтровано;
  if (активнаяКатегория === 'all')  отфильтровано = МЕНЮ;
  else if (активнаяКатегория === 'hits') отфильтровано = МЕНЮ.filter(б => б.isHit);
  else отфильтровано = МЕНЮ.filter(б => б.category === активнаяКатегория);

  отфильтровано.forEach(блюдо => сетка.appendChild(создатьКарточку(блюдо)));

  // Ленивая загрузка изображений через IntersectionObserver
  if ('IntersectionObserver' in window) {
    const наблюдатель = new IntersectionObserver(записи => {
      записи.forEach(запись => {
        if (запись.isIntersecting) {
          const картинка = запись.target;
          if (картинка.dataset.src) {
            картинка.src = картинка.dataset.src;
            delete картинка.dataset.src;
          }
          наблюдатель.unobserve(картинка);
        }
      });
    }, { rootMargin: '200px 0px' });

    сетка.querySelectorAll('img[data-src]').forEach(картинка => наблюдатель.observe(картинка));
  } else {
    // Браузер без поддержки — загружаем сразу
    сетка.querySelectorAll('img[data-src]').forEach(картинка => {
      картинка.src = картинка.dataset.src;
      delete картинка.dataset.src;
    });
  }
}

// Создаём HTML-карточку одного блюда
function создатьКарточку(блюдо) {
  const карточка = document.createElement('div');
  карточка.className = 'menu-card';

  const название = текущийЯзык === 'ru' ? блюдо.name : (блюдо.nameKg || блюдо.name);
  const описание = текущийЯзык === 'ru' ? блюдо.description : (блюдо.descriptionKg || блюдо.description);

  // Диапазон цен для блюд с вариантами
  let строкаЦены;
  if (блюдо.variants?.length) {
    const цены = блюдо.variants.map(в => в.price);
    const мин  = Math.min(...цены);
    const макс = Math.max(...цены);
    строкаЦены = мин === макс ? `${мин}` : `${мин}–${макс}`;
  } else {
    строкаЦены = `${блюдо.price}`;
  }

  // Проверяем, есть ли блюдо в корзине (для кнопки +/-)
  const вКорзине = !блюдо.variants?.length && корзина.find(п => п.ключ === String(блюдо.id));
  const количество = вКорзине ? вКорзине.кол : 0;

  карточка.innerHTML = `
    <div class="card-img-wrap">
      <img class="card-img" src="${ЗАГЛУШКА_ФОТО}" data-src="${блюдо.image}" alt="${название}"
           loading="lazy" decoding="async"
           onerror="this.src='${ЗАГЛУШКА_ФОТО}';this.removeAttribute('data-src')">
    </div>
    <div class="card-body">
      <div class="card-name">${название}</div>
      ${описание ? `<div class="card-desc">${описание}</div>` : ''}
    </div>
    <div class="card-footer">
      <div class="card-price">${строкаЦены} <small>${перевод('currency')}</small></div>
      <div class="card-actions">
        ${блюдо.variants?.length
          // Блюдо с вариантами — всегда кнопка "В корзину" (открывает выбор варианта)
          ? `<button class="btn-add" onclick="нажатьДобавитьВКорзину(${блюдо.id},event)">${перевод('add-to-cart')}</button>`
          : количество === 0
            // Блюда ещё нет в корзине
            ? `<button class="btn-add" onclick="нажатьДобавитьВКорзину(${блюдо.id},event)">${перевод('add-to-cart')}</button>`
            // Блюдо уже в корзине — показываем счётчик
            : `<div class="qty-ctrl">
                <button class="qty-btn" onclick="уменьшитьКоличество('${блюдо.id}');event.stopPropagation()">−</button>
                <span class="qty-val">${количество}</span>
                <button class="qty-btn" onclick="увеличитьКоличество('${блюдо.id}');event.stopPropagation()">+</button>
              </div>`
        }
      </div>
    </div>`;

  // Клик по карточке (не по кнопкам) — открыть детали блюда
  карточка.addEventListener('click', e => {
    if (e.target.closest('.card-actions')) return;
    показатьДетальБлюда(блюдо.id);
  });

  return карточка;
}

// Обработка нажатия "В корзину" на карточке
function нажатьДобавитьВКорзину(id, e) {
  e.stopPropagation();
  const блюдо = МЕНЮ.find(б => б.id === id);
  if (!блюдо) return;

  if (блюдо.variants?.length) {
    открытьВыборВарианта(блюдо);
  } else {
    добавитьВКорзину(блюдо, null);
  }
}


// ══════════════════════════════════════════════════════════════════
//  ДЕТАЛИ БЛЮДА — Модалка с фото, описанием, ингредиентами
// ══════════════════════════════════════════════════════════════════

function показатьДетальБлюда(id) {
  const блюдо = МЕНЮ.find(б => б.id === id);
  if (!блюдо) return;

  активноеБлюдоId = id;

  const название    = текущийЯзык === 'ru' ? блюдо.name : (блюдо.nameKg || блюдо.name);
  const описание    = текущийЯзык === 'ru' ? блюдо.description : (блюдо.descriptionKg || блюдо.description);
  const ингредиенты = текущийЯзык === 'ru' ? (блюдо.ingredients || []) : (блюдо.ingredientsKg || блюдо.ingredients || []);

  // Строка цены
  let строкаЦены;
  if (блюдо.variants?.length) {
    строкаЦены = `от ${Math.min(...блюдо.variants.map(в => в.price))} ${перевод('currency')}`;
  } else {
    строкаЦены = `${блюдо.price} ${перевод('currency')}`;
  }

  получитьЭл('dishModalTitle').textContent = название;
  получитьЭл('dishName').textContent       = название;
  получитьЭл('dishDesc').textContent       = описание || '';
  получитьЭл('dishPrice').textContent      = строкаЦены;
  получитьЭл('dishIngList').innerHTML      = ингредиенты.map(и => `<li>${и}</li>`).join('');

  // Галерея фото
  const фотографии = блюдо.images?.length ? блюдо.images : [блюдо.image];
  индексСлайда = 0;

  const слайдер = получитьЭл('dishSlider');
  const точки   = получитьЭл('slideDots');
  слайдер.innerHTML = '';
  точки.innerHTML   = '';

  фотографии.forEach((путь, и) => {
    const слайд = document.createElement('div');
    слайд.className = 'slide-item';
    слайд.innerHTML = `<img src="${путь}" alt="${название}" loading="lazy"
      onerror="this.src='${ЗАГЛУШКА_ФОТО}'"
      onclick="открытьЛайтбокс('${путь.replace(/'/g, "\\'")}','${название.replace(/'/g, "\\'")}')">`;
    слайдер.appendChild(слайд);

    const точка = document.createElement('button');
    точка.className = `slide-dot${и === 0 ? ' active' : ''}`;
    точка.setAttribute('aria-label', `Фото ${и + 1}`);
    точка.addEventListener('click', () => { индексСлайда = и; обновитьСлайдер(); });
    точки.appendChild(точка);
  });

  const естьНесколькоФото = фотографии.length > 1;
  получитьЭл('slidePrev').style.display = естьНесколькоФото ? '' : 'none';
  получитьЭл('slideNext').style.display = естьНесколькоФото ? '' : 'none';
  точки.style.display = естьНесколькоФото ? '' : 'none';

  обновитьСлайдер();
  открытьМодалку('dishModal');
}

// Перемотка слайдера фото в детальной карточке
function обновитьСлайдер() {
  const слайдер = получитьЭл('dishSlider');
  if (!слайдер) return;

  const слайды = слайдер.querySelectorAll('.slide-item');
  if (!слайды.length) return;

  // Закольцовываем индекс
  индексСлайда = ((индексСлайда % слайды.length) + слайды.length) % слайды.length;
  слайдер.style.transform = `translateX(-${индексСлайда * 100}%)`;

  document.querySelectorAll('.slide-dot').forEach((точка, и) => {
    точка.classList.toggle('active', и === индексСлайда);
  });
}


// ══════════════════════════════════════════════════════════════════
//  ЛАЙТБОКС — просмотр фото на весь экран
// ══════════════════════════════════════════════════════════════════

function открытьЛайтбокс(путь, альт) {
  const лб   = получитьЭл('lightbox');
  const картинка = получитьЭл('lightboxImg');
  if (!лб || !картинка) return;

  картинка.src = путь;
  картинка.alt = альт || '';
  лб.classList.add('open');
}

function закрытьЛайтбокс() {
  const лб   = получитьЭл('lightbox');
  const картинка = получитьЭл('lightboxImg');
  if (!лб || !картинка) return;

  лб.classList.remove('open');
  картинка.src = '';
}


// ══════════════════════════════════════════════════════════════════
//  ВЫБОР ВАРИАНТА БЛЮДА (Размер, Объём)
// ══════════════════════════════════════════════════════════════════

function открытьВыборВарианта(блюдо) {
  const название = текущийЯзык === 'ru' ? блюдо.name : (блюдо.nameKg || блюдо.name);

  получитьЭл('variantTitle').textContent = название;
  получитьЭл('variantList').innerHTML    = '';

  (блюдо.variants || []).forEach(вариант => {
    const кнопка = document.createElement('button');
    кнопка.className = 'var-btn';

    const картинкаHtml = вариант.image
      ? `<img class="var-img" src="${вариант.image}" alt="${вариант.label}" loading="lazy" onerror="this.style.display='none'">`
      : '';

    кнопка.innerHTML = `
      ${картинкаHtml}
      <span class="var-label">${вариант.label}</span>
      <span class="var-price">${вариант.price} ${перевод('currency')}</span>`;

    кнопка.addEventListener('click', () => {
      добавитьВКорзину(блюдо, вариант);
      закрытьМодалку('variantModal');
    });

    получитьЭл('variantList').appendChild(кнопка);
  });

  открытьМодалку('variantModal');
}


// ══════════════════════════════════════════════════════════════════
//  ОФОРМЛЕНИЕ ЗАКАЗА
// ══════════════════════════════════════════════════════════════════

// Нажатие кнопки "Оформить заказ" в корзине
function началоОформленияЗаказа() {
  if (корзина.length === 0) {
    alert(перевод('alert-cart-empty'));
    return;
  }

  закрытьМодалку('cartModal');

  // Если тип заказа ещё не выбран — показываем выбор
  if (!типЗаказа) {
    заблокироватьПрокрутку();
    открытьМодалку('orderTypeModal');
    return;
  }

  // Тип уже выбран — сразу к форме
  открытьФормуЗаказа();
}

// Открыть форму финального оформления заказа
function открытьФормуЗаказа() {
  const форма = получитьЭл('orderForm');
  if (форма) форма.reset();

  const блокГостя      = получитьЭл('guestFields');
  const подсказкаПовтор = получитьЭл('repeatOrderHint');

  // Если QR-гость уже вводил данные раньше — не просим снова
  if (этоСессияQrГостя() && данныеQrГостя) {
    if (блокГостя)       блокГостя.style.display      = 'none';
    if (подсказкаПовтор) подсказкаПовтор.style.display = '';
  } else {
    if (блокГостя)       блокГостя.style.display       = '';
    if (подсказкаПовтор) подсказкаПовтор.style.display = 'none';

    // Предзаполняем данные для доставки если они сохранены
    if (типЗаказа === 'delivery' && инфоДоставки) {
      const элИмя    = получитьЭл('custName');
      const элТелефон = получитьЭл('custPhone');
      const элАдрес   = получитьЭл('custAddr');
      if (элИмя)     элИмя.value     = инфоДоставки.имя    || '';
      if (элТелефон) элТелефон.value = инфоДоставки.телефон || '';
      if (элАдрес)   элАдрес.value   = инфоДоставки.адрес   || '';
    }
  }

  // Поле адреса — только для доставки
  const полеАдреса = получитьЭл('addrField');
  if (полеАдреса) полеАдреса.style.display = типЗаказа === 'delivery' ? '' : 'none';

  // Оплата картой недоступна для доставки
  const оплатаКарта = получитьЭл('payCard');
  if (оплатаКарта) оплатаКарта.style.display = типЗаказа === 'delivery' ? 'none' : '';

  // Сбрасываем выбор способа оплаты
  document.querySelectorAll('.pay-opt').forEach(о => о.classList.remove('selected'));
  document.querySelectorAll('input[name="payment"]').forEach(р => р.checked = false);

  построитьСводкуЗаказа();
  проверитьКнопкуОтправки();
  открытьМодалку('orderModal');
}

// Строим список блюд в форме заказа
function построитьСводкуЗаказа() {
  const эл = получитьЭл('orderSummary');
  if (!эл) return;

  let html = '';
  let итого = 0;

  корзина.forEach(позиция => {
    const подитог = позиция.цена * позиция.кол;
    итого += подитог;
    html += `<div class="order-summary-row">
      <span>${позиция.название} × ${позиция.кол}</span>
      <span>${подитог} ${перевод('currency')}</span>
    </div>`;
  });

  html += `<div class="order-summary-row">
    <span>${перевод('cart-total')}</span>
    <span>${итого} ${перевод('currency')}</span>
  </div>`;

  эл.innerHTML = html;
}

// Блокируем / разблокируем кнопку "Отправить заказ"
function проверитьКнопкуОтправки() {
  const кнопка = получитьЭл('submitOrderBtn');
  if (!кнопка) return;

  const выбранОплата = document.querySelector('input[name="payment"]:checked');

  // QR-гость, который уже вводил данные — нужно только выбрать оплату
  if (этоСессияQrГостя() && данныеQrГостя) {
    const можно = корзина.length > 0 && !!выбранОплата;
    кнопка.disabled = !можно;
    кнопка.classList.toggle('pulse', можно);
    return;
  }

  const имя     = получитьЭл('custName')?.value.trim();
  const телефон = получитьЭл('custPhone')?.value.replace(/\s/g, '');
  const можно   = корзина.length > 0 && имя?.length > 0 && проверитьТелефон(телефон) && !!выбранОплата;

  кнопка.disabled = !можно;
  кнопка.classList.toggle('pulse', можно);
}


// ══════════════════════════════════════════════════════════════════
//  ТЕЛЕФОН — форматирование и валидация
// ══════════════════════════════════════════════════════════════════

function форматироватьТелефон(поле) {
  let значение = поле.value.replace(/\D/g, '').slice(0, 9);
  let результат = значение.slice(0, 3);
  if (значение.length > 3) результат += ' ' + значение.slice(3, 5);
  if (значение.length > 5) результат += ' ' + значение.slice(5, 7);
  if (значение.length > 7) результат += ' ' + значение.slice(7, 9);
  поле.value = результат;
}

function проверитьТелефон(значение) {
  return /^\d{9}$/.test((значение || '').replace(/\s/g, ''));
}


// ══════════════════════════════════════════════════════════════════
//  ОТПРАВКА ЗАКАЗА
// ══════════════════════════════════════════════════════════════════

// Формируем текст заказа для Telegram
function составитьТекстЗаказа(имя, телефон, комментарий, оплата) {
  const заголовок = текущийЯзык === 'ru' ? 'Новый заказ' : 'Жаңы заказ';
  let текст = `<b>🍽 ${заголовок}</b>\n`;

  // Указываем номер стола для заказов из кафе
  if (типЗаказа === 'cafe' && номерСтола) {
    текст += `📍 Стол №${номерСтола}\n`;
  }

  текст += `━━━━━━━━━━━━━━━━\n`;

  let итого = 0;
  корзина.forEach(позиция => {
    const подитог = позиция.цена * позиция.кол;
    итого += подитог;
    текст += `• ${позиция.название} × ${позиция.кол} — <b>${подитог} ${перевод('currency')}</b>\n`;
  });

  текст += `━━━━━━━━━━━━━━━━\n`;
  текст += `💰 <b>${перевод('cart-total')} ${итого} ${перевод('currency')}</b>\n`;
  текст += `━━━━━━━━━━━━━━━━\n`;
  текст += `👤 <b>${имя}</b>\n📞 +996 ${телефон}\n`;

  if (оплата) {
    const способОплаты = оплата === 'cash' ? перевод('payment-cash')
      : оплата === 'card' ? перевод('payment-card')
      : 'MBank';
    текст += `💳 ${способОплаты}\n`;
  }

  if (типЗаказа === 'pickup') {
    текст += `📍 ${текущийЯзык === 'ru' ? 'Самовывоз' : 'Өзү алып кетүү'}\n`;
  }

  if (типЗаказа === 'delivery' && инфоДоставки?.адрес) {
    текст += `🚗 ${текущийЯзык === 'ru' ? 'Доставка' : 'Жеткирүү'}: ${инфоДоставки.адрес}\n`;
  }

  if (комментарий?.trim()) {
    текст += `\n📝 <i>${комментарий.trim()}</i>`;
  }

  return текст;
}

// Отправляем сообщение в Telegram
async function отправитьВТелеграм(текст) {
  // Заказы со стола идут в группу кафе, остальные — в личный чат
  const получатель = (типЗаказа === 'cafe')
    ? НАСТРОЙКИ.ТЕЛЕГРАМ_ГРУППА_КАФЕ
    : НАСТРОЙКИ.ТЕЛЕГРАМ_ЧАТ_ДОСТАВКА;

  try {
    const ответ = await fetch(
      `https://api.telegram.org/bot${НАСТРОЙКИ.ТЕЛЕГРАМ_ТОКЕН}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id:    получатель,
          text:       текст,
          parse_mode: 'HTML',
        }),
      }
    );
    const данные = await ответ.json();
    return данные.ok;
  } catch (ошибка) {
    console.error('Ошибка Telegram:', ошибка);
    return false;
  }
}

// Обработчик отправки формы заказа
async function отправитьЗаказ(e) {
  e.preventDefault();

  let имя, сыройТелефон, телефон;

  // QR-гость с сохранёнными данными
  if (этоСессияQrГостя() && данныеQrГостя) {
    имя          = данныеQrГостя.имя;
    сыройТелефон = данныеQrГостя.телефон;
    телефон      = сыройТелефон.replace(/\s/g, '');
  } else {
    имя          = получитьЭл('custName')?.value.trim();
    сыройТелефон = получитьЭл('custPhone')?.value.trim();
    телефон      = сыройТелефон.replace(/\s/g, '');

    if (!имя) {
      alert(перевод('alert-fill-fields'));
      return;
    }
    if (!проверитьТелефон(телефон)) {
      alert(перевод('alert-invalid-phone'));
      return;
    }
    // Запоминаем данные QR-гостя за столом для следующих заказов
    if (этоСессияQrГостя()) {
      сохранитьДанныеQrГостя(имя, сыройТелефон);
    }
  }

  const комментарий = получитьЭл('custComment')?.value.trim() || '';
  const оплата      = document.querySelector('input[name="payment"]:checked')?.value || '';
  const адрес       = получитьЭл('custAddr')?.value.trim() || '';

  if (!корзина.length) {
    alert(перевод('alert-cart-empty'));
    return;
  }

  // Сохраняем данные для доставки
  if (типЗаказа === 'delivery') {
    if (!инфоДоставки) инфоДоставки = {};
    инфоДоставки.адрес   = адрес || инфоДоставки.адрес;
    инфоДоставки.имя     = имя;
    инфоДоставки.телефон = сыройТелефон;
    try { localStorage.setItem('deliveryInfo', JSON.stringify(инфоДоставки)); } catch {}
  }

  // Блокируем кнопку на время отправки
  const кнопка = получитьЭл('submitOrderBtn');
  if (кнопка) {
    кнопка.disabled   = true;
    кнопка.textContent = '⏳ Отправляем...';
  }

  const текстЗаказа = составитьТекстЗаказа(имя, сыройТелефон, комментарий, оплата);
  const отправлено  = await отправитьВТелеграм(текстЗаказа);

  // Очищаем корзину и закрываем форму
  корзина = [];
  сохранитьКорзину();
  обновитьЗначокКорзины();
  отрисоватьМеню();
  закрытьМодалку('orderModal');

  if (отправлено) {
    открытьМодалку('successModal');
  } else {
    // Запасной вариант — открываем WhatsApp
    const текстWhatsApp = текстЗаказа.replace(/<[^>]*>/g, '');
    window.open(
      `https://wa.me/${НАСТРОЙКИ.WHATSAPP_НОМЕР}?text=${encodeURIComponent(текстWhatsApp)}`,
      '_blank'
    );
    открытьМодалку('successModal');
  }

  // Сбрасываем тип заказа после завершения
  типЗаказа  = null;
  номерСтола = null;
  document.body.classList.remove('locked', 'browse');

  if (кнопка) {
    кнопка.disabled   = false;
    кнопка.textContent = перевод('order-submit');
  }
}


// ══════════════════════════════════════════════════════════════════
//  ТИП ЗАКАЗА И ВЫБОР СТОЛА
// ══════════════════════════════════════════════════════════════════

// Устанавливаем тип заказа и переходим дальше
function установитьТипЗаказа(тип) {
  типЗаказа = тип;
  закрытьМодалку('orderTypeModal');
  закрытьМодалку('tableModal');
  закрытьМодалку('deliveryModal');
  разблокироватьПрокрутку();
  document.body.classList.toggle('browse', тип === 'browse');

  // Открываем форму заказа если корзина не пуста
  if (тип !== 'browse' && корзина.length > 0) {
    открытьФормуЗаказа();
  }
}

// Рисуем кнопки выбора стола (1-11)
function построитьСеткуСтолов() {
  const сетка = получитьЭл('tableGrid');
  if (!сетка) return;
  сетка.innerHTML = '';

  for (let номер = 1; номер <= 11; номер++) {
    const кнопка = document.createElement('button');
    кнопка.className   = 'tbl-btn';
    кнопка.textContent = номер;

    кнопка.addEventListener('click', () => {
      номерСтола = номер;
      установитьТипЗаказа('cafe');
      показатьУведомление(`${перевод('toast-table')}${номер}`);
    });

    сетка.appendChild(кнопка);
  }
}


// ══════════════════════════════════════════════════════════════════
//  СКРЫТИЕ ШАПКИ ПРИ ПРОКРУТКЕ
// ══════════════════════════════════════════════════════════════════

function инициализироватьСкрытиеШапки() {
  const шапка = получитьЭл('header');
  if (!шапка) return;

  let последняяПозиция = 0;
  let активен = false;

  window.addEventListener('scroll', () => {
    if (!активен) {
      requestAnimationFrame(() => {
        const позиция = window.scrollY;

        if (позиция < 50) {
          шапка.classList.remove('hide');
        } else if (позиция > последняяПозиция + 8) {
          шапка.classList.add('hide');      // Прокрутка вниз — прячем
        } else if (позиция < последняяПозиция - 8) {
          шапка.classList.remove('hide');   // Прокрутка вверх — показываем
        }

        последняяПозиция = позиция;
        активен = false;
      });
      активен = true;
    }
  }, { passive: true });
}


// ══════════════════════════════════════════════════════════════════
//  СТИЛИЗАЦИЯ КНОПОК ОПЛАТЫ
// ══════════════════════════════════════════════════════════════════

function инициализироватьОплату() {
  document.querySelectorAll('.pay-opt').forEach(вариант => {
    вариант.addEventListener('click', () => {
      const радиокнопка = вариант.querySelector('input[type="radio"]');
      if (!радиокнопка) return;

      радиокнопка.checked = true;
      document.querySelectorAll('.pay-opt').forEach(о => о.classList.remove('selected'));
      вариант.classList.add('selected');
      проверитьКнопкуОтправки();
    });
  });
}


// ══════════════════════════════════════════════════════════════════
//  ИНИЦИАЛИЗАЦИЯ — Запускается когда страница загружена
// ══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // Загружаем сохранённые данные
  загрузитьКорзину();
  загрузитьДанныеQrГостя();
  try {
    const сохранено = localStorage.getItem('deliveryInfo');
    if (сохранено) инфоДоставки = JSON.parse(сохранено);
  } catch {}

  // Применяем тему и язык
  применитьТему();
  применитьЯзык();

  // Первоначальная отрисовка
  обновитьЗначокКорзины();
  построитьСеткуСтолов();
  отрисоватьМеню();
  инициализироватьСкрытиеШапки();
  инициализироватьОплату();


  // ── ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ ───────────────────────────────────────────
  получитьЭл('themeToggle')?.addEventListener('click', () => {
    текущаяТема = текущаяТема === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', текущаяТема);
    применитьТему();
  });


  // ── ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ──────────────────────────────────────────
  получитьЭл('langToggle')?.addEventListener('click', () => {
    текущийЯзык = текущийЯзык === 'ru' ? 'kg' : 'ru';
    localStorage.setItem('lang', текущийЯзык);
    применитьЯзык();
    отрисоватьМеню();
    отрисоватьТоварыКорзины();
  });

  document.querySelectorAll('.lang-pill').forEach(кнопка => {
    кнопка.classList.toggle('active', кнопка.dataset.lang === текущийЯзык);
    кнопка.addEventListener('click', () => {
      текущийЯзык = кнопка.dataset.lang;
      localStorage.setItem('lang', текущийЯзык);
      применитьЯзык();
      отрисоватьМеню();
      document.querySelectorAll('.lang-pill').forEach(к => {
        к.classList.toggle('active', к.dataset.lang === текущийЯзык);
      });
    });
  });


  // ── НАВИГАЦИЯ (Гамбургер-меню) ────────────────────────────────────
  const кнопкаГамбургер = получитьЭл('menuToggle');
  const главнаяНав      = получитьЭл('mainNav');

  кнопкаГамбургер?.addEventListener('click', () => {
    const открыто = главнаяНав.classList.toggle('open');
    кнопкаГамбургер.classList.toggle('open', открыто);
    кнопкаГамбургер.setAttribute('aria-expanded', String(открыто));
  });

  // Закрываем меню при клике вне него
  document.addEventListener('click', e => {
    if (главнаяНав && кнопкаГамбургер
      && !главнаяНав.contains(e.target)
      && !кнопкаГамбургер.contains(e.target)) {
      главнаяНав.classList.remove('open');
      кнопкаГамбургер.classList.remove('open');
    }
  });


  // ── КНОПКИ ПРОКРУТКИ К СЕКЦИЯМ ────────────────────────────────────
  получитьЭл('viewMenuBtn')?.addEventListener('click', () => {
    получитьЭл('menu')?.scrollIntoView({ behavior: 'smooth' });
  });
  получитьЭл('viewContactBtn')?.addEventListener('click', () => {
    получитьЭл('contact')?.scrollIntoView({ behavior: 'smooth' });
  });


  // ── ФИЛЬТРЫ КАТЕГОРИЙ ─────────────────────────────────────────────
  document.querySelectorAll('.filter-btn').forEach(кнопка => {
    кнопка.addEventListener('click', () => {
      активнаяКатегория = кнопка.dataset.category;
      document.querySelectorAll('.filter-btn').forEach(к => к.classList.toggle('active', к === кнопка));
      отрисоватьМеню();
      получитьЭл('menu')?.scrollIntoView({ behavior: 'smooth' });
    });
  });


  // ── КОРЗИНА ───────────────────────────────────────────────────────
  const открытьКорзину = () => {
    отрисоватьТоварыКорзины();
    открытьМодалку('cartModal');
  };

  получитьЭл('cartBtn')?.addEventListener('click', открытьКорзину);
  получитьЭл('bnCart')?.addEventListener('click', открытьКорзину);
  получитьЭл('cartSummaryCheckout')?.addEventListener('click', открытьКорзину);

  получитьЭл('bnMenu')?.addEventListener('click', () => {
    получитьЭл('menu')?.scrollIntoView({ behavior: 'smooth' });
  });

  получитьЭл('closeCartModal')?.addEventListener('click', () => закрытьМодалку('cartModal'));

  получитьЭл('clearCartBtn')?.addEventListener('click', () => {
    if (confirm(перевод('confirm-clear'))) {
      корзина = [];
      сохранитьКорзину();
      обновитьЗначокКорзины();
      отрисоватьМеню();
      отрисоватьТоварыКорзины();
    }
  });

  получитьЭл('checkoutBtn')?.addEventListener('click', началоОформленияЗаказа);


  // ── ФОРМА ЗАКАЗА ──────────────────────────────────────────────────
  получитьЭл('closeOrderModal')?.addEventListener('click', () => закрытьМодалку('orderModal'));
  получитьЭл('cancelOrderBtn')?.addEventListener('click', () => закрытьМодалку('orderModal'));

  const полеТелефона = получитьЭл('custPhone');
  if (полеТелефона) {
    полеТелефона.addEventListener('input', () => {
      форматироватьТелефон(полеТелефона);
      проверитьКнопкуОтправки();
    });
  }
  получитьЭл('custName')?.addEventListener('input', проверитьКнопкуОтправки);
  получитьЭл('orderForm')?.addEventListener('submit', отправитьЗаказ);


  // ── ДЕТАЛИ БЛЮДА ──────────────────────────────────────────────────
  получитьЭл('closeDishModal')?.addEventListener('click', () => закрытьМодалку('dishModal'));

  получитьЭл('slidePrev')?.addEventListener('click', () => {
    индексСлайда--;
    обновитьСлайдер();
  });
  получитьЭл('slideNext')?.addEventListener('click', () => {
    индексСлайда++;
    обновитьСлайдер();
  });

  // Кнопка "В корзину" в детальной карточке
  получитьЭл('addFromDetail')?.addEventListener('click', () => {
    if (!активноеБлюдоId) return;
    const блюдо = МЕНЮ.find(б => б.id === активноеБлюдоId);
    if (!блюдо) return;
    закрытьМодалку('dishModal');
    if (блюдо.variants?.length) {
      открытьВыборВарианта(блюдо);
    } else {
      добавитьВКорзину(блюдо, null);
    }
  });


  // ── ВЫБОР ВАРИАНТА ────────────────────────────────────────────────
  получитьЭл('closeVariantModal')?.addEventListener('click', () => закрытьМодалку('variantModal'));


  // ── ЛАЙТБОКС ──────────────────────────────────────────────────────
  получитьЭл('lightboxClose')?.addEventListener('click', закрытьЛайтбокс);
  получитьЭл('lightbox')?.addEventListener('click', e => {
    if (e.target === получитьЭл('lightbox')) закрытьЛайтбокс();
  });


  // ── ТИП ЗАКАЗА ────────────────────────────────────────────────────
  получитьЭл('otPickup')?.addEventListener('click', () => установитьТипЗаказа('pickup'));

  получитьЭл('otCafe')?.addEventListener('click', () => {
    закрытьМодалку('orderTypeModal');
    открытьМодалку('tableModal');
  });

  получитьЭл('otDelivery')?.addEventListener('click', () => {
    закрытьМодалку('orderTypeModal');
    открытьМодалку('deliveryModal');
  });


  // ── ВЫБОР СТОЛА ───────────────────────────────────────────────────
  получитьЭл('closeTableModal')?.addEventListener('click', () => {
    закрытьМодалку('tableModal');
    открытьМодалку('orderTypeModal');
  });


  // ── ФОРМА ДОСТАВКИ ────────────────────────────────────────────────
  получитьЭл('closeDeliveryModal')?.addEventListener('click', () => {
    закрытьМодалку('deliveryModal');
    открытьМодалку('orderTypeModal');
  });

  получитьЭл('backToOrderType')?.addEventListener('click', () => {
    закрытьМодалку('deliveryModal');
    открытьМодалку('orderTypeModal');
  });

  const полеТелефонаДоставки = получитьЭл('dlvPhone');
  if (полеТелефонаДоставки) {
    полеТелефонаДоставки.addEventListener('input', () => форматироватьТелефон(полеТелефонаДоставки));
  }

  получитьЭл('deliveryForm')?.addEventListener('submit', e => {
    e.preventDefault();

    const имя    = получитьЭл('dlvName')?.value.trim();
    const тел    = получитьЭл('dlvPhone')?.value.trim();
    const адрес  = получитьЭл('dlvAddress')?.value.trim();

    if (!имя || !проверитьТелефон(тел.replace(/\s/g, '')) || !адрес) {
      alert(перевод('alert-fill-fields'));
      return;
    }

    инфоДоставки = { имя, телефон: тел, адрес };
    try { localStorage.setItem('deliveryInfo', JSON.stringify(инфоДоставки)); } catch {}
    установитьТипЗаказа('delivery');
  });


  // ── ЗАКРЫТИЕ МОДАЛОК КЛИКОМ ПО ФОНУ ──────────────────────────────
  document.querySelectorAll('.modal-overlay').forEach(фон => {
    фон.addEventListener('click', e => {
      if (e.target !== фон) return;
      // Модалку выбора типа заказа нельзя закрыть кликом по фону
      if (фон.id === 'orderTypeModal') return;
      фон.classList.remove('open');
    });
  });


  // ── ЗАКРЫТИЕ КЛАВИШЕЙ ESC ─────────────────────────────────────────
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (document.body.classList.contains('locked')) return;

    // Закрываем последнюю открытую модалку
    const открытые = [...document.querySelectorAll('.modal-overlay.open')];
    if (открытые.length) {
      открытые[открытые.length - 1].classList.remove('open');
    }

    if (получитьЭл('lightbox')?.classList.contains('open')) {
      закрытьЛайтбокс();
    }
  });

}); // конец DOMContentLoaded


// ══════════════════════════════════════════════════════════════════
//  ЭКСПОРТ ФУНКЦИЙ В ГЛОБАЛЬНУЮ ОБЛАСТЬ
//  Нужно для onclick-атрибутов в динамически созданном HTML
// ══════════════════════════════════════════════════════════════════

window.уменьшитьКоличество       = уменьшитьКоличество;
window.увеличитьКоличество        = увеличитьКоличество;
window.удалитьИзКорзины           = удалитьИзКорзины;
window.нажатьДобавитьВКорзину     = нажатьДобавитьВКорзину;
window.открытьЛайтбокс            = открытьЛайтбокс;
window.началоОформленияЗаказа     = началоОформленияЗаказа;