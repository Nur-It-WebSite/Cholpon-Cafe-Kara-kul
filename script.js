const menuData = [
    // ==================== ПИЦЦА ====================
    {
        id: 1,
        name: 'Маргарита',
        nameKg: 'Маргарита',
        description: 'Классическая пицца с томатным соусом и моцареллой',
        descriptionKg: 'Классикалык помидор соусу жана моцарелла менен',
        price: 450,
        image: 'https://img.povar.ru/mobile/64/32/c9/b4/picca_margarita-344259.jpg',
        category: 'pizza',
        images: [
            'https://img.povar.ru/mobile/64/32/c9/b4/picca_margarita-344259.jpg',
            'https://www.koolinar.ru/all_image/recipes/156/156110/recipe_a29c73e2-e7c9-49d0-8baf-1695b91e7b7c_large.jpg'
        ],
        ingredients: ['Тесто', 'Томатный соус', 'Моцарелла', 'Помидоры', 'Базилик'],
        ingredientsKg: ['Камыр', 'Помидор соусу', 'Моцарелла', 'Помидор', 'Базилик']
    },
    {
        id: 2,
        name: 'Пепперони',
        nameKg: 'Пепперони',
        description: 'Пикантная пицца с острой колбасой пепперони и сыром',
        descriptionKg: 'Ачуу пепперони колбасасы жана сыр кошулган пицца',
        price: 480,
        image: 'https://s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg',
        category: 'pizza'
    },
    {
        id: 3,
        name: 'Детская',
        nameKg: 'Балдарга',
        description: 'Нежная пицца с курицей и сладким перцем',
        descriptionKg: 'Тоок эти жана таттуу калемпир кошулган назик пицца',
        price: 480,
        image: 'https://cdn.fishki.net/upload/post/2021/01/13/3539546/5a131d7ccf27.jpg',
        category: 'pizza'
    },
    {
        id: 4,
        name: 'Курица с Грибами',
        nameKg: 'Козу карын менен тоок',
        description: 'Сочная пицца с куриным филе и шампиньонами',
        descriptionKg: 'Тоок филеси жана шампиньон кошулган ширелүү пицца',
        price: 500,
        image: 'https://s3.smartofood.ru/kato/menu/14cce8bc-fddd-5770-9c57-f35c8172513c.webp',
        category: 'pizza'
    },
    {
        id: 5,
        name: 'Фрикасе',
        nameKg: 'Фрикасе',
        description: 'Пицца с нежным соусом фрикасе и курицей',
        descriptionKg: 'Фрикасе соусу жана тоок эти кошулган пицца',
        price: 520,
        image: 'https://edimdoma.ru/data/recipes/0014/4040/144040-ed4_wide.jpg',
        category: 'pizza'
    },
    {
        id: 6,
        name: 'Мясная',
        nameKg: 'Эттүү',
        description: 'Сытная пицца с разными видами мяса',
        descriptionKg: 'Ар кандай эттер кошулган тойумдуу пицца',
        price: 550,
        image: 'https://cipollino.ua/content/uploads/images/recept-myasnoj-piccy-pod-syrom%281%29.jpg',
        category: 'pizza'
    },
    {
        id: 7,
        name: 'Чили',
        nameKg: 'Чили',
        description: 'Острая пицца с перцем чили и пикантными нотками',
        descriptionKg: 'Чили калемпири жана ачуу даамдары менен пицца',
        price: 550,
        image: 'https://lh3.googleusercontent.com/proxy/kyBwClJ3T-f7dLM2fWPPOLSl27CBrM3AuhH52bn2ZxIr97Cz3J3jG1g2-Q5n1l68D6v3Ycgr6Xk7h3aPykN9eZR0xPmxXo32tZ9gJyxQJymy9tZJtZ9gJzZ9gJzZ9g',
        category: 'pizza'
    },

    // ==================== ОСТРЫЕ КРЫЛЬЯШКИ ====================
    {
        id: 8,
        name: 'Крыльяшки 6 шт',
        nameKg: 'Канаттар 6 даана',
        description: 'Острые куриные крылышки',
        descriptionKg: 'Ачуу тоок канаттары',
        price: 240,
        image: 'https://edimdoma.ru/data/recipes/0014/5261/145261-ed4_wide.jpg?1759232294',
        category: 'wings'
    },
    {
        id: 9,
        name: 'Крыльяшки 10 шт',
        nameKg: 'Канаттар 10 даана',
        description: 'Острые куриные крылышки',
        descriptionKg: 'Ачуу тоок канаттары',
        price: 400,
        image: 'https://edimdoma.ru/data/recipes/0014/5261/145261-ed4_wide.jpg?1759232294',
        category: 'wings'
    },
    {
        id: 10,
        name: 'Крыльяшки 15 шт',
        nameKg: 'Канаттар 15 даана',
        description: 'Острые куриные крылышки',
        descriptionKg: 'Ачуу тоок канаттары',
        price: 600,
        image: 'https://edimdoma.ru/data/recipes/0014/5261/145261-ed4_wide.jpg?1759232294',
        category: 'wings'
    },
    {
        id: 11,
        name: 'Крыльяшки 22 шт',
        nameKg: 'Канаттар 22 даана',
        description: 'Острые куриные крылышки',
        descriptionKg: 'Ачуу тоок канаттары',
        price: 880,
        image: 'https://edimdoma.ru/data/recipes/0014/5261/145261-ed4_wide.jpg?1759232294',
        category: 'wings'
    },
    {
        id: 12,
        name: 'Крыльяшки 30 шт',
        nameKg: 'Канаттар 30 даана',
        description: 'Острые куриные крылышки',
        descriptionKg: 'Ачуу тоок канаттары',
        price: 1200,
        image: 'https://edimdoma.ru/data/recipes/0014/5261/145261-ed4_wide.jpg?1759232294',
        category: 'wings'
    },

    // ==================== НАГГЕТСЫ ====================
    {
        id: 13,
        name: 'Наггетсы 10 шт',
        nameKg: 'Наггетс 10 даана',
        description: 'Хрустящие куриные наггетсы',
        descriptionKg: 'Кытырак тоок наггетстери',
        price: 250,
        image: 'https://www.koolinar.ru/all_image/recipes/156/156110/recipe_a29c73e2-e7c9-49d0-8baf-1695b91e7b7c_large.jpg',
        category: 'nuggets'
    },
    {
        id: 14,
        name: 'Наггетсы 15 шт',
        nameKg: 'Наггетс 15 даана',
        description: 'Хрустящие куриные наггетсы',
        descriptionKg: 'Кытырак тоок наггетстери',
        price: 350,
        image: 'https://www.koolinar.ru/all_image/recipes/156/156110/recipe_a29c73e2-e7c9-49d0-8baf-1695b91e7b7c_large.jpg',
        category: 'nuggets'
    },
    {
        id: 15,
        name: 'Наггетсы 20 шт',
        nameKg: 'Наггетс 20 даана',
        description: 'Хрустящие куриные наггетсы',
        descriptionKg: 'Кытырак тоок наггетстери',
        price: 450,
        image: 'https://www.koolinar.ru/all_image/recipes/156/156110/recipe_a29c73e2-e7c9-49d0-8baf-1695b91e7b7c_large.jpg',
        category: 'nuggets'
    },
    {
        id: 16,
        name: 'Наггетсы 30 шт',
        nameKg: 'Наггетс 30 даана',
        description: 'Хрустящие куриные наггетсы',
        descriptionKg: 'Кытырак тоок наггетстери',
        price: 660,
        image: 'https://www.koolinar.ru/all_image/recipes/156/156110/recipe_a29c73e2-e7c9-49d0-8baf-1695b91e7b7c_large.jpg',
        category: 'nuggets'
    },

    // ==================== КАРТОШКА ====================
    {
        id: 17,
        name: 'Картофель Фри',
        nameKg: 'Фри картөшкө',
        description: 'Хрустящий картофель фри',
        descriptionKg: 'Кытырак фри картөшкө',
        price: 130,
        image: 'https://www.chefmarket.ru/blog/wp-content/uploads/2020/01/fried-chick-2000x1200.jpg',
        category: 'potato'
    },
    {
        id: 18,
        name: 'По-Деревенски',
        nameKg: 'Айылдык картөшкө',
        description: 'Картофель по-деревенски с пряностями',
        descriptionKg: 'Айылдык картөшкө',
        price: 150,
        image: 'https://lafoy.ru/photo_l/foto-4456-2.jpg',
        category: 'potato'
    },
    {
        id: 19,
        name: 'Картофельные шарики',
        nameKg: 'Картөшкө тоголокчолору',
        description: 'Хрустящие картофельные шарики',
        descriptionKg: 'Кытырак картөшкө тоголокчолору',
        price: 130,
        image: 'https://img.iamcook.ru/old/upl/recipes/cat/u1169-c8338c700c52d3dc7043abce47bef4fa.JPG',
        category: 'potato'
    },

    // ==================== WOK (СОБА) ====================
    {
        id: 20,
        name: 'Гречневая соба',
        nameKg: 'Каракумча соба',
        description: 'Основа: гречневая лапша соба с овощной смесью',
        descriptionKg: 'Негизи: каракумча кесмеси соба жашылча аралашмасы менен',
        price: 160,
        image: 'https://www.povarenok.ru/data/cache/2023jan/21/55/3033845_65334-710x550x.jpg',
        category: 'wok',
        base: true
    },
    {
        id: 21,
        name: 'Удон',
        nameKg: 'Удон',
        description: 'Основа: толстая пшеничная лапша удон с овощной смесью',
        descriptionKg: 'Негизи: жоон буудай кесмеси удон жашылча аралашмасы менен',
        price: 160,
        image: 'https://bandler.ru/image/catalog/product/recepti/fettuchini-s-semgoj.jpg',
        category: 'wok',
        base: true
    },
    {
        id: 22,
        name: 'Яичная рамен',
        nameKg: 'Жумуртка рамен',
        description: 'Основа: яичная лапша рамен с овощной смесью',
        descriptionKg: 'Негизи: жумуртка кесмеси рамен жашылча аралашмасы менен',
        price: 160,
        image: 'https://opis-cdn.tinkoffjournal.ru/mercury/inramen2.c3mkuj4avtxt..jpg',
        category: 'wok',
        base: true
    },
    {
        id: 23,
        name: 'Фунчоза',
        nameKg: 'Фунчоза',
        description: 'Основа: стеклянная лапша фунчоза с овощной смесью',
        descriptionKg: 'Негизи: айнек кесмеси фунчоза жашылча аралашмасы менен',
        price: 180,
        image: 'https://i.ytimg.com/vi/cZnNPgADKTQ/hq720.jpg',
        category: 'wok',
        base: true
    },
    // Наполнители для WOK (как отдельные позиции с пометкой addon)
    {
        id: 24,
        name: 'Курица (наполнитель)',
        nameKg: 'Тоок (кошумча)',
        description: 'Добавка курицы в WOK',
        descriptionKg: 'WOKко тоок этин кошуу',
        price: 50,
        image: 'https://здоровое-питание.рф/upload/iblock/6a2/s9gmf27dxsnbjvoap4btpytvdrwikpnh/Pasta-fetuchini-kuritsa-s-gribami-v-slivochnom-souse-5.jpg',
        category: 'wok',
        addon: true
    },
    {
        id: 25,
        name: 'Индейка (наполнитель)',
        nameKg: 'Индейка (кошумча)',
        description: 'Добавка индейки в WOK',
        descriptionKg: 'WOKко индейка этин кошуу',
        price: 60,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1ml_CCi-1FvCUye__NUK_6_q0G8ylc91Xg&s',
        category: 'wok',
        addon: true
    },
    {
        id: 26,
        name: 'Говядина (наполнитель)',
        nameKg: 'Жылкы эти (кошумча)',
        description: 'Добавка говядины в WOK',
        descriptionKg: 'WOKко жылкы этин кошуу',
        price: 90,
        image: 'https://restoran-mimi.ru/assets/content/shashlik-iz-govyadini-7.jpg',
        category: 'wok',
        addon: true
    },
    {
        id: 27,
        name: 'Креветка (наполнитель)',
        nameKg: 'Креветка (кошумча)',
        description: 'Добавка креветок в WOK',
        descriptionKg: 'WOKко креветка кошуу',
        price: 120,
        image: 'https://finecooking.ru/images/recipe/steyki-foreli-zapechennye-v-duhovke/photo/960w.jpg',
        category: 'wok',
        addon: true
    },
    {
        id: 28,
        name: 'Черри (наполнитель)',
        nameKg: 'Черри (кошумча)',
        description: 'Добавка помидоров черри в WOK',
        descriptionKg: 'WOKко черри помидорун кошуу',
        price: 30,
        image: 'https://www.russianfood.com/dycontent/images_upl/565/big_564981.jpg',
        category: 'wok',
        addon: true
    },
    {
        id: 29,
        name: 'Шампиньоны (наполнитель)',
        nameKg: 'Шампиньон (кошумча)',
        description: 'Добавка шампиньонов в WOK',
        descriptionKg: 'WOKко шампиньон кошуу',
        price: 30,
        image: 'https://sovkusom.ru/wp-content/uploads/recepty/s/salat-s-shampinyonami/thumb-840x440.jpg',
        category: 'wok',
        addon: true
    },
    {
        id: 30,
        name: 'Стручковая фасоль (наполнитель)',
        nameKg: 'Буурчак (кошумча)',
        description: 'Добавка стручковой фасоли в WOK',
        descriptionKg: 'WOKко буурчак кошуу',
        price: 30,
        image: 'https://www.russianfood.com/dycontent/images_upl/546/big_545819.jpg',
        category: 'wok',
        addon: true
    },
    {
        id: 31,
        name: 'Баклажан (наполнитель)',
        nameKg: 'Баклажан (кошумча)',
        description: 'Добавка баклажанов в WOK',
        descriptionKg: 'WOKко баклажан кошуу',
        price: 30,
        image: 'https://www.russianfood.com/dycontent/images_upl/777/big_776231.jpg',
        category: 'wok',
        addon: true
    },
    // Супы
    {
        id: 32,
        name: 'Суп Том Ям с креветкой',
        nameKg: 'Креветкалуу Том Ям шорпосy',
        description: 'Острый суп Том Ям с креветками',
        descriptionKg: 'Креветка кошулган ачуу Том Ям шорпосy',
        price: 420,
        image: 'https://img.povar.ru/mobile/a5/11/49/9f/shorpo-409463.jpg',
        category: 'wok',
        soup: true
    },
    {
        id: 33,
        name: 'Суп Том Ям с курицей',
        nameKg: 'Тооктуу Том Ям шорпосy',
        description: 'Острый суп Том Ям с курицей',
        descriptionKg: 'Тоок эти кошулган ачуу Том Ям шорпосy',
        price: 350,
        image: 'https://www.russianfood.com/dycontent/images_upl/565/big_564981.jpg',
        category: 'wok',
        soup: true
    },

    // ==================== BUBBLE TEA ====================
    {
        id: 34,
        name: 'Фирменный Bubble Tea',
        nameKg: 'Фирмалык Bubble Tea',
        description: 'Фирменный бабл ти',
        descriptionKg: 'Фирмалык бабл ти',
        prices: { M: 240, L: 290 },
        image: 'https://neman.kg/images/watermarked/detailed/34/unnamed_n7sb-ck.webp',
        category: 'bubble_tea'
    },
    {
        id: 35,
        name: 'Bubble Tea OREO',
        nameKg: 'Bubble Tea OREO',
        description: 'Бабл ти с печеньем OREO',
        descriptionKg: 'OREO печеньеси кошулган бабл ти',
        prices: { M: 240, L: 290 },
        image: 'https://dostavka-produktov.ru/image/cache/catalog/products_images/3176277-1000x1000.jpg',
        category: 'bubble_tea'
    },
    {
        id: 36,
        name: 'Bubble Tea Сникерс',
        nameKg: 'Bubble Tea Сникерс',
        description: 'Бабл ти со вкусом Сникерс',
        descriptionKg: 'Сникерс даамындагы бабл ти',
        prices: { M: 240, L: 290 },
        image: 'https://cdn.nur.kz/images/1200x675/aae7343159f27780.jpeg?version=1',
        category: 'bubble_tea'
    },
    {
        id: 37,
        name: 'Bubble Tea Твикс',
        nameKg: 'Bubble Tea Твикс',
        description: 'Бабл ти со вкусом Твикс',
        descriptionKg: 'Твикс даамындагы бабл ти',
        prices: { M: 230, L: 280 },
        image: 'https://tochkamarket.ru/upload/iblock/5f9/rfprgsonxwxsc8hoaz027ghn0iyllo1u.jpg',
        category: 'bubble_tea'
    },
    {
        id: 38,
        name: 'Bubble Tea Фисташка Матча',
        nameKg: 'Bubble Tea Фисташка Матча',
        description: 'Бабл ти со вкусом фисташки и матчи',
        descriptionKg: 'Фисташка жана матча даамындагы бабл ти',
        prices: { M: 250, L: 300 },
        image: 'https://art-lunch.ru/content/uploads/2014/08/cheesecake-new-york-001x2-1.jpg',
        category: 'bubble_tea'
    },
    {
        id: 39,
        name: 'Bubble Tea Матча OREO',
        nameKg: 'Bubble Tea Матча OREO',
        description: 'Бабл ти со вкусом матчи и OREO',
        descriptionKg: 'Матча жана OREO даамындагы бабл ти',
        prices: { M: 250, L: 300 },
        image: 'https://3259404.ru/upload/iblock/fb6/nx32auk4u9xu7peyhyvh3ke5lvhigp6z.webp',
        category: 'bubble_tea'
    },
    {
        id: 40,
        name: 'Bubble Tea Матча Манго',
        nameKg: 'Bubble Tea Матча Манго',
        description: 'Бабл ти со вкусом матчи и манго',
        descriptionKg: 'Матча жана манго даамындагы бабл ти',
        prices: { M: 250, L: 300 },
        image: 'https://art-lunch.ru/content/uploads/2018/07/Greek_salad_01.jpg',
        category: 'bubble_tea'
    },
    {
        id: 41,
        name: 'Bubble Tea Матча Клубника',
        nameKg: 'Bubble Tea Матча Клубника',
        description: 'Бабл ти со вкусом матчи и клубники',
        descriptionKg: 'Матча жана клубника даамындагы бабл ти',
        prices: { M: 250, L: 300 },
        image: 'https://www.russianfood.com/dycontent/images_upl/68/big_67797.jpg',
        category: 'bubble_tea'
    },
    {
        id: 42,
        name: 'Bubble Tea Банан Шоколад',
        nameKg: 'Bubble Tea Банан Шоколад',
        description: 'Бабл ти со вкусом банана и шоколада',
        descriptionKg: 'Банан жана шоколад даамындагы бабл ти',
        prices: { M: 240, L: 290 },
        image: 'https://i.ytimg.com/vi/sGjV5ER10ys/sddefault.jpg',
        category: 'bubble_tea'
    },
    {
        id: 43,
        name: 'Bubble Tea Кофе Шоколад',
        nameKg: 'Bubble Tea Кофе Шоколад',
        description: 'Бабл ти со вкусом кофе и шоколада',
        descriptionKg: 'Кофе жана шоколад даамындагы бабл ти',
        prices: { M: 250, L: 300 },
        image: 'https://img.iamcook.ru/old/upl/recipes/cat/u4142-10b7c9c0972f7a6486ec930a56c01777.jpg',
        category: 'bubble_tea'
    },
    {
        id: 44,
        name: 'Bubble Tea Таро Батат',
        nameKg: 'Bubble Tea Таро Батат',
        description: 'Бабл ти со вкусом таро',
        descriptionKg: 'Таро даамындагы бабл ти',
        prices: { M: 240, L: 290 },
        image: 'https://img2.goodfon.ru/original/5616x3744/0/63/stol-zavarnik-chay-napitok.jpg',
        category: 'bubble_tea'
    },
    {
        id: 45,
        name: 'Bubble Tea Бабл Манго',
        nameKg: 'Bubble Tea Бабл Манго',
        description: 'Бабл ти со вкусом манго',
        descriptionKg: 'Манго даамындагы бабл ти',
        prices: { M: 240, L: 290 },
        image: 'https://zira.uz/wp-content/uploads/2022/06/shaurma-18.jpg',
        category: 'bubble_tea'
    },
    {
        id: 46,
        name: 'Bubble Tea Таро Клубника',
        nameKg: 'Bubble Tea Таро Клубника',
        description: 'Бабл ти со вкусом таро и клубники',
        descriptionKg: 'Таро жана клубника даамындагы бабл ти',
        prices: { M: 240, L: 290 },
        image: 'https://foodmood.ru/upload/iblock/bfe/bfe5b51ce6ea8a5f17b59c153ac3fcf9.jpeg',
        category: 'bubble_tea'
    },
    {
        id: 47,
        name: 'Bubble Tea Brown Sugar',
        nameKg: 'Bubble Tea Brown Sugar',
        description: 'Бабл ти с коричневым сахаром',
        descriptionKg: 'Күрөң кант кошулган бабл ти',
        prices: { M: 240, L: 290 },
        image: 'https://prostokvashino.ru/upload/resize_cache/iblock/74f/800_800_0/74fe90dd6ef5f047dcadff513c8d75d7.jpg',
        category: 'bubble_tea'
    },
    {
        id: 48,
        name: 'Bubble Tea Бабл Ти Дыня',
        nameKg: 'Bubble Tea Бабл Ти Дыня',
        description: 'Бабл ти со вкусом дыни',
        descriptionKg: 'Кант даамындагы бабл ти',
        prices: { M: 230, L: 290 },
        image: 'https://i.ytimg.com/vi/US6fbAwR_2E/maxresdefault.jpg',
        category: 'bubble_tea'
    },
    {
        id: 49,
        name: 'Bubble Tea Небесный Чай',
        nameKg: 'Bubble Tea Асман чайы',
        description: 'Бабл ти со вкусом небесного чая',
        descriptionKg: 'Асман чайы даамындагы бабл ти',
        prices: { M: 250, L: 300 },
        image: 'https://cdn.smt.bz/uploads/media/photo/2236799/%D1%81%D0%B2%D0%B5%D0%B6%D0%B8%D0%B9.webp',
        category: 'bubble_tea'
    },

    // ==================== ICE TEA ====================
    {
        id: 50,
        name: 'Ice Tea Мохито Виноград',
        nameKg: 'Ice Tea Мохито Виноград',
        description: 'Освежающий айс ти со вкусом мохито и винограда',
        descriptionKg: 'Мохито жана жүзүм даамындагы муздак чай',
        prices: { M: 230, L: 280 },
        image: 'https://i.ytimg.com/vi/x065ZmRdxBU/maxresdefault.jpg',
        category: 'ice_tea'
    },
    {
        id: 51,
        name: 'Ice Tea Манго Маракуйя',
        nameKg: 'Ice Tea Манго Маракуйя',
        description: 'Освежающий айс ти со вкусом манго и маракуйи',
        descriptionKg: 'Манго жана маракуйя даамындагы муздак чай',
        prices: { M: 230, L: 280 },
        image: 'https://images.gastronom.ru/LoVJjeEYXJQ3vR2Yn8WtlivB0eZ78Rtu417zEnX1mZs/pr:content-group-preview-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzk1YTg3ZTcxLTI0MjQtNGM3MC04MjllLTA2MTYyOTRjOGFhMi5qcGc.webp',
        category: 'ice_tea'
    },
    {
        id: 52,
        name: 'Ice Tea Киви Яблоко',
        nameKg: 'Ice Tea Киви Яблоко',
        description: 'Освежающий айс ти со вкусом киви и яблока',
        descriptionKg: 'Киви жана алма даамындагы муздак чай',
        prices: { M: 230, L: 280 },
        image: 'https://www.russianfood.com/dycontent/images_upl/503/big_502335.jpg',
        category: 'ice_tea'
    },
    {
        id: 53,
        name: 'Ice Tea Клубника Персик',
        nameKg: 'Ice Tea Клубника Персик',
        description: 'Освежающий айс ти со вкусом клубники и персика',
        descriptionKg: 'Клубника жана шабдалы даамындагы муздак чай',
        prices: { M: 230, L: 280 },
        image: 'https://www.russianfood.com/dycontent/images_upl/527/big_526629.jpg',
        category: 'ice_tea'
    },
    {
        id: 54,
        name: 'Ice Tea Виноград Черника',
        nameKg: 'Ice Tea Виноград Черника',
        description: 'Освежающий айс ти со вкусом винограда и черники',
        descriptionKg: 'Жүзүм жана көк бүлдүркөн даамындагы муздак чай',
        prices: { M: 230, L: 280 },
        image: 'https://www.russianfood.com/dycontent/images_upl/645/big_644398.jpg',
        category: 'ice_tea'
    },
    {
        id: 55,
        name: 'Ice Tea Ягодный',
        nameKg: 'Ice Tea Жидек',
        description: 'Освежающий айс ти со вкусом ягод',
        descriptionKg: 'Жидек даамындагы муздак чай',
        prices: { M: 230, L: 280 },
        image: 'https://cdn.tveda.ru/thumbs/3cc/3ccfd856d12bcfb474a1b37e886777b9/08be2c4d446d23e23ba82d5483e2f396.jpg',
        category: 'ice_tea'
    },
    {
        id: 56,
        name: 'Ice Tea Манго Персик',
        nameKg: 'Ice Tea Манго Персик',
        description: 'Освежающий айс ти со вкусом манго и персика',
        descriptionKg: 'Манго жана шабдалы даамындагы муздак чай',
        prices: { M: 230, L: 280 },
        image: 'https://bigasia.ru/wp-content/uploads/2023/04/2435c715734d0d295dc9c342ccf20ab6.jpg',
        category: 'ice_tea'
    },

    // ==================== ЛИМОНАДЫ ====================
    {
        id: 57,
        name: 'Лимонад Дыня зеленая Тархун',
        nameKg: 'Лимонад Жашыл дарбыз Тархун',
        description: 'Освежающий лимонад со вкусом дыни и тархуна',
        descriptionKg: 'Дарбыз жана тархун даамындагы муздак лимонад',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://zira.uz/wp-content/uploads/2023/09/gulyash.jpg',
        category: 'lemonade'
    },
    {
        id: 58,
        name: 'Лимонад Клубника, Малина',
        nameKg: 'Лимонад Клубника, Малина',
        description: 'Освежающий лимонад со вкусом клубники и малины',
        descriptionKg: 'Клубника жана малина даамындагы муздак лимонад',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://www.moi-povar.ru/upload/iblock/162/IMG_1518.jpg',
        category: 'lemonade'
    },
    {
        id: 59,
        name: 'Лимонад Дыня желтая Апельсин',
        nameKg: 'Лимонад Сары дарбыз Апельсин',
        description: 'Освежающий лимонад со вкусом дыни и апельсина',
        descriptionKg: 'Дарбыз жана апельсин даамындагы муздак лимонад',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://media.ovkuse.ru/images/recipes/a3ade189-9389-40c7-baaa-3ee8de125985/a3ade189-9389-40c7-baaa-3ee8de125985_420_420.webp',
        category: 'lemonade'
    },
    {
        id: 60,
        name: 'Лимонад Арбуз, Малина',
        nameKg: 'Лимонад Дарбыз, Малина',
        description: 'Освежающий лимонад со вкусом арбуза и малины',
        descriptionKg: 'Дарбыз жана малина даамындагы муздак лимонад',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://static.1000.menu/img/content-v2/09/92/34970/myaso-po-derevenski-v-duxovke-s-kartofelem_1676810570_23_max.jpg',
        category: 'lemonade'
    },
    {
        id: 61,
        name: 'Лимонад Бабл Гам, Гренадин',
        nameKg: 'Лимонад Бабл Гам, Гренадин',
        description: 'Освежающий лимонад со вкусом бабл гам',
        descriptionKg: 'Бабл гам даамындагы муздак лимонад',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://halal-spb.ru/sites/default/files/styles/large/public/jarkoe-v-gorshochkah.jpg?itok=tzEUT5YJ',
        category: 'lemonade'
    },
    {
        id: 62,
        name: 'Лимонад Манго, Маракуйя',
        nameKg: 'Лимонад Манго, Маракуйя',
        description: 'Освежающий лимонад со вкусом манго и маракуйи',
        descriptionKg: 'Манго жана маракуйя даамындагы муздак лимонад',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://a-catering.com/image/1.Dostavka/Gorihie/lyulya-kebab-dostavka-shashlyka-na-dom-i-po-spb-v-lenoblati-kejtering.jpg',
        category: 'lemonade'
    },
    {
        id: 63,
        name: 'Лимонад Персик, Мандарин',
        nameKg: 'Лимонад Шабдалы, Мандарин',
        description: 'Освежающий лимонад со вкусом персика и мандарина',
        descriptionKg: 'Шабдалы жана мандарин даамындагы муздак лимонад',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://yabpoela.net/uploads/posts/2019-12/1576932448_photo_2019-12-21_14-18-13.jpg',
        category: 'lemonade'
    },
    {
        id: 64,
        name: 'Лимонад Гренадин, Апельсин',
        nameKg: 'Лимонад Гренадин, Апельсин',
        description: 'Освежающий лимонад со вкусом гренадина и апельсина',
        descriptionKg: 'Гренадин жана апельсин даамындагы муздак лимонад',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://ist.say7.info/img0012/35/1235_0166c21_2455_1024.jpg',
        category: 'lemonade'
    },
    {
        id: 65,
        name: 'Лимонад Черная смородина',
        nameKg: 'Лимонад Кара карагат',
        description: 'Освежающий лимонад со вкусом черной смородины',
        descriptionKg: 'Кара карагат даамындагы муздак лимонад',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://s1.eda.ru/StaticContent/Photos/160915225201/160926225652/p_O.jpg',
        category: 'lemonade'
    },

    // ==================== МИЛКШЕЙК ====================
    {
        id: 66,
        name: 'Милкшейк Сливочный',
        nameKg: 'Милкшейк Каймак',
        description: 'Нежный молочный коктейль со сливочным вкусом',
        descriptionKg: 'Каймак даамындагы назик сүт коктейли',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://vkusnoff.com/img/recepty/3985/big.webp',
        category: 'milkshake'
    },
    {
        id: 67,
        name: 'Милкшейк Клубника Малина',
        nameKg: 'Милкшейк Клубника Малина',
        description: 'Молочный коктейль со вкусом клубники и малины',
        descriptionKg: 'Клубника жана малина даамындагы сүт коктейли',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://content2.flowwow-images.com/data/flowers/1000x1000/63/1740545469_46861463.jpg',
        category: 'milkshake'
    },
    {
        id: 68,
        name: 'Милкшейк Орео, Орех',
        nameKg: 'Милкшейк Орео, Жаңгак',
        description: 'Молочный коктейль с печеньем Орео и орехами',
        descriptionKg: 'Орео печеньеси жана жаңгак кошулган сүт коктейли',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://lifehacker.ru/wp-content/uploads/2024/12/shutterstock_2265339147_1_1734602719-e1734602773944.jpg',
        category: 'milkshake'
    },
    {
        id: 69,
        name: 'Милкшейк Банан Карамель',
        nameKg: 'Милкшейк Банан Карамель',
        description: 'Молочный коктейль со вкусом банана и карамели',
        descriptionKg: 'Банан жана карамель даамындагы сүт коктейли',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://i.ytimg.com/vi/VqvgACeyDac/maxresdefault.jpg',
        category: 'milkshake'
    },
    {
        id: 70,
        name: 'Милкшейк Манго Маракуйя',
        nameKg: 'Милкшейк Манго Маракуйя',
        description: 'Молочный коктейль со вкусом манго и маракуйи',
        descriptionKg: 'Манго жана маракуйя даамындагы сүт коктейли',
        price: 150,
        volume: '0.5/0.8 л',
        image: 'https://lefood.menu/wp-content/uploads/w_images/2023/07/recept-76707-1240x827.jpg',
        category: 'milkshake'
    },

    // ==================== ГОРЯЧИЙ КОФЕ ====================
    {
        id: 71,
        name: 'Капучино',
        nameKg: 'Капучино',
        description: 'Классический капучино',
        descriptionKg: 'Классикалык капучино',
        prices: { S: 140, M: 160, L: 190 },
        image: 'https://dikoed.ru/upload/iblock/66c/48245-sup-s-frikadelkami-iz-myasa-olenya.jpg',
        category: 'coffee'
    },
    {
        id: 72,
        name: 'Латте',
        nameKg: 'Латте',
        description: 'Классический латте',
        descriptionKg: 'Классикалык латте',
        prices: { S: 140, M: 160, L: 190 },
        image: 'https://images.gastronom.ru/vCS5cZKKC-g5xPVK2mETjj-fuFYL2VZwlkUI_pLiIAQ/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzI4NDA1OTE2LTM4ZDMtNDYwMC1hMjYyLTc1NzFkNjc3MDdlZi5qcGc.webp',
        category: 'coffee'
    },
    {
        id: 73,
        name: 'Американо',
        nameKg: 'Американо',
        description: 'Классический американо',
        descriptionKg: 'Классикалык американо',
        prices: { S: 150, M: 170, L: 200 },
        image: 'https://www.koolinar.ru/all_image/recipes/156/156110/recipe_a29c73e2-e7c9-49d0-8baf-1695b91e7b7c_large.jpg',
        category: 'coffee'
    },
    {
        id: 74,
        name: 'Раф',
        nameKg: 'Раф',
        description: 'Нежный кофе раф',
        descriptionKg: 'Назик раф кофеси',
        prices: { S: 190, M: 220, L: 240 },
        image: 'https://cooklikemary.ru/sites/default/files/styles/width_700/public/img_3633_0.jpg?itok=e15Ck_hr',
        category: 'coffee'
    },
    {
        id: 75,
        name: 'Какао',
        nameKg: 'Какао',
        description: 'Горячее какао',
        descriptionKg: 'Ысык какао',
        prices: { S: 120, M: 140, L: 160 },
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIZSOvy9EXTWC0WL_znrlVYl4iipeuomNeA&s',
        category: 'coffee'
    },
    {
        id: 76,
        name: 'Флэт Уайт',
        nameKg: 'Флэт Уайт',
        description: 'Кофе флэт уайт',
        descriptionKg: 'Флэт уайт кофеси',
        prices: { S: 200, M: 250, L: 280 },
        image: 'https://img.iamcook.ru/old/upl/recipes/zen/u-9d9f7b406881b1dde4c262f9f84bc279.jpg',
        category: 'coffee'
    },
    {
        id: 77,
        name: 'Эспрессо',
        nameKg: 'Эспрессо',
        description: 'Крепкий эспрессо',
        descriptionKg: 'Күчтүү эспрессо',
        prices: { S: 80, L: 150 },
        image: 'https://s1.webspoon.ru/receipts/2013/7/8738/orig_8738_0_xxl.jpg',
        category: 'coffee'
    },
    {
        id: 78,
        name: 'Сиропы',
        nameKg: 'Сироптор',
        description: 'Лаванда, яблочный пирог, крем брюле, карамель, соленая карамель, ваниль, попкорн, фундук, кокос',
        descriptionKg: 'Лаванда, алма пирогу, крем брюле, карамель, туздуу карамель, ваниль, попкорн, фундук, кокос',
        price: 20,
        image: 'https://cdn.smt.bz/uploads/media/photo/2225664/%D0%BB%D0%B0%D0%B3%D0%BC%D0%B0%D0%BD_%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D1%8B%D0%B9.webp',
        category: 'coffee',
        addon: true
    },

    // ==================== МАТЧА ====================
    {
        id: 79,
        name: 'Матча Зеленая',
        nameKg: 'Жашыл Матча',
        description: 'Зеленый чай матча',
        descriptionKg: 'Жашыл матча чайы',
        prices: { S: 160, M: 180, L: 200 },
        image: 'https://zira.uz/wp-content/uploads/2023/09/gulyash.jpg',
        category: 'matcha'
    },
    {
        id: 80,
        name: 'Матча Голубая',
        nameKg: 'Көк Матча',
        description: 'Голубой чай матча',
        descriptionKg: 'Көк матча чайы',
        prices: { S: 160, M: 180, L: 200 },
        image: 'https://i.ytimg.com/vi/VqvgACeyDac/maxresdefault.jpg',
        category: 'matcha'
    },
    {
        id: 81,
        name: 'Матча Манго',
        nameKg: 'Манго Матча',
        description: 'Чай матча со вкусом манго',
        descriptionKg: 'Манго даамындагы матча чайы',
        prices: { S: 170, M: 190, L: 210 },
        image: 'https://static.1000.menu/img/content-v2/09/92/34970/myaso-po-derevenski-v-duxovke-s-kartofelem_1676810570_23_max.jpg',
        category: 'matcha'
    },

    // ==================== АЙС КОФЕ ====================
    {
        id: 82,
        name: 'Айс Капучино',
        nameKg: 'Айс Капучино',
        description: 'Холодный капучино',
        descriptionKg: 'Муздак капучино',
        prices: { M: 190, L: 220 },
        image: 'https://finecooking.ru/images/recipe/steyki-foreli-zapechennye-v-duhovke/photo/960w.jpg',
        category: 'ice_coffee'
    },
    {
        id: 83,
        name: 'Айс Латте',
        nameKg: 'Айс Латте',
        description: 'Холодный латте',
        descriptionKg: 'Муздак латте',
        prices: { M: 190, L: 220 },
        image: 'https://yabpoela.net/uploads/posts/2019-12/1576932448_photo_2019-12-21_14-18-13.jpg',
        category: 'ice_coffee'
    },
    {
        id: 84,
        name: 'Айс Американо',
        nameKg: 'Айс Американо',
        description: 'Холодный американо',
        descriptionKg: 'Муздак американо',
        prices: { M: 200, L: 230 },
        image: 'https://www.koolinar.ru/all_image/recipes/157/157915/recipe_9f002738-7831-484c-ad0a-7294e58d8cba_w450.webp',
        category: 'ice_coffee'
    },
    {
        id: 85,
        name: 'Айс Раф',
        nameKg: 'Айс Раф',
        description: 'Холодный раф',
        descriptionKg: 'Муздак раф',
        prices: { M: 240, L: 260 },
        image: 'https://lifehacker.ru/wp-content/uploads/2024/12/shutterstock_2265339147_1_1734602719-e1734602773944.jpg',
        category: 'ice_coffee'
    },
    {
        id: 86,
        name: 'Айс Матча',
        nameKg: 'Айс Матча',
        description: 'Холодный чай матча',
        descriptionKg: 'Муздак матча чайы',
        prices: { M: 180, L: 230 },
        image: 'https://bigasia.ru/wp-content/uploads/2023/04/2435c715734d0d295dc9c342ccf20ab6.jpg',
        category: 'ice_coffee'
    },
    {
        id: 87,
        name: 'Айс Матча Клубника',
        nameKg: 'Айс Матча Клубника',
        description: 'Холодный чай матча со вкусом клубники',
        descriptionKg: 'Клубника даамындагы муздак матча чайы',
        prices: { M: 190, L: 240 },
        image: 'https://media.ovkuse.ru/images/recipes/a3ade189-9389-40c7-baaa-3ee8de125985/a3ade189-9389-40c7-baaa-3ee8de125985_420_420.webp',
        category: 'ice_coffee'
    },
    {
        id: 88,
        name: 'Айс Матча Манго',
        nameKg: 'Айс Матча Манго',
        description: 'Холодный чай матча со вкусом манго',
        descriptionKg: 'Манго даамындагы муздак матча чайы',
        prices: { M: 190, L: 240 },
        image: 'https://halal-spb.ru/sites/default/files/styles/large/public/jarkoe-v-gorshochkah.jpg?itok=tzEUT5YJ',
        category: 'ice_coffee'
    },

    // ==================== ЧАЙ ====================
    {
        id: 89,
        name: 'Черный чай',
        nameKg: 'Кара чай',
        description: 'Классический черный чай',
        descriptionKg: 'Классикалык кара чай',
        price: 40,
        image: 'https://s1.eda.ru/StaticContent/Photos/160915225201/160926225652/p_O.jpg',
        category: 'tea'
    },
    {
        id: 90,
        name: 'Зеленый чай',
        nameKg: 'Жашыл чай',
        description: 'Классический зеленый чай',
        descriptionKg: 'Классикалык жашыл чай',
        price: 40,
        image: 'https://www.povarenok.ru/data/cache/2023jan/21/55/3033845_65334-710x550x.jpg',
        category: 'tea'
    },
    {
        id: 91,
        name: 'Чай с бергамотом',
        nameKg: 'Бергамот чай',
        description: 'Чай с бергамотом',
        descriptionKg: 'Бергамот кошулган чай',
        price: 60,
        image: 'https://ist.say7.info/img0012/35/1235_0166c21_2455_1024.jpg',
        category: 'tea'
    },
    {
        id: 92,
        name: 'Жасмин',
        nameKg: 'Жасмин',
        description: 'Чай с жасмином',
        descriptionKg: 'Жасмин кошулган чай',
        price: 60,
        image: 'https://lafoy.ru/photo_l/foto-4456-2.jpg',
        category: 'tea'
    },
    {
        id: 93,
        name: 'Молочный улун',
        nameKg: 'Сүт улун',
        description: 'Чай молочный улун',
        descriptionKg: 'Сүт улун чайы',
        price: 60,
        image: 'https://a-catering.com/image/1.Dostavka/Gorihie/lyulya-kebab-dostavka-shashlyka-na-dom-i-po-spb-v-lenoblati-kejtering.jpg',
        category: 'tea'
    },
    {
        id: 94,
        name: 'Каркаде',
        nameKg: 'Каркаде',
        description: 'Чай каркаде',
        descriptionKg: 'Каркаде чайы',
        price: 60,
        image: 'https://i.ytimg.com/vi/sGjV5ER10ys/sddefault.jpg',
        category: 'tea'
    },
    {
        id: 95,
        name: 'Облепиховый чай',
        nameKg: 'Чычырканак чай',
        description: 'Чай с облепихой',
        descriptionKg: 'Чычырканак кошулган чай',
        price: 150,
        image: 'https://www.russianfood.com/dycontent/images_upl/68/big_67797.jpg',
        category: 'tea'
    },
    {
        id: 96,
        name: 'Ягодный чай',
        nameKg: 'Жидек чай',
        description: 'Чай со вкусом ягод',
        descriptionKg: 'Жидек даамындагы чай',
        price: 150,
        image: 'https://img.iamcook.ru/old/upl/recipes/cat/u4142-10b7c9c0972f7a6486ec930a56c01777.jpg',
        category: 'tea'
    },
    {
        id: 97,
        name: 'Цитрусовый чай',
        nameKg: 'Цитрус чай',
        description: 'Чай с цитрусовыми',
        descriptionKg: 'Цитрус кошулган чай',
        price: 150,
        image: 'https://img2.goodfon.ru/original/5616x3744/0/63/stol-zavarnik-chay-napitok.jpg',
        category: 'tea'
    },
    {
        id: 98,
        name: 'Лимонный, Мята',
        nameKg: 'Лимон, Жалбыз',
        description: 'Чай с лимоном и мятой',
        descriptionKg: 'Лимон жана жалбыз кошулган чай',
        price: 150,
        image: 'https://zira.uz/wp-content/uploads/2022/06/shaurma-18.jpg',
        category: 'tea'
    },
    {
        id: 99,
        name: 'Пряный чай',
        nameKg: 'Татымал чай',
        description: 'Чай с пряностями',
        descriptionKg: 'Татымалдар кошулган чай',
        price: 150,
        image: 'https://foodmood.ru/upload/iblock/bfe/bfe5b51ce6ea8a5f17b59c153ac3fcf9.jpeg',
        category: 'tea'
    },
    {
        id: 100,
        name: 'Ташкент чай',
        nameKg: 'Ташкент чай',
        description: 'Чай по-ташкентски',
        descriptionKg: 'Ташкенттик чай',
        price: 150,
        image: 'https://cdn.tveda.ru/thumbs/3cc/3ccfd856d12bcfb474a1b37e886777b9/08be2c4d446d23e23ba82d5483e2f396.jpg',
        category: 'tea'
    },

    // ==================== СОУСЫ ====================
    {
        id: 101,
        name: 'Соус',
        nameKg: 'Соус',
        description: 'Сырный, чесночный, барбекю, кетчуп',
        descriptionKg: 'Сыр, сарымсак, барбекю, кетчуп',
        price: 30,
        image: 'https://prostokvashino.ru/upload/resize_cache/iblock/74f/800_800_0/74fe90dd6ef5f047dcadff513c8d75d7.jpg',
        category: 'sauces'
    },

    // ==================== СЕТЫ ====================
    {
        id: 102,
        name: 'Сет №1 (Филадельфия с тамаго, Чиз ролл, Филадельфия с курицей)',
        description: 'Филадельфия с тамаго, Чиз ролл, Филадельфия с курицей',
        price: 1099,
        category: 'sets',
        image: 'https://via.placeholder.com/400x250?text=Сет+1'
    },
    {
        id: 103,
        name: 'Сет №2 (Калифорния с лососем, Калифорния с креветкой, Калифорния с тамаго, Калифорния с курицей)',
        description: 'Калифорния с лососем, Калифорния с креветкой, Калифорния с тамаго, Калифорния с курицей',
        price: 1199,
        category: 'sets',
        image: 'https://via.placeholder.com/400x250?text=Сет+2'
    },
    {
        id: 104,
        name: 'Сет №3 (Филадельфия, Чиз Хот с курицей, Мини с лососем, Эби с огурцом)',
        description: 'Филадельфия, Чиз Хот с курицей, Мини с лососем, Эби с огурцом',
        price: 1299,
        category: 'sets',
        image: 'https://via.placeholder.com/400x250?text=Сет+3'
    },
    {
        id: 105,
        name: 'Сет №4 (Калифорния с креветкой, Хот Чиз с курицей, Яки с тунцом, Япония ролл)',
        description: 'Калифорния с креветкой, Хот Чиз с курицей, Яки с тунцом, Япония ролл',
        price: 1399,
        category: 'sets',
        image: 'https://via.placeholder.com/400x250?text=Сет+4'
    },
    {
        id: 106,
        name: 'Сет №5 (Горячий с тунцом, Темпура с курицей, Спайси с лососем, Шарики с курицей и лососем)',
        description: 'Горячий с тунцом, Темпура с курицей, Спайси с лососем, Шарики с курицей и лососем',
        price: 1199,
        category: 'sets',
        image: 'https://via.placeholder.com/400x250?text=Сет+5'
    },
    {
        id: 107,
        name: 'Сет №6 (Филадельфия гриль, Умани с курицей, Салмон с лососем, Чиз хот с креветкой)',
        description: 'Филадельфия гриль, Умани с курицей, Салмон с лососем, Чиз хот с креветкой',
        price: 1499,
        category: 'sets',
        image: 'https://via.placeholder.com/400x250?text=Сет+6'
    },
    {
        id: 108,
        name: 'Сет №7 (Кунжут с тамаго, Эби ролл, Филадельфия, Чиз хот с курицей, Калифорния в кунжуте с лососем, Мини маки с креветкой)',
        description: 'Кунжут с тамаго, Эби ролл, Филадельфия, Чиз хот с курицей, Калифорния в кунжуте с лососем, Мини маки с креветкой',
        price: 1599,
        category: 'sets',
        image: 'https://via.placeholder.com/400x250?text=Сет+7'
    },
    {
        id: 109,
        name: 'Сет №8 (Мини с огурцом, Бонита с тунцом, Филадельфия грин с лососем, Калифорния с креветкой)',
        description: 'Мини с огурцом, Бонита с тунцом, Филадельфия грин с лососем, Калифорния с креветкой',
        price: 1199,
        category: 'sets',
        image: 'https://via.placeholder.com/400x250?text=Сет+8'
    },
    {
        id: 110,
        name: 'Сет №10 (Мини маки с тунцом, Кунжутный с тамаго, Филадельфия, Фила Грин с лососем, Яки с лососем, Чиз Хот с креветкой)',
        description: 'Мини маки с тунцом, Кунжутный с тамаго, Филадельфия, Фила Грин с лососем, Яки с лососем, Чиз Хот с креветкой',
        price: 1699,
        category: 'sets',
        image: 'https://via.placeholder.com/400x250?text=Сет+10'
    },
    {
        id: 111,
        name: 'Сет №11 (Филадельфия, Хот Чиз с курицей, Кунжут с тунцом, Япония ролл, Мини маки с креветкой)',
        description: 'Филадельфия, Хот Чиз с курицей, Кунжут с тунцом, Япония ролл, Мини маки с креветкой',
        price: 1499,
        category: 'sets',
        image: 'https://via.placeholder.com/400x250?text=Сет+11'
    },
    {
        id: 112,
        name: 'Сет №12 (Калифорния с лососем, Калифорния с курицей, Яки с тунцом и лососем, Бонита с креветкой, Кунжут с лососем, Филадельфия, Хот Чиз с тунцом)',
        description: 'Калифорния с лососем, Калифорния с курицей, Яки с тунцом и лососем, Бонита с креветкой, Кунжут с лососем, Филадельфия, Хот Чиз с тунцом',
        price: 2699,
        category: 'sets',
        image: 'https://via.placeholder.com/400x250?text=Сет+12'
    },
    {
        id: 113,
        name: 'Сет №13 (Филадельфия гриль, Умани с курицей, Салмон с лососем, Чиз хот с креветкой)',
        description: 'Филадельфия гриль, Умани с курицей, Салмон с лососем, Чиз хот с креветкой',
        price: 1499,
        category: 'sets',
        image: 'https://via.placeholder.com/400x250?text=Сет+13'
    },

    // ==================== ХОЛОДНЫЕ РОЛЛЫ ====================
    {
        id: 114,
        name: 'Канада',
        description: 'Холодный ролл Канада',
        price: 440,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Канада'
    },
    {
        id: 115,
        name: 'Хокайдо',
        description: 'Холодный ролл Хокайдо',
        price: 430,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Хокайдо'
    },
    {
        id: 116,
        name: 'Магуро',
        description: 'Холодный ролл Магуро',
        price: 450,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Магуро'
    },
    {
        id: 117,
        name: 'Мидори',
        description: 'Холодный ролл Мидори',
        price: 480,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Мидори'
    },
    {
        id: 118,
        name: 'Филадельфия (ролл)',
        description: 'Холодный ролл Филадельфия',
        price: 430,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Филадельфия'
    },
    {
        id: 119,
        name: 'Эби Дабл',
        description: 'Холодный ролл Эби Дабл',
        price: 480,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Эби+Дабл'
    },
    {
        id: 120,
        name: 'Яки ролл (Лосось)',
        description: 'Яки ролл с лососем',
        price: 420,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Яки+Лосось'
    },
    {
        id: 121,
        name: 'Яки ролл (Креветка)',
        description: 'Яки ролл с креветкой',
        price: 410,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Яки+Креветка'
    },
    {
        id: 122,
        name: 'Яки ролл (Тунец)',
        description: 'Яки ролл с тунцом',
        price: 400,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Яки+Тунец'
    },
    {
        id: 123,
        name: 'Яки ролл (Курица)',
        description: 'Яки ролл с курицей',
        price: 380,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Яки+Курица'
    },
    {
        id: 124,
        name: 'Фила Лайт (Угорь)',
        description: 'Фила Лайт с угрём',
        price: 460,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Фила+Лайт+Угорь'
    },
    {
        id: 125,
        name: 'Фила Лайт (Креветка)',
        description: 'Фила Лайт с креветкой',
        price: 450,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Фила+Лайт+Креветка'
    },
    {
        id: 126,
        name: 'Фила Лайт (Тунец)',
        description: 'Фила Лайт с тунцом',
        price: 450,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Фила+Лайт+Тунец'
    },
    {
        id: 127,
        name: 'Фила Лайт (Курица)',
        description: 'Фила Лайт с курицей',
        price: 440,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Фила+Лайт+Курица'
    },
    {
        id: 128,
        name: 'Грин ролл (Лосось)',
        description: 'Грин ролл с лососем',
        price: 400,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Грин+Лосось'
    },
    {
        id: 129,
        name: 'Грин ролл (Креветка)',
        description: 'Грин ролл с креветкой',
        price: 420,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Грин+Креветка'
    },
    {
        id: 130,
        name: 'Грин ролл (Тунец)',
        description: 'Грин ролл с тунцом',
        price: 390,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Грин+Тунец'
    },
    {
        id: 131,
        name: 'Грин ролл (Курица)',
        description: 'Грин ролл с курицей',
        price: 380,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Грин+Курица'
    },
    {
        id: 132,
        name: 'Калифорния (Лосось)',
        description: 'Калифорния с лососем',
        price: 400,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Калифорния+Лосось'
    },
    {
        id: 133,
        name: 'Калифорния (Креветка)',
        description: 'Калифорния с креветкой',
        price: 420,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Калифорния+Креветка'
    },
    {
        id: 134,
        name: 'Калифорния (Тунец)',
        description: 'Калифорния с тунцом',
        price: 400,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Калифорния+Тунец'
    },
    {
        id: 135,
        name: 'Калифорния (Курица)',
        description: 'Калифорния с курицей',
        price: 380,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Калифорния+Курица'
    },
    {
        id: 136,
        name: 'Мини ролл (Лосось)',
        description: 'Мини ролл с лососем',
        price: 200,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Мини+Лосось'
    },
    {
        id: 137,
        name: 'Мини ролл (Креветка)',
        description: 'Мини ролл с креветкой',
        price: 220,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Мини+Креветка'
    },
    {
        id: 138,
        name: 'Мини ролл (Тунец)',
        description: 'Мини ролл с тунцом',
        price: 180,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Мини+Тунец'
    },
    {
        id: 139,
        name: 'Мини ролл (Курица)',
        description: 'Мини ролл с курицей',
        price: 160,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Мини+Курица'
    },
    {
        id: 140,
        name: 'Мини ролл (Огурец)',
        description: 'Мини ролл с огурцом',
        price: 140,
        category: 'rolls',
        image: 'https://via.placeholder.com/400x250?text=Мини+Огурец'
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
        'about-title': 'Добро пожаловать в SushiDom',
        'about-text-1': 'SushiDom — место в Кара-Куле с качественными роллами, сетами и напитками. Мы используем свежие продукты.',
        'about-text-2': 'Здесь нет официантов — оформляйте заказ через сайт для самовывоза или доставки.',
        'about-text-3': 'SushiDom — вкусно, удобно и быстро.',
        'menu-title': 'Меню',
        'contact-title': 'Контакты',
        'contact-location': 'Кара-Куль',
        'contact-hours': '10:00 - 22:00, без выходных',
        'footer-text': '©️ 2025 SushiDom. Все права защищены.',
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
        'filter-first': 'Первые блюда',
        'filter-fastfood': 'Фаст Фуд',
        'filter-drinks': 'Напитки',
        'filter-second': 'Вторые блюда',
        'filter-special': 'Заказные',
        'filter-shashlik': 'Шашлыки',
        'filter-salad': 'Салаты',
        'filter-dessert': 'Десерты',
        'filter-drink': 'Напитки',
        'filter-fastfood': 'Fast-Food',
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
        'reviews-back': 'Вернуться на главную'
    },
    kg: {
        'nav-menu': 'Меню',
        'nav-about': 'Биз жөнүндө',
        'nav-reviews': 'Пикирлер',
        'nav-contact': 'Байланыш',
        'about-title': 'SushiDom кафесине кош келиңиз',
        'about-text-1': 'SushiDom — Кара-Көлдөгү ролл жана сеттердин даамдуу менюсу. Биз таза жана свежий азыктарды колдонобуз.',
        'about-text-2': 'Бул жерде официанттар жок — заказды сайт аркылуу самовывоз же жеткирүү үчүн берсеңиз болот.',
        'about-text-3': 'SushiDom — даамдуу жана ыңгайлуу.',
        'menu-title': 'Меню',
        'contact-title': 'Байланыш',
        'contact-location': 'Кара-Көл',
        'contact-hours': '10:00 - 22:00, дем алыш жок',
        'footer-text': '©️ 2025 SushiDom. Бардык укуктар корголгон.',
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
        'filter-first': 'Биринчи тамактар',
        'filter-fastfood': 'Фаст Фуд',
        'filter-drinks': 'Суусундуктар',
        'filter-second': 'Экинчи тамактар',
        'filter-special': 'Заказдык',
        'filter-shashlik': 'Шашлык',
        'filter-salad': 'Салат',
        'filter-dessert': 'Десерт',
        'filter-drink': 'Суусундуктар',
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
        'reviews-back': 'Башкы бетке кайтуу'
    },
    en: {
        'nav-menu': 'Menu',
        'nav-about': 'About',
        'nav-reviews': 'Reviews',
        'nav-contact': 'Contacts',
        'about-title': 'Welcome to SushiDom',
        'about-text-1': 'SushiDom in Kara-Kul serves fresh rolls, sets and drinks. We use quality ingredients.',
        'about-text-2': 'There are no waiters — please place orders on the site for pickup or delivery.',
        'about-text-3': 'SushiDom — tasty, convenient and fast.',
        'menu-title': 'Menu',
        'contact-title': 'Contacts',
        'filter-fastfood': 'Fast Food',
        'contact-location': 'Kara-Kul',
        'contact-hours': '10:00 - 22:00, no days off',
        'footer-text': '©️ 2025 SushiDom. All rights reserved.',
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
        'filter-first': 'Soups',
        'filter-second': 'Main dishes',
        'filter-special': 'Special',
        'filter-shashlik': 'Shashlik',
        'filter-salad': 'Salads',
        'filter-dessert': 'Desserts',
        'filter-drink': 'Drinks',
        'filter-fastfood': 'Fast-Food',
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
// Константы для заказов
// ============================================

// Номер телефона кафе для WhatsApp (без + и пробелов)
const CAFE_PHONE_NUMBER = '996507007031';

// Нет официантов — в сервисе используется только самовывоз/доставка
let WAITERS = {};
// Привязки: waiterId -> массив номеров столов (пусто)
let WAITER_TABLES = {};

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

// Возвращает объект официанта для данного стола (или null)
function getWaiterForTable(num) {
    for (const wid in WAITER_TABLES) {
        const arr = WAITER_TABLES[wid] || [];
        if (arr.indexOf(Number(num)) !== -1) return WAITERS[wid] || null;
    }
    return null;
}

function getTablesForWaiter(wid) {
    return WAITER_TABLES[wid] ? WAITER_TABLES[wid].slice() : [];
}

function setTablesForWaiter(wid, arr) {
    WAITER_TABLES[wid] = Array.isArray(arr) ? arr.map(Number) : [];
    saveWaiterConfig();
}

function setWaiter(wid, waiterObj) {
    WAITERS[wid] = waiterObj;
    saveWaiterConfig();
}

loadWaiterConfig();

// URL Google Apps Script Web App для сохранения в Google Sheets
// ВАЖНО: Замените на ваш URL после настройки Google Apps Script
// Инструкция в файле GOOGLE_SHEETS_SETUP.md
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwRZDDKK04OEv-ySYHz6XbskBZXp7vGYcWxp7fYiLSmrVe0fjHi7KgDEIGIFnIEFYrn/exec';
// Optionally provide a server endpoint that will send the order to the cafe phone
// Example: a small webhook that accepts { phone, message } and forwards via SMS/WhatsApp Business API.
// If left empty, client will open WhatsApp (existing behaviour).
const NOTIFY_ENDPOINT = '';

// ============================================
// Глобальные переменные
// ============================================

let currentLang = localStorage.getItem('lang') || 'ru';
let currentTheme = localStorage.getItem('theme') || 'light';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all'; // Текущая выбранная категория
let currentSliderIndex = 0; // Индекс текущего фото в слайдере

// Тип заказа: 'cafe', 'pickup', 'delivery', 'browse'
let orderType = null;
let tableNumber = null;
let deliveryInfo = null;
// Endpoint для общих отзывов (Apps Script Web App URL)
const REVIEWS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyYVg9L5UtQISuiSDvzxcleVKqN4mLN4b3to64DRukMGMN6kTCnYhX3F5BfSSwA85hUWg/exec';

// ============================================
// Инициализация приложения
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    initLanguage();
    renderMenu();
    updateCartUI();
    initEventListeners();
    initHeaderScroll();
    await initReviews();
    // Восстанавливаем данные доставки, если они были введены ранее
    try {
        const savedDelivery = localStorage.getItem('deliveryInfo');
        if (savedDelivery) deliveryInfo = JSON.parse(savedDelivery);
    } catch (err) {
        deliveryInfo = null;
    }
    animateWelcome();
    // Lightbox init
    const closeLb = document.getElementById('closeLightbox');
    const lb = document.getElementById('imageLightbox');
    if (closeLb) closeLb.addEventListener('click', closeImageLightbox);
    if (lb) lb.addEventListener('click', (e) => { if (e.target === lb) closeImageLightbox(); });
    // Init payment option visual state
    initPaymentOptions();
    // Init order form validation listeners
    initOrderFormValidation();
    // Init order type modal (только навешиваем обработчики, не показываем сразу)
    initOrderTypeModal();
    // Если стол передан через параметр ?table=, сразу выбираем его.
    // В этом случае окно "Как вы хотите заказать?" не показываем вообще.
    const handledByUrl = initTableFromUrl();
    // Если стол НЕ передан в URL, показываем модалку выбора типа заказа
    if (!handledByUrl) {
        // Если в localStorage сохранён официант/стол — восстановим баннер
        try {
            const savedWaiter = localStorage.getItem('currentWaiter');
            if (savedWaiter && !currentWaiter) {
                currentWaiter = JSON.parse(savedWaiter);
                // Отложенно показываем баннер
                setTimeout(() => { notifyAssignedWaiter(); }, 300);
            }
        } catch (e) { }

        const orderTypeModal = document.getElementById('orderTypeModal');
        if (orderTypeModal) {
            orderTypeModal.classList.add('active');
            enableModalLock();
        }
    }
});

// Set selected class on payment option labels for clear visual state
function initPaymentOptions() {
    const options = document.querySelectorAll('.payment-option');
    if (!options || options.length === 0) return;

    function refresh() {
        options.forEach(opt => opt.classList.remove('selected'));
        const checked = document.querySelector('input[name="paymentMethod"]:checked');
        if (checked && checked.closest('.payment-option')) {
            checked.closest('.payment-option').classList.add('selected');
        } else if (checked) {
            // if input not wrapped by .payment-option, try to find label
            const lbl = document.querySelector(`label[for="${checked.id}"]`);
            if (lbl) lbl.classList.add('selected');
        }
    }

    // initial state
    refresh();

    // listen for changes
    const radios = document.querySelectorAll('input[name="paymentMethod"]');
    radios.forEach(r => r.addEventListener('change', (ev) => { refresh(); toggleMbankQr(ev.target.value); }));
    // Also support click on label to toggle
    options.forEach(opt => opt.addEventListener('click', () => {
        const inp = opt.querySelector('input[name="paymentMethod"]');
        if (inp) {
            inp.checked = true;
            inp.dispatchEvent(new Event('change', { bubbles: true }));
            // Обновляем показ QR при клике по варианту
            toggleMbankQr(inp.value);
        }
    }));

    // Инициализируем видимость QR по текущему выбранному способу
    const checked = document.querySelector('input[name="paymentMethod"]:checked');
    toggleMbankQr(checked ? checked.value : null);
}

// Показывает/скрывает QR-контейнер MBank
function toggleMbankQr(selectedValue) {
    const container = document.getElementById('mbankQrContainer');
    if (!container) return;
    if (selectedValue === 'mbank') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

// Скрывает опцию оплаты картой при доставке, иначе показывает все опции
function adjustPaymentOptionsForDelivery() {
    const cardInput = document.querySelector('input[name="paymentMethod"][value="card"]');
    const cardLabel = cardInput ? cardInput.closest('.payment-option') : null;
    if (orderType === 'delivery') {
        if (cardLabel) cardLabel.style.display = 'none';
        const checked = document.querySelector('input[name="paymentMethod"]:checked');
        if (checked && checked.value === 'card') {
            const cash = document.querySelector('input[name="paymentMethod"][value="cash"]');
            if (cash) {
                cash.checked = true;
                cash.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
    } else {
        if (cardLabel) cardLabel.style.display = '';
    }
}

// Проверка валидности формы заказа и активация кнопки отправки
function validateOrderForm() {
    const submitBtn = document.getElementById('submitOrderBtn');
    if (!submitBtn) return;

    const name = document.getElementById('customerName');
    const phone = document.getElementById('customerPhone');
    const cartNotEmpty = cart && cart.length > 0;

    const payment = document.querySelector('input[name="paymentMethod"]:checked');

    // Валидатор телефона - только 9 цифр без префикса
    const phoneVal = phone ? phone.value.trim().replace(/[\s-]/g, '') : '';
    const phoneOk = phoneVal.length === 9 && /^[0-9]{9}$/.test(phoneVal);

    const nameOk = name && name.value.trim().length > 0;
    const paymentOk = !!payment;

    const formReady = cartNotEmpty && nameOk && phoneOk && paymentOk;

    if (formReady) {
        submitBtn.disabled = false;
        submitBtn.classList.add('ready');
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('ready');
    }
}

// Форматирование номера телефона: 998 25 20 23
function formatPhoneInput(input) {
    let value = input.value.replace(/\D/g, ''); // только цифры

    // Ограничиваем до 9 цифр
    if (value.length > 9) {
        value = value.slice(0, 9);
    }

    // Форматируем: 998 25 20 23
    let formatted = '';
    if (value.length > 0) {
        formatted = value.slice(0, 3);
    }
    if (value.length > 3) {
        formatted += ' ' + value.slice(3, 5);
    }
    if (value.length > 5) {
        formatted += ' ' + value.slice(5, 7);
    }
    if (value.length > 7) {
        formatted += ' ' + value.slice(7, 9);
    }

    input.value = formatted;
}

// Подключаем слушатели на инпуты формы, чтобы валидировать в реальном времени
function initOrderFormValidation() {
    const name = document.getElementById('customerName');
    const phone = document.getElementById('customerPhone');
    const deliveryPhone = document.getElementById('deliveryPhone');
    const radios = document.querySelectorAll('input[name="paymentMethod"]');

    if (name) name.addEventListener('input', validateOrderForm);

    // Форматирование и валидация телефона
    if (phone) {
        phone.addEventListener('input', () => {
            formatPhoneInput(phone);
            validateOrderForm();
        });
    }

    // Форматирование телефона в форме доставки
    if (deliveryPhone) {
        deliveryPhone.addEventListener('input', () => {
            formatPhoneInput(deliveryPhone);
        });
    }

    radios.forEach(r => r.addEventListener('change', validateOrderForm));

    // ensure validation runs when cart changes
    // updateCartUI() will call validateOrderForm at the end
    validateOrderForm();
}

// ============================================
// Модальное окно выбора типа заказа
// ============================================

function initLangSelectButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');

    // Устанавливаем активную кнопку по текущему языку
    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang && translations[lang]) {
                currentLang = lang;
                localStorage.setItem('lang', lang);

                // Обновляем активную кнопку
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Обновляем интерфейс
                updateLanguage();
                renderMenu();

                // Обновляем кнопку языка в шапке
                const langToggle = document.getElementById('langToggle');
                if (langToggle) {
                    langToggle.textContent = lang.toUpperCase();
                }
                // Обновляем состояние кнопок языка в модальном окне
                const langBtnRu = document.getElementById('langBtnRu');
                const langBtnKg = document.getElementById('langBtnKg');
                if (langBtnRu) {
                    langBtnRu.classList.toggle('active', lang === 'ru');
                }
                if (langBtnKg) {
                    langBtnKg.classList.toggle('active', lang === 'kg');
                }
            }
        });
    });
}

function initOrderTypeModal() {
    const modal = document.getElementById('orderTypeModal');
    const tableModal = document.getElementById('tableSelectModal');
    const deliveryModal = document.getElementById('deliveryFormModal');
    const tableGrid = document.getElementById('tableGrid');

    // Инициализация кнопок выбора языка
    initLangSelectButtons();


    // Генерируем кнопки столов 1-11
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

    // Обработчики кнопок типа заказа
    const cafeBtn = document.getElementById('orderTypeCafe');
    const pickupBtn = document.getElementById('orderTypePickup');
    const deliveryBtn = document.getElementById('orderTypeDelivery');
    const browseBtn = document.getElementById('orderTypeBrowse');
    const closeTableBtn = document.getElementById('closeTableModal');
    const closeDeliveryBtn = document.getElementById('closeDeliveryModal');
    const backToOrderTypeBtn = document.getElementById('backToOrderType');
    const deliveryForm = document.getElementById('deliveryInfoForm');

    // Если в URL НЕТ номера стола (?table=...), скрываем кнопку "Я в кафе"
    // Это значит, что гость не из зала, а просто зашёл на сайт
    try {
        const params = new URLSearchParams(window.location.search);
        const tableParam = params.get('table');
        if (cafeBtn && !tableParam) {
            cafeBtn.style.display = 'none';
        }
    } catch (e) { }

    if (cafeBtn) cafeBtn.addEventListener('click', () => showTableSelect());
    if (pickupBtn) pickupBtn.addEventListener('click', () => setOrderType('pickup'));
    if (deliveryBtn) deliveryBtn.addEventListener('click', () => showDeliveryForm());
    if (browseBtn) browseBtn.addEventListener('click', () => setOrderType('browse'));

    if (closeTableBtn) closeTableBtn.addEventListener('click', () => {
        tableModal.classList.remove('active');
        modal.classList.add('active');
    });

    if (closeDeliveryBtn) closeDeliveryBtn.addEventListener('click', () => {
        deliveryModal.classList.remove('active');
        modal.classList.add('active');
    });

    if (backToOrderTypeBtn) backToOrderTypeBtn.addEventListener('click', () => {
        deliveryModal.classList.remove('active');
        modal.classList.add('active');
    });

    // Обработка формы доставки
    if (deliveryForm) {
        deliveryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('deliveryName').value.trim();
            const phone = document.getElementById('deliveryPhone').value.trim();
            const address = document.getElementById('deliveryAddressInput').value.trim();

            if (name && phone && address) {
                deliveryInfo = { name, phone, address };
                // Сохраняем временно введённые данные доставки, чтобы они были доступны
                // при переходе к форме оформления заказа
                try { localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo)); } catch (e) { }
                setOrderType('delivery');
                deliveryModal.classList.remove('active');
            }
        });
    }

    // Закрытие по клику вне модального окна стола
    if (tableModal) {
        tableModal.addEventListener('click', (e) => {
            if (e.target === tableModal) {
                tableModal.classList.remove('active');
                modal.classList.add('active');
            }
        });
    }

    // Закрытие по клику вне модального окна доставки
    if (deliveryModal) {
        deliveryModal.addEventListener('click', (e) => {
            if (e.target === deliveryModal) {
                deliveryModal.classList.remove('active');
                modal.classList.add('active');
            }
        });
    }
}


// No-op replacements (table selection / waiter notifications removed)
function initTableFromUrl() {
    try {
        const params = new URLSearchParams(window.location.search);
        const tableParam = params.get('table');
        if (!tableParam) return false;

        const t = parseInt(tableParam, 10);
        if (!isNaN(t) && t >= 1 && t <= 11) {
            tableNumber = t;
            // Устанавливаем режим заказа "в кафе"
            orderType = 'cafe';
            applyOrderTypeMode();

            // Добавим небольшой баннер в шапке, чтобы гость видел номер стола
            const headerContent = document.querySelector('.header-content');
            if (headerContent) {
                let banner = document.getElementById('tableBanner');
                if (!banner) {
                    banner = document.createElement('div');
                    banner.id = 'tableBanner';
                    banner.className = 'table-banner';
                    banner.style.marginLeft = '12px';
                    banner.style.padding = '6px 10px';
                    banner.style.borderRadius = '999px';
                    banner.style.background = 'linear-gradient(90deg,var(--accent),var(--accent-2))';
                    banner.style.color = 'var(--on-accent)';
                    banner.style.fontWeight = '700';
                    banner.style.fontSize = '0.95rem';
                    headerContent.appendChild(banner);
                }
                banner.textContent = currentLang === 'ru' ? `Стол №${t}` : `Стол №${t}`;
            }

            // Если есть текущая корзина — обновим UI, чтобы показать тип заказа
            try { updateCartUI(); } catch (e) { }

            return true;
        }
    } catch (e) {
        console.warn('initTableFromUrl error', e);
    }
    return false;
}

function notifyAssignedWaiter() {
    // no-op: waiter system disabled
}


// Блокировка фоновых взаимодействий при открытом обязательном модальном окне
function enableModalLock() {
    document.body.classList.add('modal-blocked');
    // Отключаем прокрутку фона
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
}

function disableModalLock() {
    document.body.classList.remove('modal-blocked');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
}

function showTableSelect() {
    const modal = document.getElementById('orderTypeModal');
    const tableModal = document.getElementById('tableSelectModal');
    if (modal) modal.classList.remove('active');
    if (tableModal) tableModal.classList.add('active');
    // при переходе к выбору стола фон всё ещё должен быть недоступен
    enableModalLock();
}

function showDeliveryForm() {
    const modal = document.getElementById('orderTypeModal');
    const deliveryModal = document.getElementById('deliveryFormModal');
    if (modal) modal.classList.remove('active');
    if (deliveryModal) deliveryModal.classList.add('active');
    // при показе формы доставки блокируем фон
    enableModalLock();
}

function selectTable(num) {
    tableNumber = num;
    // Назначаем официанта для выбранного стола
    const waiter = getWaiterForTable(num);
    if (waiter) {
        currentWaiter = waiter;
        try { localStorage.setItem('currentWaiter', JSON.stringify(currentWaiter)); } catch (e) { }
    }
    setOrderType('cafe');
    const tableModal = document.getElementById('tableSelectModal');
    if (tableModal) tableModal.classList.remove('active');
    // Показать уведомление о назначенном официанте
    setTimeout(() => { notifyAssignedWaiter(); }, 250);
}

function setOrderType(type) {
    orderType = type;

    const modal = document.getElementById('orderTypeModal');
    const tableModal = document.getElementById('tableSelectModal');
    if (modal) modal.classList.remove('active');
    if (tableModal) tableModal.classList.remove('active');

    applyOrderTypeMode();
    // После выбора снимаем блокировку и разрешаем взаимодействие с сайтом
    disableModalLock();
}

function applyOrderTypeMode() {
    // Если выбран режим просмотра, добавляем класс browse-mode
    if (orderType === 'browse') {
        document.body.classList.add('browse-mode');
    } else {
        document.body.classList.remove('browse-mode');
    }
    // Обновляем видимость поля адреса и варинтов оплаты при смене типа заказа
    updateDeliveryAddressVisibility();
    adjustPaymentOptionsForDelivery();
}

function getOrderTypeText() {
    if (!orderType || orderType === 'browse') return '';

    if (orderType === 'cafe' && tableNumber) {
        return currentLang === 'ru'
            ? `📍 Стол №${tableNumber}`
            : `📍 Стол №${tableNumber}`;
    } else if (orderType === 'pickup') {
        return currentLang === 'ru' ? '📍 Самовывоз' : '📍 Өзү алып кетүү';
    } else if (orderType === 'delivery' && deliveryInfo) {
        return currentLang === 'ru'
            ? `📍 Доставка: ${deliveryInfo.address}`
            : `📍 Жеткирүү: ${deliveryInfo.address}`;
    }
    return '';
}

function updateDeliveryAddressVisibility() {
    const addressGroup = document.getElementById('deliveryAddressGroup');
    if (addressGroup) {
        addressGroup.style.display = orderType === 'delivery' ? 'block' : 'none';
    }
}

function openImageLightbox(src, alt) {
    const lb = document.getElementById('imageLightbox');
    const lbImg = document.getElementById('lightboxImage');
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('active');
}

function closeImageLightbox() {
    const lb = document.getElementById('imageLightbox');
    const lbImg = document.getElementById('lightboxImage');
    if (!lb || !lbImg) return;
    lb.classList.remove('active');
    lbImg.src = '';
    lbImg.alt = '';
}

// Плавное появление приветствия
function animateWelcome() {
    const el = document.getElementById('animatedWelcome');
    if (!el) return;
    const text = (translations[currentLang] && translations[currentLang]['about-title']) ? translations[currentLang]['about-title'] : 'Добро пожаловать в SushiDom';
    el.textContent = text;
    // Запускаем анимацию сразу после загрузки
    requestAnimationFrame(() => {
        el.classList.add('fade-in');
    });

    // CTA buttons behavior
    const viewMenuBtn = document.getElementById('viewMenuBtn');
    const viewContactsBtn = document.getElementById('viewContactsBtn');
    if (viewMenuBtn) viewMenuBtn.addEventListener('click', () => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' }));
    if (viewContactsBtn) viewContactsBtn.addEventListener('click', () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }));
}

// ============================================
// Инициализация темы
// ============================================// 1. Создаем элемент изображения
const moon = document.createElement('img');
const sun = document.createElement('img');

// Исправлено: src вместо scr
sun.src = 'icons/brightness.svg';
sun.alt = 'light mode';
sun.style.width = '20px';

moon.src = 'icons/moon-stars.svg';
moon.alt = 'Dark mode';
moon.style.width = '20px';
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const themeIcon = document.querySelector('.theme-icon');

    if (themeIcon) {
        // Очищаем содержимое, чтобы иконки не дублировались при повторном клике
        themeIcon.textContent = '';

        if (currentTheme === 'dark') {
            themeIcon.appendChild(sun);
        } else {
            themeIcon.appendChild(moon);
        }
    }
}



// ============================================
// Инициализация языка
// ============================================

function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = currentLang.toUpperCase();
    }
    // Обновляем состояние кнопок языка в модальном окне
    const langBtnRu = document.getElementById('langBtnRu');
    const langBtnKg = document.getElementById('langBtnKg');
    if (langBtnRu) {
        langBtnRu.classList.toggle('active', currentLang === 'ru');
    }
    if (langBtnKg) {
        langBtnKg.classList.toggle('active', currentLang === 'kg');
    }
    translatePage();
}

// ============================================
// Перевод страницы
// ============================================

function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const txt = translations[currentLang] && translations[currentLang][key];
        if (txt) {
            // основной текст
            el.textContent = txt;
            // placeholder, title, aria-label, value
            if (el.hasAttribute('placeholder')) el.setAttribute('placeholder', txt);
            if (el.hasAttribute('title')) el.setAttribute('title', txt);
            if (el.hasAttribute('aria-label')) el.setAttribute('aria-label', txt);
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = el.value || '';
        }
    });
}

// ============================================
// Обработчики событий
// ============================================

function initEventListeners() {
    // Переключение темы
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Переключение языка
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    // Кнопки выбора языка в модальном окне
    const langBtnRu = document.getElementById('langBtnRu');
    const langBtnKg = document.getElementById('langBtnKg');
    if (langBtnRu) {
        langBtnRu.addEventListener('click', () => setLanguage('ru'));
    }
    if (langBtnKg) {
        langBtnKg.addEventListener('click', () => setLanguage('kg'));
    }

    // Нижнее мобильное меню (объявляем раньше, чтобы использовать в других обработчиках)
    const bottomNavMenu = document.getElementById('bottomNavMenu');
    const bottomNavCart = document.getElementById('bottomNavCart');

    function updateBottomNavActive() {
        // Определяем текущую секцию на основе позиции скролла
        const menuSection = document.getElementById('menu');
        const scrollPosition = window.pageYOffset + window.innerHeight / 2;

        if (menuSection) {
            const menuTop = menuSection.offsetTop;
            const menuBottom = menuTop + menuSection.offsetHeight;

            if (scrollPosition >= menuTop && scrollPosition < menuBottom) {
                bottomNavMenu?.classList.add('active');
                bottomNavCart?.classList.remove('active');
            } else {
                bottomNavMenu?.classList.remove('active');
            }
        }
    }

    // Открытие корзины
    const cartIconBtn = document.getElementById('cartIconBtn');
    if (cartIconBtn) {
        cartIconBtn.addEventListener('click', () => {
            document.getElementById('cartModal').classList.add('active');
            // Обновляем активное состояние нижнего меню
            if (bottomNavCart) {
                bottomNavCart.classList.add('active');
                bottomNavMenu?.classList.remove('active');
            }
        });
    }

    // Мобильное меню (гамбургер)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            const expanded = mainNav.classList.contains('open');
            mobileMenuBtn.setAttribute('aria-expanded', expanded);
        });

        // Закрываем меню при клике вне навигации
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mainNav.classList.remove('open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Закрываем мобильное меню при изменении размера экрана
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) {
                mainNav.classList.remove('open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    if (bottomNavMenu) {
        bottomNavMenu.addEventListener('click', () => {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                bottomNavMenu.classList.add('active');
                bottomNavCart?.classList.remove('active');
            }
        });
    }

    if (bottomNavCart) {
        bottomNavCart.addEventListener('click', () => {
            const cartModal = document.getElementById('cartModal');
            if (cartModal) {
                cartModal.classList.add('active');
                bottomNavCart.classList.add('active');
                bottomNavCart.classList.add('active');
                bottomNavMenu?.classList.remove('active');
            }
        });
    }

    // Обновляем активное состояние при скролле
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateBottomNavActive();
        }, 100);
    });

    // Инициализируем активное состояние при загрузке
    updateBottomNavActive();

    // Закрытие модальных окон
    const closeCartModal = document.getElementById('closeCartModal');
    if (closeCartModal) {
        closeCartModal.addEventListener('click', () => {
            document.getElementById('cartModal').classList.remove('active');
            // Обновляем активное состояние нижнего меню
            updateBottomNavActive();
        });
    }

    // Закрытие корзины при клике на overlay
    const cartModalOverlay = document.getElementById('cartModal');
    if (cartModalOverlay) {
        cartModalOverlay.addEventListener('click', (e) => {
            if (e.target === cartModalOverlay) {
                cartModalOverlay.classList.remove('active');
                updateBottomNavActive();
            }
        });
    }

    const closeOrderModal = document.getElementById('closeOrderModal');
    if (closeOrderModal) {
        closeOrderModal.addEventListener('click', () => {
            document.getElementById('orderModal').classList.remove('active');
        });
    }

    const cancelOrder = document.getElementById('cancelOrder');
    if (cancelOrder) {
        cancelOrder.addEventListener('click', () => {
            document.getElementById('orderModal').classList.remove('active');
        });
    }

    // Закрытие по клику вне модального окна
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            // Если это модальное окно выбора типа заказа и оно активно,
            // блокируем закрытие кликом по фону — пользователь должен выбрать.
            if (overlay.id === 'orderTypeModal' && overlay.classList.contains('active')) {
                // Игнорируем клик вне модального контента
                return;
            }
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });

    // Очистка корзины
    const clearCart = document.getElementById('clearCart');
    if (clearCart) {
        clearCart.addEventListener('click', () => {
            const confText = translations[currentLang] && translations[currentLang]['confirm_clear_cart'] ? translations[currentLang]['confirm_clear_cart'] : (currentLang === 'ru' ? 'Очистить корзину?' : 'Себетти тазалоо?');
            if (confirm(confText)) {
                cart = [];
                saveCart();
                updateCartUI();
            }
        });
    }

    // Предотвращаем закрытие модалов клавишей Escape, когда включена обязательная блокировка
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.body.classList.contains('modal-blocked')) {
            e.stopPropagation();
            e.preventDefault();
        }
    });

    // Оформление заказа
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            // Защита от пустой корзины
            if (cart.length === 0) {
                const cmsg = translations[currentLang] && translations[currentLang]['cart_empty_msg'] ? translations[currentLang]['cart_empty_msg'] : (currentLang === 'ru' ? 'Корзина пуста. Добавьте блюда в корзину.' : 'Себет бош. Себетке тамак кошуңуз.');
                alert(cmsg);
                return;
            }
            showOrderForm();
        });
    }

    // Отправка формы заказа
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmit);
    }

    // Фильтр категорий
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            filterByCategory(category);

            // Обновляем активную кнопку
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Закрытие модального окна деталей блюда
    const closeDishDetailsModal = document.getElementById('closeDishDetailsModal');
    if (closeDishDetailsModal) {
        closeDishDetailsModal.addEventListener('click', () => {
            document.getElementById('dishDetailsModal').classList.remove('active');
        });
    }

    // Кнопка добавления в корзину из деталей
    const addToCartFromDetails = document.getElementById('addToCartFromDetails');
    if (addToCartFromDetails) {
        addToCartFromDetails.addEventListener('click', () => {
            const dishId = parseInt(addToCartFromDetails.getAttribute('data-dish-id'));
            if (dishId) {
                addToCart(dishId);
                document.getElementById('dishDetailsModal').classList.remove('active');
            }
        });
    }

    // Слайдер фото
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    if (sliderPrev) sliderPrev.addEventListener('click', () => changeSliderImage(-1));
    if (sliderNext) sliderNext.addEventListener('click', () => changeSliderImage(1));
}

// ============================================
// Переключение темы
// ============================================

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    initTheme();
}

// ============================================
// Переключение языка
// ============================================

function toggleLanguage() {
    currentLang = currentLang === 'ru' ? 'kg' : 'ru';
    setLanguage(currentLang);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', currentLang);
    initLanguage();
    renderMenu(); // Перерисовываем меню с новым языком
    updateCartUI(); // Обновляем корзину с новым языком
}

// ============================================
// Рендеринг меню
// ============================================

function renderMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    // Убедимся, что старый мобильный слайдер удалён перед перерисовкой
    // чтобы при смене фильтра не оставались старые карточки в слайдере.
    try { destroyMenuSlider(); } catch (e) { /* ignore */ }

    menuGrid.innerHTML = '';

    // Фильтруем блюда по категории
    // Support composite category 'fastfood' which groups quick eat items
    let filteredItems;
    if (currentCategory === 'all') {
        filteredItems = menuData;
    } else if (currentCategory === 'fastfood') {
        const fastCategories = ['pizza', 'wings', 'nuggets', 'potato', 'wok', 'sets'];
        filteredItems = menuData.filter(item => fastCategories.includes(item.category));
    } else if (currentCategory === 'drinks') {
        const drinkCategories = ['bubble_tea', 'ice_tea', 'lemonade', 'milkshake', 'coffee', 'matcha', 'ice_coffee', 'tea'];
        filteredItems = menuData.filter(item => drinkCategories.includes(item.category));
    } else {
        filteredItems = menuData.filter(item => item.category === currentCategory);
    }

    filteredItems.forEach(item => {
        const card = createMenuCard(item);
        menuGrid.appendChild(card);
    });
    // mobile slider removed — grid is responsive and shows 2 columns on small screens
}

// ============================================
// Фильтрация по категориям
// ============================================

function filterByCategory(category) {
    currentCategory = category;
    renderMenu();

    // Прокручиваем к меню
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// Создание карточки блюда
// ============================================

function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';

    const name = currentLang === 'ru' ? item.name : item.nameKg;
    const description = currentLang === 'ru' ? item.description : item.descriptionKg;
    const price = item.price2 ? `${item.price} / ${item.price2}` : item.price;

    const cartItem = cart.find(ci => ci.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    card.innerHTML = `
        <img src="${item.image}" alt="${name}" class="dish-image" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
        <div class="dish-info">
            <h3 class="dish-name">${name}</h3>
            <p class="dish-description">${description}</p>
            <div class="dish-footer">
                <span class="dish-price">${price} <span data-i18n="currency">сом</span></span>
                <div class="dish-actions">
                        ${quantity === 0
            ? `<button type="button" class="btn-add-cart" data-item-id="${item.id}" onclick="addToCart(${item.id})" data-i18n="add-to-cart">В корзину</button>`
            : `<div class="quantity-controls">
                            <button type="button" class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                            <span class="quantity-value">${quantity}</span>
                            <button type="button" class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                        </div>`
        }
                </div>
            </div>
        </div>
    `;

    // Переводим кнопки и элементы
    const addBtn = card.querySelector('[data-i18n="add-to-cart"]');
    if (addBtn) {
        addBtn.textContent = translations[currentLang]['add-to-cart'];
    }
    const detailsBtn = card.querySelector('[data-i18n="details"]');
    if (detailsBtn) {
        detailsBtn.textContent = translations[currentLang]['details'];
    }
    const currency = card.querySelector('[data-i18n="currency"]');
    if (currency) {
        currency.textContent = translations[currentLang]['currency'];
    }

    // Надёжная загрузка изображения: используем объект Image чтобы обработать ошибки
    const imgEl = card.querySelector('.dish-image');
    if (imgEl) {
        const placeholder = 'https://via.placeholder.com/300x200?text=No+Image';
        const loader = new Image();
        loader.onload = () => {
            imgEl.src = loader.src;
        };
        loader.onerror = () => {
            imgEl.src = placeholder;
        };
        // Начинаем загрузку
        loader.src = item.image || placeholder;

        // Навешиваем обработчик: клик по изображению открывает окно деталей
        imgEl.addEventListener('click', () => showDishDetails(item.id));
    }

    // Делаем всю карточку кликабельной — клик по карточке открывает детали.
    // Исключаем клики по кнопкам, контролам количества и по самому изображению.
    card.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('.dish-image') || e.target.closest('.dish-actions')) {
            // Если клик по кнопке/изображению/областям действий — не открываем детали здесь
            return;
        }
        showDishDetails(item.id);
    });

    return card;
}

// ============================================
// Работа с корзиной
// ============================================
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    // Найдём кнопку, если она есть (карточка меню)
    const btn = document.querySelector(`button.btn-add-cart[data-item-id="${itemId}"]`);
    const addingText = translations[currentLang] && translations[currentLang]['adding'] ? translations[currentLang]['adding'] : (currentLang === 'ru' ? 'Добавление…' : 'Кошулууда…');
    if (btn) {
        btn.disabled = true;
        btn.textContent = addingText;
        btn.classList.add('loading');
    }

    // Небольшая имитация загрузки для UX (можно убрать или уменьшить)
    setTimeout(() => {
        const existingItem = cart.find(ci => ci.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: item.id,
                name: currentLang === 'ru' ? item.name : item.nameKg,
                price: item.price,
                image: item.image,
                quantity: 1
            });
        }

        saveCart();
        updateCartUI();
        renderMenu(); // Обновляем меню для отображения количества

        // Показ уведомления о добавлении (без открытия корзины)
        const addedLabel = translations[currentLang] && translations[currentLang]['added'] ? translations[currentLang]['added'] : (currentLang === 'ru' ? 'Добавлено:' : 'Кошулду:');
        const itemName = currentLang === 'ru' ? item.name : (item.nameKg || item.name);
        showToast(`${addedLabel} ${itemName}`);

    }, 350);
}

function increaseQuantity(itemId) {
    const cartItem = cart.find(ci => ci.id === itemId);
    if (cartItem) {
        cartItem.quantity += 1;
        saveCart();
        updateCartUI();
        renderMenu();
    }
}

function decreaseQuantity(itemId) {
    const cartItem = cart.find(ci => ci.id === itemId);
    if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(ci => ci.id !== itemId);
        }
        saveCart();
        updateCartUI();
        renderMenu();
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(ci => ci.id !== itemId);
    saveCart();
    updateCartUI();
    renderMenu();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Обновляем бейдж корзины
    const cartBadge = document.getElementById('cartBadge');
    if (cartBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Обновляем бейдж корзины в нижнем меню
    const bottomNavBadge = document.getElementById('bottomNavBadge');
    if (bottomNavBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        bottomNavBadge.textContent = totalItems;
        bottomNavBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Обновляем содержимое корзины
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartTotal = document.getElementById('cartTotal');
    const totalPrice = document.getElementById('totalPrice');

    if (!cartItems || !cartEmpty || !cartTotal || !totalPrice) return;

    if (cart.length === 0) {
        cartItems.style.display = 'none';
        cartEmpty.style.display = 'block';
        cartTotal.style.display = 'none';
    } else {
        cartItems.style.display = 'flex';
        cartEmpty.style.display = 'none';
        cartTotal.style.display = 'block';

        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80x80?text=No+Image'">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} ${translations[currentLang]['currency']} × ${item.quantity}</div>
                </div>
                <div class="cart-item-controls">
                    <button type="button" class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button type="button" class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <div class="cart-item-total">${itemTotal} ${translations[currentLang]['currency']}</div>
                <button type="button" class="quantity-btn" onclick="removeFromCart(${item.id})" style="background: #dc3545;" title="${translations[currentLang]['remove']}">×</button>
            `;
            cartItems.appendChild(cartItem);
        });

        totalPrice.textContent = `${total} ${translations[currentLang]['currency']}`;
    }
    // Обновляем валидацию формы заказа (кнопка Отправить зависит от корзины)
    try { validateOrderForm(); } catch (e) { /* ignore */ }
}

// ============================================
// Показ формы заказа
// ============================================

function showOrderForm() {
    const orderModal = document.getElementById('orderModal');
    const orderSummary = document.getElementById('orderSummary');
    const orderForm = document.getElementById('orderForm');

    if (!orderModal || !orderSummary || !orderForm) return;

    // Очищаем форму
    orderForm.reset();

    // Если есть данные доставки, заполняем форму
    if (orderType === 'delivery' && deliveryInfo) {
        const nameInput = document.getElementById('customerName');
        const phoneInput = document.getElementById('customerPhone');
        if (nameInput) nameInput.value = deliveryInfo.name;
        if (phoneInput) phoneInput.value = deliveryInfo.phone;
        // Заполняем адрес доставки в форме оформления заказа
        const addressInput = document.getElementById('deliveryAddress');
        if (addressInput) addressInput.value = deliveryInfo.address || '';
    }

    // Формируем сводку заказа
    let summaryHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        summaryHTML += `
            <div class="order-summary-item">
                <span>${item.name} × ${item.quantity}</span>
                <span>${itemTotal} ${translations[currentLang]['currency']}</span>
            </div>
        `;
    });

    summaryHTML += `
        <div class="order-summary-item" style="font-weight: 600; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 2px solid var(--border);">
            <span>${translations[currentLang]['cart-total']}</span>
            <span>${total} ${translations[currentLang]['currency']}</span>
        </div>
    `;

    orderSummary.innerHTML = summaryHTML;

    // Показываем заметку о типе заказа (например: "Стол №3") вверху формы
    try {
        let note = document.getElementById('orderTypeNote');
        if (!note) {
            note = document.createElement('div');
            note.id = 'orderTypeNote';
            note.className = 'order-type-note';
            // Вставляем перед сводкой заказа
            orderSummary.parentNode.insertBefore(note, orderSummary);
        }
        const ot = getOrderTypeText();
        note.textContent = ot;
        note.style.display = ot ? 'block' : 'none';
    } catch (e) { /* ignore */ }
    // Показываем/скрываем поле адреса в зависимости от типа заказа
    updateDeliveryAddressVisibility();
    // Обновляем видимость способов оплаты и QR
    adjustPaymentOptionsForDelivery();
    const checked = document.querySelector('input[name="paymentMethod"]:checked');
    toggleMbankQr(checked ? checked.value : null);

    orderModal.classList.add('active');
}

// ============================================
// Функции оформления заказа
// ============================================

/**
 * Формирует аккуратный текст заказа для WhatsApp
 * @param {string} name - Имя клиента
 * @param {string} phone - Телефон клиента
 * @param {string} comment - Комментарий к заказу
 * @returns {string} Отформатированный текст заказа
 */
function createOrderText(name, phone, comment, paymentMethod) {
    // Проверка на пустую корзину
    if (cart.length === 0) {
        throw new Error(currentLang === 'ru' ? 'Корзина пуста' : 'Себет бош');
    }
    const headerContainer = document.getElementById('order-header');
    const logo = document.createElement('img');
    logo.src = 'icons/plate-eating.svg';
    logo.style.width = '30px';

    const text = currentLang === 'ru'
        ? ' 🍽 Новый заказ из SushiDom'
        : ' 🍽 SushiDom кафесинен жаңы заказ';
    // Формируем список блюд
    let itemsText = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemsText += `${item.name} x${item.quantity} — ${itemTotal} ${translations[currentLang]['currency']}\n`;
    });

    // Итоговая сумма (с пустой строкой перед итогом)
    const totalText = `\n💰 Итого: ${total} ${translations[currentLang]['currency']}\n`;

    // Информация о клиенте (добавляем +996 к номеру)
    const fullPhone = '+996 ' + phone;
    const customerInfo = `👤 ${currentLang === 'ru' ? 'Клиент' : 'Клиент'}: ${name}\n📞 ${currentLang === 'ru' ? 'Телефон' : 'Телефон'}: ${fullPhone}`;

    // Способ оплаты
    let paymentText = '';
    if (paymentMethod) {
        let pmLabel = paymentMethod === 'cash' ? (translations[currentLang]['payment-cash'] || (currentLang === 'ru' ? 'Наличными' : 'Накта'))
            : paymentMethod === 'card' ? (translations[currentLang]['payment-card'] || (currentLang === 'ru' ? 'Картой' : 'Карта менен'))
                : paymentMethod === 'mbank' ? (translations[currentLang]['payment-mbank'] || 'MBank')
                    : paymentMethod;
        paymentText = `\n💳 ${currentLang === 'ru' ? 'Способ оплаты' : 'Төлөө ыкмасы'}: ${pmLabel}`;
    }

    // Комментарий (если есть)
    let commentText = '';
    if (comment && comment.trim()) {
        commentText = `\n📝 ${currentLang === 'ru' ? 'Комментарий' : 'Комментарий'}: ${comment}`;
    }

    // Тип заказа (стол/самовывоз/доставка)
    const orderTypeInfo = getOrderTypeText();
    const orderTypeText = orderTypeInfo ? `\n${orderTypeInfo}` : '';

    // Собираем полный текст заказа
    const headerText = '🍽 ' + (currentLang === 'ru' ? 'Новый заказ из SushiDom' : 'SushiDom кафесинен жаңы заказ') + '\n\n';

    return headerText + itemsText + totalText + customerInfo + paymentText + orderTypeText + commentText;
}

/**
 * Отправляет заказ в WhatsApp
 * @param {string} orderText - Текст заказа
 */
function sendToWhatsApp(orderText) {
    // Формируем URL для WhatsApp (отправка на общий номер кафе)
    const whatsappUrl = `https://wa.me/${CAFE_PHONE_NUMBER}?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, '_blank');
}

// Вспомогательный вариант: отправить на конкретный номер (без '+')
function sendToWhatsAppTo(orderText, phoneNumber) {
    if (!phoneNumber) return sendToWhatsApp(orderText);
    const target = phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${target}?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, '_blank');
}

/**
 * Отправляет заказ в Google Sheets через Google Apps Script
 * @param {string} name - Имя клиента
 * @param {string} phone - Телефон клиента
 * @param {string} comment - Комментарий к заказу
 * @returns {Promise} Промис с результатом отправки
 */
async function sendToExcel(name, phone, comment, paymentMethod, address) {
    // Проверяем, настроен ли URL Google Sheets
    if (GOOGLE_SHEETS_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
        console.log('Google Sheets не настроен. Пропускаем отправку.');
        return Promise.resolve();
    }

    // Вычисляем общую сумму заказа
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Формируем текст заказа для сохранения
    const orderText = cart.map(item => `${item.name} × ${item.quantity}`).join(', ');

    // Данные для отправки в Google Sheets
    const orderData = {
        date: new Date().toLocaleString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }),
        order: orderText,
        total: total,
        customerName: name,
        customerPhone: phone,
        // Добавляем адрес доставки в комментарий, если он есть
        comment: ((comment && comment.trim()) ? comment.trim() + ' | ' : '') + (address || ''),
        paymentMethod: paymentMethod || ''
    };

    try {
        // Отправляем данные в Google Sheets
        // Используем no-cors режим для обхода CORS ограничений
        await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors', // Важно: позволяет отправлять без CORS проверки
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
        });

        console.log('Заказ успешно отправлен в Google Sheets');
        return Promise.resolve();
    } catch (error) {
        // Логируем ошибку, но не прерываем процесс заказа
        console.error('Ошибка отправки в Google Sheets:', error);
        // Возвращаем успешный промис, чтобы не блокировать отправку в WhatsApp
        return Promise.resolve();
    }
}

/**
 * Очищает корзину и localStorage
 */
function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    updateCartUI();
    renderMenu();
}

/**
 * Основная функция оформления заказа
 * Выполняет все необходимые действия: валидацию, отправку в WhatsApp и Google Sheets
 * @param {Event} e - Событие формы
 */
async function placeOrder(e) {
    e.preventDefault();

    // Получаем данные из формы
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const comment = document.getElementById('orderComment').value.trim();

    // Валидация: проверка на пустую корзину
    if (cart.length === 0) {
        alert(currentLang === 'ru'
            ? 'Корзина пуста. Добавьте блюда в корзину.'
            : 'Себет бош. Себетке тамак кошуңуз.');
        return;
    }

    // Валидация: проверка обязательных полей
    if (!name || !phone) {
        alert(currentLang === 'ru'
            ? 'Заполните все обязательные поля'
            : 'Бардык милдеттүү талааларды толтуруңуз');
        return;
    }

    // Валидация: проверка формата телефона
    // Принимаем форматы: +996 998 252 023, 0998252023, 996998252023
    const cleanPhone = phone.replace(/[\s-]/g, ''); // Убираем пробелы и дефисы
    const phoneRegex = /^(\+?996|0)?[0-9]{9}$/;

    if (!phoneRegex.test(cleanPhone)) {
        alert(currentLang === 'ru'
            ? 'Введите корректный номер телефона\nПример: +996 998 252 023 или 0998252023'
            : 'Туура телефон номурун киргизиңиз\nМисал: +996 998 252 023 же 0998252023');
        return;
    }

    try {
        // Читаем выбранный способ оплаты
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked') ? document.querySelector('input[name="paymentMethod"]:checked').value : 'cash';

        // Формируем текст заказа
        // Если это доставка, синхронизируем адрес из формы в `deliveryInfo`
        if (orderType === 'delivery') {
            const addrInput = document.getElementById('deliveryAddress');
            const addrVal = addrInput ? addrInput.value.trim() : (deliveryInfo ? deliveryInfo.address : '');
            if (!deliveryInfo) deliveryInfo = {};
            deliveryInfo.address = addrVal || deliveryInfo.address;
            try { localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo)); } catch (e) { }
        }

        const orderText = createOrderText(name, phone, comment, paymentMethod);

        // Параллельно отправляем в WhatsApp и Google Sheets
        // Открываем WhatsApp для отправки сообщения клиентом — или отправляем напрямую через сервер
        const targetPhone = (orderType === 'cafe' && currentWaiter && currentWaiter.phone) ? currentWaiter.phone : CAFE_PHONE_NUMBER;
        if (NOTIFY_ENDPOINT && NOTIFY_ENDPOINT.trim() !== '') {
            try {
                await sendNotificationToServer(orderText, targetPhone);
            } catch (err) {
                console.error('Notification to server failed, falling back to WhatsApp:', err);
                sendToWhatsAppTo(orderText, targetPhone);
            }
        } else {
            // Fallback: open WhatsApp so customer sends message manually
            sendToWhatsAppTo(orderText, targetPhone);
        }

        // Отправляем в Google Sheets в фоне (не блокируем процесс)
        const deliveryAddrForSheet = (orderType === 'delivery' && deliveryInfo && deliveryInfo.address) ? deliveryInfo.address : '';
        sendToExcel(name, phone, comment, paymentMethod, deliveryAddrForSheet).catch(error => {
            console.error('Ошибка при отправке в Google Sheets:', error);
        });

        // Очищаем корзину и localStorage
        clearCart();

        // Закрываем модальное окно
        const orderModal = document.getElementById('orderModal');
        if (orderModal) {
            orderModal.classList.remove('active');
        }

        // Показываем сообщение об успехе
        alert(currentLang === 'ru'
            ? '✅ Заказ отправлен! Мы свяжемся с вами в ближайшее время.'
            : '✅ Заказ жөнөтүлдү! Биз жакынкы убакта сиз менен байланышабыз.');

    } catch (error) {
        console.error('Ошибка при оформлении заказа:', error);
        alert(currentLang === 'ru'
            ? `❌ Произошла ошибка: ${error.message}. Пожалуйста, попробуйте еще раз.`
            : `❌ Ката кетти: ${error.message}. Сураныч, кайра аракет кылыңыз.`);
    }
}

/**
 * Отправляет уведомление о заказе на серверный webhook.
 * Ожидается, что сервер сам доставит сообщение на телефон кафе (SMS, WhatsApp Business API и т.д.).
 * @param {string} orderText
 * @param {string} phone
 */
async function sendNotificationToServer(orderText, phone) {
    if (!NOTIFY_ENDPOINT || NOTIFY_ENDPOINT.trim() === '') {
        return Promise.reject(new Error('NOTIFY_ENDPOINT not configured'));
    }

    const payload = {
        phone: (phone || '').toString().replace(/\D/g, ''),
        message: orderText
    };

    const res = await fetch(NOTIFY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!res.ok) {
        const txt = await res.text().catch(() => '');
        throw new Error('Server responded with ' + res.status + ' ' + txt);
    }

    return res.json ? res.json() : true;
}

/**
 * Обработчик отправки формы заказа
 * @param {Event} e - Событие формы
 */
function handleOrderSubmit(e) {
    placeOrder(e);
}

// ============================================
// Модальное окно деталей блюда
// ============================================

/**
 * Показывает модальное окно с деталями блюда
 * @param {number} dishId - ID блюда
 */
function showDishDetails(dishId) {
    const dish = menuData.find(item => item.id === dishId);
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

    if (!modal || !title || !name || !description || !price || !ingredientsList || !slider) return;

    // Заполняем информацию о блюде
    const dishName = currentLang === 'ru' ? dish.name : dish.nameKg;
    const dishDescription = currentLang === 'ru' ? dish.description : dish.descriptionKg;
    const dishPrice = dish.price2 ? `${dish.price} / ${dish.price2}` : dish.price;

    title.textContent = dishName;
    name.textContent = dishName;
    description.textContent = dishDescription;
    price.textContent = `${dishPrice} ${translations[currentLang]['currency']}`;

    // Устанавливаем ID блюда для кнопки добавления
    if (addBtn) {
        addBtn.setAttribute('data-dish-id', dishId);
    }

    // Получаем фото для слайдера
    const images = dish.images && dish.images.length > 0 ? dish.images : [dish.image];
    currentSliderIndex = 0;

    // Очищаем слайдер
    slider.innerHTML = '';
    sliderDots.innerHTML = '';

    // Добавляем фото в слайдер
    images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'slider-slide';
        slide.innerHTML = `<img src="${img}" alt="${dishName}" onclick="openImageLightbox('${img}','${dishName}')" onerror="this.src='https://via.placeholder.com/600x400?text=No+Image'">`;
        slider.appendChild(slide);

        // Добавляем точку для навигации
        const dot = document.createElement('button');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-slide', index);
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });

    // Показываем/скрываем кнопки навигации
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    if (sliderPrev) sliderPrev.style.display = images.length > 1 ? 'block' : 'none';
    if (sliderNext) sliderNext.style.display = images.length > 1 ? 'block' : 'none';
    sliderDots.style.display = images.length > 1 ? 'flex' : 'none';

    // Ингредиенты
    ingredientsList.innerHTML = '';
    if (dish.ingredients && dish.ingredients.length > 0) {
        const ingredients = currentLang === 'ru' ? dish.ingredients : (dish.ingredientsKg || dish.ingredients);
        ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
    } else {
        // Если ингредиенты не указаны, используем описание
        const li = document.createElement('li');
        li.textContent = dishDescription;
        ingredientsList.appendChild(li);
    }

    // Показываем модальное окно
    modal.classList.add('active');
    updateSlider();
}

/**
 * Переключает слайдер на следующее/предыдущее фото
 * @param {number} direction - Направление: 1 (вперёд) или -1 (назад)
 */
function changeSliderImage(direction) {
    const slider = document.getElementById('dishSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slider-slide');
    if (slides.length === 0) return;

    currentSliderIndex += direction;

    if (currentSliderIndex < 0) {
        currentSliderIndex = slides.length - 1;
    } else if (currentSliderIndex >= slides.length) {
        currentSliderIndex = 0;
    }

    updateSlider();
}

/**
 * Переходит к конкретному слайду
 * @param {number} index - Индекс слайда
 */
function goToSlide(index) {
    const slider = document.getElementById('dishSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slider-slide');
    if (index < 0 || index >= slides.length) return;

    currentSliderIndex = index;
    updateSlider();
}

/**
 * Обновляет отображение слайдера
 */
function updateSlider() {
    const slider = document.getElementById('dishSlider');
    const dots = document.querySelectorAll('.slider-dot');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slider-slide');
    if (slides.length === 0) return;

    // Перемещаем слайдер
    slider.style.transform = `translateX(-${currentSliderIndex * 100}%)`;

    // Обновляем активную точку
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSliderIndex);
    });
}

// ============================================
// Мобильный слайдер для меню
// ============================================

let menuSliderState = {
    currentIndex: 0,
    intervalId: null,
    initialized: false,
};

function initMenuSlider() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    // Показ только на узких экранах
    if (window.innerWidth > 768) {
        destroyMenuSlider();
        return;
    }

    if (menuSliderState.initialized) return;

    // Создаем контейнер слайдера
    const slider = document.createElement('div');
    slider.id = 'menuSlider';
    slider.className = 'menu-slider';

    const track = document.createElement('div');
    track.className = 'menu-slider-track';

    // Перемещаем карточки в слайды
    while (menuGrid.firstChild) {
        const slideWrapper = document.createElement('div');
        slideWrapper.className = 'menu-slide';
        slideWrapper.appendChild(menuGrid.firstChild);
        track.appendChild(slideWrapper);
    }

    slider.appendChild(track);

    // Кнопки навигации
    const prev = document.createElement('button');
    prev.className = 'slider-btn slider-prev';
    prev.innerHTML = '‹';
    prev.addEventListener('click', () => changeMenuSlide(-1));

    const next = document.createElement('button');
    next.className = 'slider-btn slider-next';
    next.innerHTML = '›';
    next.addEventListener('click', () => changeMenuSlide(1));

    slider.appendChild(prev);
    slider.appendChild(next);

    // Точки
    const dots = document.createElement('div');
    dots.className = 'menu-slider-dots';
    slider.appendChild(dots);

    // Вставляем слайдер перед меню (menuGrid заменён на пустой контейнер)
    menuGrid.parentNode.insertBefore(slider, menuGrid);

    // Инициализация точек
    updateMenuDots();

    // Автопрокрутка
    menuSliderState.intervalId = setInterval(() => changeMenuSlide(1), 3500);

    // События для свайпа
    initSliderTouch(track);

    menuSliderState.initialized = true;
}

function destroyMenuSlider() {
    const slider = document.getElementById('menuSlider');
    const menuGrid = document.getElementById('menuGrid');
    if (!slider || !menuGrid) return;

    const track = slider.querySelector('.menu-slider-track');
    if (track) {
        while (track.firstChild) {
            const slide = track.firstChild;
            // извлекаем карточку из обертки
            const card = slide.firstChild;
            if (card) menuGrid.appendChild(card);
            track.removeChild(slide);
        }
    }

    slider.remove();
    if (menuSliderState.intervalId) {
        clearInterval(menuSliderState.intervalId);
        menuSliderState.intervalId = null;
    }
    menuSliderState.currentIndex = 0;
    menuSliderState.initialized = false;
}

function changeMenuSlide(direction) {
    const slider = document.getElementById('menuSlider');
    if (!slider) return;
    const track = slider.querySelector('.menu-slider-track');
    const slides = track ? track.children : [];
    if (!slides || slides.length === 0) return;

    let idx = menuSliderState.currentIndex + direction;
    if (idx < 0) idx = slides.length - 1;
    if (idx >= slides.length) idx = 0;

    goToMenuSlide(idx);
}

function goToMenuSlide(index) {
    const slider = document.getElementById('menuSlider');
    if (!slider) return;
    const track = slider.querySelector('.menu-slider-track');
    const dots = slider.querySelectorAll('.menu-slider-dot');
    const slides = track.children;
    if (index < 0 || index >= slides.length) return;

    track.style.transform = `translateX(-${index * 100}%)`;
    menuSliderState.currentIndex = index;

    dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

function updateMenuDots() {
    const slider = document.getElementById('menuSlider');
    if (!slider) return;
    const dotsContainer = slider.querySelector('.menu-slider-dots');
    const track = slider.querySelector('.menu-slider-track');
    dotsContainer.innerHTML = '';
    const count = track ? track.children.length : 0;
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('button');
        dot.className = 'menu-slider-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToMenuSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function initSliderTouch(track) {
    if (!track) return;
    let startX = 0;
    let deltaX = 0;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        if (menuSliderState.intervalId) {
            clearInterval(menuSliderState.intervalId);
            menuSliderState.intervalId = null;
        }
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
        deltaX = e.touches[0].clientX - startX;
    }, { passive: true });

    track.addEventListener('touchend', () => {
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) changeMenuSlide(-1);
            else changeMenuSlide(1);
        }
        // восстанавливаем автопрокрутку
        if (!menuSliderState.intervalId) {
            menuSliderState.intervalId = setInterval(() => changeMenuSlide(1), 3500);
        }
        startX = 0; deltaX = 0;
    });
}

// Пересоздаем/уничтожаем слайдер при изменении размера окна
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 768) destroyMenuSlider();
        else initMenuSlider();
    }, 200);
});

// ============================================
// Экспорт функций для использования в HTML
// ============================================

// ============================================
// Управление шапкой при скролле
// ============================================

/**
 * Инициализирует логику скрытия/показа шапки при скролле
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollTop = 0;
    let scrollThreshold = 100; // Минимальное расстояние скролла для срабатывания
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

                // Если прокрутили меньше порога, не меняем состояние
                if (Math.abs(currentScrollTop - lastScrollTop) < 10) {
                    ticking = false;
                    return;
                }

                // В самом верху страницы всегда показываем шапку
                if (currentScrollTop < 50) {
                    header.classList.remove('hidden');
                    header.classList.add('visible');
                }
                // При скролле вниз - скрываем
                else if (currentScrollTop > lastScrollTop && currentScrollTop > scrollThreshold) {
                    header.classList.add('hidden');
                    header.classList.remove('visible');
                }
                // При скролле вверх - показываем
                else if (currentScrollTop < lastScrollTop) {
                    header.classList.remove('hidden');
                    header.classList.add('visible');
                }

                lastScrollTop = currentScrollTop;
                ticking = false;
            });

            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// Экспорт функций для использования в HTML
// ============================================

// ============================================
// Система отзывов
// ============================================

// Утилита: простой toast для уведомлений
function showToast(message, timeout = 3000) {
    const toast = document.createElement('div');
    toast.className = 'cf-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    // force reflow for animation
    void toast.offsetWidth;
    toast.classList.add('visible');
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 400);
    }, timeout);
}


let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

/**
 * Инициализация системы отзывов
 */
async function initReviews() {
    // Попробуем получить отзывы с сервера (если настроен)
    await fetchReviewsFromServer();

    // Инициализация рейтинга звездами
    initStarRating();

    // Обработчик формы отзыва
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewSubmit);
    }

    // Кнопки загрузки фото
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
            const photoPreview = document.getElementById('photoPreview');
            const reviewPhoto = document.getElementById('reviewPhoto');
            if (photoPreview) photoPreview.innerHTML = '';
            if (reviewPhoto) reviewPhoto.value = '';
            removePhotoBtn.style.display = 'none';
        });
    }

    if (reviewPhoto) {
        reviewPhoto.addEventListener('change', handlePhotoSelect);
    }

    // Отображение отзывов
    displayReviews();
}

/**
 * Инициализация рейтинга звездами
 */
function initStarRating() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('reviewRating');

    if (!stars.length || !ratingInput) return;

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            const rating = index + 1;
            ratingInput.value = rating;
            updateStarRating(rating);
        });

        star.addEventListener('mouseenter', () => {
            updateStarRating(index + 1, true);
        });
    });

    const starContainer = document.getElementById('starRating');
    if (starContainer) {
        starContainer.addEventListener('mouseleave', () => {
            const currentRating = parseInt(ratingInput.value) || 0;
            updateStarRating(currentRating);
        });
    }
}

/**
 * Обновление отображения звезд рейтинга
 */
function updateStarRating(rating, isHover = false) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

/**
 * Обработка выбора фото
 */
function handlePhotoSelect(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert(currentLang === 'ru' ? 'Пожалуйста, выберите изображение' : 'Сураныч, сүрөт тандаңыз');
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        const photoPreview = document.getElementById('photoPreview');
        const removePhotoBtn = document.getElementById('removePhotoBtn');

        if (photoPreview) {
            photoPreview.innerHTML = `
                <img src="${event.target.result}" alt="Preview" class="photo-preview-image">
            `;
        }

        if (removePhotoBtn) {
            removePhotoBtn.style.display = 'block';
        }
    };

    reader.readAsDataURL(file);
}

/**
 * Обработка отправки отзыва
 */
function handleReviewSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('reviewerName').value.trim();
    const rating = parseInt(document.getElementById('reviewRating').value);
    const comment = document.getElementById('reviewComment').value.trim();
    const photoInput = document.getElementById('reviewPhoto');

    if (!name || !rating || !comment) {
        alert(currentLang === 'ru'
            ? 'Заполните все обязательные поля'
            : 'Бардык милдеттүү талааларды толтуруңуз');
        return;
    }

    if (rating === 0) {
        alert(currentLang === 'ru'
            ? 'Пожалуйста, выберите оценку'
            : 'Сураныч, баалоо тандаңыз');
        return;
    }

    // Получаем фото, если есть
    let photoData = null;
    if (photoInput && photoInput.files && photoInput.files[0]) {
        const file = photoInput.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            photoData = event.target.result;
            saveReview(name, rating, comment, photoData);
        };

        reader.readAsDataURL(file);
    } else {
        saveReview(name, rating, comment, null);
    }
}

/**
 * Сохранение отзыва
 */
function saveReview(name, rating, comment, photoData) {
    const review = {
        id: Date.now(),
        name: name,
        rating: rating,
        comment: comment,
        photo: photoData,
        date: new Date().toLocaleString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }),
        timestamp: Date.now()
    };

    reviews.unshift(review); // Добавляем в начало
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Очищаем форму
    document.getElementById('reviewForm').reset();
    document.getElementById('photoPreview').innerHTML = '';
    document.getElementById('removePhotoBtn').style.display = 'none';
    updateStarRating(0);

    // Обновляем отображение
    displayReviews();

    // Показываем сообщение об успехе
    alert(currentLang === 'ru'
        ? 'Спасибо за ваш отзыв!'
        : 'Пикириңиз үчүн рахмат!');

    // Попробуем отправить на сервер в фоне (если настроен)
    postReviewToServer(review).then(saved => {
        if (saved && typeof saved === 'object') {
            const idx = reviews.findIndex(r => r.timestamp === review.timestamp);
            if (idx !== -1) {
                reviews[idx] = saved;
                localStorage.setItem('reviews', JSON.stringify(reviews));
            }
        } else {
            console.warn('Review stored locally but not synced to server.');
        }
    });
}

function displayReviews(limit = 6) {
    const reviewsGrid = document.getElementById('reviewsGrid');
    const reviewsEmpty = document.getElementById('reviewsEmpty');

    if (!reviewsGrid || !reviewsEmpty) return;

    if (reviews.length === 0) {
        reviewsGrid.style.display = 'none';
        reviewsEmpty.style.display = 'block';
        return;
    }

    reviewsGrid.style.display = 'grid';
    reviewsEmpty.style.display = 'none';
    reviewsGrid.innerHTML = '';

    const reviewsToShow = reviews.slice(0, limit);

    reviewsToShow.forEach(review => {
        const reviewCard = createReviewCard(review);
        reviewsGrid.appendChild(reviewCard);
    });
}

/**
 * Создание карточки отзыва
 */
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';

    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        starsHTML += `<span class="review-star ${i <= review.rating ? 'active' : ''}">★</span>`;
    }

    let photoHTML = '';
    if (review.photo) {
        photoHTML = `<img src="${review.photo}" alt="Review photo" class="review-photo">`;
    }

    card.innerHTML = `
        <div class="review-header">
            <div class="review-author">
                <strong>${review.name}</strong>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-stars">${starsHTML}</div>
        </div>
        <div class="review-content">
            <p class="review-comment">${review.comment}</p>
            ${photoHTML}
        </div>
    `;

    return card;
}

/**
 * Получение всех отзывов
 */
function getAllReviews() {
    return reviews.sort((a, b) => b.timestamp - a.timestamp); // Сортировка по дате (новые сначала)
}

// Попытка получить отзывы с сервера (если настроен)
async function fetchReviewsFromServer() {
    if (!REVIEWS_ENDPOINT) return; // не настроен
    try {
        const res = await fetch(REVIEWS_ENDPOINT, { method: 'GET', headers: { 'Accept': 'application/json' } });
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        if (Array.isArray(data)) {
            reviews = data.sort((a, b) => b.timestamp - a.timestamp);
            localStorage.setItem('reviews', JSON.stringify(reviews));
        }
    } catch (err) {
        console.warn('Could not fetch reviews from server:', err);
    }
}

async function postReviewToServer(review) {
    if (!REVIEWS_ENDPOINT) return false;
    try {
        const res = await fetch(REVIEWS_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        });
        if (!res.ok) throw new Error('Network response was not ok');
        const saved = await res.json();
        return saved;
    } catch (err) {
        console.warn('Failed to post review to server:', err);
        return false;
    }
}
window.addToCart = addToCart;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.removeFromCart = removeFromCart;
window.showDishDetails = showDishDetails;
window.filterByCategory = filterByCategory;
window.getAllReviews = getAllReviews;
window.createReviewCard = createReviewCard;