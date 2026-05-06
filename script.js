'use strict';

// ── CONSTANTS ─────────────────────────────────────────────
const TG_BOT_TOKEN = '8738069114:AAHzk7-y8i15FFWDuin9DVAc0v2C8LKrx5A';
const TG_CHAT_ID = 7994163787;
const CAFE_WA = '996500350565';
const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f2ece0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='52' fill='%23c27941'%3E%F0%9F%8D%BD%3C/text%3E%3C/svg%3E";

const menuData = [
  // ШАШЛЫКИ
  { id: 1, name: 'Говядина', nameKg: 'Жылкы эти', description: 'Сочный шашлык из говядины на углях', descriptionKg: 'Жылкы этинен шашлык, көмүрдө бышырылган', price: 260, image: './Меню/Говядинаа.jpeg', category: 'shashlik', isHit: true, ingredients: ['Говядина', 'Лук', 'Специи', 'Масло'], ingredientsKg: ['Жылкы эти', 'Пияз', 'Азыктар', 'Май'] },
  { id: 2, name: 'Наполеон', nameKg: 'Наполеон', description: 'Шашлык Наполеон с нежным вкусом', descriptionKg: 'Наполеон шашлык нымдуу даамы менен', price: 210, image: './Меню/напалеон.jpeg', category: 'shashlik', ingredients: ['Мясо', 'Лук', 'Специи'], ingredientsKg: ['Эт', 'Пияз', 'Азыктар'] },
  { id: 3, name: 'Люля-кебаб', nameKg: 'Люля-кебаб', description: 'Традиционный люля-кебаб из фарша', descriptionKg: 'Фарштан жасалган салттуу люля-кебаб', price: 190, image: './Меню/люля.Кебаб.jpeg', category: 'shashlik', ingredients: ['Фарш', 'Лук', 'Специи'], ingredientsKg: ['Фарш', 'Пияз', 'Азыктар'] },
  { id: 4, name: 'Крылышки шашлык', nameKg: 'Канаттар шашлык', description: 'Куриные крылышки на гриле', descriptionKg: 'Грилдеги тоок канаттары', price: 225, image: './Меню/крылышки.jpeg', category: 'shashlik', ingredients: ['Куриные крылышки', 'Специи', 'Масло'], ingredientsKg: ['Тоок канаттары', 'Азыктар', 'Май'] },
  { id: 6, name: 'Сет «Компания»', nameKg: '«Компания» сети', description: 'Говядина 2, Люля-кебаб 2, Наполеон 2 + подарок', descriptionKg: 'Жылкы эти 2, Люля-кебаб 2, Наполеон 2 + белек', price: 2050, image: './Меню/Комп.webp', category: 'shashlik', ingredients: ['Говядина', 'Люля-кебаб', 'Наполеон'], ingredientsKg: ['Жылкы эти', 'Люля-кебаб', 'Наполеон'] },
  { id: 7, name: 'Сет «Фантазия»', nameKg: '«Фантазия» сети', description: 'Говядина 2, Люля-кебаб 1, Наполеон 1, Рыба 4, Грибы + подарок', descriptionKg: 'Жылкы эти 2, Люля-кебаб 1, Наполеон 1, Балык 4 + белек', price: 2800, image: './Menu/Сет фантазия.webp', category: 'shashlik', ingredients: ['Говядина', 'Люля-кебаб', 'Наполеон', 'Рыба', 'Грибы'], ingredientsKg: ['Жылкы эти', 'Люля-кебаб', 'Наполеон', 'Балык', 'Козу карын'] },
  // ПЕРВЫЕ БЛЮДА
  { id: 8, name: 'Шорпо (говядина)', nameKg: 'Шорпо (уй эти)', description: 'Традиционный суп с говядиной', descriptionKg: 'Уй эти менен салттуу шорпо', price: 235, image: './Меню/Суп.jpeg', category: 'first', ingredients: ['Говядина', 'Картофель', 'Морковь', 'Лук', 'Зелень'], ingredientsKg: ['Жылкы эти', 'Картөшкө', 'Сабиз', 'Пияз', 'Жашылча'] },
  { id: 9, name: 'Сырный суп с фрикадельками ', nameKg: 'Шорпо фрикаделькалар менен', description: 'Сырный суп с фрикадельками и овощами', descriptionKg: 'Сыр жана жашылчалар менен суп', price: 235, image: './Меню/сыр.jpeg', category: 'first', ingredients: ['Сыр', 'Картофель', 'Морковь', 'Лук'], ingredientsKg: ['Сыр', 'Картөшкө', 'Сабиз', 'Пияз'] },
  { id: 10, name: 'Суп с фрикадельками', nameKg: 'Фрикаделькалуу суп', description: 'Суп с мясными фрикадельками', descriptionKg: 'Эт фрикаделькалары менен суп', price: 235, image: './Меню/суп с фрикадельками.jpeg', category: 'first', ingredients: ['Фрикадельки', 'Картофель', 'Морковь', 'Лук'], ingredientsKg: ['Фрикадельки', 'Картөшкө', 'Сабиз', 'Пияз'] },
  { id: 11, name: 'Солянка', nameKg: 'Солянка', description: 'Мясная солянка с овощами', descriptionKg: 'Жашылчалар менен эт солянкасы', price: 205, image: './Меню/солямка.jpeg', category: 'first', ingredients: ['Мясо', 'Огурцы', 'Оливки', 'Лук'], ingredientsKg: ['Эт', 'Бадыраң', 'Оливки', 'Пияз'] },
  { id: 12, name: 'Пельмени домашние', nameKg: 'Үй пельмени', description: 'Домашние пельмени с мясом', descriptionKg: 'Эт менен үй пельмени', price: 225, image: './Меню/пельмен.jpeg', category: 'first', ingredients: ['Тесто', 'Фарш', 'Лук', 'Специи'], ingredientsKg: ['Камыр', 'тартылган эт', 'Пияз', 'Азыктар'] },
  { id: 13, name: 'Ак Серке с фрикадельками', nameKg: 'Ак Серке фрикаделькалар менен', description: 'Суп Ак Серке с фрикадельками', descriptionKg: 'Ак Серке суп фрикаделькалар менен', price: 235, image: './Меню/Ак.jpeg', category: 'first', ingredients: ['Фрикадельки', 'Картофель', 'Морковь', 'Лук'], ingredientsKg: ['Фрикадельки', 'Картөшкө', 'Сабиз', 'Пияз'] },
  { id: 14, name: 'Чечевичный суп', nameKg: 'Чечевичный суп', description: 'Суп из чечевицы с овощами', descriptionKg: 'Жашылчалар менен чечевица суп', price: 195, image: './Меню/Чечч.webp', category: 'first', ingredients: ['Чечевица', 'Картофель', 'Морковь', 'Лук'], ingredientsKg: ['Чечевица', 'Картөшкө', 'Сабиз', 'Пияз'] },
  // ВТОРЫЕ БЛЮДА
  { id: 15, name: 'Манты', nameKg: 'Манты', description: 'Паровые манты с мясом', descriptionKg: 'Эт менен буу манты', price: 240, image: './Меню/манты.jpeg', category: 'second', ingredients: ['Тесто', 'Мясо', 'Лук', 'Специи'], ingredientsKg: ['Камыр', 'Эт', 'Пияз', 'Азыктар'] },
  { id: 16, name: 'Котлеты', nameKg: 'Котлеталар', description: 'Мясные котлеты с гарниром', descriptionKg: 'Гарнир менен эт котлеталары', price: 220, image: './Меню/Котлетт.jpeg', category: 'second', ingredients: ['Фарш', 'Лук', 'Яйцо', 'Хлеб'], ingredientsKg: ['тартылган эт', 'Пияз', 'Жумуртка', 'Нан'] },
  { id: 17, name: 'Тефтели', nameKg: 'Тефтель', description: 'Мясные тефтели в соусе', descriptionKg: 'Соустагы эт тефтель', price: 220, image: './Меню/Тефтели.jpeg', category: 'second', ingredients: ['Фарш', 'Рис', 'Лук', 'Соус'], ingredientsKg: ['Фарш', 'Күрүч', 'Пияз', 'Соус'] },
  { id: 18, name: 'Бифштекс', nameKg: 'Бифштекс', description: 'Сочный бифштекс из говядины', descriptionKg: 'Жылкы этинен шырындуу бифштекс', price: 230, image: './Меню/Зразы.jpeg', category: 'second', ingredients: ['Говядина', 'Специи', 'Масло'], ingredientsKg: ['Уй эти', 'Азыктар', 'Май'] },
  { id: 19, name: 'Зразы', nameKg: 'Зразы', description: 'Мясные зразы с начинкой', descriptionKg: 'Начинка менен эт зразы', price: 240, image: './Меню/зразымай.jpeg', category: 'second', ingredients: ['Мясо', 'Картофель', 'Лук', 'Яйцо'], ingredientsKg: ['Эт', 'Картөшкө', 'Пияз', 'Жумуртка'] },
  { id: 20, name: 'Лагман уйгурский', nameKg: 'Уйгур лагманы', description: 'Уйгурский лагман с мясом и овощами', descriptionKg: 'Эт жана жашылчалар менен уйгур лагманы', price: 260, image: './Меню/Лагман уйгур.jpeg', category: 'second', isHit: true, ingredients: ['Лапша', 'Мясо', 'Перец', 'Морковь', 'Лук'], ingredientsKg: ['Лапша', 'Эт', 'Мурч', 'Сабиз', 'Пияз'] },
  { id: 21, name: 'Лагман жареный', nameKg: 'Куурулган лагман', description: 'Жареный лагман с овощами', descriptionKg: 'Жашылчалар менен куурулган лагман', price: 260, image: './Меню/Лагман жар.webp', category: 'second', ingredients: ['Лапша', 'Мясо', 'Перец', 'Морковь', 'Лук'], ingredientsKg: ['Лапша', 'Эт', 'Мурч', 'Сабиз', 'Пияз'] },
  { id: 22, name: 'Гуляш', nameKg: 'Гуляш', description: 'Гуляш из говядины с овощами', descriptionKg: 'Жашылчалар менен жылкы эти гуляш', price: 300, image: './Menu/гуляш из говядины.webp', category: 'second', ingredients: ['Говядина', 'Картофель', 'Морковь', 'Лук', 'Соус'], ingredientsKg: ['Жылкы эти', 'Картөшкө', 'Сабиз', 'Пияз', 'Соус'] },
  { id: 23, name: 'Мясо по-королевски', nameKg: 'Королдук эти', description: 'Мясо по-королевски с сыром', descriptionKg: 'Сыр менен королдук эт', price: 270, image: './Меню/Король.webp', category: 'second', ingredients: ['Мясо', 'Сыр', 'Помидоры', 'Зелень'], ingredientsKg: ['Эт', 'Сыр', 'Помидор', 'Жашылча'] },
  // ЗАКАЗНЫЕ
  { id: 24, name: 'Мясо по-деревенски (стейк говядина)', nameKg: 'Айылдык эти (стейк)', description: 'Стейк говядины по-деревенски', descriptionKg: 'Айылдык жылкы эти стейк', price: 610, image: './Меню/Дерев.jpeg', category: 'special', ingredients: ['Говядина', 'Специи', 'Масло'], ingredientsKg: ['Жылкы эти', 'Азыктар', 'Май'] },
  { id: 25, name: 'Стейк форель (3 шт.)', nameKg: 'Форель стейк (3 дөн)', description: 'Стейки форели, 3 шт.', descriptionKg: 'Форель стейктери, 3 дөн', price: 610, image: './Меню/Форель3.jpeg', category: 'special', ingredients: ['Форель', 'Специи', 'Масло'], ingredientsKg: ['Форель', 'Азыктар', 'Май'] },
  { id: 26, name: 'Стейк форель (2 шт.)', nameKg: 'Форель стейк (2 дөн)', description: 'Стейки форели, 2 шт.', descriptionKg: 'Форель стейктери, 2 дөн', price: 510, image: './Меню/Форель2.jpeg', category: 'special', ingredients: ['Форель', 'Специи', 'Масло'], ingredientsKg: ['Форель', 'Азыктар', 'Май'] },
  { id: 27, name: 'Адана кебаб', nameKg: 'Адана кебаб', description: 'Адана кебаб на шпажках с гарниром и салатом', descriptionKg: 'Гарнир жана салат менен шпажкаларда адана кебаб', price: 290, image: './Меню/Адана.jpg', category: 'special', ingredients: ['Мясо', 'Специи', 'Гарнир', 'Салат'], ingredientsKg: ['Эт', 'Азыктар', 'Гарнир', 'Салат'] },
  { id: 28, name: 'Турецкий кебаб', nameKg: 'Түрк кебабы', description: 'Турецкий кебаб в лаваше', descriptionKg: 'Лавашта түрк кебабы', price: 280, image: './Menu/turk.webp', category: 'special', ingredients: ['Мясо', 'Лаваш', 'Овощи'], ingredientsKg: ['Эт', 'Лаваш', 'Жашылчалар'] },
  { id: 29, name: 'Бейти кебаб', nameKg: 'Бейти кебаб', description: 'Бейти кебаб в лаваше с плавленым сыром', descriptionKg: 'Лавашта эритилген сыр менен бейти кебаб', price: 330, image: './Меню/Бейти кебаб.jpeg', category: 'special', ingredients: ['Мясо', 'Лаваш', 'Сыр'], ingredientsKg: ['Эт', 'Лаваш', 'Сыр'] },
  { id: 30, name: 'Лазуро', nameKg: 'Лазуро', description: 'Жареное мясо с овощами', descriptionKg: 'Жашылчалар менен куурулган эт', price: 280, image: './Меню/лаз.jpeg', category: 'special', ingredients: ['Мясо', 'Овощи', 'Масло'], ingredientsKg: ['Эт', 'Жашылчалар', 'Май'] },
  { id: 31, name: 'Бризоль', nameKg: 'Бризоль', description: 'Бризоль из мяса', descriptionKg: 'Эттен бризоль', price: 265, image: './Меню/Бризоль.jpg', category: 'special', ingredients: ['Мясо', 'Специи', 'Масло'], ingredientsKg: ['Эт', 'Азыктар', 'Май'] },
  { id: 32, name: 'Мясо в горшочке', nameKg: 'Кыштектеги эт', description: 'Мясо в горшочке с помидорами, грибами и сыром', descriptionKg: 'Помидор, козу карын жана сыр менен кыштектеги эт', price: 290, image: './Меню/Мясо в горшочке.jpeg', category: 'special', ingredients: ['Мясо', 'Помидоры', 'Грибы', 'Сыр'], ingredientsKg: ['Эт', 'Помидор', 'Козу карын', 'Сыр'] },
  { id: 33, name: 'Куурдак', nameKg: 'Куурдак', description: 'Куурдак из говядины и баранины', descriptionKg: 'Жылкы эти жана кой этинен куурдак', price: 490, image: './Меню/Куурдак.jpeg', category: 'special', ingredients: ['Говядина', 'Баранина', 'Картофель', 'Лук'], ingredientsKg: ['Жылкы эти', 'Кой эти', 'Картөшкө', 'Пияз'] },
  { id: 34, name: 'Курица в кисло-сладком соусе', nameKg: 'Кышкыл-таттуу соустагы тоок', description: 'Курица в кисло-сладком соусе', descriptionKg: 'Кышкыл-таттуу соустагы тоок', price: 290, image: './Меню/кисло.png', category: 'special', ingredients: ['Курица', 'Соус', 'Овощи'], ingredientsKg: ['Тоок', 'Соус', 'Жашылчалар'] },
  { id: 35, name: 'Фрикассе', nameKg: 'Фрикассе', description: 'Фрикассе из курицы', descriptionKg: 'Тооктон фрикассе', price: 290, image: './Меню/Фрикассе.jpeg', category: 'special', ingredients: ['Курица', 'Сливки', 'Овощи'], ingredientsKg: ['Тоок', 'Каймак', 'Жашылчалар'] },
  { id: 36, name: 'Мясо фирменное', nameKg: 'Фирмалык эт', description: 'Фирменное мясо кафе Cholpon', descriptionKg: 'Фирмалык эт', price: 460, image: './Menu/фирменное мясо.webp', category: 'special', ingredients: ['Мясо', 'Специи', 'Соус'], ingredientsKg: ['Эт', 'Азыктар', 'Соус'] },
  { id: 37, name: 'Плов 1 кг', nameKg: 'Плов 1 кг', description: 'Плов 1 кг, заказ заранее', descriptionKg: 'Плов 1 кг, алдын ала заказ', price: 2200, image: './Меню/Пловв.jpeg', category: 'special', ingredients: ['Рис', 'Мясо', 'Морковь', 'Лук', 'Специи'], ingredientsKg: ['Күрүч', 'Эт', 'Сабиз', 'Пияз', 'Азыктар'] },
  { id: 38, name: 'Казан кебаб', nameKg: 'Казан кебабы', description: 'Казан кебаб', descriptionKg: 'Казан кебабы', price: 320, image: './Меню/Казан.jpeg', category: 'special', ingredients: ['Мясо', 'Картофель', 'Лук', 'Специи'], ingredientsKg: ['Эт', 'Картөшкө', 'Пияз', 'Азыктар'] },
  { id: 39, name: 'Хачапури', nameKg: 'Хачапури', description: 'Хачапури с сыром', descriptionKg: 'Сыр менен хачапури', price: 460, image: './Меню/хачапури.jpeg', category: 'special', ingredients: ['Тесто', 'Сыр', 'Масло'], ingredientsKg: ['Камыр', 'Сыр', 'Май'] },
  { id: 40, name: 'Фетучини с курицей', nameKg: 'Тоок менен фетучини', description: 'Фетучини с курицей', descriptionKg: 'Тоок менен фетучини', price: 390, image: './Меню/Фетучини.webp', category: 'special', ingredients: ['Фетучини', 'Курица', 'Сливки', 'Сыр'], ingredientsKg: ['Фетучини', 'Тоок', 'Каймак', 'Сыр'] },
  // САЛАТЫ
  { id: 41, name: 'Греческий', nameKg: 'Грек', description: 'Греческий салат с маслом', descriptionKg: 'Май менен грек салаты', price: 225, image: './Меню/Грек.webp', category: 'salad', ingredients: ['Помидоры', 'Огурцы', 'Сыр фета', 'Масло'], ingredientsKg: ['Помидор', 'Бадыраң', 'Фета сыры', 'Май'] },
  { id: 42, name: 'Столичный', nameKg: 'Борбордук', description: 'Столичный салат с мясом', descriptionKg: 'Эт менен борбордук салат', price: 250, image: './Меню/столичный.png', category: 'salad', ingredients: ['Мясо', 'Корнишоны', 'Грибы', 'Лук', 'Масло'], ingredientsKg: ['Эт', 'Корнишон', 'Козу карын', 'Пияз', 'Май'] },
  { id: 43, name: 'Восточный', nameKg: 'Чыгыштык', description: 'Восточный салат с овощами и мясом', descriptionKg: 'Жашылчалар жана эт менен чыгыштык салат', price: 250, image: './Меню/Вост.jpeg', category: 'salad', ingredients: ['Помидоры', 'Огурцы', 'Мясо', 'Лук', 'Кабачки', 'Баклажан'], ingredientsKg: ['Помидор', 'Бадыраң', 'Эт', 'Пияз', 'Кабачки', 'Баклажан'] },
  { id: 44, name: 'Китайский острый', nameKg: 'Кытайлык ачтуу', description: 'Острый китайский салат', descriptionKg: 'Ачтуу кытай салаты', price: 240, image: './Меню/Кит ос.jpeg', category: 'salad', ingredients: ['Помидоры', 'Огурцы', 'Мясо', 'Лук', 'Морковь', 'Перец'], ingredientsKg: ['Помидор', 'Бадыраң', 'Эт', 'Пияз', 'Сабиз', 'Мурч'] },
  { id: 45, name: 'Гасконский', nameKg: 'Гаскон', description: 'Гасконский салат с копченой окорочкой', descriptionKg: 'Копченка менен гаскон салаты', price: 230, image: './Меню/Гасконгский.jpeg', category: 'salad', ingredients: ['Помидоры', 'Корнишоны', 'Опята', 'Копченая окорочка'], ingredientsKg: ['Помидор', 'Корнишон', 'Опята', 'Копченка'] },
  { id: 46, name: 'Витаминка', nameKg: 'Витаминка', description: 'Витаминный салат с овощами', descriptionKg: 'Жашылчалар менен витамин салат', price: 195, image: './Меню/Витаминка.webp', category: 'salad', ingredients: ['Свекла', 'Колбаска', 'Кукуруза', 'Зелень', 'Морковь'], ingredientsKg: ['Кызылча', 'Колбаса', 'Жүгөрү', 'Жашылча', 'Сабиз'] },
  { id: 47, name: 'Овощной микс', nameKg: 'Жашылча микси', description: 'Микс овощного салата', descriptionKg: 'Жашылча салат микси', price: 235, image: './Меню/Микс овощщ.jpeg', category: 'salad', ingredients: ['Цветная капуста', 'Брокколи', 'Овощи'], ingredientsKg: ['Түстүү капуста', 'Брокколи', 'Жашылчалар'] },
  { id: 48, name: 'Свежий', nameKg: 'Жаңы', description: 'Свежий овощной салат', descriptionKg: 'Жаңы жашылча салаты', price: 130, image: './Меню/Свежий.webp', category: 'salad', ingredients: ['Помидоры', 'Огурцы', 'Лук', 'Масло'], ingredientsKg: ['Помидор', 'Бадыраң', 'Пияз', 'Май'] },
  { id: 49, name: 'Фунчоза', nameKg: 'Фунчоза', description: 'Салат с фунчозой, мясом и овощами', descriptionKg: 'Фунчоза, эт жана жашылчалар менен салат', price: 230, image: './Меню/Фун.webp', category: 'salad', ingredients: ['Мясо', 'Овощи', 'Фунчоза'], ingredientsKg: ['Эт', 'Жашылчалар', 'Фунчоза'] },
  { id: 50, name: 'Нарезка фирменная', nameKg: 'Фирмалык нарезка', description: 'Фирменная овощная нарезка', descriptionKg: 'Фирмалык жашылча нарезкасы', price: 350, image: './Меню/Фирма.jpeg', category: 'salad', ingredients: ['Огурцы', 'Помидоры', 'Квашеная капуста', 'Лук'], ingredientsKg: ['Бадыраң', 'Помидор', 'Кычкыл капуста', 'Пияз'] },
  { id: 51, name: 'Воздушный', nameKg: 'Аба', description: 'Воздушный салат с майонезом', descriptionKg: 'Майонез менен аба салат', price: 220, image: './Меню/Воздух.jpeg', category: 'salad', ingredients: ['Басай', 'Яйцо', 'Чипсы', 'Майонез'], ingredientsKg: ['Басай', 'Жумуртка', 'Чипсы', 'Майонез'] },
  { id: 52, name: 'Цезарь с курицей', nameKg: 'Тоок менен Цезарь', description: 'Цезарь с курицей', descriptionKg: 'Тоок Цезарь', price: 245, image: './Меню/Цезарь  .jpeg', category: 'salad', ingredients: ['Курица', 'Салат', 'Сыр', 'Крутоны', 'Майонез'], ingredientsKg: ['Тоок', 'Салат', 'Сыр', 'Крутон', 'Майонез'] },
  { id: 53, name: 'Гнездо кукушки', nameKg: 'Кукушка уясы', description: 'Гнездо кукушки с майонезом', descriptionKg: 'Майонез менен кукушка уясы', price: 240, image: './Меню/Гнездо-кукушки.jpeg', category: 'salad', ingredients: ['Копченое мясо', 'Пай', 'Кукуруза', 'Сыр', 'Майонез'], ingredientsKg: ['Копченка', 'Пай', 'Жүгөрү', 'Сыр', 'Майонез'] },
  { id: 54, name: 'Мерло', nameKg: 'Мерло', description: 'Мерло салат с майонезом', descriptionKg: 'Майонез менен мерло салат', price: 210, image: './Меню/Мерлоо.jpeg', category: 'salad', ingredients: ['Омлет', 'Горох', 'Кукуруза', 'Курица', 'Майонез'], ingredientsKg: ['Омлет', 'Буурчак', 'Жүгөрү', 'Тоок', 'Майонез'] },
  { id: 55, name: 'Салат с грибами', nameKg: 'Козу карын менен салат', description: 'Салат с грибами и майонезом', descriptionKg: 'Майонез менен козу карын салат', price: 245, image: './Меню/Салат с грибами.jpeg', category: 'salad', ingredients: ['Шампиньоны', 'Филе', 'Яйцо', 'Картофель пай', 'Майонез'], ingredientsKg: ['Шампиньон', 'Филе', 'Жумуртка', 'Картөшкө пай', 'Майонез'] },
  { id: 56, name: 'Салат со свеклой', nameKg: 'Кызылча менен салат', description: 'Салат со свеклой и майонезом', descriptionKg: 'Майонез менен кызылча салат', price: 235, image: './Menu/Салат со свеклой.webp', category: 'salad', ingredients: ['Свекла', 'Брокколи', 'Творожный сыр', 'Орех', 'Майонез'], ingredientsKg: ['Кызылча', 'Брокколи', 'Творожный сыр', 'Орех', 'Майонез'] },
  { id: 57, name: 'Охотница', nameKg: 'Охотница', description: 'Охотница салат с майонезом', descriptionKg: 'Майонез менен охотница салат', price: 250, image: './Меню/Охотникк.jpeg', category: 'salad', ingredients: ['Охотница', 'Корнишоны', 'Черри', 'Шампиньоны', 'Орешки', 'Майонез'], ingredientsKg: ['Охотница', 'Корнишон', 'Черри', 'Шампиньон', 'Орех', 'Майонез'] },
  { id: 58, name: 'Баклажан с овощами', nameKg: 'Жашылчалуу баклажан', description: 'Баклажан с овощами и майонезом', descriptionKg: 'Майонез менен жашылчалуу баклажан', price: 255, image: './Меню/Бакл-овощ.jpeg', category: 'salad', ingredients: ['Баклажаны', 'Перец', 'Помидоры', 'Лук', 'Майонез'], ingredientsKg: ['Баклажан', 'Мурч', 'Помидор', 'Пияз', 'Майонез'] },
  { id: 59, name: 'Фирменный баклажан', nameKg: 'Фирмалык баклажан', description: 'Фирменный баклажан в панировке', descriptionKg: 'Панировкадагы фирмалык баклажан', price: 255, image: './Menu/Баклажан в панировке.webp', category: 'salad', ingredients: ['Баклажан', 'Панировка', 'Майонез'], ingredientsKg: ['Баклажан', 'Панировка', 'Майонез'] },
  { id: 60, name: 'Баклажан микс', nameKg: 'Баклажан микси', description: 'Микс баклажанов с майонезом', descriptionKg: 'Майонез менен баклажан микси', price: 240, image: './Меню/МикссБакл.jpeg', category: 'salad', ingredients: ['Баклажан', 'Майонез'], ingredientsKg: ['Баклажан', 'Майонез'] },
  { id: 61, name: 'Курица с овощами', nameKg: 'Жер жемиштери менен тоок', description: 'Курица с ореховым соусом', descriptionKg: 'Орех соусу менен тоок', price: 240, image: './Меню/Кура.webp', category: 'salad', ingredients: ['Курица', 'Ореховый соус', 'Майонез'], ingredientsKg: ['Тоок', 'Орех соусу', 'Майонез'] },
  // НАПИТКИ
  { id: 62, name: 'Компот', nameKg: 'Компот', description: 'Компот из сухофруктов', descriptionKg: 'Куру жемиштерден компот', image: './Меню/Кк.webp', category: 'drink', variants: [{ label: '1 л', price: 100 }, { label: '1.5 л', price: 140 }, { label: '2 л', price: 170 }] },
  { id: 63, name: 'Кола', nameKg: 'Кола', description: 'Coca-Cola', descriptionKg: 'Кола', image: './Меню/Cola.webp', category: 'drink', variants: [{ label: '1 л', price: 120 }, { label: '1.5 л', price: 170 }, { label: '2 л', price: 200 }] },
  { id: 64, name: 'Фанта', nameKg: 'Фанта', description: 'Fanta', descriptionKg: 'Фанта', image: './Меню/Fanta.png', category: 'drink', variants: [{ label: '1 л', price: 120 }, { label: '1.5 л', price: 170 }, { label: '2 л', price: 200 }] },
  { id: 85, name: 'Лимонад', nameKg: 'Лимонад', description: 'Освежающий домашний лимонад', descriptionKg: 'Сергитүүчү үй лимонады', image: './Меню/Lemonade.webp', category: 'drink', variants: [{ label: '1 л', price: 120 }, { label: '1.5 л', price: 160 }, { label: '2 л', price: 200 }] },
  // ФАСТ-ФУД
  { id: 66, name: 'Стрипсы корейские', nameKg: 'Корей стрипсы', description: 'Корейские куриные стрипсы', descriptionKg: 'Корей тоок стрипсы', price: 290, image: './Меню/Стрипсы кор.jpeg', category: 'fastfood', ingredients: ['Курица', 'Специи', 'Масло'], ingredientsKg: ['Тоок', 'Азыктар', 'Май'] },
  { id: 67, name: 'KFC + фри', nameKg: 'KFC + фри', description: 'Курица KFC с картошкой фри', descriptionKg: 'KFC тоок фри картөшкө менен', image: './Меню/Картошка.webp', category: 'fastfood', variants: [{ label: '20 шт', price: 310 }, { label: '10 шт', price: 260 }] },
  { id: 69, name: 'Шаурма с курицей', nameKg: 'Тоок менен шаурма', description: 'Шаурма с курицей', descriptionKg: 'Тоок менен шаурма', price: 260, image: './Меню/Шаурма.jpeg', category: 'fastfood', ingredients: ['Лаваш', 'Курица', 'Овощи', 'Соус'], ingredientsKg: ['Лаваш', 'Тоок', 'Жашылчалар', 'Соус'] },
  { id: 71, name: 'Пицца «Пепперони»', nameKg: 'Пицца «Пепперони»', description: 'Пицца Пепперони', descriptionKg: 'Пепперони пиццасы', image: './Меню/пиццапеп.png', category: 'fastfood', isHit: true, ingredients: ['Тесто', 'Сыр', 'Пепперони', 'Соус'], ingredientsKg: ['Камыр', 'Сыр', 'Пепперони', 'Соус'], variants: [{ label: '30 см', price: 550 }, { label: '40 см', price: 750 }] },
  { id: 72, name: 'Пицца «Мясная»', nameKg: 'Пицца «Эттүү»', description: 'Мясная пицца', descriptionKg: 'Эттүү пицца', image: './Меню/Мясо.webp', category: 'fastfood', ingredients: ['Тесто', 'Сыр', 'Мясо', 'Соус'], ingredientsKg: ['Камыр', 'Сыр', 'Эт', 'Соус'], variants: [{ label: '30 см', price: 590 }, { label: '40 см', price: 790 }] },
  { id: 73, name: 'Пицца «Курица с грибами»', nameKg: 'Пицца «Тоок козу карын»', description: 'Пицца с курицей и грибами', descriptionKg: 'Тоок жана козу карын менен пицца', image: './Меню/Пицца с гриб.webp', category: 'fastfood', ingredients: ['Тесто', 'Сыр', 'Курица', 'Грибы', 'Соус'], ingredientsKg: ['Камыр', 'Сыр', 'Тоок', 'Козу карын', 'Соус'], variants: [{ label: '30 см', price: 590 }, { label: '40 см', price: 790 }] },
  { id: 74, name: 'Пицца «Цезарь»', nameKg: 'Пицца «Цезарь»', description: 'Пицца Цезарь', descriptionKg: 'Цезарь пиццасы', image: './Меню/Цезарь пицца.webp', category: 'fastfood', ingredients: ['Тесто', 'Сыр', 'Курица', 'Салат', 'Соус'], ingredientsKg: ['Камыр', 'Сыр', 'Тоок', 'Салат', 'Соус'], variants: [{ label: '30 см', price: 570 }, { label: '40 см', price: 770 }] },
  { id: 75, name: 'Рамен', nameKg: 'Рамён', description: 'Японский рамён', descriptionKg: 'Жапон рамёну', price: 260, image: './Меню/Рамен.jpeg', category: 'fastfood', ingredients: ['Лапша', 'Бульон', 'Мясо', 'Овощи'], ingredientsKg: ['Лапша', 'Бульон', 'Эт', 'Жашылчалар'] },
  { id: 81, name: 'Мини самсы', nameKg: 'Мини кум самсы', description: 'Мини песочные самсы', descriptionKg: 'Мини кум самсы', price: 55, image: './Меню/Мини.webp', category: 'fastfood', ingredients: ['Тесто', 'Начинка'], ingredientsKg: ['Камыр', 'Начинка'] },
  { id: 86, name: 'Пирог', nameKg: 'Пирог', description: 'Сочные самсы из слоёного теста', descriptionKg: 'Катмарлуу камырдан шырындуу самсы', price: 80, image: './Меню/Самсыы.webp', category: 'fastfood', ingredients: ['Тесто', 'Мясо', 'Лук'], ingredientsKg: ['Камыр', 'Эт', 'Пияз'] },
  { id: 82, name: 'Хлеб', nameKg: 'Нан', description: 'Свежий хлеб', descriptionKg: 'Жаңы нан', price: 45, image: './Меню/Хлеб.webp', category: 'fastfood', ingredients: ['Мука', 'Вода', 'Дрожжи'], ingredientsKg: ['Ун', 'Суу', 'Ачыткы'] },
  { id: 83, name: 'Чай', nameKg: 'Чай', description: 'Горячий чай', descriptionKg: 'Ысык чай', price: 20, image: './Меню/Чайй.jpeg', category: 'fastfood', ingredients: ['Чай', 'Вода'], ingredientsKg: ['Чай', 'Суу'] },
  { id: 76, name: 'Сан-Себастьян', nameKg: 'Сан-Себастьян', description: 'Десерт Сан-Себастьян', descriptionKg: 'Сан-Себастьян десерти', image: './Меню/Сан-себа.webp', category: 'dessert', ingredients: ['Тесто', 'Крем', 'Фрукты'], ingredientsKg: ['Камыр', 'Крем', 'Жемиштер'], variants: [{ label: 'Обычный', price: 360, image: './Меню/Сан-себа.webp' }, { label: 'Фисташковый', price: 390, image: './Меню/Фисташковый саба .webp' }] },
  { id: 77, name: 'Чизкейк', nameKg: 'Чизкейк', description: 'Классический чизкейк', descriptionKg: 'Классикалык чизкейк', price: 370, image: './Меню/Чиз.webp', category: 'dessert', ingredients: ['Сыр', 'Тесто', 'Крем'], ingredientsKg: ['Сыр', 'Камыр', 'Крем'] },
  { id: 78, name: 'Три шоколада', nameKg: 'Үч шоколад', description: 'Торт три шоколада', descriptionKg: 'Үч шоколад торт', price: 280, image: './Меню/Три-шоколада.webp', category: 'dessert', ingredients: ['Шоколад', 'Тесто', 'Крем'], ingredientsKg: ['Шоколад', 'Камыр', 'Крем'] },
  { id: 79, name: 'Трайфл макс', nameKg: 'Трайфл макс', description: 'Десерт Трайфл макс', descriptionKg: 'Трайфл макс десерти', price: 290, image: './Меню/Трайфл .webp', category: 'dessert', ingredients: ['Бисквит', 'Крем', 'Фрукты'], ingredientsKg: ['Бисквит', 'Крем', 'Жемиштер'] },
  { id: 84, name: 'Боорсок + каймак', nameKg: 'Боорсок + каймак', description: 'Боорсок с каймаком', descriptionKg: 'Каймак менен боорсок', image: './Меню/Борсокк.webp', category: 'dessert', variants: [{ label: '0.5 кг', price: 170 }, { label: '1 кг', price: 340 }] }
];

// ── TRANSLATIONS ──────────────────────────────────────────
const translations = {
  ru: {
    'nav-menu': 'Меню', 'nav-about': 'О нас', 'nav-reviews': 'Отзывы', 'nav-contact': 'Контакты',
    'hero-badge': '🌟 Открыто сейчас · 10:00 – 22:00',
    'hero-desc': 'Уютное кафе в центре Кара-Куля. Вкусная домашняя еда каждый день.',
    'view-menu': 'Смотреть меню', 'about-title': 'Добро пожаловать в кафе "Cholpon"',
    'about-desc': 'Уютное кафе в центре Кара-Куля. Вкусная домашняя еда каждый день.',
    'menu-title': 'Меню', 'menu-sub': 'Всё готовится из свежих продуктов каждый день',
    'contact-title': 'Контакты', 'contact-phone-label': 'Телефон', 'contact-loc-label': 'Адрес',
    'contact-loc': 'Кара-Куль, ул. Боконбаева', 'contact-hours-label': 'Режим работы',
    'contact-hours': '10:00 – 22:00, без выходных',
    'footer-text': '© 2025 Кафе Cholpon. Все права защищены.',
    'cart-title': 'Корзина', 'cart-empty': 'Корзина пуста', 'cart-total': 'Итого:', 'currency': 'сом',
    'cart-clear': 'Очистить', 'cart-checkout': 'Оформить заказ',
    'order-title': 'Оформление заказа', 'order-name': 'Имя', 'order-phone': 'Телефон',
    'order-phone-hint': 'Введите номер без 0, например: 998 25 20 23',
    'order-address': 'Адрес доставки', 'order-comment': 'Комментарий (необязательно)',
    'order-summary': 'Состав заказа:', 'order-cancel': 'Отмена', 'order-submit': 'Отправить заказ',
    'add-to-cart': 'В корзину', 'remove': 'Удалить', 'details': 'Подробнее', 'back': 'Назад', 'continue': 'Продолжить',
    'filter-all': 'Все', 'filter-hits': 'Хиты', 'filter-shashlik': 'Шашлыки',
    'filter-first': 'Первые блюда', 'filter-second': 'Вторые блюда', 'filter-special': 'Заказные',
    'filter-salad': 'Салаты', 'filter-drink': 'Напитки', 'filter-fastfood': 'Fast-Food', 'filter-dessert': 'Десерты',
    'dish-ingredients': 'Ингредиенты:', 'payment-method-label': 'Способ оплаты',
    'payment-cash': 'Наличными', 'payment-card': 'Картой', 'mbank-scan': 'Отсканируйте QR для оплаты в MBank',
    'order-type-title': 'Как вы хотите заказать?', 'order-type-cafe': 'Я в кафе',
    'order-type-pickup': 'Самовывоз', 'order-type-delivery': 'Доставка', 'order-type-browse': 'Просто посмотреть',
    'table-select-title': 'Выберите стол', 'delivery-form-title': 'Данные для доставки',
    'variant-hint': 'Выберите объём или вариант:', 'toast-added': 'Добавлено:', 'toast-table': 'Вы за столом №',
    'confirm-clear': 'Очистить корзину?', 'alert-cart-empty': 'Корзина пуста. Добавьте блюда.',
    'alert-fill-fields': 'Заполните все обязательные поля',
    'alert-invalid-phone': 'Введите корректный номер телефона\nПример: 998 25 20 23',
    'alert-order-sent': '✅ Заказ отправлен!',
    'repeat-order-hint': 'Данные сохранены. Просто добавьте комментарий если нужно.',
  },
  kg: {
    'nav-menu': 'Меню', 'nav-about': 'Биз жөнүндө', 'nav-reviews': 'Пикирлер', 'nav-contact': 'Байланыш',
    'hero-badge': '🌟 Азыр ачык · 10:00 – 22:00',
    'hero-desc': 'Кара-Көл шаарынын борборундагы жайлуу кафе. Ар күнү даамдуу үй тамагы.',
    'view-menu': 'Менюну көрүү', 'about-title': '"Cholpon" кафесине кош келиңиз',
    'about-desc': 'Кара-Күл шаарынын борборундагы жайлуу кафе.',
    'menu-title': 'Меню', 'menu-sub': 'Баары ар күнү жаңы азыктардан даярдалат',
    'contact-title': 'Байланыш', 'contact-phone-label': 'Телефон', 'contact-loc-label': 'Дарек',
    'contact-loc': 'Кара-Күл, Боконбаев көч.', 'contact-hours-label': 'Иш убактысы',
    'contact-hours': '10:00 – 22:00, дем алыш жок',
    'footer-text': '© 2025 Cholpon кафеси. Бардык укуктар корголгон.',
    'cart-title': 'Себет', 'cart-empty': 'Себет бош', 'cart-total': 'Баары:', 'currency': 'сом',
    'cart-clear': 'Тазалоо', 'cart-checkout': 'Заказ берүү',
    'order-title': 'Заказ берүү', 'order-name': 'Аты', 'order-phone': 'Телефон',
    'order-phone-hint': 'Номурду 0сүз жазыңыз, мисалы: 998 25 20 23',
    'order-address': 'Жеткирүү дареги', 'order-comment': 'Комментарий (милдеттүү эмес)',
    'order-summary': 'Заказдын курамы:', 'order-cancel': 'Жокко чыгаруу', 'order-submit': 'Заказды жөнөтүү',
    'add-to-cart': 'Себетке', 'remove': 'Өчүрүү', 'details': 'Кененирээк', 'back': 'Артка', 'continue': 'Улантуу',
    'filter-all': 'Баары', 'filter-hits': 'Хиттер', 'filter-shashlik': 'Шашлык',
    'filter-first': 'Биринчи тамактар', 'filter-second': 'Экинчи тамактар', 'filter-special': 'Заказдык',
    'filter-salad': 'Салаттар', 'filter-drink': 'Суусундуктар', 'filter-fastfood': 'Fast-Food', 'filter-dessert': 'Десерттер',
    'dish-ingredients': 'Курамы:', 'payment-method-label': 'Төлөө ыкмасы',
    'payment-cash': 'Накта', 'payment-card': 'Карта менен', 'mbank-scan': 'MBank төлөмү үчүн QR сканерлеңиз',
    'order-type-title': 'Кантип заказ бересиз?', 'order-type-cafe': 'Мен кафедемин',
    'order-type-pickup': 'Өзүм алам', 'order-type-delivery': 'Жеткирүү', 'order-type-browse': 'Менюну гана көрүү',
    'table-select-title': 'Стол тандаңыз', 'delivery-form-title': 'Жеткирүү маалыматтары',
    'variant-hint': 'Көлөм же вариантты тандаңыз:', 'toast-added': 'Кошулду:', 'toast-table': 'Сиз №',
    'confirm-clear': 'Себетти тазалоо?', 'alert-cart-empty': 'Себет бош. Тамак кошуңуз.',
    'alert-fill-fields': 'Бардык милдеттүү талааларды толтуруңуз',
    'alert-invalid-phone': 'Туура телефон номурун киргизиңиз',
    'alert-order-sent': '✅ Заказ жөнөтүлдү!',
    'repeat-order-hint': 'Маалыматтар сакталды. Зарыл болсо комментарий кошуңуз.',
  }
};

const i18n = translations;

// ── STATE ─────────────────────────────────────────────────
let lang = localStorage.getItem('lang') || 'ru';
let theme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
let cart = [];
let orderType = null;
let tableNum = null;
let deliveryInfo = null;
let activeCategory = 'all';
let slideIndex = 0;
let activeDishId = null;
let tableGuestData = null;
let pendingAddItemId = null;

function isQrTableSession() { return orderType === 'cafe' && tableNum !== null; }

// ── HELPERS ───────────────────────────────────────────────
const $ = id => document.getElementById(id);
const t = key => i18n[lang]?.[key] ?? i18n.ru[key] ?? key;

function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.map(item => ({
      ...item,
      qty: Number(item.qty) || 1,
      price: Number(item.price) || 0
    }));
  } catch { cart = []; }
}
function saveCart() { try { localStorage.setItem('cart', JSON.stringify(cart)); } catch { } }

function formatPhone(input) {
  let v = input.value.replace(/\D/g, '').slice(0, 9);
  let f = v.slice(0, 3);
  if (v.length > 3) f += ' ' + v.slice(3, 5);
  if (v.length > 5) f += ' ' + v.slice(5, 7);
  if (v.length > 7) f += ' ' + v.slice(7, 9);
  input.value = f;
}
function isValidPhone(val) { return /^\d{9}$/.test(val.replace(/\s/g, '')); }

function openModal(id) { const el = $(id); if (el) el.classList.add('open'); }
function closeModal(id) { const el = $(id); if (el) el.classList.remove('open'); }

function showToast(msg, ms = 3000) {
  const el = $('toast'); if (!el) return;
  el.textContent = msg; el.classList.add('show');
  clearTimeout(el._tid); el._tid = setTimeout(() => el.classList.remove('show'), ms);
}

// ── THEME ─────────────────────────────────────────────────
function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  const moon = $('iconMoon'); const sun = $('iconSun');
  if (moon) moon.style.display = theme === 'dark' ? 'none' : '';
  if (sun) sun.style.display = theme === 'dark' ? '' : 'none';
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) { theme = e.matches ? 'dark' : 'light'; applyTheme(); }
});

// ── LANGUAGE ──────────────────────────────────────────────
function applyLang() {
  document.documentElement.setAttribute('lang', lang);
  const toggle = $('langToggle'); if (toggle) toggle.textContent = lang.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n; const txt = t(key);
    if (txt && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') el.textContent = txt;
  });
  document.querySelectorAll('.lang-pill').forEach(p => p.classList.toggle('active', p.dataset.lang === lang));
}

// ── CART LOGIC ────────────────────────────────────────────
function addItem(item, variant) {
  const wasEmpty = cart.length === 0;
  const cid = variant ? `${item.id}_${variant.label}` : String(item.id);
  const price = Number(variant ? variant.price : item.price) || 0;
  const suffix = variant ? ` (${variant.label})` : '';
  const name = (lang === 'ru' ? item.name : (item.nameKg || item.name)) + suffix;
  const existing = cart.find(c => c.cid === cid);
  if (existing) { existing.qty++; }
  else { cart.push({ cid, id: item.id, name, price, image: item.image, qty: 1 }); }
  saveCart(); updateCartBadge(); updateCartSummary(); renderMenu();
  showToast(`${t('toast-added')} ${name}`);
  if (wasEmpty) highlightCartEntry();
}

function increaseQty(cid) {
  const item = cart.find(c => c.cid === cid);
  if (item) { item.qty++; saveCart(); updateCartBadge(); renderMenu(); renderCartItems(); }
}
function decreaseQty(cid) {
  const item = cart.find(c => c.cid === cid); if (!item) return;
  item.qty--; if (item.qty <= 0) cart = cart.filter(c => c.cid !== cid);
  saveCart(); updateCartBadge(); renderMenu(); renderCartItems();
}
function removeItem(cid) {
  cart = cart.filter(c => c.cid !== cid);
  saveCart(); updateCartBadge(); renderMenu(); renderCartItems();
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + (Number(i.qty) || 0), 0);
  ['cartBadge', 'bottomBadge'].forEach(id => {
    const el = $(id); if (!el) return;
    el.textContent = total; el.style.display = total > 0 ? 'flex' : 'none';
  });
  updateCartSummary();
}

function updateCartSummary() {
  const bar = $('cartSummaryBar'); if (!bar) return;
  if (!cart.length) { bar.style.display = 'none'; return; }
  const totalCount = cart.reduce((s, i) => s + (Number(i.qty) || 0), 0);
  const totalSum = cart.reduce((s, i) => s + (Number(i.qty) || 0) * (Number(i.price) || 0), 0);
  const txtEl = $('cartSummaryText'); const priceEl = $('cartSummaryPrice');
  if (txtEl) {
    const word = lang === 'ru'
      ? (totalCount === 1 ? 'блюдо' : (totalCount >= 2 && totalCount <= 4 ? 'блюда' : 'блюд')) : 'тамак';
    txtEl.textContent = `${totalCount} ${word}`;
  }
  if (priceEl) priceEl.textContent = `${totalSum} ${t('currency')}`;
  bar.style.display = 'flex';
}

let cartHintShown = false;
function highlightCartEntry() {
  if (cartHintShown) return; cartHintShown = true;
  const btn = $('bnCart') || $('cartBtn'); if (!btn) return;
  btn.classList.add('pulse-cart'); setTimeout(() => btn.classList.remove('pulse-cart'), 1200);
}

function renderCartItems() {
  const wrap = $('cartItems'); const empty = $('cartEmpty');
  const totWrap = $('cartTotalWrap'); const totEl = $('cartTotalPrice');
  if (!wrap) return;
  if (cart.length === 0) {
    wrap.innerHTML = ''; empty.style.display = ''; totWrap.style.display = 'none'; validateOrder(); return;
  }
  empty.style.display = 'none'; totWrap.style.display = ''; wrap.innerHTML = ''; let total = 0;
  cart.forEach(item => {
    const sub = (Number(item.price) || 0) * (Number(item.qty) || 0); total += sub;
    const row = document.createElement('div'); row.className = 'cart-row';
    row.innerHTML = `
      <img class="cart-row-img" src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='${PLACEHOLDER}'">
      <div class="cart-row-info">
        <div class="cart-row-name">${item.name}</div>
        <div class="cart-row-price">${item.price} ${t('currency')}</div>
      </div>
      <button class="cart-row-del" onclick="removeItem('${item.cid}')" aria-label="${t('remove')}">×</button>
      <div class="cart-row-bottom">
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="decreaseQty('${item.cid}')">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="increaseQty('${item.cid}')">+</button>
        </div>
        <span class="cart-row-total">${sub} ${t('currency')}</span>
      </div>`;
    wrap.appendChild(row);
  });
  totEl.textContent = `${total} ${t('currency')}`; validateOrder();
}

// ── MENU RENDER ───────────────────────────────────────────
function renderMenu() {
  const grid = $('menuGrid'); if (!grid) return; grid.innerHTML = '';
  let filtered;
  if (activeCategory === 'all') filtered = menuData;
  else if (activeCategory === 'hits') filtered = menuData.filter(i => i.isHit);
  else filtered = menuData.filter(i => i.category === activeCategory);
  filtered.forEach(item => grid.appendChild(createCard(item)));
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { const img = e.target; if (img.dataset.src) { img.src = img.dataset.src; delete img.dataset.src; } obs.unobserve(img); }
      });
    }, { rootMargin: '200px 0px' });
    grid.querySelectorAll('img[data-src]').forEach(img => obs.observe(img));
  } else {
    grid.querySelectorAll('img[data-src]').forEach(img => { img.src = img.dataset.src; delete img.dataset.src; });
  }
}

function createCard(item) {
  const card = document.createElement('div'); card.className = 'menu-card';
  const name = lang === 'ru' ? item.name : (item.nameKg || item.name);
  const desc = lang === 'ru' ? item.description : (item.descriptionKg || item.description);
  let priceStr;
  if (item.variants?.length) {
    const prices = item.variants.map(v => v.price);
    const mn = Math.min(...prices), mx = Math.max(...prices);
    priceStr = mn === mx ? `${mn}` : `${mn}–${mx}`;
  } else { priceStr = `${item.price}`; }
  const existing = !item.variants?.length && cart.find(c => c.id === item.id && c.cid === String(item.id));
  const qty = existing ? existing.qty : 0;
  card.innerHTML = `
    <div class="card-img-wrap">
      <img class="card-img" src="${PLACEHOLDER}" data-src="${item.image}" alt="${name}" loading="lazy" decoding="async"
           onerror="this.src='${PLACEHOLDER}';this.removeAttribute('data-src')">
    </div>
    <div class="card-body">
      <div class="card-name">${name}</div>
      ${desc ? `<div class="card-desc">${desc}</div>` : ''}
    </div>
    <div class="card-footer">
      <div class="card-price">${priceStr} <small>${t('currency')}</small></div>
      <div class="card-actions">
        ${item.variants?.length
      ? `<button class="btn-add" onclick="handleAddToCart(${item.id},event)">${t('add-to-cart')}</button>`
      : qty === 0
        ? `<button class="btn-add" onclick="handleAddToCart(${item.id},event)">${t('add-to-cart')}</button>`
        : `<div class="qty-ctrl">
              <button class="qty-btn" onclick="decreaseQty('${item.id}');event.stopPropagation()">−</button>
              <span class="qty-val">${qty}</span>
              <button class="qty-btn" onclick="increaseQty('${item.id}');event.stopPropagation()">+</button>
            </div>`}
      </div>
    </div>`;
  card.addEventListener('click', e => { if (e.target.closest('.card-actions')) return; showDishDetail(item.id); });
  return card;
}
function handleAddToCart(id, e) {
  e.stopPropagation();
  const item = menuData.find(i => i.id === id); if (!item) return;

  if (!orderType) {
    pendingAddItemId = id;
    lockScroll();
    openModal('orderTypeModal');
    return;
  }

  if (item.variants?.length) openVariantModal(item);
  else addItem(item, null);
}

// ── DISH DETAIL ───────────────────────────────────────────
function showDishDetail(id) {
  const dish = menuData.find(i => i.id === id); if (!dish) return;
  activeDishId = id;
  const name = lang === 'ru' ? dish.name : (dish.nameKg || dish.name);
  const desc = lang === 'ru' ? dish.description : (dish.descriptionKg || dish.description);
  const ings = lang === 'ru' ? (dish.ingredients || []) : (dish.ingredientsKg || dish.ingredients || []);
  let priceText;
  if (dish.variants?.length) priceText = `от ${Math.min(...dish.variants.map(v => v.price))} ${t('currency')}`;
  else priceText = `${dish.price} ${t('currency')}`;
  $('dishModalTitle').textContent = name; $('dishName').textContent = name;
  $('dishDesc').textContent = desc || ''; $('dishPrice').textContent = priceText;
  $('dishIngList').innerHTML = ings.map(i => `<li>${i}</li>`).join('');
  const images = dish.images?.length ? dish.images : [dish.image];
  slideIndex = 0;
  const slider = $('dishSlider'); const dots = $('slideDots');
  slider.innerHTML = ''; dots.innerHTML = '';
  images.forEach((src, i) => {
    const slide = document.createElement('div'); slide.className = 'slide-item';
    slide.innerHTML = `<img src="${src}" alt="${name}" loading="lazy" onerror="this.src='${PLACEHOLDER}'" onclick="openLightbox('${src.replace(/'/g, "\\'")}','${name.replace(/'/g, "\\'")}')">`;
    slider.appendChild(slide);
    const dot = document.createElement('button');
    dot.className = `slide-dot${i === 0 ? ' active' : ''}`; dot.setAttribute('aria-label', `Фото ${i + 1}`);
    dot.addEventListener('click', () => { slideIndex = i; updateSlider(); }); dots.appendChild(dot);
  });
  const hasMult = images.length > 1;
  $('slidePrev').style.display = hasMult ? '' : 'none'; $('slideNext').style.display = hasMult ? '' : 'none';
  dots.style.display = hasMult ? '' : 'none';
  updateSlider(); openModal('dishModal');
}

function updateSlider() {
  const slider = $('dishSlider'); if (!slider) return;
  const slides = slider.querySelectorAll('.slide-item'); if (!slides.length) return;
  slideIndex = ((slideIndex % slides.length) + slides.length) % slides.length;
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  document.querySelectorAll('.slide-dot').forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}

// ── VARIANT MODAL ─────────────────────────────────────────
function openVariantModal(item) {
  const name = lang === 'ru' ? item.name : (item.nameKg || item.name);
  $('variantTitle').textContent = name; $('variantList').innerHTML = '';
  (item.variants || []).forEach(v => {
    const btn = document.createElement('button'); btn.className = 'var-btn';
    const imgHtml = v.image ? `<img class="var-img" src="${v.image}" alt="${v.label}" loading="lazy" onerror="this.style.display='none'">` : '';
    btn.innerHTML = `${imgHtml}<span class="var-label">${v.label}</span><span class="var-price">${v.price} ${t('currency')}</span>`;
    btn.addEventListener('click', () => { addItem(item, v); closeModal('variantModal'); });
    $('variantList').appendChild(btn);
  });
  openModal('variantModal');
}

// ── ORDER FORM ────────────────────────────────────────────
function buildOrderSummary() {
  const el = $('orderSummary'); if (!el) return;
  let html = ''; let total = 0;
  cart.forEach(item => {
    const sub = (Number(item.price) || 0) * (Number(item.qty) || 0); total += sub;
    html += `<div class="order-summary-row"><span>${item.name} × ${item.qty}</span><span>${sub} ${t('currency')}</span></div>`;
  });
  html += `<div class="order-summary-row"><span>${t('cart-total')}</span><span>${total} ${t('currency')}</span></div>`;
  el.innerHTML = html;
}

function validateOrder() {
  const btn = $('submitOrderBtn'); if (!btn) return;
  if (isQrTableSession() && tableGuestData) {
    const pay = document.querySelector('input[name="payment"]:checked');
    const ok = cart.length > 0 && !!pay; btn.disabled = !ok; btn.classList.toggle('pulse', ok); return;
  }
  const name = $('custName')?.value.trim();
  const phone = $('custPhone')?.value.replace(/\s/g, '');
  const pay = document.querySelector('input[name="payment"]:checked');
  const ok = cart.length > 0 && name?.length > 0 && isValidPhone(phone) && !!pay;
  btn.disabled = !ok; btn.classList.toggle('pulse', ok);
}

function showOrderForm() {
  if (cart.length === 0) { alert(t('alert-cart-empty')); return; }
  const orderForm = $('orderForm'); if (orderForm) orderForm.reset();
  const guestFieldsWrap = $('guestFields'); const repeatHint = $('repeatOrderHint');
  if (isQrTableSession() && tableGuestData) {
    if (guestFieldsWrap) guestFieldsWrap.style.display = 'none';
    if (repeatHint) repeatHint.style.display = 'none';
  } else {
    if (guestFieldsWrap) guestFieldsWrap.style.display = '';
    if (repeatHint) repeatHint.style.display = 'none';
    if (orderType === 'delivery' && deliveryInfo) {
      const n = $('custName'), p = $('custPhone'), a = $('custAddr');
      if (n) n.value = deliveryInfo.name || '';
      if (p) p.value = deliveryInfo.phone || '';
      if (a) a.value = deliveryInfo.address || '';
    }
  }
  const af = $('addrField'); if (af) af.style.display = orderType === 'delivery' ? '' : 'none';
  const pc = $('payCard'); if (pc) pc.style.display = orderType === 'delivery' ? 'none' : '';
  const qr = $('mbankQr'); if (qr) qr.style.display = 'none';
  document.querySelectorAll('.pay-opt').forEach(o => o.classList.remove('selected'));
  document.querySelectorAll('input[name="payment"]').forEach(r => r.checked = false);
  buildOrderSummary(); validateOrder(); closeModal('cartModal'); openModal('orderModal');
}
function buildOrderText(name, phone, comment, payment) {
  const title = lang === 'ru'
    ? 'Новый заказ'
    : 'Жаңы заказ';

  let lines = `<b>🍽 ${title}</b>\n`;

  // Тип заказа в начале
  if (orderType === 'cafe' && tableNum) {
    lines += `<b>📍 СТОЛИК №${tableNum}</b>\n`;
  } else if (orderType === 'pickup') {
    lines += `<b>🏪 САМОВЫВОЗ</b>\n`;
  } else if (orderType === 'delivery') {
    lines += `<b>🚗 ДОСТАВКА</b>\n`;
  }

  lines += `━━━━━━━━━━━━━━━━\n`;

  let total = 0;

  cart.forEach(item => {
    const sub = (Number(item.price) || 0) * (Number(item.qty) || 0);
    total += sub;
    lines += `• ${item.name} × ${item.qty} — <b>${sub} ${t('currency')}</b>\n`;
  });

  lines += `━━━━━━━━━━━━━━━━\n`;
  lines += `💰 <b>${t('cart-total')} ${total} ${t('currency')}</b>\n`;
  lines += `━━━━━━━━━━━━━━━━\n`;

  lines += `👤 <b>${name}</b>\n📞 +996 ${phone}\n`;

  if (payment) {
    const pm =
      payment === 'cash'
        ? t('payment-cash')
        : payment === 'card'
          ? t('payment-card')
          : 'MBank';
    lines += `💳 ${pm}\n`;
  }

  if (orderType === 'delivery' && deliveryInfo?.address) {
    lines += `📍 ${lang === 'ru' ? 'Адрес' : 'Дарек'}: ${deliveryInfo.address}\n`;
  }

  if (comment?.trim()) {
    lines += `\n📝 <i>${comment.trim()}</i>`;
  }

  return lines;
}
// ── SEND TO TELEGRAM ──────────────────────────────────────
async function sendToTelegram(text) {
  // Все заказы в один чат
  const chatId = TG_CHAT_ID;
  console.log('🚨 Отправка в Telegram:', { chatId, token: TG_BOT_TOKEN.slice(0, 10) + '...', text: text.slice(0, 50) });
  try {
    const url = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' })
    });
    const data = await res.json();
    console.log('🛠 Ответ Telegram:', data);
    if (!data.ok) console.error('❌ Ошибка Telegram:', data.description || data);
    return data.ok;
  } catch (err) { console.error('❌ Telegram error:', err); return false; }
}
// ── SUBMIT ORDER ──────────────────────────────────────────
async function submitOrder(e) {
  e.preventDefault();
  let name, rawPhone, phone;

  if (isQrTableSession() && tableGuestData) {
    name = tableGuestData.name; rawPhone = tableGuestData.phone; phone = rawPhone.replace(/\s/g, '');
  } else {
    name = $('custName')?.value.trim(); rawPhone = $('custPhone')?.value.trim(); phone = rawPhone.replace(/\s/g, '');
    if (!name) { alert(t('alert-fill-fields')); return; }
    if (!isValidPhone(phone)) { alert(t('alert-invalid-phone')); return; }
  }

  const comment = $('custComment')?.value.trim() || '';
  const payment = document.querySelector('input[name="payment"]:checked')?.value || '';
  const addr = $('custAddr')?.value.trim() || '';
  if (!cart.length) { alert(t('alert-cart-empty')); return; }

  if (orderType === 'delivery') {
    if (!deliveryInfo) deliveryInfo = {};
    deliveryInfo.address = addr || deliveryInfo.address;
  }

  const btn = $('submitOrderBtn');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Отправляем...'; }

  const text = buildOrderText(name, rawPhone, comment, payment);
  const sent = await sendToTelegram(text);

  cart = []; saveCart(); updateCartBadge(); renderMenu(); closeModal('orderModal');

  // ✅ Все заказы только в Telegram бота
  openModal('successModal');

  if (btn) { btn.disabled = false; btn.textContent = t('order-submit'); }
}

// ── LIGHTBOX ──────────────────────────────────────────────
function openLightbox(src, alt) {
  const lb = $('lightbox'); const img = $('lightboxImg'); if (!lb || !img) return;
  img.src = src; img.alt = alt || ''; lb.classList.add('open');
}
function closeLightbox() {
  const lb = $('lightbox'); const img = $('lightboxImg'); if (!lb || !img) return;
  lb.classList.remove('open'); img.src = '';
}

// ── ORDER TYPE FLOW ───────────────────────────────────────
function lockScroll() { document.body.classList.add('locked'); }
function unlockScroll() { document.body.classList.remove('locked'); }
function setOrderType(type) {
  orderType = type;
  closeModal('orderTypeModal'); closeModal('tableModal'); closeModal('deliveryModal');
  unlockScroll(); document.body.classList.toggle('browse', type === 'browse');

  // Если был отложенный товар — добавить его
  if (pendingAddItemId !== null) {
    const item = menuData.find(i => i.id === pendingAddItemId);
    pendingAddItemId = null;
    if (item) {
      if (item.variants?.length) openVariantModal(item);
      else addItem(item, null);
    }
  }
}
function initOrderTypeModal() {
  try {
    const params = new URLSearchParams(window.location.search);
    const tableParam = params.get('table');
    if (tableParam) {
      const tableNumber = parseInt(tableParam, 10);
      if (!isNaN(tableNumber) && tableNumber >= 1) {
        tableNum = tableNumber; orderType = 'cafe';
        showToast(`${t('toast-table')}${tableNumber}`); return;
      }
    }
  } catch (error) { console.error("Error parsing table number:", error); }
}

function buildTableGrid() {
  const grid = $('tableGrid'); if (!grid) return; grid.innerHTML = '';
  for (let i = 1; i <= 11; i++) {
    const btn = document.createElement('button'); btn.className = 'tbl-btn'; btn.textContent = i;
    btn.addEventListener('click', () => { tableNum = i; setOrderType('cafe'); showToast(`${t('toast-table')}${i}`); });
    grid.appendChild(btn);
  }
}

// ── HEADER HIDE ON SCROLL ─────────────────────────────────
function initScrollHeader() {
  const header = $('header'); if (!header) return;
  let lastY = 0, ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < 50) header.classList.remove('hide');
        else if (y > lastY + 8) header.classList.add('hide');
        else if (y < lastY - 8) header.classList.remove('hide');
        lastY = y; ticking = false;
      }); ticking = true;
    }
  }, { passive: true });
}

// ── PAYMENT RADIO STYLING ─────────────────────────────────
function initPaymentUI() {
  document.querySelectorAll('.pay-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const radio = opt.querySelector('input[type="radio"]'); if (!radio) return;
      radio.checked = true;
      document.querySelectorAll('.pay-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const qr = $('mbankQr'); if (qr) qr.style.display = radio.value === 'mbank' ? '' : 'none';
      validateOrder();
    });
  });
}

// ── MAIN INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadCart(); applyTheme(); applyLang();
  updateCartBadge(); buildTableGrid(); renderMenu(); initScrollHeader(); initPaymentUI(); initOrderTypeModal();

  try { const saved = localStorage.getItem('deliveryInfo'); if (saved) deliveryInfo = JSON.parse(saved); } catch { }

  $('themeToggle')?.addEventListener('click', () => {
    theme = theme === 'light' ? 'dark' : 'light'; localStorage.setItem('theme', theme); applyTheme();
  });

  $('langToggle')?.addEventListener('click', () => {
    lang = lang === 'ru' ? 'kg' : 'ru'; localStorage.setItem('lang', lang); applyLang(); renderMenu(); renderCartItems();
  });

  document.querySelectorAll('.lang-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.lang === lang);
    pill.addEventListener('click', () => {
      lang = pill.dataset.lang; localStorage.setItem('lang', lang); applyLang(); renderMenu();
      document.querySelectorAll('.lang-pill').forEach(p => p.classList.toggle('active', p.dataset.lang === lang));
    });
  });

  const menuToggle = $('menuToggle'); const mainNav = $('mainNav');
  menuToggle?.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.classList.toggle('open', open); menuToggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', e => {
    if (mainNav && menuToggle && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
      mainNav.classList.remove('open'); menuToggle.classList.remove('open');
    }
  });

  $('viewMenuBtn')?.addEventListener('click', () => $('menu')?.scrollIntoView({ behavior: 'smooth' }));
  $('viewContactBtn')?.addEventListener('click', () => $('contact')?.scrollIntoView({ behavior: 'smooth' }));

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
      renderMenu(); $('menu')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  $('cartBtn')?.addEventListener('click', () => { renderCartItems(); openModal('cartModal'); });
  $('bnMenu')?.addEventListener('click', () => $('menu')?.scrollIntoView({ behavior: 'smooth' }));
  $('bnCart')?.addEventListener('click', () => { renderCartItems(); openModal('cartModal'); });
  $('cartSummaryCheckout')?.addEventListener('click', () => { renderCartItems(); openModal('cartModal'); });

  $('closeCartModal')?.addEventListener('click', () => closeModal('cartModal'));
  $('clearCartBtn')?.addEventListener('click', () => {
    if (confirm(t('confirm-clear'))) { cart = []; saveCart(); updateCartBadge(); renderCartItems(); renderMenu(); }
  });
  $('checkoutBtn')?.addEventListener('click', showOrderForm);

  $('closeOrderModal')?.addEventListener('click', () => closeModal('orderModal'));
  $('cancelOrderBtn')?.addEventListener('click', () => closeModal('orderModal'));

  const custPhone = $('custPhone');
  if (custPhone) custPhone.addEventListener('input', () => { formatPhone(custPhone); validateOrder(); });
  $('custName')?.addEventListener('input', validateOrder);
  $('orderForm')?.addEventListener('submit', submitOrder);

  $('closeDishModal')?.addEventListener('click', () => closeModal('dishModal'));
  $('slidePrev')?.addEventListener('click', () => { slideIndex--; updateSlider(); });
  $('slideNext')?.addEventListener('click', () => { slideIndex++; updateSlider(); });
  $('addFromDetail')?.addEventListener('click', () => {
    if (!activeDishId) return;
    const dish = menuData.find(i => i.id === activeDishId); if (!dish) return;
    closeModal('dishModal');
    if (dish.variants?.length) openVariantModal(dish); else addItem(dish, null);
  });

  $('closeVariantModal')?.addEventListener('click', () => closeModal('variantModal'));
  $('lightboxClose')?.addEventListener('click', closeLightbox);
  $('lightbox')?.addEventListener('click', e => { if (e.target === $('lightbox')) closeLightbox(); });

  $('otCafe')?.addEventListener('click', () => { closeModal('orderTypeModal'); openModal('tableModal'); });
  $('otPickup')?.addEventListener('click', () => setOrderType('pickup'));
  $('otDelivery')?.addEventListener('click', () => { closeModal('orderTypeModal'); openModal('deliveryModal'); });

  $('closeTableModal')?.addEventListener('click', () => { closeModal('tableModal'); openModal('orderTypeModal'); });
  $('closeDeliveryModal')?.addEventListener('click', () => { closeModal('deliveryModal'); openModal('orderTypeModal'); });
  $('backToOrderType')?.addEventListener('click', () => { closeModal('deliveryModal'); openModal('orderTypeModal'); });

  const dlvPhone = $('dlvPhone');
  if (dlvPhone) dlvPhone.addEventListener('input', () => formatPhone(dlvPhone));

  $('deliveryForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('dlvName')?.value.trim(); const phone = $('dlvPhone')?.value.trim();
    const address = $('dlvAddress')?.value.trim();
    if (!name || !isValidPhone(phone.replace(/\s/g, '')) || !address) { alert(t('alert-fill-fields')); return; }
    deliveryInfo = { name, phone, address };
    try { localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo)); } catch { }
    setOrderType('delivery');
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target !== overlay) return;
      if (overlay.id === 'orderTypeModal') return;
      overlay.classList.remove('open');
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (document.body.classList.contains('locked')) return;
    const open = [...document.querySelectorAll('.modal-overlay.open')];
    if (open.length) open[open.length - 1].classList.remove('open');
    if ($('lightbox')?.classList.contains('open')) closeLightbox();
  });
});

// ── EXPOSE GLOBALS ────────────────────────────────────────
window.decreaseQty = decreaseQty;
window.increaseQty = increaseQty;
window.removeItem = removeItem;
window.handleAddToCart = handleAddToCart;
window.openLightbox = openLightbox;