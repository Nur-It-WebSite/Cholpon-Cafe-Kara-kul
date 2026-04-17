'use strict';

// ╔══════════════════════════════════════════════════════════════╗
// ║              ПЕРЕВОДЫ ИНТЕРФЕЙСА                             ║
// ║  ru — русский язык                                           ║
// ║  kg — кыргызский язык                                        ║
// ╚══════════════════════════════════════════════════════════════╝

// Каждый ключ — это data-i18n атрибут в HTML
// Чтобы добавить новый текст: добавь ключ в оба языка

const ПЕРЕВОДЫ = {

  // ── РУССКИЙ ───────────────────────────────────────────────────
  ru: {
    // Навигация
    'nav-menu':    'Меню',
    'nav-about':   'О нас',
    'nav-reviews': 'Отзывы',
    'nav-contact': 'Контакты',

    // Главный экран (Hero)
    'hero-badge': '🌟 Открыто сейчас · 10:00 – 22:00',
    'hero-desc':  'Уютное кафе в центре Кара-Куля. Вкусная домашняя еда каждый день.',
    'view-menu':  'Смотреть меню',

    // Раздел "О нас"
    'about-title': 'Добро пожаловать в кафе "Cholpon"',
    'about-desc':  'Уютное кафе в центре Кара-Куля. Вкусная домашняя еда каждый день.',

    // Раздел меню
    'menu-title': 'Меню',
    'menu-sub':   'Всё готовится из свежих продуктов каждый день',

    // Контакты
    'contact-title':       'Контакты',
    'contact-phone-label': 'Телефон',
    'contact-loc-label':   'Адрес',
    'contact-loc':         'Кара-Куль, ул. Боконбаева',
    'contact-hours-label': 'Режим работы',
    'contact-hours':       '10:00 – 22:00, без выходных',

    // Футер
    'footer-text': '© 2025 Кафе Cholpon. Все права защищены.',

    // Корзина
    'cart-title':    'Корзина',
    'cart-empty':    'Корзина пуста',
    'cart-total':    'Итого:',
    'currency':      'сом',
    'cart-clear':    'Очистить',
    'cart-checkout': 'Оформить заказ',

    // Форма заказа
    'order-title':      'Оформление заказа',
    'order-name':       'Имя',
    'order-phone':      'Телефон',
    'order-phone-hint': 'Введите номер без 0, например: 998 25 20 23',
    'order-address':    'Адрес доставки',
    'order-comment':    'Комментарий (необязательно)',
    'order-summary':    'Состав заказа:',
    'order-cancel':     'Отмена',
    'order-submit':     'Отправить заказ',

    // Кнопки карточки
    'add-to-cart': 'В корзину',
    'remove':      'Удалить',
    'details':     'Подробнее',
    'back':        'Назад',
    'continue':    'Продолжить',

    // Фильтры категорий
    'filter-all':      'Все',
    'filter-hits':     'Хиты',
    'filter-shashlik': 'Шашлыки',
    'filter-first':    'Первые блюда',
    'filter-second':   'Вторые блюда',
    'filter-special':  'Заказные',
    'filter-salad':    'Салаты',
    'filter-drink':    'Напитки',
    'filter-fastfood': 'Fast-Food',
    'filter-dessert':  'Десерты',

    // Детали блюда
    'dish-ingredients': 'Ингредиенты:',

    // Оплата
    'payment-method-label': 'Способ оплаты',
    'payment-cash':         'Наличными',
    'payment-card':         'Картой',
    'mbank-scan':           'Отсканируйте QR для оплаты в MBank',

    // Тип заказа
    'order-type-title':    'Как вы хотите заказать?',
    'order-type-cafe':     'Я в кафе',
    'order-type-pickup':   'Самовывоз',
    'order-type-delivery': 'Доставка',
    'order-type-browse':   'Просто посмотреть',

    // Выбор стола
    'table-select-title': 'Выберите стол',

    // Форма доставки
    'delivery-form-title': 'Данные для доставки',

    // Варианты блюда
    'variant-hint': 'Выберите объём или вариант:',

    // Уведомления (toast)
    'toast-added': 'Добавлено:',
    'toast-table': 'Вы за столом №',

    // Подтверждения и ошибки
    'confirm-clear':       'Очистить корзину?',
    'alert-cart-empty':    'Корзина пуста. Добавьте блюда.',
    'alert-fill-fields':   'Заполните все обязательные поля',
    'alert-invalid-phone': 'Введите корректный номер телефона\nПример: 998 25 20 23',
    'alert-order-sent':    '✅ Заказ отправлен!',

    // Повторный заказ (для QR-гостей)
    'repeat-order-hint': 'Данные сохранены. Просто добавьте комментарий если нужно.',
  },

  // ── КЫРГЫЗСКИЙ ────────────────────────────────────────────────
  kg: {
    // Навигация
    'nav-menu':    'Меню',
    'nav-about':   'Биз жөнүндө',
    'nav-reviews': 'Пикирлер',
    'nav-contact': 'Байланыш',

    // Главный экран (Hero)
    'hero-badge': '🌟 Азыр ачык · 10:00 – 22:00',
    'hero-desc':  'Кара-Көл шаарынын борборундагы жайлуу кафе. Ар күнү даамдуу үй тамагы.',
    'view-menu':  'Менюну көрүү',

    // Раздел "О нас"
    'about-title': '"Cholpon" кафесине кош келиңиз',
    'about-desc':  'Кара-Күл шаарынын борборундагы жайлуу кафе.',

    // Раздел меню
    'menu-title': 'Меню',
    'menu-sub':   'Баары ар күнү жаңы азыктардан даярдалат',

    // Контакты
    'contact-title':       'Байланыш',
    'contact-phone-label': 'Телефон',
    'contact-loc-label':   'Дарек',
    'contact-loc':         'Кара-Күл, Боконбаев көч.',
    'contact-hours-label': 'Иш убактысы',
    'contact-hours':       '10:00 – 22:00, дем алыш жок',

    // Футер
    'footer-text': '© 2025 Cholpon кафеси. Бардык укуктар корголгон.',

    // Корзина
    'cart-title':    'Себет',
    'cart-empty':    'Себет бош',
    'cart-total':    'Баары:',
    'currency':      'сом',
    'cart-clear':    'Тазалоо',
    'cart-checkout': 'Заказ берүү',

    // Форма заказа
    'order-title':      'Заказ берүү',
    'order-name':       'Аты',
    'order-phone':      'Телефон',
    'order-phone-hint': 'Номурду 0сүз жазыңыз, мисалы: 998 25 20 23',
    'order-address':    'Жеткирүү дареги',
    'order-comment':    'Комментарий (милдеттүү эмес)',
    'order-summary':    'Заказдын курамы:',
    'order-cancel':     'Жокко чыгаруу',
    'order-submit':     'Заказды жөнөтүү',

    // Кнопки карточки
    'add-to-cart': 'Себетке',
    'remove':      'Өчүрүү',
    'details':     'Кененирээк',
    'back':        'Артка',
    'continue':    'Улантуу',

    // Фильтры категорий
    'filter-all':      'Баары',
    'filter-hits':     'Хиттер',
    'filter-shashlik': 'Шашлык',
    'filter-first':    'Биринчи тамактар',
    'filter-second':   'Экинчи тамактар',
    'filter-special':  'Заказдык',
    'filter-salad':    'Салаттар',
    'filter-drink':    'Суусундуктар',
    'filter-fastfood': 'Fast-Food',
    'filter-dessert':  'Десерттер',

    // Детали блюда
    'dish-ingredients': 'Курамы:',

    // Оплата
    'payment-method-label': 'Төлөө ыкмасы',
    'payment-cash':         'Накта',
    'payment-card':         'Карта менен',
    'mbank-scan':           'MBank төлөмү үчүн QR сканерлеңиз',

    // Тип заказа
    'order-type-title':    'Кантип заказ бересиз?',
    'order-type-cafe':     'Мен кафедемин',
    'order-type-pickup':   'Өзүм алам',
    'order-type-delivery': 'Жеткирүү',
    'order-type-browse':   'Менюну гана көрүү',

    // Выбор стола
    'table-select-title': 'Стол тандаңыз',

    // Форма доставки
    'delivery-form-title': 'Жеткирүү маалыматтары',

    // Варианты блюда
    'variant-hint': 'Көлөм же вариантты тандаңыз:',

    // Уведомления (toast)
    'toast-added': 'Кошулду:',
    'toast-table': 'Сиз №',

    // Подтверждения и ошибки
    'confirm-clear':       'Себетти тазалоо?',
    'alert-cart-empty':    'Себет бош. Тамак кошуңуз.',
    'alert-fill-fields':   'Бардык милдеттүү талааларды толтуруңуз',
    'alert-invalid-phone': 'Туура телефон номурун киргизиңиз',
    'alert-order-sent':    '✅ Заказ жөнөтүлдү!',

    // Повторный заказ (для QR-гостей)
    'repeat-order-hint': 'Маалыматтар сакталды. Зарыл болсо комментарий кошуңуз.',
  },
};