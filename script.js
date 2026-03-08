/* ============================================================
   CHOLPON CAFE — script.js
   Clean, no-Firebase, WhatsApp + Telegram + PWA
   ============================================================ */

'use strict';

// ── CONSTANTS ─────────────────────────────────────────────
// 🔧 ВСТАВЬ СВОИ ДАННЫЕ:
const TG_BOT_TOKEN = 'ТВОЙ_ТОКЕН_БОТА';  // например: 7412345678:AAHxxxYYY
const TG_CHAT_ID   = 'ТВОЙ_CHAT_ID';     // например: 123456789
const CAFE_WA = '996998252023';          // WhatsApp номер
const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f2ece0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='52' fill='%23c27941'%3E%F0%9F%8D%BD%3C/text%3E%3C/svg%3E";

// ── MENU DATA ──────────────────────────────────────────────
const menuData = [
  // ШАШЛЫКИ
  { id:1,  name:'Говядина',           nameKg:'Жылкы эти',            description:'Сочный шашлык из говядины на углях',       descriptionKg:'Жылкы этинен шашлык, көмүрдө бышырылган',   price:260, image:'./Menu/Шашлыкговя.webp',      category:'shashlik', ingredients:['Говядина','Лук','Специи','Масло'],         ingredientsKg:['Жылкы эти','Пияз','Азыктар','Май'] },
  { id:2,  name:'Наполеон',           nameKg:'Наполеон',             description:'Шашлык Наполеон с нежным вкусом',          descriptionKg:'Наполеон шашлык нымдуу даамы менен',        price:210, image:'./Menu/Шашлык Наполеон с нежным вкусом.webp', category:'shashlik', ingredients:['Мясо','Лук','Специи'],                   ingredientsKg:['Эт','Пияз','Азыктар'] },
  { id:3,  name:'Люля-кебаб',         nameKg:'Люля-кебаб',           description:'Традиционный люля-кебаб из фарша',         descriptionKg:'Фарштан жасалган салттуу люля-кебаб',       price:190, image:'./Menu/люля.webp',              category:'shashlik', ingredients:['Фарш','Лук','Специи'],                   ingredientsKg:['Фарш','Пияз','Азыктар'] },
  { id:4,  name:'Крылышки',           nameKg:'Канаттар',             description:'Куриные крылышки на гриле',                descriptionKg:'Грилдеги тоок канаттары',                   price:225, image:'./Menu/Крылышки.webp',          category:'shashlik', ingredients:['Куриные крылышки','Специи','Масло'],      ingredientsKg:['Тоок канаттары','Азыктар','Май'] },
  { id:5,  name:'Овощной шашлык',     nameKg:'Жашылчалуу шашлык',   description:'Шашлык из свежих овощей',                  descriptionKg:'Жаңы жашылчалардан шашлык',                price:180, image:'./Menu/Шашлык из свежих овощей.webp', category:'shashlik', ingredients:['Перец','Баклажан','Помидоры','Лук'],   ingredientsKg:['Мурч','Баклажан','Помидор','Пияз'] },
  { id:6,  name:'Сет «Компания»',     nameKg:'«Компания» сети',      description:'Говядина 2, Люля-кебаб 2, Наполеон 2 + подарок', descriptionKg:'Жылкы эти 2, Люля-кебаб 2, Наполеон 2 + белек', price:2050, image:'./Menu/сет компания.webp', category:'shashlik', ingredients:['Говядина','Люля-кебаб','Наполеон'],    ingredientsKg:['Жылкы эти','Люля-кебаб','Наполеон'] },
  { id:7,  name:'Сет «Фантазия»',     nameKg:'«Фантазия» сети',      description:'Говядина 2, Люля-кебаб 1, Наполеон 1, Рыба 4, Грибы + подарок', descriptionKg:'Жылкы эти 2, Люля-кебаб 1, Наполеон 1, Балык 4 + белек', price:2800, image:'./Menu/Сет фантазия.webp', category:'shashlik', ingredients:['Говядина','Люля-кебаб','Наполеон','Рыба','Грибы'], ingredientsKg:['Жылкы эти','Люля-кебаб','Наполеон','Балык','Козу карын'] },
  // ПЕРВЫЕ БЛЮДА
  { id:8,  name:'Шорпо (говядина)',   nameKg:'Шорпо (жылкы эти)',    description:'Традиционный суп с говядиной',              descriptionKg:'Жылкы эти менен салттуу суп',               price:235, image:'./Menu/Шорпо.webp',            category:'first',    ingredients:['Говядина','Картофель','Морковь','Лук','Зелень'],    ingredientsKg:['Жылкы эти','Картөшкө','Сабиз','Пияз','Жашылча'] },
  { id:9,  name:'Сырный суп',         nameKg:'Сыр суп',              description:'Суп с сыром и овощами',                    descriptionKg:'Сыр жана жашылчалар менен суп',             price:235, image:'./Menu/СырныйСуп.webp',        category:'first',    ingredients:['Сыр','Картофель','Морковь','Лук'],              ingredientsKg:['Сыр','Картөшкө','Сабиз','Пияз'] },
  { id:10, name:'Суп с фрикадельками',nameKg:'Фрикаделькалуу суп',   description:'Суп с мясными фрикадельками',               descriptionKg:'Эт фрикаделькалары менен суп',             price:235, image:'./Menu/Суп с фрикадельками.webp', category:'first', ingredients:['Фрикадельки','Картофель','Морковь','Лук'],     ingredientsKg:['Фрикадельки','Картөшкө','Сабиз','Пияз'] },
  { id:11, name:'Солянка',            nameKg:'Солянка',              description:'Мясная солянка с овощами',                 descriptionKg:'Жашылчалар менен эт солянкасы',            price:205, image:'./Menu/Солянка.webp',          category:'first',    ingredients:['Мясо','Огурцы','Оливки','Лук'],                ingredientsKg:['Эт','Бадыраң','Оливки','Пияз'] },
  { id:12, name:'Пельмени домашние',  nameKg:'Үй пельмени',          description:'Домашние пельмени с мясом',                descriptionKg:'Эт менен үй пельмени',                      price:225, image:'./Menu/Пельмени.webp',         category:'first',    ingredients:['Тесто','Фарш','Лук','Специи'],                 ingredientsKg:['Камыр','Фарш','Пияз','Азыктар'] },
  { id:13, name:'Ак Серке с фрикадельками', nameKg:'Ак Серке фрикаделькалар менен', description:'Суп Ак Серке с фрикадельками', descriptionKg:'Ак Серке суп фрикаделькалар менен', price:235, image:'./Menu/Ак Серке с фрикадельками.webp', category:'first', ingredients:['Фрикадельки','Картофель','Морковь','Лук'], ingredientsKg:['Фрикадельки','Картөшкө','Сабиз','Пияз'] },
  { id:14, name:'Чечевичный суп',     nameKg:'Чечевичный суп',       description:'Суп из чечевицы с овощами',                descriptionKg:'Жашылчалар менен чечевица суп',            price:195, image:'./Menu/Чечевичный суп.webp',  category:'first',    ingredients:['Чечевица','Картофель','Морковь','Лук'],         ingredientsKg:['Чечевица','Картөшкө','Сабиз','Пияз'] },
  // ВТОРЫЕ БЛЮДА
  { id:15, name:'Манты',              nameKg:'Манты',                description:'Паровые манты с мясом',                    descriptionKg:'Эт менен буу манты',                        price:240, image:'./Menu/Манты.webp',           category:'second',   ingredients:['Тесто','Мясо','Лук','Специи'],                 ingredientsKg:['Камыр','Эт','Пияз','Азыктар'] },
  { id:16, name:'Котлеты',            nameKg:'Котлеталар',           description:'Мясные котлеты с гарниром',                descriptionKg:'Гарнир менен эт котлеталары',               price:220, image:'./Menu/мясные котлеты.webp', category:'second',   ingredients:['Фарш','Лук','Яйцо','Хлеб'],                   ingredientsKg:['Фарш','Пияз','Жумуртка','Нан'] },
  { id:17, name:'Тефтели',            nameKg:'Тефтель',              description:'Мясные тефтели в соусе',                   descriptionKg:'Соустагы эт тефтель',                       price:220, image:'./Menu/мясные тефтели.webp', category:'second',   ingredients:['Фарш','Рис','Лук','Соус'],                     ingredientsKg:['Фарш','Күрүч','Пияз','Соус'] },
  { id:18, name:'Бифштекс',           nameKg:'Бифштекс',             description:'Сочный бифштекс из говядины',              descriptionKg:'Жылкы этинен шырындуу бифштекс',            price:230, image:'./Menu/бифштекс.webp',        category:'second',   ingredients:['Говядина','Специи','Масло'],                   ingredientsKg:['Жылкы эти','Азыктар','Май'] },
  { id:19, name:'Зразы',              nameKg:'Зразы',                description:'Мясные зразы с начинкой',                  descriptionKg:'Начинка менен эт зразы',                    price:240, image:'./Menu/Зразы.webp',          category:'second',   ingredients:['Мясо','Картофель','Лук','Яйцо'],               ingredientsKg:['Эт','Картөшкө','Пияз','Жумуртка'] },
  { id:20, name:'Лагман уйгурский',   nameKg:'Уйгур лагманы',        description:'Уйгурский лагман с мясом и овощами',       descriptionKg:'Эт жана жашылчалар менен уйгур лагманы',   price:260, image:'./Menu/Уйгур.webp',          category:'second',   ingredients:['Лапша','Мясо','Перец','Морковь','Лук'],        ingredientsKg:['Лапша','Эт','Мурч','Сабиз','Пияз'] },
  { id:21, name:'Лагман жареный',     nameKg:'Куурулган лагман',     description:'Жареный лагман с овощами',                 descriptionKg:'Жашылчалар менен куурулган лагман',         price:260, image:'./Menu/Жаре.webp',           category:'second',   ingredients:['Лапша','Мясо','Перец','Морковь','Лук'],        ingredientsKg:['Лапша','Эт','Мурч','Сабиз','Пияз'] },
  { id:22, name:'Гуляш',              nameKg:'Гуляш',                description:'Гуляш из говядины с овощами',              descriptionKg:'Жашылчалар менен жылкы эти гуляш',         price:300, image:'./Menu/гуляш из говядины.webp', category:'second', ingredients:['Говядина','Картофель','Морковь','Лук','Соус'], ingredientsKg:['Жылкы эти','Картөшкө','Сабиз','Пияз','Соус'] },
  { id:23, name:'Мясо по-королевски', nameKg:'Королдук эти',         description:'Мясо по-королевски с сыром',               descriptionKg:'Сыр менен королдук эт',                    price:270, image:'./Menu/мясо по королевски.webp', category:'second', ingredients:['Мясо','Сыр','Помидоры','Зелень'],           ingredientsKg:['Эт','Сыр','Помидор','Жашылча'] },
  // ЗАКАЗНЫЕ
  { id:24, name:'Мясо по-деревенски (стейк говядина)', nameKg:'Айылдык эти (стейк)', description:'Стейк говядины по-деревенски', descriptionKg:'Айылдык жылкы эти стейк', price:610, image:'./Menu/Мясо.webp', category:'special', ingredients:['Говядина','Специи','Масло'], ingredientsKg:['Жылкы эти','Азыктар','Май'] },
  { id:25, name:'Стейк форель (3 шт.)', nameKg:'Форель стейк (3 дөн)', description:'Стейки форели, 3 шт.', descriptionKg:'Форель стейктери, 3 дөн', price:610, image:'./Menu/стейк форель.webp', category:'special', ingredients:['Форель','Специи','Масло'], ingredientsKg:['Форель','Азыктар','Май'] },
  { id:26, name:'Стейк форель (2 шт.)', nameKg:'Форель стейк (2 дөн)', description:'Стейки форели, 2 шт.', descriptionKg:'Форель стейктери, 2 дөн', price:510, image:'./Menu/стейк форель.webp', category:'special', ingredients:['Форель','Специи','Масло'], ingredientsKg:['Форель','Азыктар','Май'] },
  { id:27, name:'Адана кебаб', nameKg:'Адана кебаб', description:'Адана кебаб на шпажках с гарниром и салатом', descriptionKg:'Гарнир жана салат менен шпажкаларда адана кебаб', price:290, image:'./Menu/адана кебаб.webp', category:'special', ingredients:['Мясо','Специи','Гарнир','Салат'], ingredientsKg:['Эт','Азыктар','Гарнир','Салат'] },
  { id:28, name:'Турецкий кебаб', nameKg:'Түрк кебабы', description:'Турецкий кебаб в лаваше', descriptionKg:'Лавашта түрк кебабы', price:280, image:'./Menu/turk.webp', category:'special', ingredients:['Мясо','Лаваш','Овощи'], ingredientsKg:['Эт','Лаваш','Жашылчалар'] },
  { id:29, name:'Бейти кебаб', nameKg:'Бейти кебаб', description:'Бейти кебаб в лаваше с плавленым сыром', descriptionKg:'Лавашта эритилген сыр менен бейти кебаб', price:330, image:'./Menu/Бейти кебаб.webp', category:'special', ingredients:['Мясо','Лаваш','Сыр'], ingredientsKg:['Эт','Лаваш','Сыр'] },
  { id:30, name:'Лазуро', nameKg:'Лазуро', description:'Жареное мясо с овощами', descriptionKg:'Жашылчалар менен куурулган эт', price:280, image:'./Menu/лазуро.webp', category:'special', ingredients:['Мясо','Овощи','Масло'], ingredientsKg:['Эт','Жашылчалар','Май'] },
  { id:31, name:'Бризоль', nameKg:'Бризоль', description:'Бризоль из мяса', descriptionKg:'Эттен бризоль', price:265, image:'./Menu/БризольЗаказное Бризоль Бризоль из мяса.webp', category:'special', ingredients:['Мясо','Специи','Масло'], ingredientsKg:['Эт','Азыктар','Май'] },
  { id:32, name:'Мясо в горшочке', nameKg:'Кыштектеги эт', description:'Мясо в горшочке с помидорами, грибами и сыром', descriptionKg:'Помидор, козу карын жана сыр менен кыштектеги эт', price:290, image:'./Menu/мясо в горшочке.webp', category:'special', ingredients:['Мясо','Помидоры','Грибы','Сыр'], ingredientsKg:['Эт','Помидор','Козу карын','Сыр'] },
  { id:33, name:'Куурдак', nameKg:'Куурдак', description:'Куурдак из говядины и баранины', descriptionKg:'Жылкы эти жана кой этинен куурдак', price:490, image:'./Menu/Куурдак.webp', category:'special', ingredients:['Говядина','Баранина','Картофель','Лук'], ingredientsKg:['Жылкы эти','Кой эти','Картөшкө','Пияз'] },
  { id:34, name:'Курица в кисло-сладком соусе', nameKg:'Кышкыл-таттуу соустагы тоок', description:'Курица в кисло-сладком соусе', descriptionKg:'Кышкыл-таттуу соустагы тоок', price:290, image:'./Menu/Крк.webp', category:'special', ingredients:['Курица','Соус','Овощи'], ingredientsKg:['Тоок','Соус','Жашылчалар'] },
  { id:35, name:'Фрикассе', nameKg:'Фрикассе', description:'Фрикассе из курицы', descriptionKg:'Тооктон фрикассе', price:290, image:'./Menu/Фрикасе.webp', category:'special', ingredients:['Курица','Сливки','Овощи'], ingredientsKg:['Тоок','Каймак','Жашылчалар'] },
  { id:36, name:'Мясо фирменное', nameKg:'Фирмалык эт', description:'Фирменное мясо кафе Cholpon', descriptionKg:'Фирмалык эт', price:460, image:'./Menu/фирменное мясо.webp', category:'special', ingredients:['Мясо','Специи','Соус'], ingredientsKg:['Эт','Азыктар','Соус'] },
  { id:37, name:'Плов 1 кг', nameKg:'Плов 1 кг', description:'Плов 1 кг, заказ заранее', descriptionKg:'Плов 1 кг, алдын ала заказ', price:2200, image:'./Menu/Плов.webp', category:'special', ingredients:['Рис','Мясо','Морковь','Лук','Специи'], ingredientsKg:['Күрүч','Эт','Сабиз','Пияз','Азыктар'] },
  { id:38, name:'Казан кебаб', nameKg:'Казан кебабы', description:'Казан кебаб', descriptionKg:'Казан кебабы', price:320, image:'./Menu/Казан кебаб.webp', category:'special', ingredients:['Мясо','Картофель','Лук','Специи'], ingredientsKg:['Эт','Картөшкө','Пияз','Азыктар'] },
  { id:39, name:'Хачапури', nameKg:'Хачапури', description:'Хачапури с сыром', descriptionKg:'Сыр менен хачапури', price:460, image:'./Menu/Хачапури.webp', category:'special', ingredients:['Тесто','Сыр','Масло'], ingredientsKg:['Камыр','Сыр','Май'] },
  { id:40, name:'Фетучини с курицей', nameKg:'Тоок менен фетучини', description:'Фетучини с курицей', descriptionKg:'Тоок менен фетучини', price:390, image:'./Menu/Фетучини с курицей.webp', category:'special', ingredients:['Фетучини','Курица','Сливки','Сыр'], ingredientsKg:['Фетучини','Тоок','Каймак','Сыр'] },
  // САЛАТЫ
  { id:41, name:'Греческий', nameKg:'Грек', description:'Греческий салат с маслом', descriptionKg:'Май менен грек салаты', price:225, image:'./Menu/Греческий.webp', category:'salad', ingredients:['Помидоры','Огурцы','Сыр фета','Масло'], ingredientsKg:['Помидор','Бадыраң','Фета сыры','Май'] },
  { id:42, name:'Столичный', nameKg:'Борбордук', description:'Столичный салат с мясом', descriptionKg:'Эт менен борбордук салат', price:250, image:'./Menu/Столичный.webp', category:'salad', ingredients:['Мясо','Корнишоны','Грибы','Лук','Масло'], ingredientsKg:['Эт','Корнишон','Козу карын','Пияз','Май'] },
  { id:43, name:'Восточный', nameKg:'Чыгыштык', description:'Восточный салат с овощами и мясом', descriptionKg:'Жашылчалар жана эт менен чыгыштык салат', price:250, image:'./Menu/Восточный.webp', category:'salad', ingredients:['Помидоры','Огурцы','Мясо','Лук','Кабачки','Баклажан'], ingredientsKg:['Помидор','Бадыраң','Эт','Пияз','Кабачки','Баклажан'] },
  { id:44, name:'Китайский острый', nameKg:'Кытайлык ачтуу', description:'Острый китайский салат', descriptionKg:'Ачтуу кытай салаты', price:240, image:'./Menu/Китайский.webp', category:'salad', ingredients:['Помидоры','Огурцы','Мясо','Лук','Морковь','Перец'], ingredientsKg:['Помидор','Бадыраң','Эт','Пияз','Сабиз','Мурч'] },
  { id:45, name:'Гасконский', nameKg:'Гаскон', description:'Гасконский салат с копченой окорочкой', descriptionKg:'Копченка менен гаскон салаты', price:230, image:'./Menu/Госконский.webp', category:'salad', ingredients:['Помидоры','Корнишоны','Опята','Копченая окорочка'], ingredientsKg:['Помидор','Корнишон','Опята','Копченка'] },
  { id:46, name:'Витаминка', nameKg:'Витаминка', description:'Витаминный салат с овощами', descriptionKg:'Жашылчалар менен витамин салат', price:195, image:'./Menu/Витаминка.webp', category:'salad', ingredients:['Свекла','Колбаска','Кукуруза','Зелень','Морковь'], ingredientsKg:['Кызылча','Колбаса','Жүгөрү','Жашылча','Сабиз'] },
  { id:47, name:'Овощной микс', nameKg:'Жашылча микси', description:'Микс овощного салата', descriptionKg:'Жашылча салат микси', price:235, image:'./Menu/Овощной микс.webp', category:'salad', ingredients:['Цветная капуста','Брокколи','Овощи'], ingredientsKg:['Түстүү капуста','Брокколи','Жашылчалар'] },
  { id:48, name:'Свежий', nameKg:'Жаңы', description:'Свежий овощной салат', descriptionKg:'Жаңы жашылча салаты', price:130, image:'./Menu/Свежий.webp', category:'salad', ingredients:['Помидоры','Огурцы','Лук','Масло'], ingredientsKg:['Помидор','Бадыраң','Пияз','Май'] },
  { id:49, name:'Фунчоза', nameKg:'Фунчоза', description:'Салат с фунчозой, мясом и овощами', descriptionKg:'Фунчоза, эт жана жашылчалар менен салат', price:230, image:'./Menu/Фунчеза.webp', category:'salad', ingredients:['Мясо','Овощи','Фунчоза'], ingredientsKg:['Эт','Жашылчалар','Фунчоза'] },
  { id:50, name:'Нарезка фирменная', nameKg:'Фирмалык нарезка', description:'Фирменная овощная нарезка', descriptionKg:'Фирмалык жашылча нарезкасы', price:350, image:'./Menu/Нарезка.webp', category:'salad', ingredients:['Огурцы','Помидоры','Квашеная капуста','Лук'], ingredientsKg:['Бадыраң','Помидор','Кычкыл капуста','Пияз'] },
  { id:51, name:'Воздушный', nameKg:'Аба', description:'Воздушный салат с майонезом', descriptionKg:'Майонез менен аба салат', price:220, image:'./Menu/Воздушный салат.webp', category:'salad', ingredients:['Басай','Охотница','Яйцо','Чипсы','Майонез'], ingredientsKg:['Басай','Охотница','Жумуртка','Чипсы','Майонез'] },
  { id:52, name:'Цезарь с курицей', nameKg:'Тоок менен Цезарь', description:'Цезарь с курицей', descriptionKg:'Тоок Цезарь', price:245, image:'./Menu/Цезарь с курицей.webp', category:'salad', ingredients:['Курица','Салат','Сыр','Крутоны','Майонез'], ingredientsKg:['Тоок','Салат','Сыр','Крутон','Майонез'] },
  { id:53, name:'Гнездо кукушки', nameKg:'Кукушка уясы', description:'Гнездо кукушки с майонезом', descriptionKg:'Майонез менен кукушка уясы', price:240, image:'./Menu/Гнездо кукушки .webp', category:'salad', ingredients:['Копченое мясо','Пай','Кукуруза','Сыр','Майонез'], ingredientsKg:['Копченка','Пай','Жүгөрү','Сыр','Майонез'] },
  { id:54, name:'Мерло', nameKg:'Мерло', description:'Мерло салат с майонезом', descriptionKg:'Майонез менен мерло салат', price:210, image:'./Menu/Мерло.webp', category:'salad', ingredients:['Омлет','Горох','Кукуруза','Курица','Майонез'], ingredientsKg:['Омлет','Буурчак','Жүгөрү','Тоок','Майонез'] },
  { id:55, name:'Салат с грибами', nameKg:'Козу карын менен салат', description:'Салат с грибами и майонезом', descriptionKg:'Майонез менен козу карын салат', price:245, image:'./Menu/Сгрибами.webp', category:'salad', ingredients:['Шампиньоны','Филе','Яйцо','Картофель пай','Майонез'], ingredientsKg:['Шампиньон','Филе','Жумуртка','Картөшкө пай','Майонез'] },
  { id:56, name:'Салат со свеклой', nameKg:'Кызылча менен салат', description:'Салат со свеклой и майонезом', descriptionKg:'Майонез менен кызылча салат', price:235, image:'./Menu/Салат со свеклой.webp', category:'salad', ingredients:['Свекла','Брокколи','Творожный сыр','Орех','Майонез'], ingredientsKg:['Кызылча','Брокколи','Творожный сыр','Орех','Майонез'] },
  { id:57, name:'Охотница', nameKg:'Охотница', description:'Охотница салат с майонезом', descriptionKg:'Майонез менен охотница салат', price:250, image:'./Menu/Охотница.webp', category:'salad', ingredients:['Охотница','Корнишоны','Черри','Шампиньоны','Орешки','Майонез'], ingredientsKg:['Охотница','Корнишон','Черри','Шампиньон','Орех','Майонез'] },
  { id:58, name:'Баклажан с овощами', nameKg:'Жашылчалуу баклажан', description:'Баклажан с овощами и майонезом', descriptionKg:'Майонез менен жашылчалуу баклажан', price:255, image:'./Menu/Баклажан с овощами.webp', category:'salad', ingredients:['Баклажаны','Перец','Помидоры','Лук','Майонез'], ingredientsKg:['Баклажан','Мурч','Помидор','Пияз','Майонез'] },
  { id:59, name:'Фирменный баклажан', nameKg:'Фирмалык баклажан', description:'Фирменный баклажан в панировке', descriptionKg:'Панировкадагы фирмалык баклажан', price:255, image:'./Menu/Баклажан в панировке.webp', category:'salad', ingredients:['Баклажан','Панировка','Майонез'], ingredientsKg:['Баклажан','Панировка','Майонез'] },
  { id:60, name:'Баклажан микс', nameKg:'Баклажан микси', description:'Микс баклажанов с майонезом', descriptionKg:'Майонез менен баклажан микси', price:240, image:'./Menu/Баклажан микс.webp', category:'salad', ingredients:['Баклажан','Майонез'], ingredientsKg:['Баклажан','Майонез'] },
  { id:61, name:'Курица с ореховым соусом', nameKg:'Орех соусу менен тоок', description:'Курица с ореховым соусом', descriptionKg:'Орех соусу менен тоок', price:240, image:'./Menu/Ореховомсоус.webp', category:'salad', ingredients:['Курица','Ореховый соус','Майонез'], ingredientsKg:['Тоок','Орех соусу','Майонез'] },
  // НАПИТКИ (с вариантами)
  { id:62, name:'Компот', nameKg:'Компот', description:'Компот из сухофруктов', descriptionKg:'Куру жемиштерден компот', image:'./Menu/Компот.webp', category:'drink', variants:[{label:'1 л',price:100},{label:'1.5 л',price:140},{label:'2 л',price:170}] },
  { id:63, name:'Кола', nameKg:'Кола', description:'Coca-Cola', descriptionKg:'Кола', image:'./Menu/Кола.webp', category:'drink', variants:[{label:'1 л',price:120},{label:'1.5 л',price:170},{label:'2 л',price:200}] },
  { id:64, name:'Фанта', nameKg:'Фанта', description:'Fanta', descriptionKg:'Фанта', image:'./Menu/Фанта.webp', category:'drink', variants:[{label:'1 л',price:120},{label:'1.5 л',price:170},{label:'2 л',price:200}] },
  { id:65, name:'Любимый (сок)', nameKg:'Сүйүктүү (ширеп)', description:'Сок Любимый', descriptionKg:'Сүйүктүү ширеп', image:'./Menu/Любимый (сок).webp', category:'drink', variants:[{label:'1 л',price:150},{label:'2 л',price:270}] },
  // ФАСТ-ФУД
  { id:66, name:'Стрипсы корейские', nameKg:'Корей стрипсы', description:'Корейские куриные стрипсы', descriptionKg:'Корей тоок стрипсы', price:290, image:'./Menu/Стрипсы корейские.webp', category:'fastfood', ingredients:['Курица','Специи','Масло'], ingredientsKg:['Тоок','Азыктар','Май'] },
  { id:67, name:'KFC + фри', nameKg:'KFC + фри', description:'Курица KFC с картошкой фри', descriptionKg:'KFC тоок фри картөшкө менен', image:'./Menu/kfxfree.webp', category:'fastfood', variants:[{label:'20 шт',price:310},{label:'10 шт',price:260}] },
  { id:68, name:'Шаурма', nameKg:'Шаурма', description:'Классическая шаурма', descriptionKg:'Классикалык шаурма', price:235, image:'./Menu/Шаурма Классическая шаурма.webp', category:'fastfood', ingredients:['Лаваш','Мясо','Овощи','Соус'], ingredientsKg:['Лаваш','Эт','Жашылчалар','Соус'] },
  { id:69, name:'Шаурма с курицей', nameKg:'Тоок менен шаурма', description:'Шаурма с курицей', descriptionKg:'Тоок менен шаурма', price:260, image:'./Menu/Шаурма куриная.webp', category:'fastfood', ingredients:['Лаваш','Курица','Овощи','Соус'], ingredientsKg:['Лаваш','Тоок','Жашылчалар','Соус'] },
  { id:70, name:'Шаурма сырная', nameKg:'Сыр шаурма', description:'Шаурма с сыром', descriptionKg:'Сыр менен шаурма', price:260, image:'./Menu/Шаурма сырная.webp', category:'fastfood', ingredients:['Лаваш','Мясо','Сыр','Овощи','Соус'], ingredientsKg:['Лаваш','Эт','Сыр','Жашылчалар','Соус'] },
  { id:71, name:'Пицца «Пепперони»', nameKg:'Пицца «Пепперони»', description:'Пицца Пепперони', descriptionKg:'Пепперони пиццасы', price:550, image:'./Menu/Пицца Пепперони.webp', category:'fastfood', ingredients:['Тесто','Сыр','Пепперони','Соус'], ingredientsKg:['Камыр','Сыр','Пепперони','Соус'] },
  { id:72, name:'Пицца «Мясная»', nameKg:'Пицца «Эттүү»', description:'Мясная пицца', descriptionKg:'Эттүү пицца', price:590, image:'./Menu/Пицца Мясная.webp', category:'fastfood', ingredients:['Тесто','Сыр','Мясо','Соус'], ingredientsKg:['Камыр','Сыр','Эт','Соус'] },
  { id:73, name:'Пицца «Курица с грибами»', nameKg:'Пицца «Тоок козу карын»', description:'Пицца с курицей и грибами', descriptionKg:'Тоок жана козу карын менен пицца', price:590, image:'./Menu/Пицца Курица с грибами.webp', category:'fastfood', ingredients:['Тесто','Сыр','Курица','Грибы','Соус'], ingredientsKg:['Камыр','Сыр','Тоок','Козу карын','Соус'] },
  { id:74, name:'Пицца «Цезарь»', nameKg:'Пицца «Цезарь»', description:'Пицца Цезарь', descriptionKg:'Цезарь пиццасы', price:570, image:'./Menu/Пицца Цезарь.webp', category:'fastfood', ingredients:['Тесто','Сыр','Курица','Салат','Соус'], ingredientsKg:['Камыр','Сыр','Тоок','Салат','Соус'] },
  { id:75, name:'Рамен', nameKg:'Рамён', description:'Японский рамён', descriptionKg:'Жапон рамёну', price:260, image:'./Menu/Рамен.webp', category:'fastfood', ingredients:['Лапша','Бульон','Мясо','Овощи'], ingredientsKg:['Лапша','Бульон','Эт','Жашылчалар'] },
  // ДЕСЕРТЫ
  { id:76, name:'Сан-Себастьян', nameKg:'Сан-Себастьян', description:'Десерт Сан-Себастьян', descriptionKg:'Сан-Себастьян десерти', price:360, image:'./Menu/Десерт Сан-Себастьян.webp', category:'dessert', ingredients:['Тесто','Крем','Фрукты'], ingredientsKg:['Камыр','Крем','Жемиштер'] },
  { id:77, name:'Чизкейк', nameKg:'Чизкейк', description:'Классический чизкейк', descriptionKg:'Классикалык чизкейк', price:370, image:'./Menu/Чизкейк.webp', category:'dessert', ingredients:['Сыр','Тесто','Крем'], ingredientsKg:['Сыр','Камыр','Крем'] },
  { id:78, name:'Три шоколада', nameKg:'Үч шоколад', description:'Торт три шоколада', descriptionKg:'Үч шоколад торт', price:280, image:'./Menu/Три.webp', category:'dessert', ingredients:['Шоколад','Тесто','Крем'], ingredientsKg:['Шоколад','Камыр','Крем'] },
  { id:79, name:'Трайфл макс', nameKg:'Трайфл макс', description:'Десерт Трайфл макс', descriptionKg:'Трайфл макс десерти', price:290, image:'./Menu/Трайфл макс.webp', category:'dessert', ingredients:['Бисквит','Крем','Фрукты'], ingredientsKg:['Бисквит','Крем','Жемиштер'] },
  { id:80, name:'Пирог', nameKg:'Пирог', description:'Свежий пирог', descriptionKg:'Жаңы пирог', price:50, image:'./Menu/ПИрог.webp', category:'dessert', ingredients:['Тесто','Начинка'], ingredientsKg:['Камыр','Начинка'] },
  { id:81, name:'Мини самсы', nameKg:'Мини кум самсы', description:'Мини песочные самсы', descriptionKg:'Мини кум самсы', price:55, image:'./Menu/Песоксамсы.webp', category:'fastfood', ingredients:['Тесто','Начинка'], ingredientsKg:['Камыр','Начинка'] },
  { id:82, name:'Хлеб', nameKg:'Нан', description:'Свежий хлеб', descriptionKg:'Жаңы нан', price:45, image:'./Menu/нан.webp', category:'fastfood', ingredients:['Мука','Вода','Дрожжи'], ingredientsKg:['Ун','Суу','Ачыткы'] },
  { id:83, name:'Чай', nameKg:'Чай', description:'Горячий чай', descriptionKg:'Ысык чай', price:20, image:'./Menu/чай.webp', category:'fastfood', ingredients:['Чай','Вода'], ingredientsKg:['Чай','Суу'] },
  { id:84, name:'Боорсок + каймак', nameKg:'Боорсок + каймак', description:'Боорсок с каймаком', descriptionKg:'Каймак менен боорсок', image:'./Menu/Борскок.webp', category:'dessert', variants:[{label:'1 кг',price:170},{label:'2 кг',price:340}] }
];

// ============================================
// Переводы интерфейса
// ============================================

const translations = {
    ru: {
        'nav-menu': 'Меню',
        'nav-about': 'О нас',
        'nav-reviews': 'Отзывы',
        'nav-contact': 'Контакты',
        'about-title': 'Добро пожаловать в кафе "Cholpon"',
        'about-desc': 'Уютное кафе в центре Кара-Куля. Вкусная домашняя еда каждый день.',
        'about-text-1': 'Кафе "Cholpon" - это уютное место в городе Кара-Куль, где гостей встречают с теплом и заботой.',
        'about-text-2': 'У нас можно приятно провести время с семьёй и друзьями, пообедать, поужинать, или отметить важное событие.',
        'about-text-3': 'Кафе "Cholpon" - место, куда хочется возвращаться снова и снова.',
        'menu-title': 'Меню',
        'contact-title': 'Контакты',
        'contact-location': 'Кара-Куль',
        'contact-hours': '10:00 - 22:00, без выходных',
        'footer-text': '© 2025 Кафе Cholpon. Все права защищены.',
        'cart-title': 'Корзина',
        'cart-empty': 'Корзина пуста',
        'cart-total': 'Итого:',
        'currency': 'сом',
        'cart-clear': 'Очистить корзину',
        'cart-checkout': 'Оформить заказ',
        'order-title': 'Оформление заказа',
        'order-name': 'Имя',
        'order-phone': 'Телефон',
        'order-phone-hint': 'Введите номер без 0, например: 998 25 20 23',
        'order-comment': 'Комментарий к заказу (необязательно)',
        'order-summary': 'Состав заказа:',
        'order-cancel': 'Отмена',
        'order-submit': 'Отправить заказ',
        'add-to-cart': 'В корзину',
        'remove': 'Удалить',
        'details': 'Подробнее',
        'filter-all': 'Все',
        'filter-shashlik': 'Шашлыки',
        'filter-first': 'Первые блюда',
        'filter-second': 'Вторые блюда',
        'filter-special': 'Заказные блюда',
        'filter-salad-oil': 'Салаты заправленные маслом',
        'filter-salad-mayo': 'Салаты заправленные майонезом',
        'filter-drink': 'Напитки',
        'filter-fastfood': 'Фаст фуд',
        'filter-dessert': 'Десерты',
        'dish-ingredients': 'Ингредиенты:',
        'reviews-title': 'Отзывы',
        'review-form-title': 'Оставить отзыв',
        'review-name': 'Ваше имя',
        'review-rating': 'Оценка',
        'review-comment': 'Комментарий',
        'review-submit': 'Отправить отзыв',
        'reviews-empty': 'Пока нет отзывов. Будьте первым!',
        'view-menu': 'Посмотреть меню',
        'payment-method-label': 'Способ оплаты',
        'payment-cash': 'Наличными',
        'payment-card': 'Картой',
        'payment-mbank': 'MBank',
        'order-type-title': 'Как вы хотите заказать?',
        'order-type-cafe': 'Я в кафе',
        'order-type-pickup': 'Самовывоз',
        'order-type-delivery': 'Доставка',
        'order-type-browse': 'Просто посмотреть меню',
        'table-select-title': 'Выберите номер стола',
        'order-address': 'Адрес доставки',
        'delivery-form-title': 'Данные для доставки',
        'back': 'Назад',
        'continue': 'Продолжить',
        'adding': 'Добавление…',
        'added': 'Добавлено:',
        'order_sent_success': '✅ Заказ отправлен! Мы свяжемся с вами в ближайшее время.',
        'min_order_msg': 'Минимальная сумма для доставки {min} сом. Текущая сумма: {current} сом.',
        'fill_required': 'Заполните все обязательные поля',
        'confirm_clear_cart': 'Очистить корзину?',
        'cart_empty_msg': 'Корзина пуста. Добавьте блюда в корзину.',
        'invalid_phone': 'Введите корректный номер телефона\nПример: 998 25 20 23',
        'review_thanks': 'Спасибо за ваш отзыв!',
        'order_error': '❌ Произошла ошибка: {msg}. Пожалуйста, попробуйте еще раз.'
    },
    kg: {
        'nav-menu': 'Меню',
        'nav-about': 'Биз жөнүндө',
        'nav-reviews': 'Пикирлер',
        'nav-contact': 'Байланыш',
        'about-title': '"Cholpon" кафесине кош келиңиз',
        'about-desc': 'Кара-Куль шаарынын борборундагы жайкы кафе.',
        'about-text-1': '"Cholpon" кафеси - Кара-Көл шаарындагы жайлуу жер.',
        'about-text-2': 'Бизде үй-бүлө менен жана достор менен жакшы убакыт өткөрүүгө болот.',
        'about-text-3': '"Cholpon" кафеси - кайра-кайра кайтууну каалаган жер.',
        'menu-title': 'Меню',
        'contact-title': 'Байланыш',
        'contact-location': 'Кара-Көл',
        'contact-hours': '10:00 - 22:00, дем алыш жок',
        'footer-text': '© 2025 Cholpon кафеси. Бардык укуктар корголгон.',
        'cart-title': 'Себет',
        'cart-empty': 'Себет бош',
        'cart-total': 'Баары:',
        'currency': 'сом',
        'cart-clear': 'Себетти тазалоо',
        'cart-checkout': 'Заказ берүү',
        'order-title': 'Заказ берүү',
        'order-name': 'Аты',
        'order-phone': 'Телефон',
        'order-phone-hint': 'Номурду 0сүз жазыңыз, мисалы: 998 25 20 23',
        'order-comment': 'Заказга комментарий (милдеттүү эмес)',
        'order-summary': 'Заказдын курамы:',
        'order-cancel': 'Жокко чыгаруу',
        'order-submit': 'Заказды жөнөтүү',
        'add-to-cart': 'Себетке',
        'remove': 'Өчүрүү',
        'details': 'Кененирээк',
        'filter-all': 'Баары',
        'filter-shashlik': 'Шашлык',
        'filter-first': 'Биринчи тамактар',
        'filter-second': 'Экинчи тамактар',
        'filter-special': 'Заказдык тамактар',
        'filter-salad-oil': 'Салат май менен',
        'filter-salad-mayo': 'Салат майонез менен',
        'filter-drink': 'Суусундуктар',
        'filter-fastfood': 'Фаст фуд',
        'filter-dessert': 'Десерттер',
        'dish-ingredients': 'Курамы:',
        'reviews-title': 'Пикирлер',
        'review-form-title': 'Пикир калтыруу',
        'review-name': 'Атыңыз',
        'review-rating': 'Баалоо',
        'review-comment': 'Комментарий',
        'review-submit': 'Пикирди жөнөтүү',
        'reviews-empty': 'Азырынча пикирлер жок. Биринчи болуңуз!',
        'view-menu': 'Менюну көрүү',
        'payment-method-label': 'Төлөө ыкмасы',
        'payment-cash': 'Накта',
        'payment-card': 'Карта менен',
        'payment-mbank': 'MBank',
        'order-type-title': 'Кантип заказ бересиз?',
        'order-type-cafe': 'Мен кафедемин',
        'order-type-pickup': 'Өзүм алам',
        'order-type-delivery': 'Жеткирүү',
        'order-type-browse': 'Менюну гана көрүү',
        'table-select-title': 'Стол номурун тандаңыз',
        'order-address': 'Жеткирүү дареги',
        'delivery-form-title': 'Жеткирүү үчүн маалыматтар',
        'back': 'Артка',
        'continue': 'Улантуу',
        'adding': 'Кошулууда…',
        'added': 'Кошулду:',
        'order_sent_success': '✅ Заказ жөнөтүлдү! Биз жакынкы убакта сиз менен байланышабыз.',
        'min_order_msg': 'Доставка үчүн минималдуу сумма {min} сом. Учурдагы сумма: {current} сом.',
        'fill_required': 'Бардык милдеттүү талааларды толтуруңуз',
        'confirm_clear_cart': 'Себетти тазалоо?',
        'cart_empty_msg': 'Себет бош. Себетке тамак кошуңуз.',
        'invalid_phone': 'Туура телефон номурун киргизиңиз',
        'review_thanks': 'Пикириңиз үчүн рахмат!',
        'order_error': '❌ Ката кетти: {msg}. Сураныч, кайра аракет кылыңыз.'
    }
};

// Совместимость с существующей функцией t()
const i18n = translations;

// ── STATE ─────────────────────────────────────────────────
let lang = localStorage.getItem('lang') || 'ru';
let theme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
let cart = [];
let orderType = null;   // 'cafe' | 'pickup' | 'delivery' | 'browse'
let tableNum = null;
let deliveryInfo = null;
let activeCategory = 'all';
let slideIndex = 0;
let variantCb = null;
let activeDishId = null;

// ── HELPERS ───────────────────────────────────────────────
const $ = id => document.getElementById(id);
const t = key => i18n[lang]?.[key] ?? i18n.ru[key] ?? key;

function loadCart() {
  try { cart = JSON.parse(localStorage.getItem('cart')) || []; }
  catch { cart = []; }
}
function saveCart() {
  try { localStorage.setItem('cart', JSON.stringify(cart)); } catch { }
}

function formatPhone(input) {
  let v = input.value.replace(/\D/g, '').slice(0, 9);
  let f = v.slice(0, 3);
  if (v.length > 3) f += ' ' + v.slice(3, 5);
  if (v.length > 5) f += ' ' + v.slice(5, 7);
  if (v.length > 7) f += ' ' + v.slice(7, 9);
  input.value = f;
}

function isValidPhone(val) {
  return /^\d{9}$/.test(val.replace(/\s/g, ''));
}

function openModal(id) {
  const el = $(id);
  if (el) el.classList.add('open');
}
function closeModal(id) {
  const el = $(id);
  if (el) el.classList.remove('open');
}

function showToast(msg, ms = 3000) {
  const el = $('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._tid);
  el._tid = setTimeout(() => el.classList.remove('show'), ms);
}

function getCatLabel(cat) {
  const map = {
    first: { ru: 'Первые', kg: 'Биринчи' },
    second: { ru: 'Вторые', kg: 'Экинчи' },
    special: { ru: 'Заказное', kg: 'Заказ' },
    shashlik: { ru: 'Шашлык', kg: 'Кебаб' },
    salad: { ru: 'Салат', kg: 'Салат' },
    dessert: { ru: 'Десерт', kg: 'Десерт' },
    drink: { ru: 'Напиток', kg: 'Суусундук' },
    fastfood: { ru: 'Fast-Food', kg: 'Fast-Food' }
  };
  return map[cat]?.[lang] || '';
}

// ── THEME ─────────────────────────────────────────────────
function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  const moon = $('iconMoon');
  const sun  = $('iconSun');
  if (moon) moon.style.display = theme === 'dark' ? 'none' : '';
  if (sun)  sun.style.display  = theme === 'dark' ? '' : 'none';
}

// Слушаем если пользователь меняет тему в системе
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    theme = e.matches ? 'dark' : 'light';
    applyTheme();
  }
});

// ── LANGUAGE ──────────────────────────────────────────────
function applyLang() {
  document.documentElement.setAttribute('lang', lang);
  const toggle = $('langToggle');
  if (toggle) toggle.textContent = lang.toUpperCase();
  // update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const txt = t(key);
    if (txt && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') el.textContent = txt;
  });
  // update lang pills
  document.querySelectorAll('.lang-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.lang === lang);
  });
}

// ── CART LOGIC ────────────────────────────────────────────
function addItem(item, variant) {
  const cid = variant ? `${item.id}_${variant.label}` : String(item.id);
  const price = variant ? variant.price : item.price;
  const suffix = variant ? ` (${variant.label})` : '';
  const name = (lang === 'ru' ? item.name : (item.nameKg || item.name)) + suffix;

  const existing = cart.find(c => c.cid === cid);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ cid, id: item.id, name, price, image: item.image, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  renderMenu();
  showToast(`${t('toast-added')} ${name}`);
}

function increaseQty(cid) {
  const item = cart.find(c => c.cid === cid);
  if (item) { item.qty++; saveCart(); updateCartBadge(); renderMenu(); renderCartItems(); }
}
function decreaseQty(cid) {
  const item = cart.find(c => c.cid === cid);
  if (!item) return;
  item.qty--;
  if (item.qty <= 0) cart = cart.filter(c => c.cid !== cid);
  saveCart(); updateCartBadge(); renderMenu(); renderCartItems();
}
function removeItem(cid) {
  cart = cart.filter(c => c.cid !== cid);
  saveCart(); updateCartBadge(); renderMenu(); renderCartItems();
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  ['cartBadge', 'bottomBadge'].forEach(id => {
    const el = $(id);
    if (!el) return;
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function renderCartItems() {
  const wrap = $('cartItems');
  const empty = $('cartEmpty');
  const totWrap = $('cartTotalWrap');
  const totEl = $('cartTotalPrice');
  if (!wrap) return;

  if (cart.length === 0) {
    wrap.innerHTML = '';
    empty.style.display = '';
    totWrap.style.display = 'none';
    validateOrder();
    return;
  }

  empty.style.display = 'none';
  totWrap.style.display = '';
  wrap.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const sub = item.price * item.qty;
    total += sub;
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <img class="cart-row-img" src="${item.image}" alt="${item.name}" loading="lazy"
           onerror="this.src='${PLACEHOLDER}'">
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
      </div>
    `;
    wrap.appendChild(row);
  });

  totEl.textContent = `${total} ${t('currency')}`;
  validateOrder();
}

// ── MENU RENDER ───────────────────────────────────────────
function renderMenu() {
  const grid = $('menuGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const filtered = activeCategory === 'all'
    ? menuData
    : menuData.filter(i => i.category === activeCategory);

  filtered.forEach(item => grid.appendChild(createCard(item)));

  // IntersectionObserver lazy load
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const img = e.target;
          if (img.dataset.src) { img.src = img.dataset.src; delete img.dataset.src; }
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '200px 0px' });
    grid.querySelectorAll('img[data-src]').forEach(img => obs.observe(img));
  } else {
    grid.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src; delete img.dataset.src;
    });
  }
}

function createCard(item) {
  const card = document.createElement('div');
  card.className = 'menu-card';

  const name = lang === 'ru' ? item.name : (item.nameKg || item.name);
  const desc = lang === 'ru' ? item.description : (item.descriptionKg || item.description);
  const cat = getCatLabel(item.category);

  let priceStr;
  if (item.variants?.length) {
    const prices = item.variants.map(v => v.price);
    const mn = Math.min(...prices), mx = Math.max(...prices);
    priceStr = mn === mx ? `${mn}` : `${mn}–${mx}`;
  } else {
    priceStr = `${item.price}`;
  }

  const existing = !item.variants?.length && cart.find(c => c.id === item.id && c.cid === String(item.id));
  const qty = existing ? existing.qty : 0;

  card.innerHTML = `
    <div class="card-img-wrap">
      <img class="card-img" src="${PLACEHOLDER}" data-src="${item.image}"
           alt="${name}" loading="lazy" decoding="async"
           onerror="this.src='${PLACEHOLDER}';this.removeAttribute('data-src')">
      ${cat ? `<span class="card-badge">${cat}</span>` : ''}
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
               </div>`
    }
      </div>
    </div>
  `;

  card.addEventListener('click', e => {
    if (e.target.closest('.card-actions')) return;
    showDishDetail(item.id);
  });

  return card;
}

function handleAddToCart(id, e) {
  e.stopPropagation();
  const item = menuData.find(i => i.id === id);
  if (!item) return;
  if (item.variants?.length) {
    openVariantModal(item);
  } else {
    addItem(item, null);
  }
}

// ── DISH DETAIL ───────────────────────────────────────────
function showDishDetail(id) {
  const dish = menuData.find(i => i.id === id);
  if (!dish) return;
  activeDishId = id;

  const name = lang === 'ru' ? dish.name : (dish.nameKg || dish.name);
  const desc = lang === 'ru' ? dish.description : (dish.descriptionKg || dish.description);
  const ings = lang === 'ru' ? (dish.ingredients || []) : (dish.ingredientsKg || dish.ingredients || []);

  let priceText;
  if (dish.variants?.length) {
    priceText = `от ${Math.min(...dish.variants.map(v => v.price))} ${t('currency')}`;
  } else {
    priceText = `${dish.price} ${t('currency')}`;
  }

  $('dishModalTitle').textContent = name;
  $('dishName').textContent = name;
  $('dishDesc').textContent = desc || '';
  $('dishPrice').textContent = priceText;
  $('dishIngList').innerHTML = ings.map(i => `<li>${i}</li>`).join('');

  // Build slider
  const images = dish.images?.length ? dish.images : [dish.image];
  slideIndex = 0;
  const slider = $('dishSlider');
  const dots = $('slideDots');
  slider.innerHTML = '';
  dots.innerHTML = '';

  images.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide-item';
    slide.innerHTML = `<img src="${src}" alt="${name}" loading="lazy"
      onerror="this.src='${PLACEHOLDER}'"
      onclick="openLightbox('${src.replace(/'/g, "\\'")}','${name.replace(/'/g, "\\'")}')">`;
    slider.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = `slide-dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Фото ${i + 1}`);
    dot.addEventListener('click', () => { slideIndex = i; updateSlider(); });
    dots.appendChild(dot);
  });

  const hasMult = images.length > 1;
  $('slidePrev').style.display = hasMult ? '' : 'none';
  $('slideNext').style.display = hasMult ? '' : 'none';
  dots.style.display = hasMult ? '' : 'none';

  updateSlider();
  openModal('dishModal');
}

function updateSlider() {
  const slider = $('dishSlider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.slide-item');
  if (!slides.length) return;
  slideIndex = ((slideIndex % slides.length) + slides.length) % slides.length;
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  document.querySelectorAll('.slide-dot').forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}

// ── VARIANT MODAL ─────────────────────────────────────────
function openVariantModal(item) {
  const name = lang === 'ru' ? item.name : (item.nameKg || item.name);
  $('variantTitle').textContent = name;
  $('variantList').innerHTML = '';

  (item.variants || []).forEach(v => {
    const btn = document.createElement('button');
    btn.className = 'var-btn';
    btn.innerHTML = `<span class="var-label">${v.label}</span><span class="var-price">${v.price} ${t('currency')}</span>`;
    btn.addEventListener('click', () => {
      addItem(item, v);
      closeModal('variantModal');
    });
    $('variantList').appendChild(btn);
  });

  openModal('variantModal');
}

// ── ORDER FORM ────────────────────────────────────────────
function buildOrderSummary() {
  const el = $('orderSummary');
  if (!el) return;
  let html = '';
  let total = 0;
  cart.forEach(item => {
    const sub = item.price * item.qty;
    total += sub;
    html += `<div class="order-summary-row"><span>${item.name} × ${item.qty}</span><span>${sub} ${t('currency')}</span></div>`;
  });
  html += `<div class="order-summary-row"><span>${t('cart-total')}</span><span>${total} ${t('currency')}</span></div>`;
  el.innerHTML = html;
}

function validateOrder() {
  const btn = $('submitOrderBtn');
  if (!btn) return;
  const name = $('custName')?.value.trim();
  const phone = $('custPhone')?.value.replace(/\s/g, '');
  const pay = document.querySelector('input[name="payment"]:checked');
  const ok = cart.length > 0 && name?.length > 0 && isValidPhone(phone) && !!pay;
  btn.disabled = !ok;
  btn.classList.toggle('pulse', ok);
}

function showOrderForm() {
  if (cart.length === 0) { alert(t('alert-cart-empty')); return; }

  const orderForm = $('orderForm');
  if (orderForm) orderForm.reset();

  // Pre-fill from delivery info
  if (orderType === 'delivery' && deliveryInfo) {
    const n = $('custName'); const p = $('custPhone'); const a = $('custAddr');
    if (n) n.value = deliveryInfo.name || '';
    if (p) p.value = deliveryInfo.phone || '';
    if (a) a.value = deliveryInfo.address || '';
  }

  // Show/hide address field
  const af = $('addrField');
  if (af) af.style.display = orderType === 'delivery' ? '' : 'none';

  // Hide card option for delivery
  const pc = $('payCard');
  if (pc) pc.style.display = orderType === 'delivery' ? 'none' : '';

  // Reset mbank qr
  const qr = $('mbankQr');
  if (qr) qr.style.display = 'none';

  // Reset payment selection
  document.querySelectorAll('.pay-opt').forEach(o => o.classList.remove('selected'));
  document.querySelectorAll('input[name="payment"]').forEach(r => r.checked = false);

  buildOrderSummary();
  validateOrder();
  closeModal('cartModal');
  openModal('orderModal');
}

function buildOrderText(name, phone, comment, payment) {
  const title = lang === 'ru' ? 'Новый заказ — Кафе Cholpon' : 'Жаңы заказ — Cholpon кафе';
  let lines = `<b>🍽 ${title}</b>\n`;
  lines += `━━━━━━━━━━━━━━━━\n`;

  let total = 0;
  cart.forEach(item => {
    const sub = item.price * item.qty;
    total += sub;
    lines += `• ${item.name} × ${item.qty} — <b>${sub} ${t('currency')}</b>\n`;
  });

  lines += `━━━━━━━━━━━━━━━━\n`;
  lines += `💰 <b>${t('cart-total')} ${total} ${t('currency')}</b>\n`;
  lines += `━━━━━━━━━━━━━━━━\n`;
  lines += `👤 <b>${name}</b>\n`;
  lines += `📞 +996 ${phone}\n`;

  if (payment) {
    const pm = payment === 'cash' ? t('payment-cash') : payment === 'card' ? t('payment-card') : 'MBank';
    lines += `💳 ${pm}\n`;
  }

  if (orderType === 'cafe' && tableNum) lines += `📍 Стол №${tableNum}\n`;
  if (orderType === 'pickup') lines += `📍 ${lang === 'ru' ? 'Самовывоз' : 'Өзү алып кетүү'}\n`;
  if (orderType === 'delivery' && deliveryInfo?.address) {
    lines += `🚗 ${lang === 'ru' ? 'Доставка' : 'Жеткирүү'}: ${deliveryInfo.address}\n`;
  }
  if (comment?.trim()) lines += `\n📝 <i>${comment.trim()}</i>`;

  return lines;
}

// ── SEND TO TELEGRAM ─────────────────────────────────────
async function sendToTelegram(text) {
  // Проверяем что токен и chat_id заполнены
  if (!TG_BOT_TOKEN || TG_BOT_TOKEN === 'ТВОЙ_ТОКЕН_БОТА') {
    // Если нет Telegram, используем WhatsApp
    return false;
  }
  try {
    const url = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: text,
        parse_mode: 'HTML'
      })
    });
    const data = await res.json();
    return data.ok;
  } catch (err) {
    console.error('Telegram error:', err);
    return false;
  }
}

async function submitOrder(e) {
  e.preventDefault();

  const name = $('custName')?.value.trim();
  const rawPhone = $('custPhone')?.value.trim();
  const phone = rawPhone.replace(/\s/g, '');
  const comment = $('custComment')?.value.trim() || '';
  const payment = document.querySelector('input[name="payment"]:checked')?.value || '';
  const addr = $('custAddr')?.value.trim() || '';

  if (!name) { alert(t('alert-fill-fields')); return; }
  if (!isValidPhone(phone)) { alert(t('alert-invalid-phone')); return; }
  if (!cart.length) { alert(t('alert-cart-empty')); return; }

  if (orderType === 'delivery') {
    if (!deliveryInfo) deliveryInfo = {};
    deliveryInfo.address = addr || deliveryInfo.address;
  }

  // Блокируем кнопку на время отправки
  const btn = $('submitOrderBtn');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Отправляем...'; }

  const text = buildOrderText(name, rawPhone, comment, payment);
  const ok = await sendToTelegram(text);

  if (ok) {
    cart = [];
    saveCart();
    updateCartBadge();
    renderMenu();
    closeModal('orderModal');
    alert(t('alert-order-sent'));
  } else {
    // Если Telegram не сработал, отправляем через WhatsApp
    const waText = buildOrderText(name, rawPhone, comment, payment).replace(/<[^>]*>/g, ''); // убираем HTML теги
    window.open(`https://wa.me/${CAFE_WA}?text=${encodeURIComponent(waText)}`, '_blank');
    
    cart = [];
    saveCart();
    updateCartBadge();
    renderMenu();
    closeModal('orderModal');
    alert(t('alert-order-sent'));
  }

  if (btn) { btn.disabled = false; btn.textContent = t('order-submit'); }
}

// ── LIGHTBOX ──────────────────────────────────────────────
function openLightbox(src, alt) {
  const lb = $('lightbox');
  const img = $('lightboxImg');
  if (!lb || !img) return;
  img.src = src;
  img.alt = alt || '';
  lb.classList.add('open');
}
function closeLightbox() {
  const lb = $('lightbox');
  const img = $('lightboxImg');
  if (!lb || !img) return;
  lb.classList.remove('open');
  img.src = '';
}

// ── ORDER TYPE FLOW ───────────────────────────────────────
function lockScroll() { document.body.classList.add('locked'); }
function unlockScroll() { document.body.classList.remove('locked'); }

function setOrderType(type) {
  orderType = type;
  closeModal('orderTypeModal');
  closeModal('tableModal');
  closeModal('deliveryModal');
  unlockScroll();
  document.body.classList.toggle('browse', type === 'browse');
}

function initOrderTypeModal() {
  // Check URL for table param
  try {
    const p = new URLSearchParams(window.location.search);
    const tp = p.get('table');
    if (tp) {
      const n = parseInt(tp, 10);
      if (n >= 1 && n <= 11) {
        tableNum = n;
        orderType = 'cafe';
        showToast(`${t('toast-table')}${n}`);
        return;
      }
    }
  } catch { }

  // Hide "Я в кафе" when no table param
  const cafeBtn = $('otCafe');
  if (cafeBtn) cafeBtn.style.display = 'none';

  openModal('orderTypeModal');
  lockScroll();
}

function buildTableGrid() {
  const grid = $('tableGrid');
  if (!grid) return;
  grid.innerHTML = '';
  for (let i = 1; i <= 11; i++) {
    const btn = document.createElement('button');
    btn.className = 'tbl-btn';
    btn.textContent = i;
    btn.addEventListener('click', () => {
      tableNum = i;
      setOrderType('cafe');
      showToast(`${t('toast-table')}${i}`);
    });
    grid.appendChild(btn);
  }
}

// ── HEADER HIDE ON SCROLL ─────────────────────────────────
function initScrollHeader() {
  const header = $('header');
  if (!header) return;
  let lastY = 0, ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < 50) header.classList.remove('hide');
        else if (y > lastY + 8) header.classList.add('hide');
        else if (y < lastY - 8) header.classList.remove('hide');
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ── PAYMENT RADIO STYLING ─────────────────────────────────
function initPaymentUI() {
  document.querySelectorAll('.pay-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const radio = opt.querySelector('input[type="radio"]');
      if (!radio) return;
      radio.checked = true;
      document.querySelectorAll('.pay-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      // MBank QR
      const qr = $('mbankQr');
      if (qr) qr.style.display = radio.value === 'mbank' ? '' : 'none';
      validateOrder();
    });
  });
}

// ── MAIN INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  applyTheme();
  applyLang();
  updateCartBadge();
  buildTableGrid();
  renderMenu();
  initScrollHeader();
  initPaymentUI();
  initOrderTypeModal();

  // Restore delivery info
  try {
    const saved = localStorage.getItem('deliveryInfo');
    if (saved) deliveryInfo = JSON.parse(saved);
  } catch { }

  // ── Theme toggle
  $('themeToggle')?.addEventListener('click', () => {
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    applyTheme();
  });

  // ── Lang toggle (header)
  $('langToggle')?.addEventListener('click', () => {
    lang = lang === 'ru' ? 'kg' : 'ru';
    localStorage.setItem('lang', lang);
    applyLang();
    renderMenu();
    renderCartItems();
  });

  // ── Lang pills (in order-type modal)
  document.querySelectorAll('.lang-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.lang === lang);
    pill.addEventListener('click', () => {
      lang = pill.dataset.lang;
      localStorage.setItem('lang', lang);
      applyLang();
      renderMenu();
      document.querySelectorAll('.lang-pill').forEach(p => p.classList.toggle('active', p.dataset.lang === lang));
    });
  });

  // ── Hamburger
  const menuToggle = $('menuToggle');
  const mainNav = $('mainNav');
  menuToggle?.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', e => {
    if (mainNav && menuToggle && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
      mainNav.classList.remove('open');
      menuToggle.classList.remove('open');
    }
  });

  // ── Hero buttons
  $('viewMenuBtn')?.addEventListener('click', () => $('menu')?.scrollIntoView({ behavior: 'smooth' }));
  $('viewContactBtn')?.addEventListener('click', () => $('contact')?.scrollIntoView({ behavior: 'smooth' }));

  // ── Category filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
      renderMenu();
      $('menu')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ── Cart button (desktop)
  $('cartBtn')?.addEventListener('click', () => { renderCartItems(); openModal('cartModal'); });

  // ── Bottom nav
  $('bnMenu')?.addEventListener('click', () => $('menu')?.scrollIntoView({ behavior: 'smooth' }));
  $('bnCart')?.addEventListener('click', () => { renderCartItems(); openModal('cartModal'); });

  // ── Cart modal actions
  $('closeCartModal')?.addEventListener('click', () => closeModal('cartModal'));
  $('clearCartBtn')?.addEventListener('click', () => {
    if (confirm(t('confirm-clear'))) {
      cart = []; saveCart(); updateCartBadge(); renderCartItems();
    }
  });
  $('checkoutBtn')?.addEventListener('click', showOrderForm);

  // ── Order modal actions
  $('closeOrderModal')?.addEventListener('click', () => closeModal('orderModal'));
  $('cancelOrderBtn')?.addEventListener('click', () => closeModal('orderModal'));

  const custPhone = $('custPhone');
  if (custPhone) {
    custPhone.addEventListener('input', () => { formatPhone(custPhone); validateOrder(); });
  }
  $('custName')?.addEventListener('input', validateOrder);

  $('orderForm')?.addEventListener('submit', submitOrder);

  // ── Dish modal
  $('closeDishModal')?.addEventListener('click', () => closeModal('dishModal'));
  $('slidePrev')?.addEventListener('click', () => { slideIndex--; updateSlider(); });
  $('slideNext')?.addEventListener('click', () => { slideIndex++; updateSlider(); });
  $('addFromDetail')?.addEventListener('click', () => {
    if (!activeDishId) return;
    const dish = menuData.find(i => i.id === activeDishId);
    if (!dish) return;
    closeModal('dishModal');
    if (dish.variants?.length) openVariantModal(dish);
    else addItem(dish, null);
  });

  // ── Variant modal
  $('closeVariantModal')?.addEventListener('click', () => closeModal('variantModal'));

  // ── Lightbox
  $('lightboxClose')?.addEventListener('click', closeLightbox);
  $('lightbox')?.addEventListener('click', e => { if (e.target === $('lightbox')) closeLightbox(); });

  // ── Order type modal
  $('otCafe')?.addEventListener('click', () => {
    closeModal('orderTypeModal');
    openModal('tableModal');
  });
  $('otPickup')?.addEventListener('click', () => setOrderType('pickup'));
  $('otDelivery')?.addEventListener('click', () => {
    closeModal('orderTypeModal');
    openModal('deliveryModal');
  });
  $('otBrowse')?.addEventListener('click', () => setOrderType('browse'));

  $('closeTableModal')?.addEventListener('click', () => {
    closeModal('tableModal'); openModal('orderTypeModal');
  });
  $('closeDeliveryModal')?.addEventListener('click', () => {
    closeModal('deliveryModal'); openModal('orderTypeModal');
  });
  $('backToOrderType')?.addEventListener('click', () => {
    closeModal('deliveryModal'); openModal('orderTypeModal');
  });

  // Phone formatting in delivery form
  const dlvPhone = $('dlvPhone');
  if (dlvPhone) dlvPhone.addEventListener('input', () => formatPhone(dlvPhone));

  $('deliveryForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('dlvName')?.value.trim();
    const phone = $('dlvPhone')?.value.trim();
    const address = $('dlvAddress')?.value.trim();
    if (!name || !isValidPhone(phone.replace(/\s/g, '')) || !address) {
      alert(t('alert-fill-fields'));
      return;
    }
    deliveryInfo = { name, phone, address };
    try { localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo)); } catch { }
    setOrderType('delivery');
  });

  // ── Close modals on overlay click (except orderTypeModal while locked)
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target !== overlay) return;
      if (overlay.id === 'orderTypeModal') return; // can't close by clicking outside
      overlay.classList.remove('open');
    });
  });

  // ── Escape key
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (document.body.classList.contains('locked')) return;
    // Close top-most open modal
    const open = [...document.querySelectorAll('.modal-overlay.open')];
    if (open.length) open[open.length - 1].classList.remove('open');
    if ($('lightbox')?.classList.contains('open')) closeLightbox();
  });
});

// ── EXPOSE GLOBALS (needed for inline onclick in dynamically-created HTML) ──
window.decreaseQty = decreaseQty;
window.increaseQty = increaseQty;
window.removeItem = removeItem;
window.handleAddToCart = handleAddToCart;
window.openLightbox = openLightbox;