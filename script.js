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
    // ==================== ПЕРВЫЕ БЛЮДА ====================
    {
        id: 1,
        name: 'Шорпо',
        nameKg: 'Шорпо',
        description: 'Говядина',
        descriptionKg: 'Жылкы эти',
        price: 195,
        image: 'https://img.povar.ru/mobile/a5/11/49/9f/shorpo-409463.jpg',
        category: 'first',
        images: [
            'https://img.povar.ru/mobile/a5/11/49/9f/shorpo-409463.jpg',
            'https://www.russianfood.com/dycontent/images_upl/565/big_564981.jpg'
        ],
        ingredients: ['Говядина', 'Лук', 'Морковь', 'Картошка', 'Помидоры', 'Зелень', 'Специи'],
        ingredientsKg: ['Жылкы эти', 'Пияз', 'Сабиз', 'Картөшкө', 'Помидор', 'Жашылча', 'Азыктар']
    },

    {
        id: 2,
        name: 'Сырный суп (фрикадельки)',
        nameKg: 'Сырный суп (фрикадельки)',
        description: 'Фрикадельки, кукуруза, картошка, на основе сырного соуса',
        descriptionKg: 'Фрикадельки, жүгөрү, картөшкө, сыр соусунун негизинде',
        price: 195,
        image: 'https://www.russianfood.com/dycontent/images_upl/565/big_564981.jpg',
        category: 'first'
    },

    {
        id: 3,
        name: 'Суп с фрикадельками',
        nameKg: 'Фрикаделькалуу суп',
        description: 'Фрикадельки, цветная капуста, лук, болгарский перец сладкий, картошка',
        descriptionKg: 'Фрикадельки, түстүү капуста, пияз, болгар калемпири, картөшкө',
        price: 195,
        image: 'https://dikoed.ru/upload/iblock/66c/48245-sup-s-frikadelkami-iz-myasa-olenya.jpg',
        category: 'first'
    },

    {
        id: 4,
        name: 'Солянка',
        nameKg: 'Солянка',
        description: 'Соляная, сборная, мясная',
        descriptionKg: 'Туздуу, аралаш, эттүү',
        price: 175,
        image: 'https://lifehacker.ru/wp-content/uploads/2020/06/6_1592925463-scaled.jpg',
        category: 'first'
    },

    {
        id: 5,
        name: 'Пельмени домашние',
        nameKg: 'Үй пельмениси',
        description: 'Домашние пельмени',
        descriptionKg: 'Үй пельмениси',
        price: 195,
        image: 'https://images.gastronom.ru/vCS5cZKKC-g5xPVK2mETjj-fuFYL2VZwlkUI_pLiIAQ/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzI4NDA1OTE2LTM4ZDMtNDYwMC1hMjYyLTc1NzFkNjc3MDdlZi5qcGc.webp',
        category: 'first'
    },

    // ==================== ВТОРЫЕ БЛЮДА ====================
    {
        id: 6,
        name: 'Манты',
        nameKg: 'Манты',
        description: 'Мясо, тесто, лук, картошка',
        descriptionKg: 'Эт, камыр, пияз, картөшкө',
        price: 210,
        image: 'https://cooklikemary.ru/sites/default/files/styles/width_700/public/img_3633_0.jpg?itok=e15Ck_hr',
        category: 'second'
    },

    {
        id: 7,
        name: 'Котлеты',
        nameKg: 'Котлета',
        description: 'Яйцо, масло, фарш, лук',
        descriptionKg: 'Жумуртка, май, фарш, пияз',
        price: 190,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIZSOvy9EXTWC0WL_znrlVYl4iipeuomNeA&s',
        category: 'second'
    },

    {
        id: 8,
        name: 'Тефтели',
        nameKg: 'Тефтель',
        description: 'Фарш, масло, лук',
        descriptionKg: 'Фарш, май, пияз',
        price: 190,
        image: 'https://img.iamcook.ru/old/upl/recipes/zen/u-9d9f7b406881b1dde4c262f9f84bc279.jpg',
        category: 'second'
    },

    {
        id: 9,
        name: 'Лагман Уйгурский',
        nameKg: 'Уйгур лагманы',
        description: 'Болгарский перец, морковь, картошка, мясо, тесто',
        descriptionKg: 'Болгар калемпири, сабиз, картөшкө, эт, камыр',
        price: 215,
        image: 'https://s1.webspoon.ru/receipts/2013/7/8738/orig_8738_0_xxl.jpg',
        category: 'second'
    },

    {
        id: 10,
        name: 'Лагман Жареный',
        nameKg: 'Куурулган лагман',
        description: 'Болгарский перец, морковь, картошка, мясо, тесто',
        descriptionKg: 'Болгар калемпири, сабиз, картөшкө, эт, камыр',
        price: 215,
        image: 'https://cdn.smt.bz/uploads/media/photo/2225664/%D0%BB%D0%B0%D0%B3%D0%BC%D0%B0%D0%BD_%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D1%8B%D0%B9.webp',
        category: 'second'
    },

    {
        id: 11,
        name: 'Гуляш',
        nameKg: 'Гуляш',
        description: 'Пюре, мясо, укроп',
        descriptionKg: 'Пюре, эт, укроп',
        price: 255,
        image: 'https://zira.uz/wp-content/uploads/2023/09/gulyash.jpg',
        category: 'second'
    },

    {
        id: 12,
        name: 'Мясо по-королевски',
        nameKg: 'Королдук эти',
        description: 'Помидор, укроп, мясо, плавленный сыр',
        descriptionKg: 'Помидор, укроп, эт, эритилген сыр',
        price: 235,
        image: 'https://i.ytimg.com/vi/VqvgACeyDac/maxresdefault.jpg',
        category: 'second'
    },

    // ==================== ЗАКАЗНЫЕ БЛЮДА ====================
    {
        id: 13,
        name: 'Мясо по-деревенски',
        nameKg: 'Айылдык эти',
        description: 'Мясо, картошка',
        descriptionKg: 'Эт, картөшкө',
        price: 480,
        image: 'https://static.1000.menu/img/content-v2/09/92/34970/myaso-po-derevenski-v-duxovke-s-kartofelem_1676810570_23_max.jpg',
        category: 'special'
    },

    {
        id: 14,
        name: 'Стейк форель 3шт',
        nameKg: 'Форель стейк 3дөн',
        description: 'Рыба, красный перец, черный перец',
        descriptionKg: 'Балык, кызыл мурч, кара мурч',
        price: 520,
        image: 'https://finecooking.ru/images/recipe/steyki-foreli-zapechennye-v-duhovke/photo/960w.jpg',
        category: 'special'
    },

    {
        id: 15,
        name: 'Стейк форель 2шт',
        nameKg: 'Форель стейк 2дөн',
        description: 'Рыба, красный перец, черный перец',
        descriptionKg: 'Балык, кызыл мурч, кара мурч',
        price: 420,
        image: 'https://yabpoela.net/uploads/posts/2019-12/1576932448_photo_2019-12-21_14-18-13.jpg',
        category: 'special'
    },

    {
        id: 16,
        name: 'Адана-Кебаб',
        nameKg: 'Адана-Кебаб',
        description: 'Лук, мясо, паприка',
        descriptionKg: 'Пияз, эт, паприка',
        price: 240,
        image: 'https://www.koolinar.ru/all_image/recipes/157/157915/recipe_9f002738-7831-484c-ad0a-7294e58d8cba_w450.webp',
        category: 'special'
    },

    {
        id: 17,
        name: 'Бейти кебаб',
        nameKg: 'Бейти кебаб',
        description: 'Лаваш, мясо, лук',
        descriptionKg: 'Лаваш, эт, пияз',
        price: 295,
        image: 'https://lifehacker.ru/wp-content/uploads/2024/12/shutterstock_2265339147_1_1734602719-e1734602773944.jpg',
        category: 'special'
    },

    {
        id: 18,
        name: 'Турецкий кебаб',
        nameKg: 'Түрк кебабы',
        description: 'Мясо, лук, паприка',
        descriptionKg: 'Эт, пияз, паприка',
        price: 245,
        image: 'https://bigasia.ru/wp-content/uploads/2023/04/2435c715734d0d295dc9c342ccf20ab6.jpg',
        category: 'special'
    },

    {
        id: 19,
        name: 'Бризоль',
        nameKg: 'Бризоль',
        description: 'Фарш, яйцо, лук, молоко',
        descriptionKg: 'Фарш, жумуртка, пияз, сүт',
        price: 230,
        image: 'https://media.ovkuse.ru/images/recipes/a3ade189-9389-40c7-baaa-3ee8de125985/a3ade189-9389-40c7-baaa-3ee8de125985_420_420.webp',
        category: 'special'
    },

    {
        id: 20,
        name: 'Мясо в горшочке',
        nameKg: 'Кыштектеги эт',
        description: 'Мясо, картошка, лук, сливки',
        descriptionKg: 'Эт, картөшкө, пияз, каймак',
        price: 235,
        image: 'https://halal-spb.ru/sites/default/files/styles/large/public/jarkoe-v-gorshochkah.jpg?itok=tzEUT5YJ',
        category: 'special'
    },

    {
        id: 21,
        name: 'Куурдак',
        nameKg: 'Куурдак',
        description: 'Картошка, мясо, приправы',
        descriptionKg: 'Картөшкө, эт, азыктары',
        price: 410,
        image: 'https://s1.eda.ru/StaticContent/Photos/160915225201/160926225652/p_O.jpg',
        category: 'special'
    },

    {
        id: 22,
        name: 'Курица в кисло-сладком соусе',
        nameKg: 'Кышкыл-таттуу соустагы тоок',
        description: 'Куриное филе, перец, лук, морковь',
        descriptionKg: 'Тоок филеси, мурч, пияз, сабиз',
        price: 245,
        image: 'https://www.povarenok.ru/data/cache/2023jan/21/55/3033845_65334-710x550x.jpg',
        category: 'special'
    },

    {
        id: 23,
        name: 'Фрикассе',
        nameKg: 'Фрикассе',
        description: 'Куриное филе, морковь, лук репчатый, сельдерей, масло сливочное',
        descriptionKg: 'Тоок филеси, сабиз, пияз, сельдерей, май',
        price: 240,
        image: 'https://ist.say7.info/img0012/35/1235_0166c21_2455_1024.jpg',
        category: 'special'
    },

    {
        id: 24,
        name: 'Казан кебаб',
        nameKg: 'Казан кебабы',
        description: 'Картошка, мясо, морковь, лук',
        descriptionKg: 'Картөшкө, эт, сабиз, пияз',
        price: 265,
        image: 'https://lafoy.ru/photo_l/foto-4456-2.jpg',
        category: 'special'
    },

    {
        id: 25,
        name: 'Курица с овощами',
        nameKg: 'Жашылчалуу тоок',
        description: 'Куриное филе, перец, лук, морковь',
        descriptionKg: 'Тоок филеси, мурч, пияз, сабиз',
        price: 245,
        image: 'https://img.iamcook.ru/old/upl/recipes/cat/u1169-c8338c700c52d3dc7043abce47bef4fa.JPG',
        category: 'special'
    },

    {
        id: 26,
        name: 'Фетучини с форелью',
        nameKg: 'Форель менен фетучини',
        description: 'Фетучини, форель, лук, сливки',
        descriptionKg: 'Фетучини, форель, пияз, каймак',
        price: 355,
        image: 'https://bandler.ru/image/catalog/product/recepti/fettuchini-s-semgoj.jpg',
        category: 'special'
    },

    {
        id: 27,
        name: 'Фетучини с курицей',
        nameKg: 'Тоок менен фетучини',
        description: 'Фетучини, куриное филе, лук, сливки',
        descriptionKg: 'Фетучини, тоок филеси, пияз, каймак',
        price: 315,
        image: 'https://здоровое-питание.рф/upload/iblock/6a2/s9gmf27dxsnbjvoap4btpytvdrwikpnh/Pasta-fetuchini-kuritsa-s-gribami-v-slivochnom-souse-5.jpg',
        category: 'special'
    },

    // ==================== ШАШЛЫКИ ====================
    {
        id: 28,
        name: 'Говядина',
        nameKg: 'Жылкы эти',
        description: 'Шашлык из говядины',
        descriptionKg: 'Жылкы этинен шашлык',
        price: 215,
        image: 'https://restoran-mimi.ru/assets/content/shashlik-iz-govyadini-7.jpg',
        category: 'shashlik'
    },

    {
        id: 29,
        name: 'Наполеон',
        nameKg: 'Наполеон',
        description: 'Шашлык Наполеон',
        descriptionKg: 'Наполеон шашлык',
        price: 180,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1ml_CCi-1FvCUye__NUK_6_q0G8ylc91Xg&s',
        category: 'shashlik'
    },

    {
        id: 30,
        name: 'Люля-Кебаб',
        nameKg: 'Люля-Кебаб',
        description: 'Люля-кебаб',
        descriptionKg: 'Люля-кебаб',
        price: 160,
        image: 'https://a-catering.com/image/1.Dostavka/Gorihie/lyulya-kebab-dostavka-shashlyka-na-dom-i-po-spb-v-lenoblati-kejtering.jpg',
        category: 'shashlik'
    },

    {
        id: 31,
        name: 'Крылышки',
        nameKg: 'Канаттар',
        description: 'Куриные крылышки',
        descriptionKg: 'Тоок канаттары',
        price: 190,
        image: 'https://edimdoma.ru/data/recipes/0014/5261/145261-ed4_wide.jpg?1759232294',
        category: 'shashlik'
    },

    {
        id: 32,
        name: 'Овощной шашлык',
        nameKg: 'Жашылчалуу шашлык',
        description: 'Шашлык из овощей',
        descriptionKg: 'Жашылчадан шашлык',
        price: 135,
        image: 'https://cdn.tveda.ru/thumbs/3cc/3ccfd856d12bcfb474a1b37e886777b9/08be2c4d446d23e23ba82d5483e2f396.jpg',
        category: 'shashlik'
    },

    // ==================== САЛАТЫ ====================
    {
        id: 33,
        name: 'Греческий',
        nameKg: 'Грек',
        description: 'Помидоры, огурцы, салат, сыр фета',
        descriptionKg: 'Помидор, бадыраң, салат, фета сыры',
        price: 195,
        image: 'https://art-lunch.ru/content/uploads/2018/07/Greek_salad_01.jpg',
        category: 'salad'
    },

    {
        id: 34,
        name: 'Столичный',
        nameKg: 'Борбордук',
        description: 'Зелень, опята, корнишоны, говяжий язык, помидоры',
        descriptionKg: 'Жашылча, опята, корнишон, жылкы тили, помидор',
        price: 210,
        image: 'https://www.russianfood.com/dycontent/images_upl/68/big_67797.jpg',
        category: 'salad'
    },

    {
        id: 35,
        name: 'Гасконский',
        nameKg: 'Гаскон',
        description: 'Помидоры, корнишоны, опята, салат, копченная окорочка',
        descriptionKg: 'Помидор, корнишон, опята, салат, копченка',
        price: 195,
        image: 'https://i.ytimg.com/vi/sGjV5ER10ys/sddefault.jpg',
        category: 'salad'
    },

    {
        id: 36,
        name: 'Витаминка',
        nameKg: 'Витаминка',
        description: 'Свекла, колбаска, кукуруза, зелень, морковь',
        descriptionKg: 'Кызылча, колбаса, жүгөрү, жашылча, сабиз',
        price: 170,
        image: 'https://www.russianfood.com/dycontent/images_upl/555/big_554824.jpg',
        category: 'salad'
    },

    {
        id: 37,
        name: 'Овощной микс',
        nameKg: 'Жашылча микси',
        description: 'Цветная капуста, брокколи, помидоры, огурцы, лук',
        descriptionKg: 'Түстүү капуста, брокколи, помидор, бадыраң, пияз',
        price: 205,
        image: 'https://www.russianfood.com/dycontent/images_upl/546/big_545819.jpg',
        category: 'salad'
    },

    {
        id: 38,
        name: 'Свежий',
        nameKg: 'Жаңы',
        description: 'Помидоры, огурцы, лук',
        descriptionKg: 'Помидор, бадыраң, пияз',
        price: 110,
        image: 'https://cdn.smt.bz/uploads/media/photo/2236799/%D1%81%D0%B2%D0%B5%D0%B6%D0%B8%D0%B9.webp',
        category: 'salad'
    },

    {
        id: 39,
        name: 'Фунчоза',
        nameKg: 'Фунчоза',
        description: 'Мясо, огурцы, перец, фын-тёз',
        descriptionKg: 'Эт, бадыраң, мурч, фын-тёз',
        price: 195,
        image: 'https://i.ytimg.com/vi/cZnNPgADKTQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcrWOozEpdooPxEHiHVMmWe6BTfg',
        category: 'salad'
    },

    {
        id: 40,
        name: 'Нарезка фирменная овощная',
        nameKg: 'Фирмалык жашылча нарезкасы',
        description: 'Огурцы, помидоры, соленные огурцы, квашенная капуста, лук',
        descriptionKg: 'Бадыраң, помидор, туздалган бадыраң, кычкыл капуста, пияз',
        price: 270,
        image: 'https://i.ytimg.com/vi/x065ZmRdxBU/maxresdefault.jpg',
        category: 'salad'
    },

    {
        id: 41,
        name: 'Цезарь с курицей',
        nameKg: 'Тоок менен Цезарь',
        description: 'Листья, курица, помидоры, сыр пармезан, соус цезарь, крутоны',
        descriptionKg: 'Жалбырактар, тоок, помидор, пармезан сыры, цезарь соусу, крутон',
        price: 205,
        image: 'https://images.gastronom.ru/LoVJjeEYXJQ3vR2Yn8WtlivB0eZ78Rtu417zEnX1mZs/pr:content-group-preview-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzk1YTg3ZTcxLTI0MjQtNGM3MC04MjllLTA2MTYyOTRjOGFhMi5qcGc.webp',
        category: 'salad'
    },

    {
        id: 42,
        name: 'Гнездо кукушки',
        nameKg: 'Кукушка уясы',
        description: 'Копченка, пай, кукуруза, курица, лук',
        descriptionKg: 'Копченка, пай, жүгөрү, тоок, пияз',
        price: 210,
        image: 'https://foodmood.ru/upload/iblock/bfe/bfe5b51ce6ea8a5f17b59c153ac3fcf9.jpeg',
        category: 'salad'
    },

    {
        id: 43,
        name: 'Мерло',
        nameKg: 'Мерло',
        description: 'Омлет, горох, кукуруза, курица, лук',
        descriptionKg: 'Омлет, буурчак, жүгөрү, тоок, пияз',
        price: 175,
        image: 'https://www.russianfood.com/dycontent/images_upl/542/big_541650.jpg',
        category: 'salad'
    },

    {
        id: 44,
        name: 'Салат с грибами',
        nameKg: 'Козу карын менен салат',
        description: 'Сыр, охотница, помидоры, листья, чечел сверху',
        descriptionKg: 'Сыр, охотница, помидор, жалбырактар, чечел',
        price: 245,
        image: 'https://www.moi-povar.ru/upload/iblock/162/IMG_1518.jpg',
        category: 'salad'
    },

    {
        id: 45,
        name: 'Салат с свеклой',
        nameKg: 'Кызылча менен салат',
        description: 'Пай, колбаса, яйцо, огурцы',
        descriptionKg: 'Пай, колбаса, жумуртка, бадыраң',
        price: 215,
        image: 'https://www.russianfood.com/dycontent/images_upl/503/big_502335.jpg',
        category: 'salad'
    },

    {
        id: 46,
        name: 'Охотница',
        nameKg: 'Охотница',
        description: 'Охотница, корнишоны, черри, листья, шампиньоны, орешки',
        descriptionKg: 'Охотница, корнишон, черри, жалбырактар, шампиньон, орех',
        price: 215,
        image: 'https://sovkusom.ru/wp-content/uploads/recepty/s/salat-s-shampinyonami/thumb-840x440.jpg',
        category: 'salad'
    },

    {
        id: 47,
        name: 'Китайский острый',
        nameKg: 'Кытайлык ачтуу',
        description: 'Помидоры, огурцы, мясо, лук, морковь, перец',
        descriptionKg: 'Помидор, бадыраң, эт, пияз, сабиз, мурч',
        price: 205,
        image: 'https://www.russianfood.com/dycontent/images_upl/165/big_164344.jpg',
        category: 'salad'
    },

    {
        id: 48,
        name: 'Восточный',
        nameKg: 'Чыгыштык',
        description: 'Помидоры, огурцы, мясо, лук, кабачки, баклажан',
        descriptionKg: 'Помидор, бадыраң, эт, пияз, кабачок, баклажан',
        price: 205,
        image: 'https://www.russianfood.com/dycontent/images_upl/527/big_526629.jpg',
        category: 'salad'
    },

    {
        id: 49,
        name: 'Баклажан с овощами',
        nameKg: 'Жашылчалуу баклажан',
        description: 'Баклажаны, болгарский перец, помидоры, лук',
        descriptionKg: 'Баклажан, болгар калемпири, помидор, пияз',
        price: 215,
        image: 'https://www.russianfood.com/dycontent/images_upl/733/big_732221.jpg',
        category: 'salad'
    },

    {
        id: 50,
        name: 'Фирменный баклажан',
        nameKg: 'Фирмалык баклажан',
        description: 'Баклажан в панировке сезонный',
        descriptionKg: 'Панировкада баклажан сезондук',
        price: 215,
        image: 'https://www.russianfood.com/dycontent/images_upl/777/big_776231.jpg',
        category: 'salad'
    },

    {
        id: 51,
        name: 'Баклажан микс',
        nameKg: 'Баклажан микси',
        description: 'Баклажан микс',
        descriptionKg: 'Баклажан микси',
        price: 215,
        image: 'https://www.russianfood.com/dycontent/images_upl/645/big_644398.jpg',
        category: 'salad'
    },

    {
        id: 52,
        name: 'Курица с ореховым соусом',
        nameKg: 'Орех соусу менен тоок',
        description: 'Курица с ореховым соусом',
        descriptionKg: 'Орех соусу менен тоок',
        price: 215,
        image: 'https://images.gastronom.ru/FBJo4dLNHhJ18pXaaPvA5N8ld9PXD_-VQ50vToLsUu4/pr:content-group-preview-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzk1YTg3ZTcxLTI0MjQtNGM3MC04MjllLTA2MTYyOTRjOGFhMi5qcGc.webp',
        category: 'salad'
    },

    // ==================== ДЕСЕРТЫ ====================
    {
        id: 53,
        name: 'Сан-Себестьян',
        nameKg: 'Сан-Себестьян',
        description: 'Десерт Сан-Себестьян',
        descriptionKg: 'Сан-Себестьян десерти',
        price: 300,
        image: 'https://vkusnoff.com/img/recepty/3985/big.webp',
        category: 'dessert'
    },

    {
        id: 54,
        name: 'Чизкейк',
        nameKg: 'Чизкейк',
        description: 'Чизкейк',
        descriptionKg: 'Чизкейк',
        price: 330,
        image: 'https://art-lunch.ru/content/uploads/2014/08/cheesecake-new-york-001x2-1.jpg',
        category: 'dessert'
    },

    {
        id: 55,
        name: 'Три шоколада',
        nameKg: 'Үч шоколад',
        description: 'Торт три шоколада',
        descriptionKg: 'Үч шоколад торт',
        price: 250,
        image: 'https://tochkamarket.ru/upload/iblock/5f9/rfprgsonxwxsc8hoaz027ghn0iyllo1u.jpg',
        category: 'dessert'
    },

    {
        id: 56,
        name: 'Сникерс',
        nameKg: 'Сникерс',
        description: 'Десерт Сникерс',
        descriptionKg: 'Сникерс десерти',
        price: 330,
        image: 'https://cdn.nur.kz/images/1200x675/aae7343159f27780.jpeg?version=1',
        category: 'dessert'
    },

    {
        id: 57,
        name: 'Трайфл',
        nameKg: 'Трайфл',
        description: 'Десерт Трайфл',
        descriptionKg: 'Трайфл десерти',
        price: 170,
        image: 'https://content2.flowwow-images.com/data/flowers/1000x1000/63/1740545469_46861463.jpg',
        category: 'dessert'
    },

    //====================НАПИТКИ====================
    {
        id: 58,
        name: 'Компот',
        nameKg: 'Компот',
        description: 'Компот',
        descriptionKg: 'Компот',
        image: 'https://img.iamcook.ru/2019/upl/recipes/cat/u-4a903326f8c32bf338e5d2b2cf87a1aa.JPG',
        category: 'drink',
        variants: [
            { label: '1 л', price: 85 },
            { label: '1.5 л', price: 125 },
            { label: '2 л', price: 160 }
        ]
    },

    {
        id: 59,
        name: 'Кола',
        nameKg: 'Кола',
        description: 'Кола',
        descriptionKg: 'Кола',
        image: 'https://neman.kg/images/watermarked/detailed/34/unnamed_n7sb-ck.webp',
        category: 'drink',
        variants: [
            { label: '1 л', price: 105 },
            { label: '1.5 л', price: 145 },
            { label: '2 л', price: 180 }
        ]
    },

    {
        id: 60,
        name: 'Фанта',
        nameKg: 'Фанта',
        description: 'Фанта',
        descriptionKg: 'Фанта',
        image: 'https://dostavka-produktov.ru/image/cache/catalog/products_images/3176277-1000x1000.jpg',
        category: 'drink',
        variants: [
            { label: '1 л', price: 105 },
            { label: '1.5 л', price: 145 },
            { label: '2 л', price: 180 }
        ]
    },

    {
        id: 61,
        name: 'Любимый',
        nameKg: 'Сүйүктүү',
        description: 'Любимый сок',
        descriptionKg: 'Сүйүктүү ширеп',
        image: 'https://3259404.ru/upload/iblock/fb6/nx32auk4u9xu7peyhyvh3ke5lvhigp6z.webp',
        category: 'drink',
        variants: [
            { label: '1 л', price: 135 },
            { label: '1.5 л', price: 220 },
            { label: '2 л', price: 280 }
        ]
    },

    // ==================== FAST-FOOD ====================
    {
        id: 62,
        name: 'KFS + фри',
        nameKg: 'KFS + фри',
        description: 'Курица и картошка фри',
        descriptionKg: 'Тоок жана фри картөшкө',
        price: 200,
        image: 'https://www.chefmarket.ru/blog/wp-content/uploads/2020/01/fried-chick-2000x1200.jpg',
        category: 'fastfood'
    },

    {
        id: 63,
        name: 'Шаурма',
        nameKg: 'Шаурма',
        description: 'Шаурма',
        descriptionKg: 'Шаурма',
        price: 205,
        image: 'https://lefood.menu/wp-content/uploads/w_images/2023/07/recept-76707-1240x827.jpg',
        category: 'fastfood'
    },

    {
        id: 64,
        name: 'Шаурма с курицей',
        nameKg: 'Тоок менен шаурма',
        description: 'Шаурма с курицей',
        descriptionKg: 'Тоок менен шаурма',
        price: 230,
        image: 'https://zira.uz/wp-content/uploads/2022/06/shaurma-18.jpg',
        category: 'fastfood'
    },

    {
        id: 65,
        name: 'Пицца "Пепперони"',
        nameKg: 'Пицца "Пепперони"',
        description: 'Пицца Пепперони',
        descriptionKg: 'Пепперони пиццасы',
        price: 450,
        image: 'https://s1.eda.ru/StaticContent/Photos/Upscaled/120131085053/171027192707/p_O.jpg',
        category: 'fastfood'
    },

    {
        id: 66,
        name: 'Пицца "Мясная"',
        nameKg: 'Пицца "Эттүү"',
        description: 'Пицца Мясная',
        descriptionKg: 'Эттүү пицца',
        price: 505,
        image: 'https://cipollino.ua/content/uploads/images/recept-myasnoj-piccy-pod-syrom%281%29.jpg',
        category: 'fastfood'
    },

    {
        id: 67,
        name: 'Пицца "Курица с грибами"',
        nameKg: 'Пицца "Козу карын менен тоок"',
        description: 'Пицца с курицей и грибами',
        descriptionKg: 'Тоок жана козу карын менен пицца',
        price: 505,
        image: 'https://s3.smartofood.ru/kato/menu/14cce8bc-fddd-5770-9c57-f35c8172513c.webp',
        category: 'fastfood'
    },

    {
        id: 68,
        name: 'Рамён',
        nameKg: 'Рамён',
        description: 'Рамён',
        descriptionKg: 'Рамён',
        price: 235,
        image: 'https://opis-cdn.tinkoffjournal.ru/mercury/inramen2.c3mkuj4avtxt..jpg',
        category: 'fastfood'
    },

    {
        id: 69,
        name: 'Пирог',
        nameKg: 'Пирог',
        description: 'Пирог',
        descriptionKg: 'Пирог',
        price: 40,
        image: 'https://prostokvashino.ru/upload/resize_cache/iblock/74f/800_800_0/74fe90dd6ef5f047dcadff513c8d75d7.jpg',
        category: 'fastfood'
    },

    {
        id: 70,
        name: 'Мини самсы песочные',
        nameKg: 'Мини кум самсы',
        description: 'Мини самсы песочные (пред. заказ)',
        descriptionKg: 'Мини кум самсы (алдын ала заказ)',
        price: 45,
        image: 'https://i.ytimg.com/vi/US6fbAwR_2E/maxresdefault.jpg',
        category: 'fastfood'
    },

    {
        id: 71,
        name: 'Хлеб',
        nameKg: 'Наан',
        description: 'Хлеб',
        descriptionKg: 'Наан',
        price: 40,
        image: 'https://img.iamcook.ru/old/upl/recipes/cat/u4142-10b7c9c0972f7a6486ec930a56c01777.jpg',
        category: 'fastfood'
    },

    {
        id: 72,
        name: 'Чай',
        nameKg: 'Чай',
        description: 'Чай',
        descriptionKg: 'Чай',
        price: 15,
        image: 'https://img2.goodfon.ru/original/5616x3744/0/63/stol-zavarnik-chay-napitok.jpg',
        category: 'fastfood'
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
        'filter-first': 'Первые блюда',
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
        'filter-first': 'Биринчи тамактар',
        'filter-second': 'Экинчи тамактар',
        'filter-special': 'Заказдык',
        'filter-shashlik': 'Шашлык',
        'filter-salad': 'Салат',
        'filter-dessert': 'Десерт',
        'filter-drink': 'Ичимдик',
        'filter-fastfood': 'Fast-Food',
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