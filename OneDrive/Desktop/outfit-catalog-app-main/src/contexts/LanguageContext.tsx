import { createContext, useContext, useState } from 'react';

type Language = 'ru' | 'kg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    storeName: 'OUTFIT STORE',
    storeSlogan: 'стиль, который говорит за тебя',
    home: 'Главная',
    contacts: 'Контакты',
    cashierLogin: 'Вход кассира',
    storeOpen: 'Магазин открыт',
    storeClosed: 'Магазин закрыт',
    filters: 'Фильтры',
    category: 'Категория',
    size: 'Размер',
    reset: 'Сбросить',
    all: 'Всё',
    pants: 'Штаны',
    jackets: 'Куртки',
    top: 'Верх',
    caps: 'Кепки',
    hats: 'Шапки',
    allSizes: 'Все размеры',
    universal: 'Универсальный',
    inStock: 'В наличии',
    outOfStock: 'Нет в наличии',
    som: 'сом',
    login: 'Логин',
    password: 'Пароль',
    loginButton: 'Войти',
    defaultCredentials: 'По умолчанию: admin / 1234',
    dashboard: 'Панель управления',
    logout: 'Выйти',
    addProduct: 'Добавить товар',
    productName: 'Название',
    productNamePlaceholder: 'Название товара',
    price: 'Цена (сом)',
    selectSizes: 'Выберите размеры',
    uploadImage: 'Загрузить фото',
    chooseFile: 'Выбрать файл',
    storeStatus: 'Статус магазина',
    allProducts: 'Все товары',
    fillAllFields: 'Заполните все поля',
    productAdded: 'Товар добавлен',
    productDeleted: 'Товар удален',
    loggedOut: 'Вы вышли из системы',
    loginSuccess: 'Вход выполнен успешно',
    loginError: 'Неверный логин или пароль',
    phone: 'Телефон',
    address: 'Адрес',
    workingHours: 'Часы работы',
    workingHoursValue: 'Ежедневно с 9:00 до 20:00',
    followUs: 'Следите за нами',
    allRightsReserved: 'Все права защищены'
  },
  kg: {
    storeName: 'OUTFIT STORE',
    storeSlogan: 'стилиңиз сиз жөнүндө айтат',
    home: 'Башкы бет',
    contacts: 'Байланыш',
    cashierLogin: 'Кассирдин кирүүсү',
    storeOpen: 'Дүкөн ачык',
    storeClosed: 'Дүкөн жабык',
    filters: 'Фильтрлер',
    category: 'Категория',
    size: 'Өлчөм',
    reset: 'Тазалоо',
    all: 'Баары',
    pants: 'Шым',
    jackets: 'Куртка',
    top: 'Үстүнкү',
    caps: 'Кепка',
    hats: 'Шапка',
    allSizes: 'Бардык өлчөмдөр',
    universal: 'Универсалдуу',
    inStock: 'Бар',
    outOfStock: 'Жок',
    som: 'сом',
    login: 'Логин',
    password: 'Сырсөз',
    loginButton: 'Кирүү',
    defaultCredentials: 'Демейки: admin / 1234',
    dashboard: 'Башкаруу панели',
    logout: 'Чыгуу',
    addProduct: 'Товар кошуу',
    productName: 'Аталышы',
    productNamePlaceholder: 'Товардын аталышы',
    price: 'Баасы (сом)',
    selectSizes: 'Өлчөмдөрдү тандаңыз',
    uploadImage: 'Сүрөт жүктөө',
    chooseFile: 'Файл тандоо',
    storeStatus: 'Дүкөндүн абалы',
    allProducts: 'Бардык товарлар',
    fillAllFields: 'Бардык талааларды толтуруңуз',
    productAdded: 'Товар кошулду',
    productDeleted: 'Товар өчүрүлдү',
    loggedOut: 'Сиз чыктыңыз',
    loginSuccess: 'Кирүү ийгиликтүү болду',
    loginError: 'Логин же сырсөз туура эмес',
    phone: 'Телефон',
    address: 'Дарек',
    workingHours: 'Иш убактысы',
    workingHoursValue: 'Күн сайын 9:00дөн 20:00гө чейин',
    followUs: 'Бизди ээрчиңиз',
    allRightsReserved: 'Бардык укуктар корголгон'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ru';
  });

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ru] || key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
