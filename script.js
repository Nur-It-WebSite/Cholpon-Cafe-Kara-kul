// ============================================
// Данные меню кафе Cholpon
// ============================================

const menuData = [
    // Первые блюда
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
    { id: 2, name: 'Сырный суп (фрикадельки)', nameKg: 'Сырный суп (фрикадельки)', description: 'Фрикадельки, кукуруза, картошка, на основе сырного соуса', descriptionKg: 'Фрикадельки, жүгөрү, картөшкө, сыр соусунун негизинде', price: 195, image: 'https://www.russianfood.com/dycontent/images_upl/565/big_564981.jpg', category: 'first' },
    { id: 3, name: 'Суп с фрикадельками', nameKg: 'Фрикаделькалуу суп', description: 'Фрикадельки, цветная капуста, лук, болгарский перец сладкий, картошка', descriptionKg: 'Фрикадельки, түстүү капуста, пияз, болгар калемпири, картөшкө', price: 195, image: 'https://dikoed.ru/upload/iblock/66c/48245-sup-s-frikadelkami-iz-myasa-olenya.jpg', category: 'first' },
    { id: 4, name: 'Солянка', nameKg: 'Солянка', description: 'Соляная, сборная, мясная', descriptionKg: 'Туздуу, аралаш, эттүү', price: 175, image: 'https://lifehacker.ru/wp-content/uploads/2020/06/6_1592925463-scaled.jpg', category: 'first' },
    { id: 5, name: 'Пельмени домашние', nameKg: 'Үй пельмениси', description: 'Домашние пельмени', descriptionKg: 'Үй пельмениси', price: 195, image: 'https://images.gastronom.ru/vCS5cZKKC-g5xPVK2mETjj-fuFYL2VZwlkUI_pLiIAQ/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzI4NDA1OTE2LTM4ZDMtNDYwMC1hMjYyLTc1NzFkNjc3MDdlZi5qcGc.webp', category: 'first' },

    // Вторые блюда
    { id: 6, name: 'Манты', nameKg: 'Манты', description: 'Мясо, тесто, лук, картошка', descriptionKg: 'Эт, камыр, пияз, картөшкө', price: 210, image: 'https://cooklikemary.ru/sites/default/files/styles/width_700/public/img_3633_0.jpg?itok=e15Ck_hr', category: 'second' },
    { id: 7, name: 'Котлеты', nameKg: 'Котлета', description: 'Яйцо, масло, фарш, лук', descriptionKg: 'Жумуртка, май, фарш, пияз', price: 190, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIZSOvy9EXTWC0WL_znrlVYl4iipeuomNeA&s', category: 'second' },
    { id: 8, name: 'Тефтели', nameKg: 'Тефтель', description: 'Фарш, масло, лук', descriptionKg: 'Фарш, май, пияз', price: 190, image: 'https://img.iamcook.ru/old/upl/recipes/zen/u-9d9f7b406881b1dde4c262f9f84bc279.jpg', category: 'second' },
    { id: 9, name: 'Лагман Уйгурский', nameKg: 'Уйгур лагманы', description: 'Болгарский перец, морковь, картошка, мясо, тесто', descriptionKg: 'Болгар калемпири, сабиз, картөшкө, эт, камыр', price: 215, image: 'https://s1.webspoon.ru/receipts/2013/7/8738/orig_8738_0_xxl.jpg', category: 'second' },
    { id: 10, name: 'Лагман Жареный', nameKg: 'Куурулган лагман', description: 'Болгарский перец, морковь, картошка, мясо, тесто', descriptionKg: 'Болгар калемпири, сабиз, картөшкө, эт, камыр', price: 215, image: 'https://cdn.smt.bz/uploads/media/photo/2225664/%D0%BB%D0%B0%D0%B3%D0%BC%D0%B0%D0%BD_%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D1%8B%D0%B9.webp', category: 'second' },
    { id: 11, name: 'Гуляш', nameKg: 'Гуляш', description: 'Пюре, мясо, укроп', descriptionKg: 'Пюре, эт, укроп', price: 255, image: 'https://zira.uz/wp-content/uploads/2023/09/gulyash.jpg', category: 'second' },
    { id: 12, name: 'Мясо по-королевски', nameKg: 'Королдук эти', description: 'Помидор, укроп, мясо, плавленный сыр', descriptionKg: 'Помидор, укроп, эт, эритилген сыр', price: 235, image: 'https://i.ytimg.com/vi/VqvgACeyDac/maxresdefault.jpg', category: 'second' },

    // Заказные блюда
    { id: 13, name: 'Мясо по-деревенски', nameKg: 'Айылдык эти', description: 'Мясо, картошка', descriptionKg: 'Эт, картөшкө', price: 480, image: 'https://static.1000.menu/img/content-v2/09/92/34970/myaso-po-derevenski-v-duxovke-s-kartofelem_1676810570_23_max.jpg', category: 'special' },
    { id: 14, name: 'Стейк форель 3шт', nameKg: 'Форель стейк 3дөн', description: 'Рыба, красный перец, черный перец', descriptionKg: 'Балык, кызыл мурч, кара мурч', price: 520, image: 'https://finecooking.ru/images/recipe/steyki-foreli-zapechennye-v-duhovke/photo/960w.jpg', category: 'special' },
    { id: 15, name: 'Стейк форель 2шт', nameKg: 'Форель стейк 2дөн', description: 'Рыба, красный перец, черный перец', descriptionKg: 'Балык, кызыл мурч, кара мурч', price: 420, image: 'https://yabpoela.net/uploads/posts/2019-12/1576932448_photo_2019-12-21_14-18-13.jpg', category: 'special' },
    { id: 16, name: 'Адана-Кебаб', nameKg: 'Адана-Кебаб', description: 'Лук, мясо, паприка', descriptionKg: 'Пияз, эт, паприка', price: 240, image: 'https://www.koolinar.ru/all_image/recipes/157/157915/recipe_9f002738-7831-484c-ad0a-7294e58d8cba_w450.webp', category: 'special' },
    { id: 17, name: 'Бейти кебаб', nameKg: 'Бейти кебаб', description: 'Лаваш, мясо, лук', descriptionKg: 'Лаваш, эт, пияз', price: 295, image: 'https://lifehacker.ru/wp-content/uploads/2024/12/shutterstock_2265339147_1_1734602719-e1734602773944.jpg', category: 'special' },
    { id: 18, name: 'Турецкий кебаб', nameKg: 'Түрк кебабы', description: 'Мясо, лук, паприка', descriptionKg: 'Эт, пияз, паприка', price: 245, image: 'https://bigasia.ru/wp-content/uploads/2023/04/2435c715734d0d295dc9c342ccf20ab6.jpg', category: 'special' },
    { id: 19, name: 'Бризоль', nameKg: 'Бризоль', description: 'Фарш, яйцо, лук, молоко', descriptionKg: 'Фарш, жумуртка, пияз, сүт', price: 230, image: 'https://media.ovkuse.ru/images/recipes/a3ade189-9389-40c7-baaa-3ee8de125985/a3ade189-9389-40c7-baaa-3ee8de125985_420_420.webp', category: 'special' },
    { id: 20, name: 'Мясо в горшочке', nameKg: 'Кыштектеги эт', description: 'Мясо, картошка, лук, сливки', descriptionKg: 'Эт, картөшкө, пияз, каймак', price: 235, image: 'https://halal-spb.ru/sites/default/files/styles/large/public/jarkoe-v-gorshochkah.jpg?itok=tzEUT5YJ', category: 'special' },
    { id: 21, name: 'Куурдак', nameKg: 'Куурдак', description: 'Картошка, мясо, приправы', descriptionKg: 'Картөшкө, эт, азыктары', price: 410, image: 'https://s1.eda.ru/StaticContent/Photos/160915225201/160926225652/p_O.jpg', category: 'special' },
    { id: 22, name: 'Курица в кисло-сладком соусе', nameKg: 'Кышкыл-таттуу соустагы тоок', description: 'Куриное филе, перец, лук, морковь', descriptionKg: 'Тоок филеси, мурч, пияз, сабиз', price: 245, image: 'https://www.povarenok.ru/data/cache/2023jan/21/55/3033845_65334-710x550x.jpg', category: 'special' },
    { id: 23, name: 'Фрикассе', nameKg: 'Фрикассе', description: 'Куриное филе, морковь, лук репчатый, сельдерей, масло сливочное', descriptionKg: 'Тоок филеси, сабиз, пияз, сельдерей, май', price: 240, image: 'https://ist.say7.info/img0012/35/1235_0166c21_2455_1024.jpg', category: 'special' },
    { id: 24, name: 'Казан кебаб', nameKg: 'Казан кебабы', description: 'Картошка, мясо, морковь, лук', descriptionKg: 'Картөшкө, эт, сабиз, пияз', price: 265, image: 'https://lafoy.ru/photo_l/foto-4456-2.jpg', category: 'special' },
    { id: 25, name: 'Курица с овощами', nameKg: 'Жашылчалуу тоок', description: 'Куриное филе, перец, лук, морковь', descriptionKg: 'Тоок филеси, мурч, пияз, сабиз', price: 245, image: 'https://img.iamcook.ru/old/upl/recipes/cat/u1169-c8338c700c52d3dc7043abce47bef4fa.JPG', category: 'special' },
    { id: 26, name: 'Фетучини с форелью', nameKg: 'Форель менен фетучини', description: 'Фетучини, форель, лук, сливки', descriptionKg: 'Фетучини, форель, пияз, каймак', price: 355, image: 'https://bandler.ru/image/catalog/product/recepti/fettuchini-s-semgoj.jpg', category: 'special' },
    { id: 27, name: 'Фетучини с курицей', nameKg: 'Тоок менен фетучини', description: 'Фетучини, куриное филе, лук, сливки', descriptionKg: 'Фетучини, тоок филеси, пияз, каймак', price: 315, image: 'https://здоровое-питание.рф/upload/iblock/6a2/s9gmf27dxsnbjvoap4btpytvdrwikpnh/Pasta-fetuchini-kuritsa-s-gribami-v-slivochnom-souse-5.jpg', category: 'special' },

    // Шашлыки
    { id: 28, name: 'Говядина', nameKg: 'Жылкы эти', description: 'Шашлык из говядины', descriptionKg: 'Жылкы этинен шашлык', price: 215, image: 'https://restoran-mimi.ru/assets/content/shashlik-iz-govyadini-7.jpg', category: 'shashlik' },
    { id: 29, name: 'Наполеон', nameKg: 'Наполеон', description: 'Шашлык Наполеон', descriptionKg: 'Наполеон шашлык', price: 180, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1ml_CCi-1FvCUye__NUK_6_q0G8ylc91Xg&s', category: 'shashlik' },
    { id: 30, name: 'Люля-Кебаб', nameKg: 'Люля-Кебаб', description: 'Люля-кебаб', descriptionKg: 'Люля-кебаб', price: 160, image: 'https://a-catering.com/image/1.Dostavka/Gorihie/lyulya-kebab-dostavka-shashlyka-na-dom-i-po-spb-v-lenoblati-kejtering.jpg', category: 'shashlik' },
    { id: 31, name: 'Крылышки', nameKg: 'Канаттар', description: 'Куриные крылышки', descriptionKg: 'Тоок канаттары', price: 190, image: 'https://edimdoma.ru/data/recipes/0014/5261/145261-ed4_wide.jpg?1759232294', category: 'shashlik' },
    { id: 32, name: 'Овощной шашлык', nameKg: 'Жашылчалуу шашлык', description: 'Шашлык из овощей', descriptionKg: 'Жашылчадан шашлык', price: 135, image: 'https://cdn.tveda.ru/thumbs/3cc/3ccfd856d12bcfb474a1b37e886777b9/08be2c4d446d23e23ba82d5483e2f396.jpg', category: 'shashlik' },

    // Салаты
    { id: 33, name: 'Греческий', nameKg: 'Грек', description: 'Помидоры, огурцы, салат, сыр фета', descriptionKg: 'Помидор, бадыраң, салат, фета сыры', price: 195, image: 'https://art-lunch.ru/content/uploads/2018/07/Greek_salad_01.jpg', category: 'salad' },
    { id: 34, name: 'Столичный', nameKg: 'Борбордук', description: 'Зелень, опята, корнишоны, говяжий язык, помидоры', descriptionKg: 'Жашылча, опята, корнишон, жылкы тили, помидор', price: 210, image: 'https://www.russianfood.com/dycontent/images_upl/68/big_67797.jpg', category: 'salad' },
    { id: 35, name: 'Гасконский', nameKg: 'Гаскон', description: 'Помидоры, корнишоны, опята, салат, копченная окорочка', descriptionKg: 'Помидор, корнишон, опята, салат, копченка', price: 195, image: 'https://i.ytimg.com/vi/sGjV5ER10ys/sddefault.jpg', category: 'salad' },
    { id: 36, name: 'Витаминка', nameKg: 'Витаминка', description: 'Свекла, колбаска, кукуруза, зелень, морковь', descriptionKg: 'Кызылча, колбаса, жүгөрү, жашылча, сабиз', price: 170, image: 'https://www.russianfood.com/dycontent/images_upl/555/big_554824.jpg', category: 'salad' },
    { id: 37, name: 'Овощной микс', nameKg: 'Жашылча микси', description: 'Цветная капуста, брокколи, помидоры, огурцы, лук', descriptionKg: 'Түстүү капуста, брокколи, помидор, бадыраң, пияз', price: 205, image: 'https://www.russianfood.com/dycontent/images_upl/546/big_545819.jpg', category: 'salad' },
    { id: 38, name: 'Свежий', nameKg: 'Жаңы', description: 'Помидоры, огурцы, лук', descriptionKg: 'Помидор, бадыраң, пияз', price: 110, image: 'https://cdn.smt.bz/uploads/media/photo/2236799/%D1%81%D0%B2%D0%B5%D0%B6%D0%B8%D0%B9.webp', category: 'salad' },
    { id: 39, name: 'Фунчоза', nameKg: 'Фунчоза', description: 'Мясо, огурцы, перец, фын-тёз', descriptionKg: 'Эт, бадыраң, мурч, фын-тёз', price: 195, image: 'https://i.ytimg.com/vi/cZnNPgADKTQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcrWOozEpdooPxEHiHVMmWe6BTfg', category: 'salad' },
    { id: 40, name: 'Нарезка фирменная овощная', nameKg: 'Фирмалык жашылча нарезкасы', description: 'Огурцы, помидоры, соленные огурцы, квашенная капуста, лук', descriptionKg: 'Бадыраң, помидор, туздалган бадыраң, кычкыл капуста, пияз', price: 270, image: 'https://i.ytimg.com/vi/x065ZmRdxBU/maxresdefault.jpg', category: 'salad' },
    { id: 41, name: 'Цезарь с курицей', nameKg: 'Тоок менен Цезарь', description: 'Листья, курица, помидоры, сыр пармезан, соус цезарь, крутоны', descriptionKg: 'Жалбырактар, тоок, помидор, пармезан сыры, цезарь соусу, крутон', price: 205, image: 'https://images.gastronom.ru/LoVJjeEYXJQ3vR2Yn8WtlivB0eZ78Rtu417zEnX1mZs/pr:content-group-preview-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzk1YTg3ZTcxLTI0MjQtNGM3MC04MjllLTA2MTYyOTRjOGFhMi5qcGc.webp', category: 'salad' },
    { id: 42, name: 'Гнездо кукушки', nameKg: 'Кукушка уясы', description: 'Копченка, пай, кукуруза, курица, лук', descriptionKg: 'Копченка, пай, жүгөрү, тоок, пияз', price: 210, image: 'https://foodmood.ru/upload/iblock/bfe/bfe5b51ce6ea8a5f17b59c153ac3fcf9.jpeg', category: 'salad' },
    { id: 43, name: 'Мерло', nameKg: 'Мерло', description: 'Омлет, горох, кукуруза, курица, лук', descriptionKg: 'Омлет, буурчак, жүгөрү, тоок, пияз', price: 175, image: 'https://www.russianfood.com/dycontent/images_upl/542/big_541650.jpg', category: 'salad' },
    { id: 44, name: 'Салат с грибами', nameKg: 'Козу карын менен салат', description: 'Сыр, охотница, помидоры, листья, чечел сверху', descriptionKg: 'Сыр, охотница, помидор, жалбырактар, чечел', price: 245, image: 'https://www.moi-povar.ru/upload/iblock/162/IMG_1518.jpg', category: 'salad' },
    { id: 45, name: 'Салат с свеклой', nameKg: 'Кызылча менен салат', description: 'Пай, колбаса, яйцо, огурцы', descriptionKg: 'Пай, колбаса, жумуртка, бадыраң', price: 215, image: 'https://www.russianfood.com/dycontent/images_upl/503/big_502335.jpg', category: 'salad' },
    { id: 46, name: 'Охотница', nameKg: 'Охотница', description: 'Охотница, корнишоны, черри, листья, шампиньоны, орешки', descriptionKg: 'Охотница, корнишон, черри, жалбырактар, шампиньон, орех', price: 215, image: 'https://sovkusom.ru/wp-content/uploads/recepty/s/salat-s-shampinyonami/thumb-840x440.jpg', category: 'salad' },
    { id: 47, name: 'Китайский острый', nameKg: 'Кытайлык ачтуу', description: 'Помидоры, огурцы, мясо, лук, морковь, перец', descriptionKg: 'Помидор, бадыраң, эт, пияз, сабиз, мурч', price: 205, image: 'https://www.russianfood.com/dycontent/images_upl/165/big_164344.jpg', category: 'salad' },
    { id: 48, name: 'Восточный', nameKg: 'Чыгыштык', description: 'Помидоры, огурцы, мясо, лук, кабачки, баклажан', descriptionKg: 'Помидор, бадыраң, эт, пияз, кабачок, баклажан', price: 205, image: 'https://www.russianfood.com/dycontent/images_upl/527/big_526629.jpg', category: 'salad' },
    { id: 49, name: 'Баклажан с овощами', nameKg: 'Жашылчалуу баклажан', description: 'Баклажаны, болгарский перец, помидоры, лук', descriptionKg: 'Баклажан, болгар калемпири, помидор, пияз', price: 215, image: 'https://www.russianfood.com/dycontent/images_upl/733/big_732221.jpg', category: 'salad' },
    { id: 50, name: 'Фирменный баклажан', nameKg: 'Фирмалык баклажан', description: 'Баклажан в панировке сезонный', descriptionKg: 'Панировкада баклажан сезондук', price: 215, image: 'https://www.russianfood.com/dycontent/images_upl/777/big_776231.jpg', category: 'salad' },
    { id: 51, name: 'Баклажан микс', nameKg: 'Баклажан микси', description: 'Баклажан микс', descriptionKg: 'Баклажан микси', price: 215, image: 'https://www.russianfood.com/dycontent/images_upl/645/big_644398.jpg', category: 'salad' },
    { id: 52, name: 'Курица с ореховым соусом', nameKg: 'Орех соусу менен тоок', description: 'Курица с ореховым соусом', descriptionKg: 'Орех соусу менен тоок', price: 215, image: 'https://images.gastronom.ru/FBJo4dLNHhJ18pXaaPvA5N8ld9PXD_-VQ50vToLsUu4/pr:content-group-preview-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzk1YTg3ZTcxLTI0MjQtNGM3MC04MjllLTA2MTYyOTRjOGFhMi5qcGc.webp', category: 'salad' },

    // Десерты
    { id: 53, name: 'Сан-Себестьян', nameKg: 'Сан-Себестьян', description: 'Десерт Сан-Себестьян', descriptionKg: 'Сан-Себестьян десерти', price: 300, image: 'https://vkusnoff.com/img/recepty/3985/big.webp', category: 'dessert' },
    { id: 54, name: 'Чизкейк', nameKg: 'Чизкейк', description: 'Чизкейк', descriptionKg: 'Чизкейк', price: 330, image: 'https://art-lunch.ru/content/uploads/2014/08/cheesecake-new-york-001x2-1.jpg', category: 'dessert' },
    { id: 55, name: 'Три шоколада', nameKg: 'Үч шоколад', description: 'Торт три шоколада', descriptionKg: 'Үч шоколад торт', price: 250, image: 'https://tochkamarket.ru/upload/iblock/5f9/rfprgsonxwxsc8hoaz027ghn0iyllo1u.jpg', category: 'dessert' },
    { id: 56, name: 'Сникерс', nameKg: 'Сникерс', description: 'Десерт Сникерс', descriptionKg: 'Сникерс десерти', price: 330, image: 'https://cdn.nur.kz/images/1200x675/aae7343159f27780.jpeg?version=1', category: 'dessert' },
    { id: 57, name: 'Трайфл', nameKg: 'Трайфл', description: 'Десерт Трайфл', descriptionKg: 'Трайфл десерти', price: 170, image: 'https://content2.flowwow-images.com/data/flowers/1000x1000/63/1740545469_46861463.jpg', category: 'dessert' },

    // Напитки
    { id: 58, name: 'Компот 1л / 1,5л', nameKg: 'Компот 1л / 1,5л', description: 'Компот', descriptionKg: 'Компот', price: 85, price2: 125, image: 'https://img.iamcook.ru/2019/upl/recipes/cat/u-4a903326f8c32bf338e5d2b2cf87a1aa.JPG', category: 'drink' },
    { id: 59, name: 'Кола 1л / 1,5л', nameKg: 'Кола 1л / 1,5л', description: 'Кола', descriptionKg: 'Кола', price: 105, price2: 145, image: 'https://neman.kg/images/watermarked/detailed/34/unnamed_n7sb-ck.webp', category: 'drink' },
    { id: 60, name: 'Фанта 1л / 1,5л', nameKg: 'Фанта 1л / 1,5л', description: 'Фанта', descriptionKg: 'Фанта', price: 105, price2: 145, image: 'https://dostavka-produktov.ru/image/cache/catalog/products_images/3176277-1000x1000.jpg', category: 'drink' },
    { id: 61, name: 'Любимый 1л / 1,5л', nameKg: 'Сүйүктүү 1л / 1,5л', description: 'Любимый сок', descriptionKg: 'Сүйүктүү ширеп', price: 135, price2: 220, image: 'https://3259404.ru/upload/iblock/fb6/nx32auk4u9xu7peyhyvh3ke5lvhigp6z.webp', category: 'drink' },

    // Fast-Food
    { id: 62, name: 'KFS + фри', nameKg: 'KFS + фри', description: 'Курица и картошка фри', descriptionKg: 'Тоок жана фри картөшкө', price: 2, image: 'https://www.chefmarket.ru/blog/wp-content/uploads/2020/01/fried-chick-2000x1200.jpg', category: 'fastfood' },
    { id: 63, name: 'Шаурма', nameKg: 'Шаурма', description: 'Шаурма', descriptionKg: 'Шаурма', price: 205, image: 'https://lefood.menu/wp-content/uploads/w_images/2023/07/recept-76707-1240x827.jpg', category: 'fastfood' },
    { id: 64, name: 'Шаурма с курицей', nameKg: 'Тоок менен шаурма', description: 'Шаурма с курицей', descriptionKg: 'Тоок менен шаурма', price: 230, image: 'https://zira.uz/wp-content/uploads/2022/06/shaurma-18.jpg', category: 'fastfood' },
    { id: 65, name: 'Пицца "Пепперони"', nameKg: 'Пицца "Пепперони"', description: 'Пицца Пепперони', descriptionKg: 'Пепперони пиццасы', price: 450, image: 'https://s1.eda.ru/StaticContent/Photos/Upscaled/120131085053/171027192707/p_O.jpg', category: 'fastfood' },
    { id: 66, name: 'Пицца "Мясная"', nameKg: 'Пицца "Эттүү"', description: 'Пицца Мясная', descriptionKg: 'Эттүү пицца', price: 505, image: 'https://cipollino.ua/content/uploads/images/recept-myasnoj-piccy-pod-syrom%281%29.jpg', category: 'fastfood' },
    { id: 67, name: 'Пицца "Курица с грибами"', nameKg: 'Пицца "Козу карын менен тоок"', description: 'Пицца с курицей и грибами', descriptionKg: 'Тоок жана козу карын менен пицца', price: 505, image: 'https://s3.smartofood.ru/kato/menu/14cce8bc-fddd-5770-9c57-f35c8172513c.webp', category: 'fastfood' },
    { id: 68, name: 'Рамён', nameKg: 'Рамён', description: 'Рамён', descriptionKg: 'Рамён', price: 235, image: 'https://opis-cdn.tinkoffjournal.ru/mercury/inramen2.c3mkuj4avtxt..jpg', category: 'fastfood' },
    { id: 69, name: 'Пирог', nameKg: 'Пирог', description: 'Пирог', descriptionKg: 'Пирог', price: 40, image: 'https://prostokvashino.ru/upload/resize_cache/iblock/74f/800_800_0/74fe90dd6ef5f047dcadff513c8d75d7.jpg', category: 'fastfood' },
    { id: 70, name: 'Мини самсы песочные', nameKg: 'Мини кум самсы', description: 'Мини самсы песочные (пред. заказ)', descriptionKg: 'Мини кум самсы (алдын ала заказ)', price: 45, image: 'https://i.ytimg.com/vi/US6fbAwR_2E/maxresdefault.jpg', category: 'fastfood' },
    { id: 71, name: 'Хлеб', nameKg: 'Наан', description: 'Хлеб', descriptionKg: 'Наан', price: 40, image: 'https://img.iamcook.ru/old/upl/recipes/cat/u4142-10b7c9c0972f7a6486ec930a56c01777.jpg', category: 'fastfood' },
    { id: 72, name: 'Чай', nameKg: 'Чай', description: 'Чай', descriptionKg: 'Чай', price: 15, image: 'https://img2.goodfon.ru/original/5616x3744/0/63/stol-zavarnik-chay-napitok.jpg', category: 'fastfood' }
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
        'order-phone-hint': 'Пример: +996 998 252 023 или 0998252023',
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
        'reviews-back': 'Вернуться на главную'
    },
    kg: {
        'nav-menu': 'Меню',
        'nav-about': 'Биз жөнүндө',
        'nav-reviews': 'Пикирлер',
        'nav-contact': 'Байланыш',
        'about-title': '"Cholpon" кафесине кош келиңиз',
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
        'order-phone-hint': 'Мисал: +996 998 252 023 же 0998252023',
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
        'reviews-back': 'Башкы бетке кайтуу'
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

// ============================================
// Константы для заказов
// ============================================яяяяяяяяяяяяяяяя

// Номер телефона кафе для WhatsApp (без + и пробелов)
const CAFE_PHONE_NUMBER = '996998252023';

// URL Google Apps Script Web App для сохранения в Google Sheets
// ВАЖНО: Замените на ваш URL после настройки Google Apps Script
// Инструкция в файле GOOGLE_SHEETS_SETUP.md
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwRZDDKK04OEv-ySYHz6XbskBZXp7vGYcWxp7fYiLSmrVe0fjHi7KgDEIGIFnIEFYrn/exec';

// ============================================
// Глобальные переменные
// ============================================

let currentLang = localStorage.getItem('lang') || 'ru';
let currentTheme = localStorage.getItem('theme') || 'light';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all'; // Текущая выбранная категория
let currentSliderIndex = 0; // Индекс текущего фото в слайдере
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
    radios.forEach(r => r.addEventListener('change', refresh));
    // Also support click on label to toggle
    options.forEach(opt => opt.addEventListener('click', () => {
        const inp = opt.querySelector('input[name="paymentMethod"]');
        if (inp) {
            inp.checked = true;
            inp.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }));
}

// Проверка валидности формы заказа и активация кнопки отправки
function validateOrderForm() {
    const submitBtn = document.getElementById('submitOrderBtn');
    if (!submitBtn) return;

    const name = document.getElementById('customerName');
    const phone = document.getElementById('customerPhone');
    const cartNotEmpty = cart && cart.length > 0;

    const payment = document.querySelector('input[name="paymentMethod"]:checked');

    // Простой валидатор телефона (та же логика что и в placeOrder)
    const phoneVal = phone ? phone.value.trim().replace(/[\s-]/g, '') : '';
    const phoneRegex = /^(\+?996|0)?[0-9]{9}$/;

    const nameOk = name && name.value.trim().length > 0;
    const phoneOk = phone && phoneVal.length > 0 && phoneRegex.test(phoneVal);
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

// Подключаем слушатели на инпуты формы, чтобы валидировать в реальном времени
function initOrderFormValidation() {
    const name = document.getElementById('customerName');
    const phone = document.getElementById('customerPhone');
    const radios = document.querySelectorAll('input[name="paymentMethod"]');

    if (name) name.addEventListener('input', validateOrderForm);
    if (phone) phone.addEventListener('input', validateOrderForm);
    radios.forEach(r => r.addEventListener('change', validateOrderForm));

    // ensure validation runs when cart changes
    // updateCartUI() will call validateOrderForm at the end
    validateOrderForm();
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

// Анимация печатающегося приветствия
function animateWelcome() {
    const el = document.getElementById('animatedWelcome');
    if (!el) return;
    const text = (translations[currentLang] && translations[currentLang]['about-title']) ? translations[currentLang]['about-title'] : 'Добро пожаловать в кафе "Cholpon"';
    let idx = 0;
    let forward = true;
    el.textContent = '';

    function step() {
        if (forward) {
            el.textContent = text.slice(0, idx + 1);
            idx++;
            if (idx >= text.length) {
                forward = false;
                setTimeout(step, 1200);
                return;
            }
        } else {
            el.textContent = text.slice(0, idx - 1);
            idx--;
            if (idx <= 0) {
                forward = true;
                setTimeout(step, 400);
                return;
            }
        }
        setTimeout(step, forward ? 60 : 30);
    }

    step();

    // CTA buttons behavior
    const viewMenuBtn = document.getElementById('viewMenuBtn');
    const viewContactsBtn = document.getElementById('viewContactsBtn');
    if (viewMenuBtn) viewMenuBtn.addEventListener('click', () => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' }));
    if (viewContactsBtn) viewContactsBtn.addEventListener('click', () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }));
}

// ============================================
// Инициализация темы
// ============================================

function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
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

    // Открытие корзины
    const cartIconBtn = document.getElementById('cartIconBtn');
    if (cartIconBtn) {
        cartIconBtn.addEventListener('click', () => {
            document.getElementById('cartModal').classList.add('active');
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

    // Закрытие модальных окон
    const closeCartModal = document.getElementById('closeCartModal');
    if (closeCartModal) {
        closeCartModal.addEventListener('click', () => {
            document.getElementById('cartModal').classList.remove('active');
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
    const filteredItems = currentCategory === 'all'
        ? menuData
        : menuData.filter(item => item.category === currentCategory);

    filteredItems.forEach(item => {
        const card = createMenuCard(item);
        menuGrid.appendChild(card);
    });
    // Инициализация мобильного слайдера (если экран небольшой)
    initMenuSlider();
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
        <img src="${item.image}" alt="${name}" class="dish-image" onclick="openImageLightbox('${item.image}','${name}')" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
        <div class="dish-info">
            <h3 class="dish-name">${name}</h3>
            <p class="dish-description">${description}</p>
            <div class="dish-footer">
                <span class="dish-price">${price} <span data-i18n="currency">сом</span></span>
                <div class="dish-actions">
                        <button type="button" class="btn-details" onclick="showDishDetails(${item.id})" title="${translations[currentLang]['details'] || 'Подробнее'}" data-i18n="details">Подробнее</button>
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

        // Навешиваем обработчик открытия lightbox
        imgEl.addEventListener('click', () => openImageLightbox(imgEl.src, name));
    }

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

        // Авто-открытие корзины при добавлении
        const cartModalEl = document.getElementById('cartModal');
        if (cartModalEl) cartModalEl.classList.add('active');

        // Показ уведомления
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

    // Заголовок заказа (без звездочек для лучшей читаемости)
    const header = currentLang === 'ru'
        ? '🍽 Новый заказ из кафе Cholpon\n\n'
        : '🍽 Cholpon кафесинен жаңы заказ\n\n';

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

    // Информация о клиенте
    const customerInfo = `👤 ${currentLang === 'ru' ? 'Клиент' : 'Клиент'}: ${name}\n📞 ${currentLang === 'ru' ? 'Телефон' : 'Телефон'}: ${phone}`;

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

    // Собираем полный текст заказа
    return header + itemsText + totalText + customerInfo + paymentText + commentText;
}

/**
 * Отправляет заказ в WhatsApp
 * @param {string} orderText - Текст заказа
 */
function sendToWhatsApp(orderText) {
    // Формируем URL для WhatsApp
    const whatsappUrl = `https://wa.me/${CAFE_PHONE_NUMBER}?text=${encodeURIComponent(orderText)}`;

    // Открываем WhatsApp в новой вкладке
    window.open(whatsappUrl, '_blank');
}

/**
 * Отправляет заказ в Google Sheets через Google Apps Script
 * @param {string} name - Имя клиента
 * @param {string} phone - Телефон клиента
 * @param {string} comment - Комментарий к заказу
 * @returns {Promise} Промис с результатом отправки
 */
async function sendToExcel(name, phone, comment, paymentMethod) {
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
        comment: comment || '',
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
        const orderText = createOrderText(name, phone, comment, paymentMethod);

        // Параллельно отправляем в WhatsApp и Google Sheets
        // Открываем WhatsApp для отправки сообщения клиентом
        sendToWhatsApp(orderText);

        // Отправляем в Google Sheets в фоне (не блокируем процесс)
        sendToExcel(name, phone, comment, paymentMethod).catch(error => {
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
            // если сервер вернул обновлённый объект, обновим локальный кэш
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

/**
 * Отображение отзывов
 */
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

// Отправка отзыва на сервер (если настроен). Возвращает сохранённый объект или false.
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

// ============================================
// Экспорт функций для использования в HTML
// ============================================

window.addToCart = addToCart;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.removeFromCart = removeFromCart;
window.showDishDetails = showDishDetails;
window.filterByCategory = filterByCategory;
window.getAllReviews = getAllReviews;
window.createReviewCard = createReviewCard;