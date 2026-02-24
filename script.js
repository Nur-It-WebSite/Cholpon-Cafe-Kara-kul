// ============================================
// Официанты
// ============================================
let WAITERS = {
    'w1': { id: 'w1', name: 'Альмурза', phone: '996705505530', photo: './waiterphoto/ali.png' },
    'w2': { id: 'w2', name: 'Нурсултан', phone: '996700000002', photo: './waiterphoto/nursultan.png' },
    'w3': { id: 'w3', name: 'Айзада', phone: '996700000003', photo: './waiterphoto/ali.png' }
};
let WAITER_TABLES = {
    'w1': [1, 2, 7, 10],
    'w2': [3, 8, 11],
    'w3': [4, 5, 6, 9]
};



const menuData = [
    // ==================== ШАШЛЫКИ ====================
    {
        id: 1,
        name: 'Говядина',
        nameKg: 'Жылкы эти',
        description: 'Сочный шашлык из говядины, приготовленный на углях',
        descriptionKg: 'Жылкы этинен жасалган шырындуу шашлык, көмүрдө бышырылган',
        price: 260,
        image: './Menu/Шашлыкговя.png',
        category: 'shashlik',
        ingredients: ['Говядина', 'Лук', 'Специи', 'Масло'],
        ingredientsKg: ['Жылкы эти', 'Пияз', 'Азыктар', 'Май']
    },
    {
        id: 2,
        name: 'Наполеон',
        nameKg: 'Наполеон',
        description: 'Шашлык Наполеон с нежным вкусом',
        descriptionKg: 'Наполеон шашлык нымдуу даамы менен',
        price: 210,
        image: './Menu/Шашлык Наполеон с нежным вкусом.png',
        category: 'shashlik',
        ingredients: ['Мясо', 'Лук', 'Специи'],
        ingredientsKg: ['Эт', 'Пияз', 'Азыктар']
    },
    {
        id: 3,
        name: 'Люля-кебаб',
        nameKg: 'Люля-кебаб',
        description: 'Традиционный люля-кебаб из фарша',
        descriptionKg: 'Фарштан жасалган салттуу люля-кебаб',
        price: 190,
        image: './Menu/люля.png',
        category: 'shashlik',
        ingredients: ['Фарш', 'Лук', 'Специи'],
        ingredientsKg: ['Фарш', 'Пияз', 'Азыктар']
    },
    {
        id: 4,
        name: 'Крылышки',
        nameKg: 'Канаттар',
        description: 'Куриные крылышки на гриле',
        descriptionKg: 'Грилдеги тоок канаттары',
        price: 225,
        image: './Menu/Крылышки.png',
        category: 'shashlik',
        ingredients: ['Куриные крылышки', 'Специи', 'Масло'],
        ingredientsKg: ['Тоок канаттары', 'Азыктар', 'Май']
    },
    {
        id: 5,
        name: 'Овощной шашлык',
        nameKg: 'Жашылчалуу шашлык',
        description: 'Шашлык из свежих овощей',
        descriptionKg: 'Жаңы жашылчалардан шашлык',
        price: 180,
        image: './Menu/Шашлык из свежих овощей.png',
        category: 'shashlik',
        ingredients: ['Перец', 'Баклажан', 'Помидоры', 'Лук'],
        ingredientsKg: ['Мурч', 'Баклажан', 'Помидор', 'Пияз']
    },
    {
        id: 6,
        name: 'Сет «Компания»',
        nameKg: '«Компания» сети',
        description: 'Говядина 2, Люля-кебаб 2, Наполеон 2 + подарок',
        descriptionKg: 'Жылкы эти 2, Люля-кебаб 2, Наполеон 2 + белек',
        price: 2050,
        image: 'https://via.placeholder.com/300x200?text=Сет+Компания',
        category: 'shashlik',
        ingredients: ['Говядина', 'Люля-кебаб', 'Наполеон'],
        ingredientsKg: ['Жылкы эти', 'Люля-кебаб', 'Наполеон']
    },
    {
        id: 7,
        name: 'Сет «Фантазия»',
        nameKg: '«Фантазия» сети',
        description: 'Говядина 2, Люля-кебаб 1, Наполеон 1, Рыба 4, Грибы + подарок',
        descriptionKg: 'Жылкы эти 2, Люля-кебаб 1, Наполеон 1, Балык 4, Козу карын + белек',
        price: 2800,
        image: 'https://via.placeholder.com/300x200?text=Сет+Фантазия',
        category: 'shashlik',
        ingredients: ['Говядина', 'Люля-кебаб', 'Наполеон', 'Рыба', 'Грибы'],
        ingredientsKg: ['Жылкы эти', 'Люля-кебаб', 'Наполеон', 'Балык', 'Козу карын']
    },
    // ==================== ПЕРВЫЕ БЛЮДА ====================
    {
        id: 8,
        name: 'Шорпо (говядина)',
        nameKg: 'Шорпо (жылкы эти)',
        description: 'Традиционный суп с говядиной',
        descriptionKg: 'Жылкы эти менен салттуу суп',
        price: 235,
        image: './Menu/Шорпо.png',
        category: 'first',
        ingredients: ['Говядина', 'Картофель', 'Морковь', 'Лук', 'Зелень'],
        ingredientsKg: ['Жылкы эти', 'Картөшкө', 'Сабиз', 'Пияз', 'Жашылча']
    },
    {
        id: 9,
        name: 'Сырный суп',
        nameKg: 'Сыр суп',
        description: 'Суп с сыром и овощами',
        descriptionKg: 'Сыр жана жашылчалар менен суп',
        price: 235,
        image: './Menu/СырныйСуп.png',
        category: 'first',
        ingredients: ['Сыр', 'Картофель', 'Морковь', 'Лук'],
        ingredientsKg: ['Сыр', 'Картөшкө', 'Сабиз', 'Пияз']
    },
    {
        id: 10,
        name: 'Суп с фрикадельками',
        nameKg: 'Фрикаделькалуу суп',
        description: 'Суп с мясными фрикадельками',
        descriptionKg: 'Эт фрикаделькалары менен суп',
        price: 235,
        image: './Menu/Суп с фрикадельками.png',
        category: 'first',
        ingredients: ['Фрикадельки', 'Картофель', 'Морковь', 'Лук'],
        ingredientsKg: ['Фрикадельки', 'Картөшкө', 'Сабиз', 'Пияз']
    },
    {
        id: 11,
        name: 'Солянка',
        nameKg: 'Солянка',
        description: 'Мясная солянка с овощами',
        descriptionKg: 'Жашылчалар менен эт солянкасы',
        price: 205,
        image: './Menu/Солянка.png',
        category: 'first',
        ingredients: ['Мясо', 'Огурцы', 'Оливки', 'Лук'],
        ingredientsKg: ['Эт', 'Бадыраң', 'Оливки', 'Пияз']
    },
    {
        id: 12,
        name: 'Пельмени домашние',
        nameKg: 'Үй пельмени',
        description: 'Домашние пельмени с мясом',
        descriptionKg: 'Эт менен үй пельмени',
        price: 225,
        image: './Menu/Пельмени.png',
        category: 'first',
        ingredients: ['Тесто', 'Фарш', 'Лук', 'Специи'],
        ingredientsKg: ['Камыр', 'Фарш', 'Пияз', 'Азыктар']
    },
    {
        id: 13,
        name: 'Ак Серке с фрикадельками',
        nameKg: 'Ак Серке фрикаделькалар менен',
        description: 'Суп Ак Серке с фрикадельками',
        descriptionKg: 'Ак Серке суп фрикаделькалар менен',
        price: 235,
        image: './Menu/Ак Серке с фрикадельками.png',
        category: 'first',
        ingredients: ['Фрикадельки', 'Картофель', 'Морковь', 'Лук'],
        ingredientsKg: ['Фрикадельки', 'Картөшкө', 'Сабиз', 'Пияз']
    },
    {
        id: 14,
        name: 'Чечевичный суп',
        nameKg: 'Чечевичный суп',
        description: 'Суп из чечевицы с овощами',
        descriptionKg: 'Жашылчалар менен чечевица суп',
        price: 195,
        image: './Menu/Чечевичный суп.png',
        category: 'first',
        ingredients: ['Чечевица', 'Картофель', 'Морковь', 'Лук'],
        ingredientsKg: ['Чечевица', 'Картөшкө', 'Сабиз', 'Пияз']
    },
    // ==================== ВТОРЫЕ БЛЮДА ====================
    {
        id: 15,
        name: 'Манты',
        nameKg: 'Манты',
        description: 'Паровые манты с мясом',
        descriptionKg: 'Эт менен буу манты',
        price: 240,
        image: './Menu/Манты.png',
        category: 'second',
        ingredients: ['Тесто', 'Мясо', 'Лук', 'Специи'],
        ingredientsKg: ['Камыр', 'Эт', 'Пияз', 'Азыктар']
    },
    {
        id: 16,
        name: 'Котлеты',
        nameKg: 'Котлеталар',
        description: 'Мясные котлеты с гарниром',
        descriptionKg: 'Гарнир менен эт котлеталары',
        price: 220,
        image: 'https://via.placeholder.com/300x200?text=Котлеты',
        category: 'second',
        ingredients: ['Фарш', 'Лук', 'Яйцо', 'Хлеб'],
        ingredientsKg: ['Фарш', 'Пияз', 'Жумуртка', 'Нан']
    },
    {
        id: 17,
        name: 'Тефтели',
        nameKg: 'Тефтель',
        description: 'Мясные тефтели в соусе',
        descriptionKg: 'Соустагы эт тефтель',
        price: 220,
        image: 'https://via.placeholder.com/300x200?text=Тефтели',
        category: 'second',
        ingredients: ['Фарш', 'Рис', 'Лук', 'Соус'],
        ingredientsKg: ['Фарш', 'Күрүч', 'Пияз', 'Соус']
    },
    {
        id: 18,
        name: 'Бифштекс',
        nameKg: 'Бифштекс',
        description: 'Сочный бифштекс из говядины',
        descriptionKg: 'Жылкы этинен шырындуу бифштекс',
        price: 230,
        image: 'https://via.placeholder.com/300x200?text=Бифштекс',
        category: 'second',
        ingredients: ['Говядина', 'Специи', 'Масло'],
        ingredientsKg: ['Жылкы эти', 'Азыктар', 'Май']
    },
    {
        id: 19,
        name: 'Зразы',
        nameKg: 'Зразы',
        description: 'Мясные зразы с начинкой',
        descriptionKg: 'Начинка менен эт зразы',
        price: 240,
        image: './Menu/Зразы.png',
        category: 'second',
        ingredients: ['Мясо', 'Картофель', 'Лук', 'Яйцо'],
        ingredientsKg: ['Эт', 'Картөшкө', 'Пияз', 'Жумуртка']
    },
    {
        id: 20,
        name: 'Лагман уйгурский',
        nameKg: 'Уйгур лагманы',
        description: 'Уйгурский лагман с мясом и овощами',
        descriptionKg: 'Эт жана жашылчалар менен уйгур лагманы',
        price: 260,
        image: './Menu/Уйгур.png',
        category: 'second',
        ingredients: ['Лапша', 'Мясо', 'Перец', 'Морковь', 'Лук'],
        ingredientsKg: ['Лапша', 'Эт', 'Мурч', 'Сабиз', 'Пияз']
    },
    {
        id: 21,
        name: 'Лагман жареный',
        nameKg: 'Куурулган лагман',
        description: 'Жареный лагман с овощами',
        descriptionKg: 'Жашылчалар менен куурулган лагман',
        price: 260,
        image: './Menu/Жаре.png',
        category: 'second',
        ingredients: ['Лапша', 'Мясо', 'Перец', 'Морковь', 'Лук'],
        ingredientsKg: ['Лапша', 'Эт', 'Мурч', 'Сабиз', 'Пияз']
    },
    {
        id: 22,
        name: 'Гуляш',
        nameKg: 'Гуляш',
        description: 'Гуляш из говядины с овощами',
        descriptionKg: 'Жашылчалар менен жылкы эти гуляш',
        price: 300,
        image: 'https://via.placeholder.com/300x200?text=Гуляш',
        category: 'second',
        ingredients: ['Говядина', 'Картофель', 'Морковь', 'Лук', 'Соус'],
        ingredientsKg: ['Жылкы эти', 'Картөшкө', 'Сабиз', 'Пияз', 'Соус']
    },
    {
        id: 23,
        name: 'Мясо по-королевски',
        nameKg: 'Королдук эти',
        description: 'Мясо по-королевски с сыром',
        descriptionKg: 'Сыр менен королдук эт',
        price: 270,
        image: 'https://via.placeholder.com/300x200?text=Мясо+по-королевски',
        category: 'second',
        ingredients: ['Мясо', 'Сыр', 'Помидоры', 'Зелень'],
        ingredientsKg: ['Эт', 'Сыр', 'Помидор', 'Жашылча']
    },
    // ==================== ЗАКАЗНЫЕ БЛЮДА ====================
    {
        id: 24,
        name: 'Мясо по-деревенски (стейк говядина)',
        nameKg: 'Айылдык эти (стейк жылкы эти)',
        description: 'Стейк говядины по-деревенски',
        descriptionKg: 'Айылдык жылкы эти стейк',
        price: 610,
        image: './Menu/Мясо.png',
        category: 'special',
        ingredients: ['Говядина', 'Специи', 'Масло'],
        ingredientsKg: ['Жылкы эти', 'Азыктар', 'Май']
    },
    {
        id: 25,
        name: 'Стейк форель (3 шт.)',
        nameKg: 'Форель стейк (3 дөн)',
        description: 'Стейки форели, 3 шт.',
        descriptionKg: 'Форель стейктери, 3 дөн',
        price: 610,
        image: 'https://via.placeholder.com/300x200?text=Стейк+форель+3шт',
        category: 'special',
        ingredients: ['Форель', 'Специи', 'Масло'],
        ingredientsKg: ['Форель', 'Азыктар', 'Май']
    },
    {
        id: 26,
        name: 'Стейк форель (2 шт.)',
        nameKg: 'Форель стейк (2 дөн)',
        description: 'Стейки форели, 2 шт.',
        descriptionKg: 'Форель стейктери, 2 дөн',
        price: 510,
        image: 'https://via.placeholder.com/300x200?text=Стейк+форель+2шт',
        category: 'special',
        ingredients: ['Форель', 'Специи', 'Масло'],
        ingredientsKg: ['Форель', 'Азыктар', 'Май']
    },
    {
        id: 27,
        name: 'Адана кебаб (на шпажках с гарниром и салатом)',
        nameKg: 'Адана кебаб (шпажкаларда гарнир жана салат менен)',
        description: 'Адана кебаб на шпажках с гарниром и салатом',
        descriptionKg: 'Гарнир жана салат менен шпажкаларда адана кебаб',
        price: 290,
        image: 'https://via.placeholder.com/300x200?text=Адана+кебаб',
        category: 'special',
        ingredients: ['Мясо', 'Специи', 'Гарнир', 'Салат'],
        ingredientsKg: ['Эт', 'Азыктар', 'Гарнир', 'Салат']
    },
    {
        id: 28,
        name: 'Турецкий кебаб (на лаваше)',
        nameKg: 'Түрк кебабы (лавашта)',
        description: 'Турецкий кебаб в лаваше',
        descriptionKg: 'Лавашта түрк кебабы',
        price: 280,
        image: './Menu/turk.png',
        category: 'special',
        ingredients: ['Мясо', 'Лаваш', 'Овощи'],
        ingredientsKg: ['Эт', 'Лаваш', 'Жашылчалар']
    },
    {
        id: 29,
        name: 'Бейти кебаб',
        nameKg: 'Бейти кебаб ',
        description: 'Бейти кебаб в лаваше с плавленым сыром',
        descriptionKg: 'Лавашта эритилген сыр менен бейти кебаб',
        price: 330,
        image: './Menu/Бейти кебаб.png',
        category: 'special',
        ingredients: ['Мясо', 'Лаваш', 'Сыр'],
        ingredientsKg: ['Эт', 'Лаваш', 'Сыр']
    },
    {
        id: 30,
        name: 'Лазуро (жареное мясо с овощами)',
        nameKg: 'Лазуро (жашылчалар менен куурулган эт)',
        description: 'Жареное мясо с овощами',
        descriptionKg: 'Жашылчалар менен куурулган эт',
        price: 280,
        image: 'https://via.placeholder.com/300x200?text=Лазуро',
        category: 'special',
        ingredients: ['Мясо', 'Овощи', 'Масло'],
        ingredientsKg: ['Эт', 'Жашылчалар', 'Май']
    },
    {
        id: 31,
        name: 'Бризоль',
        nameKg: 'Бризоль',
        description: 'Бризоль из мяса',
        descriptionKg: 'Эттен бризоль',
        price: 265,
        image: './Menu/БризольЗаказное Бризоль Бризоль из мяса.png',
        category: 'special',
        ingredients: ['Мясо', 'Специи', 'Масло'],
        ingredientsKg: ['Эт', 'Азыктар', 'Май']
    },
    {
        id: 32,
        name: 'Мясо в горшочке (мясо, помидоры, грибы, сыр)',
        nameKg: 'Кыштектеги эт (эт, помидор, козу карын, сыр)',
        description: 'Мясо в горшочке с помидорами, грибами и сыром',
        descriptionKg: 'Помидор, козу карын жана сыр менен кыштектеги эт',
        price: 290,
        image: 'https://via.placeholder.com/300x200?text=Мясо+в+горшочке',
        category: 'special',
        ingredients: ['Мясо', 'Помидоры', 'Грибы', 'Сыр'],
        ingredientsKg: ['Эт', 'Помидор', 'Козу карын', 'Сыр']
    },
    {
        id: 33,
        name: 'Куурдак (говядина, баранина)',
        nameKg: 'Куурдак (жылкы эти, кой эти)',
        description: 'Куурдак из говядины и баранины',
        descriptionKg: 'Жылкы эти жана кой этинен куурдак',
        price: 490,
        image: './Menu/Куурдак.png',
        category: 'special',
        ingredients: ['Говядина', 'Баранина', 'Картофель', 'Лук'],
        ingredientsKg: ['Жылкы эти', 'Кой эти', 'Картөшкө', 'Пияз']
    },
    {
        id: 34,
        name: 'Курица в кисло-сладком соусе',
        nameKg: 'Кышкыл-таттуу соустагы тоок',
        description: 'Курица в кисло-сладком соусе',
        descriptionKg: 'Кышкыл-таттуу соустагы тоок',
        price: 290,
        image: './Menu/Крк.png',
        category: 'special',
        ingredients: ['Курица', 'Соус', 'Овощи'],
        ingredientsKg: ['Тоок', 'Соус', 'Жашылчалар']
    },
    {
        id: 35,
        name: 'Фрикассе',
        nameKg: 'Фрикассе',
        description: 'Фрикассе из курицы',
        descriptionKg: 'Тооктон фрикассе',
        price: 290,
        image: './Menu/Фрикасе.png',
        category: 'special',
        ingredients: ['Курица', 'Сливки', 'Овощи'],
        ingredientsKg: ['Тоок', 'Каймак', 'Жашылчалар']
    },
    {
        id: 36,
        name: 'Мясо фирменное',
        nameKg: 'Фирмалык эт',
        description: 'Фирменное мясо',
        descriptionKg: 'Фирмалык эт',
        price: 460,
        image: 'https://via.placeholder.com/300x200?text=Мясо+фирменное',
        category: 'special',
        ingredients: ['Мясо', 'Специи', 'Соус'],
        ingredientsKg: ['Эт', 'Азыктар', 'Соус']
    },
    {
        id: 37,
        name: 'Плов 1 кг',
        nameKg: 'Плов 1 кг ',
        description: 'Плов 1 кг, заказ заранее',
        descriptionKg: 'Плов 1 кг, алдын ала заказ',
        price: 2200,
        image: './Menu/Плов.png',
        category: 'special',
        ingredients: ['Рис', 'Мясо', 'Морковь', 'Лук', 'Специи'],
        ingredientsKg: ['Күрүч', 'Эт', 'Сабиз', 'Пияз', 'Азыктар']
    },
    {
        id: 38,
        name: 'Казан кебаб',
        nameKg: 'Казан кебабы',
        description: 'Казан кебаб',
        descriptionKg: 'Казан кебабы',
        price: 320,
        image: './Menu/Казан кебаб.png',
        category: 'special',
        ingredients: ['Мясо', 'Картофель', 'Лук', 'Специи'],
        ingredientsKg: ['Эт', 'Картөшкө', 'Пияз', 'Азыктар']
    },
    {
        id: 39,
        name: 'Хачапури',
        nameKg: 'Хачапури',
        description: 'Хачапури с сыром',
        descriptionKg: 'Сыр менен хачапури',
        price: 460,
        image: './Menu/Хачапури.png',
        category: 'special',
        ingredients: ['Тесто', 'Сыр', 'Масло'],
        ingredientsKg: ['Камыр', 'Сыр', 'Май']
    },
    {
        id: 40,
        name: 'Фетучини с курицей',
        nameKg: 'Тоок менен фетучини',
        description: 'Фетучини с курицей',
        descriptionKg: 'Тоок менен фетучини',
        price: 390,
        image: './Menu/Фетучини с курицей.png',
        category: 'special',
        ingredients: ['Фетучини', 'Курица', 'Сливки', 'Сыр'],
        ingredientsKg: ['Фетучини', 'Тоок', 'Каймак', 'Сыр']
    },
    // ==================== САЛАТЫ (ЗАПРАВЛЕННЫЕ МАСЛОМ) ====================
    {
        id: 41,
        name: 'Греческий',
        nameKg: 'Грек',
        description: 'Греческий салат с маслом',
        descriptionKg: 'Май менен грек салаты',
        price: 225,
        image: './Menu/Греческий.png',
        category: 'salad-oil',
        ingredients: ['Помидоры', 'Огурцы', 'Сыр фета', 'Масло'],
        ingredientsKg: ['Помидор', 'Бадыраң', 'Фета сыры', 'Май']
    },
    {
        id: 42,
        name: 'Столичный',
        nameKg: 'Борбордук ',
        description: 'Столичный салат с мясом и овощами',
        descriptionKg: 'Эт жана жашылчалар менен борбордук салат',
        price: 250,
        image: 'https://via.placeholder.com/300x200?text=Столичный+салат',
        category: 'salad-oil',
        ingredients: ['Мясо', 'Корнишоны', 'Грибы', 'Лук', 'Салат', 'Масло'],
        ingredientsKg: ['Эт', 'Корнишон', 'Козу карын', 'Пияз', 'Салат', 'Май']
    },
    {
        id: 43,
        name: 'Восточный (помидоры, огурцы, мясо, лук, кабачки, баклажан)',
        nameKg: 'Чыгыштык (помидор, бадыраң, эт, пияз, кабачок, баклажан)',
        description: 'Восточный салат с овощами и мясом',
        descriptionKg: 'Жашылчалар жана эт менен чыгыштык салат',
        price: 250,
        image: 'https://via.placeholder.com/300x200?text=Восточный+салат',
        category: 'salad-oil',
        ingredients: ['Помидоры', 'Огурцы', 'Мясо', 'Лук', 'Кабачки', 'Баклажан', 'Масло'],
        ingredientsKg: ['Помидор', 'Бадыраң', 'Эт', 'Пияз', 'Кабачки', 'Баклажан', 'Май']
    },
    {
        id: 44,
        name: 'Китайский острый (помидоры, огурцы, мясо, лук, морковь, перец)',
        nameKg: 'Кытайлык ачтуу (помидор, бадыраң, эт, пияз, сабиз, мурч)',
        description: 'Острый китайский салат',
        descriptionKg: 'Ачтуу кытай салаты',
        price: 240,
        image: 'https://via.placeholder.com/300x200?text=Китайский+острый+салат',
        category: 'salad-oil',
        ingredients: ['Помидоры', 'Огурцы', 'Мясо', 'Лук', 'Морковь', 'Перец', 'Масло'],
        ingredientsKg: ['Помидор', 'Бадыраң', 'Эт', 'Пияз', 'Сабиз', 'Мурч', 'Май']
    },
    {
        id: 45,
        name: 'Гасконский (помидоры, корнишоны, опята, копченая окорочка)',
        nameKg: 'Гаскон (помидор, корнишон, опята, копченка)',
        description: 'Гасконский салат с копченой окорочкой',
        descriptionKg: 'Копченка менен гаскон салаты',
        price: 230,
        image: 'https://via.placeholder.com/300x200?text=Гасконский+салат',
        category: 'salad-oil',
        ingredients: ['Помидоры', 'Корнишоны', 'Опята', 'Копченая окорочка', 'Масло'],
        ingredientsKg: ['Помидор', 'Корнишон', 'Опята', 'Копченка', 'Май']
    },
    {
        id: 46,
        name: 'Витаминка (свекла, колбаска, кукуруза, зелень, морковь)',
        nameKg: 'Витаминка (кызылча, колбаса, жүгөрү, жашылча, сабиз)',
        description: 'Витаминный салат с овощами',
        descriptionKg: 'Жашылчалар менен витамин салат',
        price: 195,
        image: 'https://via.placeholder.com/300x200?text=Витаминка+салат',
        category: 'salad-oil',
        ingredients: ['Свекла', 'Колбаска', 'Кукуруза', 'Зелень', 'Морковь', 'Масло'],
        ingredientsKg: ['Кызылча', 'Колбаса', 'Жүгөрү', 'Жашылча', 'Сабиз', 'Май']
    },
    {
        id: 47,
        name: 'Овощной микс (цветная капуста, брокколи, овощи)',
        nameKg: 'Жашылча микси (түстүү капуста, брокколи, жашылчалар)',
        description: 'Микс овощного салата',
        descriptionKg: 'Жашылча салат микси',
        price: 235,
        image: 'https://via.placeholder.com/300x200?text=Овощной+микс+салат',
        category: 'salad-oil',
        ingredients: ['Цветная капуста', 'Брокколи', 'Овощи', 'Масло'],
        ingredientsKg: ['Түстүү капуста', 'Брокколи', 'Жашылчалар', 'Май']
    },
    {
        id: 48,
        name: 'Свежий',
        nameKg: 'Жаңы',
        description: 'Свежий овощной салат',
        descriptionKg: 'Жаңы жашылча салаты',
        price: 130,
        image: 'https://via.placeholder.com/300x200?text=Свежий+салат',
        category: 'salad-oil',
        ingredients: ['Помидоры', 'Огурцы', 'Лук', 'Масло'],
        ingredientsKg: ['Помидор', 'Бадыраң', 'Пияз', 'Май']
    },
    {
        id: 49,
        name: 'Фунчоза (мясо, овощи, фунчоза)',
        nameKg: 'Фунчоза (эт, жашылчалар, фунчоза)',
        description: 'Салат с фунчозой, мясом и овощами',
        descriptionKg: 'Фунчоза, эт жана жашылчалар менен салат',
        price: 230,
        image: './Menu/Фунчеза.png',
        category: 'salad-oil',
        ingredients: ['Мясо', 'Овощи', 'Фунчоза', 'Масло'],
        ingredientsKg: ['Эт', 'Жашылчалар', 'Фунчоза', 'Май']
    },
    {
        id: 50,
        name: 'Нарезка фирменная овощная',
        nameKg: 'Фирмалык жашылча нарезкасы',
        description: 'Фирменная овощная нарезка',
        descriptionKg: 'Фирмалык жашылча нарезкасы',
        price: 350,
        image: 'https://via.placeholder.com/300x200?text=Нарезка+фирменная+овощная',
        category: 'salad-oil',
        ingredients: ['Огурцы', 'Помидоры', 'Соленные огурцы', 'Квашенная капуста', 'Лук', 'Масло'],
        ingredientsKg: ['Бадыраң', 'Помидор', 'Туздалган бадыраң', 'Кычкыл капуста', 'Пияз', 'Май']
    },
    // ==================== САЛАТЫ (ЗАПРАВЛЕННЫЕ МАЙОНЕЗОМ) ====================
    {
        id: 51,
        name: 'Воздушный (басай, охотница, яйцо, чипсы)',
        nameKg: 'Аба (басай, охотница, жумуртка, чипсы)',
        description: 'Воздушный салат с майонезом',
        descriptionKg: 'Майонез менен аба салат',
        price: 220,
        image: 'https://via.placeholder.com/300x200?text=Воздушный+салат',
        category: 'salad-mayo',
        ingredients: ['Басай', 'Охотница', 'Яйцо', 'Чипсы', 'Майонез'],
        ingredientsKg: ['Басай', 'Охотница', 'Жумуртка', 'Чипсы', 'Майонез']
    },
    {
        id: 52,
        name: 'Цезарь с курицей',
        nameKg: 'Тоок менен Цезарь',
        description: 'Цезарь с курицей и майонезом',
        descriptionKg: 'Майонез менен тоок Цезарь',
        price: 245,
        image: './Menu/Цезарь с курицей.png',
        category: 'salad-mayo',
        ingredients: ['Курица', 'Салат', 'Сыр', 'Крутоны', 'Майонез'],
        ingredientsKg: ['Тоок', 'Салат', 'Сыр', 'Крутон', 'Майонез']
    },
    {
        id: 53,
        name: 'Гнездо кукушки (копченое мясо, пай, кукуруза, сыр)',
        nameKg: 'Кукушка уясы (копченка, пай, жүгөрү, сыр)',
        description: 'Гнездо кукушки с майонезом',
        descriptionKg: 'Майонез менен кукушка уясы',
        price: 240,
        image: './Menu/Гнездо кукушки .png',
        category: 'salad-mayo',
        ingredients: ['Копченое мясо', 'Пай', 'Кукуруза', 'Сыр', 'Майонез'],
        ingredientsKg: ['Копченка', 'Пай', 'Жүгөрү', 'Сыр', 'Майонез']
    },
    {
        id: 54,
        name: 'Мерло (омлет, горох, кукуруза, курица)',
        nameKg: 'Мерло (омлет, буурчак, жүгөрү, тоок)',
        description: 'Мерло салат с майонезом',
        descriptionKg: 'Майонез менен мерло салат',
        price: 210,
        image: './Menu/Мерло.png',
        category: 'salad-mayo',
        ingredients: ['Омлет', 'Горох', 'Кукуруза', 'Курица', 'Майонез'],
        ingredientsKg: ['Омлет', 'Буурчак', 'Жүгөрү', 'Тоок', 'Майонез']
    },
    {
        id: 55,
        name: 'Салат с грибами (шампиньоны, филе, яйцо, картофель пай)',
        nameKg: 'Козу карын менен салат (шампиньон, филе, жумуртка, картөшкө пай)',
        description: 'Салат с грибами и майонезом',
        descriptionKg: 'Майонез менен козу карын салат',
        price: 245,
        image: './Menu/Сгрибами.png',
        category: 'salad-mayo',
        ingredients: ['Шампиньоны', 'Филе', 'Яйцо', 'Картофель пай', 'Майонез'],
        ingredientsKg: ['Шампиньон', 'Филе', 'Жумуртка', 'Картөшкө пай', 'Майонез']
    },
    {
        id: 56,
        name: 'Салат со свеклой (запеченная свекла, брокколи, творожный сыр, орех)',
        nameKg: 'Кызылча менен салат (бышырылган кызылча, брокколи, творожный сыр, орех)',
        description: 'Салат со свеклой и майонезом',
        descriptionKg: 'Майонез менен кызылча салат',
        price: 235,
        image: './Menu/Салат со свеклой.png',
        category: 'salad-mayo',
        ingredients: ['Свекла', 'Брокколи', 'Творожный сыр', 'Орех', 'Майонез'],
        ingredientsKg: ['Кызылча', 'Брокколи', 'Творожный сыр', 'Орех', 'Майонез']
    },
    {
        id: 57,
        name: 'Охотница',
        nameKg: 'Охотница',
        description: 'Охотница салат с майонезом',
        descriptionKg: 'Майонез менен охотница салат',
        price: 250,
        image: 'https://via.placeholder.com/300x200?text=Охотница+салат',
        category: 'salad-mayo',
        ingredients: ['Охотница', 'Корнишоны', 'Черри', 'Листья', 'Шампиньоны', 'Орешки', 'Майонез'],
        ingredientsKg: ['Охотница', 'Корнишон', 'Черри', 'Жалбырактар', 'Шампиньон', 'Орех', 'Майонез']
    },
    {
        id: 58,
        name: 'Баклажан с овощами',
        nameKg: 'Жашылчалуу баклажан',
        description: 'Баклажан с овощами и майонезом',
        descriptionKg: 'Майонез менен жашылчалуу баклажан',
        price: 255,
        image: './Menu/Баклажан с овощами.png',
        category: 'salad-mayo',
        ingredients: ['Баклажаны', 'Перец', 'Помидоры', 'Лук', 'Майонез'],
        ingredientsKg: ['Баклажан', 'Мурч', 'Помидор', 'Пияз', 'Майонез']
    },
    {
        id: 59,
        name: 'Фирменный баклажан (в сезонной панировке)',
        nameKg: 'Фирмалык баклажан (сезондук панировкада)',
        description: 'Фирменный баклажан в панировке с майонезом',
        descriptionKg: 'Майонез менен панировкадагы фирмалык баклажан',
        price: 255,
        image: 'https://via.placeholder.com/300x200?text=Фирменный+баклажан+салат',
        category: 'salad-mayo',
        ingredients: ['Баклажан', 'Панировка', 'Майонез'],
        ingredientsKg: ['Баклажан', 'Панировка', 'Майонез']
    },
    {
        id: 60,
        name: 'Баклажан микс',
        nameKg: 'Баклажан микси',
        description: 'Микс баклажанов с майонезом',
        descriptionKg: 'Майонез менен баклажан микси',
        price: 240,
        image: 'https://via.placeholder.com/300x200?text=Баклажан+микс+салат',
        category: 'salad-mayo',
        ingredients: ['Баклажан', 'Майонез'],
        ingredientsKg: ['Баклажан', 'Майонез']
    },
    {
        id: 61,
        name: 'Курица с ореховым соусом',
        nameKg: 'Орех соусу менен тоок',
        description: 'Курица с ореховым соусом и майонезом',
        descriptionKg: 'Майонез менен орех соусу тоок',
        price: 240,
        image: './Menu/Ореховомсоус.png',
        category: 'salad-mayo',
        ingredients: ['Курица', 'Ореховый соус', 'Майонез'],
        ingredientsKg: ['Тоок', 'Орех соусу', 'Майонез']
    },
    // ==================== НАПИТКИ ====================
    {
        id: 62,
        name: 'Компот',
        nameKg: 'Компот',
        description: 'Компот из сухофруктов',
        descriptionKg: 'Куру жемиштерден компот',
        image: './Menu/Компот.png',
        category: 'drink',
        variants: [
            { label: '1 л', price: 100 },
            { label: '1.5 л', price: 140 },
            { label: '2 л', price: 170 }
        ]
    },
    {
        id: 63,
        name: 'Кола',
        nameKg: 'Кола',
        description: 'Кола',
        descriptionKg: 'Кола',
        image: './Menu/Кола.png',
        category: 'drink',
        variants: [
            { label: '1 л', price: 120 },
            { label: '1.5 л', price: 170 },
            { label: '2 л', price: 200 }
        ]
    },
    {
        id: 64,
        name: 'Фанта',
        nameKg: 'Фанта',
        description: 'Фанта',
        descriptionKg: 'Фанта',
        image: './Menu/Фанта.png',
        category: 'drink',
        variants: [
            { label: '1 л', price: 120 },
            { label: '1.5 л', price: 170 },
            { label: '2 л', price: 200 }
        ]
    },
    {
        id: 65,
        name: 'Любимый (сок)',
        nameKg: 'Сүйүктүү (ширеп)',
        description: 'Сок Любимый',
        descriptionKg: 'Сүйүктүү ширеп',
        image: './Menu/Любимый (сок).png',
        category: 'drink',
        variants: [
            { label: '1 л', price: 150 },
            { label: '2 л', price: 270 }
        ]
    },
    // ==================== ФАСТ-ФУД, ДЕСЕРТЫ И ПРОЧЕЕ ====================
    {
        id: 66,
        name: 'Стрипсы корейские',
        nameKg: 'Корей стрипсы',
        description: 'Корейские куриные стрипсы',
        descriptionKg: 'Корей тоок стрипсы',
        price: 290,
        image: './Menu/Стрипсы корейские.png',
        category: 'fastfood',
        ingredients: ['Курица', 'Специи', 'Масло'],
        ingredientsKg: ['Тоок', 'Азыктар', 'Май']
    },
    {
        id: 67,
        name: 'KFC + фри',
        nameKg: 'KFC + фри',
        description: 'Курица KFC с картошкой фри',
        descriptionKg: 'KFC тоок фри картөшкө менен',
        price: 300,
        image: './Menu/kfxfree.png',
        category: 'fastfood',
        ingredients: ['Курица', 'Картофель фри'],
        ingredientsKg: ['Тоок', 'Фри картөшкө'],
        variants: [
            { label: "20 ш", price: 310 },
            { label: "1   0 ш", price: 260 },
        ]
    },
    {
        id: 68,
        name: 'Шаурма',
        nameKg: 'Шаурма',
        description: 'Классическая шаурма',
        descriptionKg: 'Классикалык шаурма',
        price: 235,
        image: './Menu/Шаурма Классическая шаурма.png',
        category: 'fastfood',
        ingredients: ['Лаваш', 'Мясо', 'Овощи', 'Соус'],
        ingredientsKg: ['Лаваш', 'Эт', 'Жашылчалар', 'Соус']
    },
    {
        id: 69,
        name: 'Шаурма с курицей',
        nameKg: 'Тоок менен шаурма',
        description: 'Шаурма с курицей',
        descriptionKg: 'Тоок менен шаурма',
        price: 260,
        image: './Menu/Шаурма куриная.png',
        category: 'fastfood',
        ingredients: ['Лаваш', 'Курица', 'Овощи', 'Соус'],
        ingredientsKg: ['Лаваш', 'Тоок', 'Жашылчалар', 'Соус']
    },
    {
        id: 70,
        name: 'Шаурма сырная',
        nameKg: 'Сыр шаурма',
        description: 'Шаурма с сыром',
        descriptionKg: 'Сыр менен шаурма',
        price: 260,
        image: './Menu/Шаурма сырная.png',
        category: 'fastfood',
        ingredients: ['Лаваш', 'Мясо', 'Сыр', 'Овощи', 'Соус'],
        ingredientsKg: ['Лаваш', 'Эт', 'Сыр', 'Жашылчалар', 'Соус']
    },
    {
        id: 71,
        name: 'Пицца "Пепперони"',
        nameKg: 'Пицца "Пепперони"',
        description: 'Пицца Пепперони',
        descriptionKg: 'Пепперони пиццасы',
        price: 550,
        image: './Menu/Пицца Пепперони.png',
        category: 'fastfood',
        ingredients: ['Тесто', 'Сыр', 'Пепперони', 'Соус'],
        ingredientsKg: ['Камыр', 'Сыр', 'Пепперони', 'Соус']
    },
    {
        id: 72,
        name: 'Пицца "Мясная"',
        nameKg: 'Пицца "Эттүү"',
        description: 'Мясная пицца',
        descriptionKg: 'Эттүү пицца',
        price: 590,
        image: './Menu/Пицца Мясная.png',
        category: 'fastfood',
        ingredients: ['Тесто', 'Сыр', 'Мясо', 'Соус'],
        ingredientsKg: ['Камыр', 'Сыр', 'Эт', 'Соус']
    },
    {
        id: 73,
        name: 'Пицца "Курица с грибами"',
        nameKg: 'Пицца "Козу карын менен тоок"',
        description: 'Пицца с курицей и грибами',
        descriptionKg: 'Тоок жана козу карын менен пицца',
        price: 590,
        image: './Menu/Пицца Курица с грибами.png',
        category: 'fastfood',
        ingredients: ['Тесто', 'Сыр', 'Курица', 'Грибы', 'Соус'],
        ingredientsKg: ['Камыр', 'Сыр', 'Тоок', 'Козу карын', 'Соус']
    },
    {
        id: 74,
        name: 'Пицца "Цезарь"',
        nameKg: 'Пицца "Цезарь"',
        description: 'Пицца Цезарь',
        descriptionKg: 'Цезарь пиццасы',
        price: 570,
        image: './Menu/Пицца Цезарь.png',
        category: 'fastfood',
        ingredients: ['Тесто', 'Сыр', 'Курица', 'Салат', 'Соус'],
        ingredientsKg: ['Камыр', 'Сыр', 'Тоок', 'Салат', 'Соус']
    },
    {
        id: 75,
        name: 'Рамен',
        nameKg: 'Рамён',
        description: 'Японский рамён',
        descriptionKg: 'Жапон рамёну',
        price: 260,
        image: './Menu/Рамен.png',
        category: 'fastfood',
        ingredients: ['Лапша', 'Бульон', 'Мясо', 'Овощи'],
        ingredientsKg: ['Лапша', 'Бульон', 'Эт', 'Жашылчалар']
    },
    {
        id: 76,
        name: 'Сан-Себастьян',
        nameKg: 'Сан-Себастьян',
        description: 'Десерт Сан-Себастьян',
        descriptionKg: 'Сан-Себастьян десерти',
        price: 360,
        image: './Menu/Десерт Сан-Себастьян.png',
        category: 'fastfood',
        ingredients: ['Тесто', 'Крем', 'Фрукты'],
        ingredientsKg: ['Камыр', 'Крем', 'Жемиштер']
    },
    {
        id: 77,
        name: 'Чизкейк',
        nameKg: 'Чизкейк',
        description: 'Классический чизкейк',
        descriptionKg: 'Классикалык чизкейк',
        price: 370,
        image: './Menu/Чизкейк.png',
        category: 'fastfood',
        ingredients: ['Сыр', 'Тесто', 'Крем'],
        ingredientsKg: ['Сыр', 'Камыр', 'Крем']
    },
    {
        id: 78,
        name: 'Три шоколада',
        nameKg: 'Үч шоколад',
        description: 'Торт три шоколада',
        descriptionKg: 'Үч шоколад торт',
        price: 280,
        image: './Menu/Три.png',
        category: 'fastfood',
        ingredients: ['Шоколад', 'Тесто', 'Крем'],
        ingredientsKg: ['Шоколад', 'Камыр', 'Крем']
    },
    {
        id: 79,
        name: 'Трайфл макс',
        nameKg: 'Трайфл макс',
        description: 'Десерт Трайфл макс',
        descriptionKg: 'Трайфл макс десерти',
        price: 290,
        image: './Menu/Трайфл макс.png',
        category: 'fastfood',
        ingredients: ['Бисквит', 'Крем', 'Фрукты'],
        ingredientsKg: ['Бисквит', 'Крем', 'Жемиштер']
    },
    {
        id: 80,
        name: 'Пирог',
        nameKg: 'Пирог',
        description: 'Свежий пирог',
        descriptionKg: 'Жаңы пирог',
        price: 50,
        image: './Menu/ПИрог.png',
        category: 'fastfood',
        ingredients: ['Тесто', 'Начинка'],
        ingredientsKg: ['Камыр', 'Начинка']
    },
    {
        id: 81,
        name: 'Мини самсы песочные',
        nameKg: 'Мини кум самсы',
        description: 'Мини песочные самсы',
        descriptionKg: 'Мини кум самсы',
        price: 55,
        image: './Menu/Песоксамсы.png',
        category: 'fastfood',
        ingredients: ['Тесто', 'Начинка'],
        ingredientsKg: ['Камыр', 'Начинка']
    },
    {
        id: 82,
        name: 'Хлеб',
        nameKg: 'Нан',
        description: 'Свежий хлеб',
        descriptionKg: 'Жаңы нан',
        price: 45,
        image: './Menu/нан.png',
        category: 'fastfood',
        ingredients: ['Мука', 'Вода', 'Дрожжи'],
        ingredientsKg: ['Ун', 'Суу', 'Ачыткы']
    },
    {
        id: 83,
        name: 'Чай',
        nameKg: 'Чай',
        description: 'Горячий чай',
        descriptionKg: 'Ысык чай',
        price: 20,
        image: './Menu/чай.png',
        category: 'fastfood',
        ingredients: ['Чай', 'Вода'],
        ingredientsKg: ['Чай', 'Суу']
    },
    {
        id: 84,
        name: 'Боорсок + каймак',
        nameKg: 'Боорсок + каймак',
        description: 'Боорсок с каймаком',
        descriptionKg: 'Каймак менен боорсок',
        price: 50,
        image: './Menu/Борскок.png',
        category: 'dessert',
        ingredients: ['Боорсок', 'Каймак'],
        ingredientsKg: ['Боорсок', 'Каймак'],
        variants: [
            { label: '1 кг', price: 170 },
            { label: '2 кг', price: 340 }
        ]
    }
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
        'about-text-1': 'Кафе "Cholpon" - это уютное место в городе Кара-Куль, где гостей встречают с теплом и заботой. Мы готовим вкусные блюда национальной кухни, используя свежие продукты и проверенные рецепты.',
        'about-text-2': 'У нас можно приятно провести время с семьёй и друзьями, пообедать, поужинать, или отметить важное событие. В кафе царит спокойная атмосфера, а внимательный персонал всегда старается, чтобы каждый гость остался доволен.',
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
        'review-photo': 'Фото (необязательно)',
        'review-take-photo': 'Сделать фото',
        'review-choose-photo': 'Выбрать из галереи',
        'review-remove-photo': 'Удалить фото',
        'review-submit': 'Отправить отзыв',
        'reviews-empty': 'Пока нет отзывов. Будьте первым!',
        'reviews-view-all': 'Посмотреть все отзывы',
        'reviews-all-title': 'Все отзывы',
        'reviews-back': 'Вернуться на главную',
        'waiter-label': 'Ваш официант',
        'waiter-write': 'Написать'
    },
    kg: {
        'nav-menu': 'Меню',
        'nav-about': 'Биз жөнүндө',
        'nav-reviews': 'Пикирлер',
        'nav-contact': 'Байланыш',
        'about-title': '"Cholpon" кафесине кош келиңиз',
        'about-desc': 'Кара-Куль шаарынын борборундагы жайкы кафе. Ар бир күн даамдуу үй жемиши.',
        'about-text-1': '"Cholpon" кафеси - Кара-Көл шаарындагы жайлуу жер, мында конокторду жылуулук менен кабыл алышат. Биз таза азыктарды жана текшерилген рецептерди колдонуп, улуттук тамактарды даярдайбыз.',
        'about-text-2': 'Бизде үй-бүлө менен жана достор менен жакшы убакыт өткөрүүгө, таңкы жеш, кечки тамак же маанилүү окуяны белгилөөгө болот. Кафеде тынч атмосфера, ал эми кызыкчыл персонал ар дайым ар бир коноктун канааттанган болушун камсыз кылууга аракет кылат.',
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
        'filter-salad-oil': 'Салат май менен заправленный',
        'filter-salad-mayo': 'Салат майонез менен заправленный',
        'filter-drink': 'Ичимдик',
        'filter-fastfood': 'Фаст фуд',
        'filter-dessert': 'Десерттер',
        'dish-ingredients': 'Курамы:',
        'reviews-title': 'Пикирлер',
        'review-form-title': 'Пикир калтыруу',
        'review-name': 'Атыңыз',
        'review-rating': 'Баалоо',
        'review-comment': 'Комментарий',
        'review-photo': 'Сүрөт (милдеттүү эмес)',
        'review-take-photo': 'Сүрөт тартуу',
        'review-choose-photo': 'Галереядан тандау',
        'review-remove-photo': 'Сүрөттү өчүрүү',
        'review-submit': 'Пикирди жөнөтүү',
        'reviews-empty': 'Азырынча пикирлер жок. Биринчи болуңуз!',
        'reviews-view-all': 'Бардык пикирлерди көрүү',
        'reviews-all-title': 'Бардык пикирлер',
        'reviews-back': 'Башкы бетке кайтуу',
        'waiter-label': 'Сиздин официянты',
        'waiter-write': 'Жазуу'
    },
    en: {
        'nav-menu': 'Menu',
        'nav-about': 'About',
        'nav-reviews': 'Reviews',
        'nav-contact': 'Contacts',
        'about-title': 'Welcome to Cholpon Cafe',
        'about-text-1': 'Cholpon Cafe is a cozy place in Kara-Kul where guests are welcomed with warmth and care. We prepare delicious national cuisine using fresh products and proven recipes.',
        'about-text-2': 'You can spend quality time with family and friends, have lunch, dinner, or celebrate an important event. The cafe has a calm atmosphere, and the attentive staff always strives to ensure every guest is satisfied.',
        'about-text-3': 'Cholpon Cafe is a place you want to return to again and again.',
        'menu-title': 'Menu',
        'contact-title': 'Contacts',
        'contact-location': 'Kara-Kul',
        'contact-hours': '10:00 - 22:00, no days off',
        'footer-text': '© 2025 Cholpon Cafe. All rights reserved.',
        'cart-title': 'Cart',
        'cart-empty': 'Cart is empty',
        'cart-total': 'Total:',
        'currency': 'som',
        'cart-clear': 'Clear cart',
        'cart-checkout': 'Checkout',
        'order-title': 'Checkout',
        'order-name': 'Name',
        'order-phone': 'Phone',
        'order-phone-hint': 'Enter number without 0, e.g.: 998 25 20 23',
        'order-comment': 'Comment (optional)',
        'order-summary': 'Order summary:',
        'order-cancel': 'Cancel',
        'order-submit': 'Submit order',
        'add-to-cart': 'Add to cart',
        'remove': 'Remove',
        'details': 'Details',
        'filter-all': 'All',
        'filter-shashlik': 'Shashlik',
        'filter-first': 'Soups',
        'filter-second': 'Main dishes',
        'filter-special': 'Special orders',
        'filter-salad-oil': 'Salads dressed with oil',
        'filter-salad-mayo': 'Salads dressed with mayonnaise',
        'filter-drink': 'Drinks',
        'filter-fastfood': 'Fast food',
        'filter-dessert': 'Desserts',
        'dish-ingredients': 'Ingredients:',
        'reviews-title': 'Reviews',
        'review-form-title': 'Leave a review',
        'review-name': 'Your name',
        'review-rating': 'Rating',
        'review-comment': 'Comment',
        'review-photo': 'Photo (optional)',
        'review-take-photo': 'Take photo',
        'review-choose-photo': 'Choose from gallery',
        'review-remove-photo': 'Remove photo',
        'review-submit': 'Submit review',
        'reviews-empty': 'No reviews yet. Be the first!',
        'reviews-view-all': 'View all reviews',
        'reviews-all-title': 'All reviews',
        'reviews-back': 'Back to main'
    }
};

// Дополнительные строки для переводов (используются в уведомлениях и кнопках)
translations.ru['adding'] = 'Добавление…';
translations.kg['adding'] = 'Кошулууда…';
translations.ru['added'] = 'Добавлено:';
translations.kg['added'] = 'Кошулду:';
translations.ru['order_sent_success'] = '✅ Заказ отправлен! Мы свяжемся с вами в ближайшее время.';
translations.kg['order_sent_success'] = '✅ Заказ жөнөтүлдү! Биз жакынкы убакта сиз менен байланышабыз.';
translations.ru['min_order_msg'] = 'Минимальная сумма для доставки {min} сом. Текущая сумма: {current} сом.';
translations.kg['min_order_msg'] = 'Доставка үчүн минималдуу сумма {min} сом. Учурдагы сумма: {current} сом.';
translations.ru['fill_required'] = 'Заполните все обязательные поля';
translations.kg['fill_required'] = 'Бардык милдеттүү талааларды толтуруңуз';
translations.ru['confirm_clear_cart'] = 'Очистить корзину?';
translations.kg['confirm_clear_cart'] = 'Себетти тазалоо?';
translations.ru['cart_empty_msg'] = 'Корзина пуста. Добавьте блюда в корзину.';
translations.kg['cart_empty_msg'] = 'Себет бош. Себетке тамак кошуңуз.';
translations.ru['invalid_phone'] = 'Введите корректный номер телефона\nПример: +996 998 252 023 или 0998252023';
translations.kg['invalid_phone'] = 'Туура телефон номурун киргизиңиз\nМисал: +996 998 252 023 же 0998252023';
translations.ru['select_image'] = 'Пожалуйста, выберите изображение';
translations.kg['select_image'] = 'Сураныч, сүрөт тандаңыз';
translations.ru['select_rating'] = 'Пожалуйста, выберите оценку';
translations.kg['select_rating'] = 'Сураныч, баалоо тандаңыз';
translations.ru['review_thanks'] = 'Спасибо за ваш отзыв!';
translations.kg['review_thanks'] = 'Пикириңиз үчүн рахмат!';
translations.ru['order_error'] = '❌ Произошла ошибка: {msg}. Пожалуйста, попробуйте еще раз.';
translations.kg['order_error'] = '❌ Ката кетти: {msg}. Сураныч, кайра аракет кылыңыз.';
// CTA / header small keys
translations.ru['view-menu'] = 'Посмотреть меню';
translations.kg['view-menu'] = 'Менюну караңыз';
// Payment translations
translations.ru['payment-method-label'] = 'Способ оплаты';
translations.kg['payment-method-label'] = 'Төлөө ыкмасы';
translations.ru['payment-cash'] = 'Наличными';
translations.kg['payment-cash'] = 'Накта';
translations.ru['payment-card'] = 'Картой';
translations.kg['payment-card'] = 'Карта менен';
translations.ru['payment-mbank'] = 'MBank';
translations.kg['payment-mbank'] = 'MBank';
// Переводы для выбора типа заказа
translations.ru['order-type-title'] = 'Как вы хотите заказать?';
translations.kg['order-type-title'] = 'Кантип заказ бересиз?';
translations.ru['order-type-cafe'] = 'Я в кафе';
translations.kg['order-type-cafe'] = 'Мен кафедемин';
translations.ru['order-type-pickup'] = 'Самовывоз';
translations.kg['order-type-pickup'] = 'Өзүм алам';
translations.ru['order-type-delivery'] = 'Доставка';
translations.kg['order-type-delivery'] = 'Жеткирүү';
translations.ru['order-type-browse'] = 'Просто посмотреть меню';
translations.kg['order-type-browse'] = 'Менюну гана көрүү';
translations.ru['table-select-title'] = 'Выберите номер стола';
translations.kg['table-select-title'] = 'Стол номурун тандаңыз';
translations.ru['order-address'] = 'Адрес доставки';
translations.kg['order-address'] = 'Жеткирүү дареги';
translations.ru['delivery-form-title'] = 'Данные для доставки';
translations.kg['delivery-form-title'] = 'Жеткирүү үчүн маалыматтар';
translations.ru['back'] = 'Назад';
translations.kg['back'] = 'Артка';
translations.ru['continue'] = 'Продолжить';
translations.kg['continue'] = 'Улантуу';

// Английские переводы для дополнительных строк
translations.en['adding'] = 'Adding…';
translations.en['added'] = 'Added:';
translations.en['order_sent_success'] = '✅ Order sent! We will contact you soon.';
translations.en['min_order_msg'] = 'Minimum order for delivery is {min} som. Current total: {current} som.';
translations.en['fill_required'] = 'Please fill in all required fields';
translations.en['confirm_clear_cart'] = 'Clear cart?';
translations.en['cart_empty_msg'] = 'Cart is empty. Add dishes to your cart.';
translations.en['invalid_phone'] = 'Please enter a valid phone number';
translations.en['select_image'] = 'Please select an image';
translations.en['select_rating'] = 'Please select a rating';
translations.en['review_thanks'] = 'Thank you for your review!';
translations.en['order_error'] = '❌ Error occurred: {msg}. Please try again.';
translations.en['view-menu'] = 'View menu';
translations.en['payment-method-label'] = 'Payment method';
translations.en['payment-cash'] = 'Cash';
translations.en['payment-card'] = 'Card';
translations.en['payment-mbank'] = 'MBank';
translations.en['order-type-title'] = 'How would you like to order?';
translations.en['order-type-cafe'] = 'I\'m at the cafe';
translations.en['order-type-pickup'] = 'Pickup';
translations.en['order-type-delivery'] = 'Delivery';
translations.en['order-type-browse'] = 'Just browse the menu';
translations.en['table-select-title'] = 'Select your table';
translations.en['order-address'] = 'Delivery address';
translations.en['delivery-form-title'] = 'Delivery information';
translations.en['back'] = 'Back';
translations.en['continue'] = 'Continue';
// ============================================
// Константы
// ============================================

const CAFE_PHONE_NUMBER = '996998252023';
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwRZDDKK04OEv-ySYHz6XbskBZXp7vGYcWxp7fYiLSmrVe0fjHi7KgDEIGIFnIEFYrn/exec';
const REVIEWS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyYVg9L5UtQISuiSDvzxcleVKqN4mLN4b3to64DRukMGMN6kTCnYhX3F5BfSSwA85hUWg/exec';


let currentWaiter = null;

function loadWaiterConfig() {
    try {
        const raw = localStorage.getItem('waiterConfig');
        if (!raw) return;
        const cfg = JSON.parse(raw);
        if (cfg.waiters) WAITERS = cfg.waiters;
        if (cfg.waiterTables) WAITER_TABLES = cfg.waiterTables;
    } catch (e) { }
}

function saveWaiterConfig() {
    try {
        localStorage.setItem('waiterConfig', JSON.stringify({ waiters: WAITERS, waiterTables: WAITER_TABLES }));
    } catch (e) { }
}

function getWaiterForTable(num) {
    for (const wid in WAITER_TABLES) {
        if ((WAITER_TABLES[wid] || []).indexOf(Number(num)) !== -1) return WAITERS[wid] || null;
    }
    return null;
}

loadWaiterConfig();

// ============================================
// Глобальные переменные
// ============================================

let currentLang = localStorage.getItem('lang') || 'ru';
let currentTheme = localStorage.getItem('theme') || 'light';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all';
let currentSliderIndex = 0;
let orderType = null;
let tableNumber = null;
let deliveryInfo = null;
let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    initLanguage();
    renderMenu();
    updateCartUI();
    initEventListeners();
    initHeaderScroll();
    initVariantModal();
    await initReviews();

    try {
        const savedDelivery = localStorage.getItem('deliveryInfo');
        if (savedDelivery) deliveryInfo = JSON.parse(savedDelivery);
    } catch (e) { deliveryInfo = null; }

    animateWelcome();

    // Lightbox
    const closeLb = document.getElementById('closeLightbox');
    const lb = document.getElementById('imageLightbox');
    if (closeLb) closeLb.addEventListener('click', closeImageLightbox);
    if (lb) lb.addEventListener('click', e => { if (e.target === lb) closeImageLightbox(); });

    initPaymentOptions();
    initOrderFormValidation();
    initOrderTypeModal();

    const handledByUrl = initTableFromUrl();
    if (!handledByUrl) {
        try {
            const savedWaiter = localStorage.getItem('currentWaiter');
            if (savedWaiter && !currentWaiter) {
                currentWaiter = JSON.parse(savedWaiter);
            }
        } catch (e) { }

        const orderTypeModal = document.getElementById('orderTypeModal');
        if (orderTypeModal) {
            orderTypeModal.classList.add('active');
            enableModalLock();
        }
    }
});

// ============================================
// VARIANT MODAL (для позиций с несколькими объёмами)
// ============================================

let variantCallback = null;

function initVariantModal() {
    // Создаём модал если его нет
    if (document.getElementById('variantModal')) return;

    const overlay = document.createElement('div');
    overlay.className = 'variant-modal-overlay';
    overlay.id = 'variantModalOverlay';

    overlay.innerHTML = `
        <div class="variant-modal" id="variantModal">
            <button class="variant-modal-close" id="variantModalClose">&times;</button>
            <h3 id="variantModalTitle"></h3>
            <p class="variant-hint" id="variantModalHint"></p>
            <div class="variant-options" id="variantOptions"></div>
        </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById('variantModalClose').addEventListener('click', closeVariantModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeVariantModal(); });
}

function openVariantModal(item, onSelect) {
    variantCallback = onSelect;

    const overlay = document.getElementById('variantModalOverlay');
    const title = document.getElementById('variantModalTitle');
    const hint = document.getElementById('variantModalHint');
    const options = document.getElementById('variantOptions');

    const name = currentLang === 'ru' ? item.name : (item.nameKg || item.name);
    title.textContent = name;
    hint.textContent = currentLang === 'ru' ? 'Выберите объём или вариант:' : 'Көлөмдү же вариантты тандаңыз:';

    options.innerHTML = '';

    (item.variants || []).forEach(v => {
        const btn = document.createElement('button');
        btn.className = 'variant-option';
        btn.innerHTML = `
            <span class="vo-label">${v.label}</span>
            <span class="vo-price">${v.price} <span style="font-size:0.8em;font-weight:400">${translations[currentLang]?.currency || 'сом'}</span></span>
        `;
        btn.addEventListener('click', () => {
            if (variantCallback) variantCallback(v);
            closeVariantModal();
        });
        options.appendChild(btn);
    });

    overlay.classList.add('active');
}

function closeVariantModal() {
    const overlay = document.getElementById('variantModalOverlay');
    if (overlay) overlay.classList.remove('active');
    variantCallback = null;
}

// ============================================
// CART
// ============================================

function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    // Если у позиции есть варианты — показываем модал
    if (item.variants && item.variants.length > 0) {
        openVariantModal(item, (variant) => {
            addCartItem(item, variant);
        });
        return;
    }

    // Обычное добавление
    addCartItem(item, null);
}

function addCartItem(item, variant) {
    const cartId = variant ? `${item.id}_${variant.label}` : String(item.id);
    const price = variant ? variant.price : item.price;
    const nameSuffix = variant ? ` (${variant.label})` : '';
    const name = (currentLang === 'ru' ? item.name : (item.nameKg || item.name)) + nameSuffix;

    const existing = cart.find(ci => ci.cartId === cartId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            cartId,
            id: item.id,
            name,
            price,
            image: item.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    renderMenu();

    const addedLabel = translations[currentLang]?.added || (currentLang === 'ru' ? 'Добавлено:' : 'Кошулду:');
    showToast(`${addedLabel} ${name}`);
}

function increaseQuantity(cartId) {
    const item = cart.find(ci => ci.cartId === cartId);
    if (item) { item.quantity += 1; saveCart(); updateCartUI(); renderMenu(); }
}

function decreaseQuantity(cartId) {
    const item = cart.find(ci => ci.cartId === cartId);
    if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) cart = cart.filter(ci => ci.cartId !== cartId);
        saveCart(); updateCartUI(); renderMenu();
    }
}

function removeFromCart(cartId) {
    cart = cart.filter(ci => ci.cartId !== cartId);
    saveCart(); updateCartUI(); renderMenu();
}

function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }

function updateCartUI() {
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);

    ['cartBadge', 'bottomNavBadge'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = totalItems;
            el.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    });

    const cartItemsEl = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartTotal = document.getElementById('cartTotal');
    const totalPrice = document.getElementById('totalPrice');

    if (!cartItemsEl || !cartEmpty || !cartTotal || !totalPrice) return;

    if (cart.length === 0) {
        cartItemsEl.style.display = 'none';
        cartEmpty.style.display = 'block';
        cartTotal.style.display = 'none';
    } else {
        cartItemsEl.style.display = 'flex';
        cartEmpty.style.display = 'none';
        cartTotal.style.display = 'block';

        cartItemsEl.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80x80?text=?'">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} ${translations[currentLang]?.currency || 'сом'} × ${item.quantity}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="decreaseQuantity('${item.cartId}')">−</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity('${item.cartId}')">+</button>
                </div>
                <div class="cart-item-total">${itemTotal} ${translations[currentLang]?.currency || 'сом'}</div>
                <button class="quantity-btn" onclick="removeFromCart('${item.cartId}')" style="background:#e05252;" title="${translations[currentLang]?.remove || '×'}">×</button>
            `;
            cartItemsEl.appendChild(div);
        });

        totalPrice.textContent = `${total} ${translations[currentLang]?.currency || 'сом'}`;
    }

    try { validateOrderForm(); } catch (e) { }
}

// ============================================
// MENU RENDER
// ============================================

function renderMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    menuGrid.innerHTML = '';

    const filtered = currentCategory === 'all'
        ? menuData
        : menuData.filter(item => item.category === currentCategory);

    filtered.forEach(item => {
        menuGrid.appendChild(createMenuCard(item));
    });
}

function getCategoryLabel(cat) {
    const map = {
        first: { ru: 'Первые', kg: 'Биринчи' },
        second: { ru: 'Вторые', kg: 'Экинчи' },
        special: { ru: 'Заказное', kg: 'Заказ' },
        shashlik: { ru: 'Шашлык', kg: 'Кебаб' },
        salad: { ru: 'Салат', kg: 'Салат' },
        'salad-oil': { ru: 'Салат (масло)', kg: 'Салат (май)' },
        'salad-mayo': { ru: 'Салат (майонез)', kg: 'Салат (майонез)' },
        dessert: { ru: 'Десерт', kg: 'Десерт' },
        drink: { ru: 'Напиток', kg: 'Суусундук' },
        fastfood: { ru: 'Fast-Food', kg: 'Fast-Food' }
    };
    return (map[cat] && map[cat][currentLang]) || '';
}

function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';

    const name = currentLang === 'ru' ? item.name : (item.nameKg || item.name);
    const description = currentLang === 'ru' ? item.description : (item.descriptionKg || item.description);
    const catLabel = getCategoryLabel(item.category);

    // Price display
    let priceDisplay;
    if (item.variants && item.variants.length > 0) {
        const prices = item.variants.map(v => v.price);
        const minP = Math.min(...prices);
        const maxP = Math.max(...prices);
        priceDisplay = minP === maxP ? `${minP}` : `${minP}–${maxP}`;
    } else if (item.price2) {
        priceDisplay = `${item.price} / ${item.price2}`;
    } else {
        priceDisplay = `${item.price}`;
    }

    const existing = cart.find(ci => ci.id === item.id);
    const hasInCart = existing && !item.variants;
    const qty = hasInCart ? existing.quantity : 0;

    card.innerHTML = `
        <div class="dish-image-wrap">
            <img class="dish-image" src="${item.image}" alt="${name}" onerror="this.src='https://via.placeholder.com/400x260?text=?'" loading="lazy">
            ${catLabel ? `<span class="dish-category-badge">${catLabel}</span>` : ''}
        </div>
        <div class="dish-info">
            <div class="dish-name">${name}</div>
            ${description ? `<div class="dish-description">${description}</div>` : ''}
            <div class="dish-footer">
                <div class="dish-price">${priceDisplay} <small>${translations[currentLang]?.currency || 'сом'}</small></div>
                <div class="dish-actions">
                    ${(item.variants && item.variants.length > 0)
            ? `<button class="btn-add-cart" onclick="addToCart(${item.id})">${translations[currentLang]?.['add-to-cart'] || 'В корзину'}</button>`
            : qty === 0
                ? `<button class="btn-add-cart" data-item-id="${item.id}" onclick="addToCart(${item.id})">${translations[currentLang]?.['add-to-cart'] || 'В корзину'}</button>`
                : `<div class="quantity-controls">
                                <button class="quantity-btn" onclick="decreaseQuantity('${item.id}')">−</button>
                                <span class="quantity-value">${qty}</span>
                                <button class="quantity-btn" onclick="increaseQuantity('${item.id}')">+</button>
                               </div>`
        }
                </div>
            </div>
        </div>
    `;

    card.addEventListener('click', e => {
        if (e.target.closest('button') || e.target.closest('.dish-actions')) return;
        showDishDetails(item.id);
    });

    return card;
}

function filterByCategory(category) {
    currentCategory = category;
    renderMenu();
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// DISH DETAILS
// ============================================

function showDishDetails(dishId) {
    const dish = menuData.find(i => i.id === dishId);
    if (!dish) return;

    const modal = document.getElementById('dishDetailsModal');
    const title = document.getElementById('dishDetailsTitle');
    const name = document.getElementById('dishDetailsName');
    const description = document.getElementById('dishDetailsDescription');
    const price = document.getElementById('dishDetailsPrice');
    const ingredientsList = document.getElementById('dishIngredientsList');
    const slider = document.getElementById('dishSlider');
    const sliderDots = document.getElementById('sliderDots');
    const addBtn = document.getElementById('addToCartFromDetails');

    if (!modal) return;

    const dishName = currentLang === 'ru' ? dish.name : (dish.nameKg || dish.name);
    const dishDesc = currentLang === 'ru' ? dish.description : (dish.descriptionKg || dish.description);

    let priceText;
    if (dish.variants && dish.variants.length > 0) {
        const prices = dish.variants.map(v => v.price);
        const minP = Math.min(...prices);
        const maxP = Math.max(...prices);
        priceText = minP === maxP ? `${minP}` : `от ${minP}`;
    } else if (dish.price2) {
        priceText = `${dish.price} / ${dish.price2}`;
    } else {
        priceText = `${dish.price}`;
    }

    if (title) title.textContent = dishName;
    if (name) name.textContent = dishName;
    if (description) description.textContent = dishDesc;
    if (price) price.textContent = `${priceText} ${translations[currentLang]?.currency || 'сом'}`;
    if (addBtn) addBtn.setAttribute('data-dish-id', dishId);

    const images = dish.images?.length ? dish.images : [dish.image];
    currentSliderIndex = 0;

    if (slider) slider.innerHTML = '';
    if (sliderDots) sliderDots.innerHTML = '';

    images.forEach((img, i) => {
        const slide = document.createElement('div');
        slide.className = 'slider-slide';
        slide.innerHTML = `<img src="${img}" alt="${dishName}" onclick="openImageLightbox('${img}','${dishName}')" onerror="this.src='https://via.placeholder.com/600x360?text=?'">`;
        slider?.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        sliderDots?.appendChild(dot);
    });

    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    if (sliderPrev) sliderPrev.style.display = images.length > 1 ? 'flex' : 'none';
    if (sliderNext) sliderNext.style.display = images.length > 1 ? 'flex' : 'none';
    if (sliderDots) sliderDots.style.display = images.length > 1 ? 'flex' : 'none';

    if (ingredientsList) {
        ingredientsList.innerHTML = '';
        const ings = currentLang === 'ru' ? (dish.ingredients || []) : (dish.ingredientsKg || dish.ingredients || []);
        if (ings.length > 0) {
            ings.forEach(ing => {
                const li = document.createElement('li');
                li.textContent = ing;
                ingredientsList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = dishDesc;
            ingredientsList.appendChild(li);
        }
    }

    modal.classList.add('active');
    updateSlider();
}

function changeSliderImage(dir) {
    const slider = document.getElementById('dishSlider');
    if (!slider) return;
    const slides = slider.querySelectorAll('.slider-slide');
    currentSliderIndex = (currentSliderIndex + dir + slides.length) % slides.length;
    updateSlider();
}

function goToSlide(i) {
    currentSliderIndex = i;
    updateSlider();
}

function updateSlider() {
    const slider = document.getElementById('dishSlider');
    const dots = document.querySelectorAll('.slider-dot');
    if (!slider) return;
    slider.style.transform = `translateX(-${currentSliderIndex * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSliderIndex));
}

// ============================================
// ORDER FORM
// ============================================

function validateOrderForm() {
    const submitBtn = document.getElementById('submitOrderBtn');
    if (!submitBtn) return;

    const name = document.getElementById('customerName');
    const phone = document.getElementById('customerPhone');
    const payment = document.querySelector('input[name="paymentMethod"]:checked');

    const phoneVal = phone ? phone.value.trim().replace(/\s/g, '') : '';
    const phoneOk = /^[0-9]{9}$/.test(phoneVal);
    const nameOk = name && name.value.trim().length > 0;
    const ready = cart.length > 0 && nameOk && phoneOk && !!payment;

    submitBtn.disabled = !ready;
    submitBtn.classList.toggle('ready', ready);
}

function formatPhoneInput(input) {
    let v = input.value.replace(/\D/g, '').slice(0, 9);
    let f = v.slice(0, 3);
    if (v.length > 3) f += ' ' + v.slice(3, 5);
    if (v.length > 5) f += ' ' + v.slice(5, 7);
    if (v.length > 7) f += ' ' + v.slice(7, 9);
    input.value = f;
}

function initOrderFormValidation() {
    const name = document.getElementById('customerName');
    const phone = document.getElementById('customerPhone');
    const deliveryPhone = document.getElementById('deliveryPhone');
    const radios = document.querySelectorAll('input[name="paymentMethod"]');

    if (name) name.addEventListener('input', validateOrderForm);
    if (phone) phone.addEventListener('input', () => { formatPhoneInput(phone); validateOrderForm(); });
    if (deliveryPhone) deliveryPhone.addEventListener('input', () => formatPhoneInput(deliveryPhone));
    radios.forEach(r => r.addEventListener('change', validateOrderForm));
    validateOrderForm();
}

function initPaymentOptions() {
    const options = document.querySelectorAll('.payment-option');
    if (!options.length) return;

    function refresh() {
        options.forEach(opt => opt.classList.remove('selected'));
        const checked = document.querySelector('input[name="paymentMethod"]:checked');
        if (checked) checked.closest('.payment-option')?.classList.add('selected');
    }

    refresh();

    const radios = document.querySelectorAll('input[name="paymentMethod"]');
    radios.forEach(r => r.addEventListener('change', e => { refresh(); toggleMbankQr(e.target.value); }));

    options.forEach(opt => opt.addEventListener('click', () => {
        const inp = opt.querySelector('input[name="paymentMethod"]');
        if (inp) { inp.checked = true; inp.dispatchEvent(new Event('change', { bubbles: true })); }
    }));

    const checked = document.querySelector('input[name="paymentMethod"]:checked');
    toggleMbankQr(checked ? checked.value : null);
}

function toggleMbankQr(val) {
    const c = document.getElementById('mbankQrContainer');
    if (c) c.style.display = val === 'mbank' ? 'block' : 'none';
}

function adjustPaymentOptionsForDelivery() {
    const cardInput = document.querySelector('input[name="paymentMethod"][value="card"]');
    const cardLabel = cardInput?.closest('.payment-option');
    if (orderType === 'delivery') {
        if (cardLabel) cardLabel.style.display = 'none';
        const checked = document.querySelector('input[name="paymentMethod"]:checked');
        if (checked?.value === 'card') {
            const cash = document.querySelector('input[name="paymentMethod"][value="cash"]');
            if (cash) { cash.checked = true; cash.dispatchEvent(new Event('change', { bubbles: true })); }
        }
    } else {
        if (cardLabel) cardLabel.style.display = '';
    }
}

// ============================================
// ORDER TYPE MODAL
// ============================================

function initOrderTypeModal() {
    const modal = document.getElementById('orderTypeModal');
    const tableModal = document.getElementById('tableSelectModal');
    const deliveryModal = document.getElementById('deliveryFormModal');
    const tableGrid = document.getElementById('tableGrid');

    initLangSelectButtons();

    if (tableGrid) {
        tableGrid.innerHTML = '';
        for (let i = 1; i <= 11; i++) {
            const btn = document.createElement('button');
            btn.className = 'table-btn';
            btn.textContent = i;
            btn.dataset.table = i;
            btn.addEventListener('click', () => selectTable(i));
            tableGrid.appendChild(btn);
        }
    }

    try {
        const params = new URLSearchParams(window.location.search);
        const tableParam = params.get('table');
        const cafeBtn = document.getElementById('orderTypeCafe');
        if (cafeBtn && !tableParam) cafeBtn.style.display = 'none';
    } catch (e) { }

    const cafeBtn = document.getElementById('orderTypeCafe');
    const pickupBtn = document.getElementById('orderTypePickup');
    const deliveryBtn = document.getElementById('orderTypeDelivery');
    const browseBtn = document.getElementById('orderTypeBrowse');
    const closeTableBtn = document.getElementById('closeTableModal');
    const closeDeliveryBtn = document.getElementById('closeDeliveryModal');
    const backToOrderTypeBtn = document.getElementById('backToOrderType');
    const deliveryForm = document.getElementById('deliveryInfoForm');

    if (cafeBtn) cafeBtn.addEventListener('click', showTableSelect);
    if (pickupBtn) pickupBtn.addEventListener('click', () => setOrderType('pickup'));
    if (deliveryBtn) deliveryBtn.addEventListener('click', showDeliveryForm);
    if (browseBtn) browseBtn.addEventListener('click', () => setOrderType('browse'));

    if (closeTableBtn) closeTableBtn.addEventListener('click', () => {
        tableModal?.classList.remove('active');
        modal?.classList.add('active');
    });

    if (closeDeliveryBtn) closeDeliveryBtn.addEventListener('click', () => {
        deliveryModal?.classList.remove('active');
        modal?.classList.add('active');
    });

    if (backToOrderTypeBtn) backToOrderTypeBtn.addEventListener('click', () => {
        deliveryModal?.classList.remove('active');
        modal?.classList.add('active');
    });

    if (deliveryForm) {
        deliveryForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = document.getElementById('deliveryName').value.trim();
            const phone = document.getElementById('deliveryPhone').value.trim();
            const address = document.getElementById('deliveryAddressInput').value.trim();
            if (name && phone && address) {
                deliveryInfo = { name, phone, address };
                try { localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo)); } catch (e) { }
                setOrderType('delivery');
                deliveryModal?.classList.remove('active');
            }
        });
    }

    [tableModal, deliveryModal].forEach(m => {
        if (m) m.addEventListener('click', e => {
            if (e.target === m) {
                m.classList.remove('active');
                modal?.classList.add('active');
            }
        });
    });
}

function initLangSelectButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === btn.dataset.lang));
            const langBtnRu = document.getElementById('langBtnRu');
            const langBtnKg = document.getElementById('langBtnKg');
            if (langBtnRu) langBtnRu.classList.toggle('active', btn.dataset.lang === 'ru');
            if (langBtnKg) langBtnKg.classList.toggle('active', btn.dataset.lang === 'kg');
        });
    });
}

function showTableSelect() {
    document.getElementById('orderTypeModal')?.classList.remove('active');
    document.getElementById('tableSelectModal')?.classList.add('active');
    enableModalLock();
}

function showDeliveryForm() {
    document.getElementById('orderTypeModal')?.classList.remove('active');
    document.getElementById('deliveryFormModal')?.classList.add('active');
    enableModalLock();
}

function selectTable(num) {
    tableNumber = num;
    const waiter = getWaiterForTable(num);
    if (waiter) {
        currentWaiter = waiter;
        try { localStorage.setItem('currentWaiter', JSON.stringify(currentWaiter)); } catch (e) { }
    }
    setOrderType('cafe');
    document.getElementById('tableSelectModal')?.classList.remove('active');
    setTimeout(() => notifyAssignedWaiter(), 250);
}

function setOrderType(type) {
    orderType = type;
    document.getElementById('orderTypeModal')?.classList.remove('active');
    document.getElementById('tableSelectModal')?.classList.remove('active');
    applyOrderTypeMode();
    disableModalLock();
}

function applyOrderTypeMode() {
    document.body.classList.toggle('browse-mode', orderType === 'browse');
    updateDeliveryAddressVisibility();
    adjustPaymentOptionsForDelivery();
}

function updateDeliveryAddressVisibility() {
    const ag = document.getElementById('deliveryAddressGroup');
    if (ag) ag.style.display = orderType === 'delivery' ? 'block' : 'none';
}

function getOrderTypeText() {
    if (!orderType || orderType === 'browse') return '';
    if (orderType === 'cafe' && tableNumber) return `📍 Стол №${tableNumber}`;
    if (orderType === 'pickup') return currentLang === 'ru' ? '📍 Самовывоз' : '📍 Өзү алып кетүү';
    if (orderType === 'delivery' && deliveryInfo) return currentLang === 'ru' ? `📍 Доставка: ${deliveryInfo.address}` : `📍 Жеткирүү: ${deliveryInfo.address}`;
    return '';
}

function enableModalLock() {
    document.body.classList.add('modal-blocked');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
}

function disableModalLock() {
    document.body.classList.remove('modal-blocked');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
}

function initTableFromUrl() {
    try {
        const params = new URLSearchParams(window.location.search);
        const tableParam = params.get('table');
        if (!tableParam) return false;
        const num = parseInt(tableParam, 10);
        if (!Number.isFinite(num) || num < 1 || num > 11) return false;

        tableNumber = num;
        orderType = 'cafe';
        try { localStorage.setItem('currentTableNumber', String(num)); } catch (e) { }

        const waiter = getWaiterForTable(num);
        if (waiter) {
            currentWaiter = waiter;
            try { localStorage.setItem('currentWaiter', JSON.stringify(waiter)); } catch (e) { }
        }

        applyOrderTypeMode();
        setTimeout(() => notifyAssignedWaiter(), 300);
        return true;
    } catch (e) { return false; }
}

function notifyAssignedWaiter() {
    if (!currentWaiter) return;
    const waiterLabel = translations[currentLang]?.['waiter-label'] || 'Ваш официант';
    showToast(`${waiterLabel}: ${currentWaiter.name}`);
    if (document.getElementById('waiterBanner')) return;

    const banner = document.createElement('div');
    banner.id = 'waiterBanner';
    Object.assign(banner.style, {
        position: 'fixed', right: '14px', bottom: '80px', zIndex: 5000,
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius)', padding: '12px 14px',
        boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '10px'
    });

    const waiterWrite = translations[currentLang]?.['waiter-write'] || 'Написать';
    banner.innerHTML = `
        <img src="${currentWaiter.photo || './icons/plate-eating.svg'}" alt="${currentWaiter.name}"
             style="width:44px;height:44px;object-fit:cover;border-radius:8px;">
        <div style="display:flex;flex-direction:column;gap:2px;">
            <strong style="font-size:0.9rem;color:var(--text)">${currentWaiter.name}</strong>
            <span style="font-size:0.78rem;color:var(--text-2)">${waiterLabel}</span>
        </div>
        <button class="btn btn-primary" style="padding:7px 14px;font-size:0.82rem;" id="waiterWriteBtn">${waiterWrite}</button>
        <button style="background:var(--bg-2);border:1px solid var(--border);border-radius:6px;width:28px;height:28px;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;color:var(--text-2);" id="waiterCloseBtn">×</button>
    `;

    document.body.appendChild(banner);

    document.getElementById('waiterWriteBtn')?.addEventListener('click', () => {
        const msg = `Здравствуйте, у меня заказ за столом №${tableNumber}`;
        sendToWhatsAppTo(msg, currentWaiter.phone);
    });

    const timeoutId = setTimeout(() => banner.parentNode?.removeChild(banner), 7000);
    document.getElementById('waiterCloseBtn')?.addEventListener('click', () => {
        clearTimeout(timeoutId);
        banner.parentNode?.removeChild(banner);
    });
}

// ============================================
// ORDER SUBMIT
// ============================================

function showOrderForm() {
    if (cart.length === 0) {
        alert(translations[currentLang]?.cart_empty_msg || 'Корзина пуста');
        return;
    }

    const orderModal = document.getElementById('orderModal');
    const orderSummary = document.getElementById('orderSummary');
    const orderForm = document.getElementById('orderForm');

    if (!orderModal || !orderSummary || !orderForm) return;

    orderForm.reset();

    if (orderType === 'delivery' && deliveryInfo) {
        const nameI = document.getElementById('customerName');
        const phoneI = document.getElementById('customerPhone');
        const addrI = document.getElementById('deliveryAddress');
        if (nameI) nameI.value = deliveryInfo.name || '';
        if (phoneI) phoneI.value = deliveryInfo.phone || '';
        if (addrI) addrI.value = deliveryInfo.address || '';
    }

    let summaryHTML = '';
    let total = 0;
    cart.forEach(item => {
        const it = item.price * item.quantity;
        total += it;
        summaryHTML += `<div class="order-summary-item"><span>${item.name} × ${item.quantity}</span><span>${it} ${translations[currentLang]?.currency || 'сом'}</span></div>`;
    });
    summaryHTML += `<div class="order-summary-item" style="font-weight:700;border-top:2px solid var(--border);margin-top:4px;padding-top:8px;"><span>${translations[currentLang]?.['cart-total'] || 'Итого:'}</span><span>${total} ${translations[currentLang]?.currency || 'сом'}</span></div>`;
    orderSummary.innerHTML = summaryHTML;

    updateDeliveryAddressVisibility();
    adjustPaymentOptionsForDelivery();
    const checked = document.querySelector('input[name="paymentMethod"]:checked');
    toggleMbankQr(checked ? checked.value : null);
    validateOrderForm();

    orderModal.classList.add('active');
}

function createOrderText(name, phone, comment, paymentMethod) {
    if (cart.length === 0) throw new Error('Корзина пуста');

    let itemsText = '';
    let total = 0;
    cart.forEach(item => {
        const it = item.price * item.quantity;
        total += it;
        itemsText += `${item.name} x${item.quantity} — ${it} ${translations[currentLang]?.currency || 'сом'}\n`;
    });

    const totalText = `\n💰 Итого: ${total} ${translations[currentLang]?.currency || 'сом'}\n`;
    const fullPhone = '+996 ' + phone;
    const customerInfo = `👤 ${name}\n📞 ${fullPhone}`;

    let paymentText = '';
    if (paymentMethod) {
        const pm = paymentMethod === 'cash' ? (translations[currentLang]?.['payment-cash'] || 'Наличными')
            : paymentMethod === 'card' ? (translations[currentLang]?.['payment-card'] || 'Картой')
                : 'MBank';
        paymentText = `\n💳 ${pm}`;
    }

    let commentText = comment?.trim() ? `\n📝 ${comment.trim()}` : '';
    const orderTypeText = getOrderTypeText() ? `\n${getOrderTypeText()}` : '';

    return `🍽 ${currentLang === 'ru' ? 'Новый заказ — Кафе Cholpon' : 'Жаңы заказ — Cholpon кафе'}\n\n${itemsText}${totalText}${customerInfo}${paymentText}${orderTypeText}${commentText}`;
}

function sendToWhatsApp(text) {
    window.open(`https://wa.me/${CAFE_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

function sendToWhatsAppTo(text, phone) {
    if (!phone) return sendToWhatsApp(text);
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`, '_blank');
}

async function sendToExcel(name, phone, comment, paymentMethod, address) {
    if (!GOOGLE_SHEETS_URL || GOOGLE_SHEETS_URL.includes('YOUR_')) return;
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const orderText = cart.map(i => `${i.name} × ${i.quantity}`).join(', ');
    const orderData = {
        date: new Date().toLocaleString('ru-RU'),
        order: orderText,
        total,
        customerName: name,
        customerPhone: phone,
        comment: ((comment?.trim() ? comment.trim() + ' | ' : '') + (address || '')),
        paymentMethod: paymentMethod || ''
    };
    try {
        await fetch(GOOGLE_SHEETS_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(orderData) });
    } catch (e) { console.warn('Sheets error:', e); }
}

function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    updateCartUI();
    renderMenu();
}

async function placeOrder(e) {
    e.preventDefault();

    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const comment = document.getElementById('orderComment').value.trim();

    if (!cart.length) { alert('Корзина пуста'); return; }
    if (!name || !phone) { alert(currentLang === 'ru' ? 'Заполните все поля' : 'Бардык талааларды толтуруңуз'); return; }

    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'cash';

    if (orderType === 'delivery') {
        const addrInput = document.getElementById('deliveryAddress');
        if (!deliveryInfo) deliveryInfo = {};
        deliveryInfo.address = addrInput?.value.trim() || deliveryInfo.address;
        try { localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo)); } catch (e) { }
    }

    const orderText = createOrderText(name, phone, comment, paymentMethod);
    const targetPhone = (orderType === 'cafe' && currentWaiter?.phone) ? currentWaiter.phone : CAFE_PHONE_NUMBER;
    sendToWhatsAppTo(orderText, targetPhone);

    const deliveryAddr = (orderType === 'delivery' && deliveryInfo?.address) ? deliveryInfo.address : '';
    sendToExcel(name, phone, comment, paymentMethod, deliveryAddr).catch(() => { });

    clearCart();
    document.getElementById('orderModal')?.classList.remove('active');
    alert(currentLang === 'ru' ? '✅ Заказ отправлен!' : '✅ Заказ жөнөтүлдү!');
}

function handleOrderSubmit(e) { placeOrder(e); }

// ============================================
// THEME & LANGUAGE
// ============================================

function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.innerHTML = currentTheme === 'dark'
            ? '<img src="icons/brightness.svg" alt="light" style="width:20px;height:20px">'
            : '<img src="icons/moon-stars.svg" alt="dark" style="width:20px;height:20px">';
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    initTheme();
}

function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) langToggle.textContent = currentLang.toUpperCase();

    const langBtnRu = document.getElementById('langBtnRu');
    const langBtnKg = document.getElementById('langBtnKg');
    if (langBtnRu) langBtnRu.classList.toggle('active', currentLang === 'ru');
    if (langBtnKg) langBtnKg.classList.toggle('active', currentLang === 'kg');

    translatePage();
}

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const txt = translations[currentLang]?.[key];
        if (txt) {
            if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') el.textContent = txt;
            if (el.hasAttribute('placeholder')) el.setAttribute('placeholder', txt);
        }
    });
}

function toggleLanguage() { setLanguage(currentLang === 'ru' ? 'kg' : 'ru'); }

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    initLanguage();
    renderMenu();
    updateCartUI();

    const langToggle = document.getElementById('langToggle');
    if (langToggle) langToggle.textContent = lang.toUpperCase();

    const langBtnRu = document.getElementById('langBtnRu');
    const langBtnKg = document.getElementById('langBtnKg');
    if (langBtnRu) langBtnRu.classList.toggle('active', lang === 'ru');
    if (langBtnKg) langBtnKg.classList.toggle('active', lang === 'kg');
}

function updateLanguage() { translatePage(); }

// ============================================
// EVENT LISTENERS
// ============================================

function initEventListeners() {
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
    document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);
    document.getElementById('langBtnRu')?.addEventListener('click', () => setLanguage('ru'));
    document.getElementById('langBtnKg')?.addEventListener('click', () => setLanguage('kg'));

    const cartIconBtn = document.getElementById('cartIconBtn');
    if (cartIconBtn) cartIconBtn.addEventListener('click', () => document.getElementById('cartModal')?.classList.add('active'));

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            mobileMenuBtn.setAttribute('aria-expanded', String(mainNav.classList.contains('open')));
        });
        document.addEventListener('click', e => {
            if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mainNav.classList.remove('open');
            }
        });
    }

    document.getElementById('closeCartModal')?.addEventListener('click', () => document.getElementById('cartModal')?.classList.remove('active'));
    document.getElementById('cartModal')?.addEventListener('click', e => { if (e.target.id === 'cartModal') e.target.classList.remove('active'); });
    document.getElementById('closeOrderModal')?.addEventListener('click', () => document.getElementById('orderModal')?.classList.remove('active'));
    document.getElementById('cancelOrder')?.addEventListener('click', () => document.getElementById('orderModal')?.classList.remove('active'));
    document.getElementById('closeDishDetailsModal')?.addEventListener('click', () => document.getElementById('dishDetailsModal')?.classList.remove('active'));

    document.getElementById('variantModalClose')?.addEventListener('click', closeVariantModal);

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', e => {
            if (overlay.id === 'orderTypeModal' && overlay.classList.contains('active')) return;
            if (e.target === overlay) overlay.classList.remove('active');
        });
    });

    document.getElementById('clearCart')?.addEventListener('click', () => {
        const msg = translations[currentLang]?.confirm_clear_cart || 'Очистить корзину?';
        if (confirm(msg)) { cart = []; saveCart(); updateCartUI(); }
    });

    document.getElementById('checkoutBtn')?.addEventListener('click', showOrderForm);
    document.getElementById('orderForm')?.addEventListener('submit', handleOrderSubmit);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterByCategory(btn.getAttribute('data-category'));
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    document.getElementById('addToCartFromDetails')?.addEventListener('click', () => {
        const dishId = parseInt(document.getElementById('addToCartFromDetails').getAttribute('data-dish-id'));
        if (dishId) {
            addToCart(dishId);
            document.getElementById('dishDetailsModal')?.classList.remove('active');
        }
    });

    document.getElementById('sliderPrev')?.addEventListener('click', () => changeSliderImage(-1));
    document.getElementById('sliderNext')?.addEventListener('click', () => changeSliderImage(1));

    // Bottom nav
    const bottomNavMenu = document.getElementById('bottomNavMenu');
    const bottomNavCart = document.getElementById('bottomNavCart');

    if (bottomNavMenu) {
        bottomNavMenu.addEventListener('click', () => {
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
            bottomNavMenu.classList.add('active');
            bottomNavCart?.classList.remove('active');
        });
    }

    if (bottomNavCart) {
        bottomNavCart.addEventListener('click', () => {
            document.getElementById('cartModal')?.classList.add('active');
            bottomNavCart.classList.add('active');
            bottomNavMenu?.classList.remove('active');
        });
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            if (document.body.classList.contains('modal-blocked')) { e.preventDefault(); return; }
            // Close topmost modal
            const vm = document.getElementById('variantModalOverlay');
            if (vm?.classList.contains('active')) { closeVariantModal(); return; }
            document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
        }
    });
}

function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    let last = 0, ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const cur = window.pageYOffset;
                if (cur < 50) { header.classList.remove('hidden'); }
                else if (cur > last && cur > 80) { header.classList.add('hidden'); }
                else if (cur < last) { header.classList.remove('hidden'); }
                last = cur;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// WELCOME ANIMATION
// ============================================

function animateWelcome() {
    const el = document.getElementById('animatedWelcome');
    if (!el) return;
    el.textContent = (translations[currentLang]?.['about-title']) || 'Добро пожаловать в кафе "Cholpon"';
    requestAnimationFrame(() => el.classList.add('fade-in'));

    document.getElementById('viewMenuBtn')?.addEventListener('click', () => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }));
    document.getElementById('viewContactsBtn')?.addEventListener('click', () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }));
}

// ============================================
// TOAST
// ============================================

function showToast(message, timeout = 3000) {
    const toast = document.createElement('div');
    toast.className = 'cf-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    void toast.offsetWidth;
    toast.classList.add('visible');
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 400);
    }, timeout);
}

// ============================================
// LIGHTBOX
// ============================================

function openImageLightbox(src, alt) {
    const lb = document.getElementById('imageLightbox');
    const img = document.getElementById('lightboxImage');
    if (!lb || !img) return;
    img.src = src;
    img.alt = alt || '';
    lb.classList.add('active');
}

function closeImageLightbox() {
    const lb = document.getElementById('imageLightbox');
    const img = document.getElementById('lightboxImage');
    if (!lb || !img) return;
    lb.classList.remove('active');
    img.src = '';
}

// ============================================
// REVIEWS (minimal)
// ============================================

async function initReviews() {
    await fetchReviewsFromServer();
    initStarRating();

    document.getElementById('reviewForm')?.addEventListener('submit', handleReviewSubmit);

    const takePhotoBtn = document.getElementById('takePhotoBtn');
    const choosePhotoBtn = document.getElementById('choosePhotoBtn');
    const removePhotoBtn = document.getElementById('removePhotoBtn');
    const reviewPhoto = document.getElementById('reviewPhoto');

    if (takePhotoBtn && reviewPhoto) {
        takePhotoBtn.addEventListener('click', () => {
            reviewPhoto.setAttribute('capture', 'environment');
            reviewPhoto.click();
        });
    }
    if (choosePhotoBtn && reviewPhoto) {
        choosePhotoBtn.addEventListener('click', () => {
            reviewPhoto.removeAttribute('capture');
            reviewPhoto.click();
        });
    }
    if (removePhotoBtn) {
        removePhotoBtn.addEventListener('click', () => {
            const pp = document.getElementById('photoPreview');
            const rp = document.getElementById('reviewPhoto');
            if (pp) pp.innerHTML = '';
            if (rp) rp.value = '';
            removePhotoBtn.style.display = 'none';
        });
    }
    if (reviewPhoto) reviewPhoto.addEventListener('change', handlePhotoSelect);

    displayReviews();
}

function initStarRating() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('reviewRating');
    if (!stars.length || !ratingInput) return;

    stars.forEach((star, i) => {
        star.addEventListener('click', () => {
            ratingInput.value = i + 1;
            updateStarRating(i + 1);
        });
        star.addEventListener('mouseenter', () => updateStarRating(i + 1, true));
    });

    document.getElementById('starRating')?.addEventListener('mouseleave', () => {
        updateStarRating(parseInt(ratingInput.value) || 0);
    });
}

function updateStarRating(rating) {
    document.querySelectorAll('.star').forEach((s, i) => s.classList.toggle('active', i < rating));
}

function handlePhotoSelect(e) {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = ev => {
        const pp = document.getElementById('photoPreview');
        const rb = document.getElementById('removePhotoBtn');
        if (pp) pp.innerHTML = `<img src="${ev.target.result}" alt="Preview" class="photo-preview-image">`;
        if (rb) rb.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function handleReviewSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('reviewerName').value.trim();
    const rating = parseInt(document.getElementById('reviewRating').value);
    const comment = document.getElementById('reviewComment').value.trim();
    const photoInput = document.getElementById('reviewPhoto');

    if (!name || !rating || !comment) {
        alert(currentLang === 'ru' ? 'Заполните все поля' : 'Бардык талааларды толтуруңуз');
        return;
    }

    if (photoInput?.files?.[0]) {
        const reader = new FileReader();
        reader.onload = ev => saveReview(name, rating, comment, ev.target.result);
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        saveReview(name, rating, comment, null);
    }
}

function saveReview(name, rating, comment, photo) {
    const review = {
        id: Date.now(),
        name, rating, comment, photo,
        date: new Date().toLocaleString('ru-RU'),
        timestamp: Date.now()
    };

    reviews.unshift(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    document.getElementById('reviewForm')?.reset();
    const pp = document.getElementById('photoPreview');
    const rb = document.getElementById('removePhotoBtn');
    if (pp) pp.innerHTML = '';
    if (rb) rb.style.display = 'none';
    updateStarRating(0);

    displayReviews();
    alert(currentLang === 'ru' ? 'Спасибо за ваш отзыв!' : 'Пикириңиз үчүн рахмат!');

    postReviewToServer(review).catch(() => { });
}

function displayReviews(limit = 6) {
    const grid = document.getElementById('reviewsGrid');
    const empty = document.getElementById('reviewsEmpty');
    if (!grid || !empty) return;

    if (reviews.length === 0) {
        grid.style.display = 'none';
        empty.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    empty.style.display = 'none';
    grid.innerHTML = '';
    reviews.slice(0, limit).forEach(r => grid.appendChild(createReviewCard(r)));
}

function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';

    let stars = '';
    for (let i = 1; i <= 5; i++) stars += `<span class="review-star ${i <= review.rating ? 'active' : ''}">★</span>`;

    card.innerHTML = `
        <div class="review-header">
            <div class="review-author">
                <strong>${review.name}</strong>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-stars">${stars}</div>
        </div>
        <div class="review-content">
            <p class="review-comment">${review.comment}</p>
            ${review.photo ? `<img src="${review.photo}" alt="Фото" class="review-photo">` : ''}
        </div>
    `;
    return card;
}

function getAllReviews() { return reviews.sort((a, b) => b.timestamp - a.timestamp); }

async function fetchReviewsFromServer() {
    if (!REVIEWS_ENDPOINT) return;
    try {
        const res = await fetch(REVIEWS_ENDPOINT, { headers: { Accept: 'application/json' } });
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data)) {
            reviews = data.sort((a, b) => b.timestamp - a.timestamp);
            localStorage.setItem('reviews', JSON.stringify(reviews));
        }
    } catch (e) { }
}

async function postReviewToServer(review) {
    if (!REVIEWS_ENDPOINT) return false;
    try {
        const res = await fetch(REVIEWS_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        });
        return res.ok ? await res.json() : false;
    } catch (e) { return false; }
}

// ============================================
// EXPOSE GLOBALS
// ============================================

window.addToCart = addToCart;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.removeFromCart = removeFromCart;
window.showDishDetails = showDishDetails;
window.filterByCategory = filterByCategory;
window.getAllReviews = getAllReviews;
window.createReviewCard = createReviewCard;
window.openImageLightbox = openImageLightbox;
window.closeImageLightbox = closeImageLightbox;
