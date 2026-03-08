export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  size: string[];
  inStock: boolean;
  image: string;
}

const STORAGE_KEY = 'outfit_store_products';
const AUTH_KEY = 'outfit_store_auth';

// Начальные товары для магазина
const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Классическая футболка',
    category: 'верх',
    price: 1500,
    size: ['S', 'M', 'L', 'XL'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop'
  },
  {
    id: '2',
    name: 'Джинсы Slim Fit',
    category: 'штаны',
    price: 3500,
    size: ['M', 'L', 'XL'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop'
  },
  {
    id: '3',
    name: 'Кожаная куртка',
    category: 'куртки',
    price: 8500,
    size: ['M', 'L', 'XL'],
    inStock: false,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop'
  },
  {
    id: '4',
    name: 'Бейсболка Classic',
    category: 'кепки',
    price: 900,
    size: ['Универсальный'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop'
  },
  {
    id: '5',
    name: 'Зимняя шапка',
    category: 'шапки',
    price: 1200,
    size: ['Универсальный'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=500&fit=crop'
  },
  {
    id: '6',
    name: 'Спортивная толстовка',
    category: 'верх',
    price: 2800,
    size: ['S', 'M', 'L', 'XL'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop'
  },
  {
    id: '7',
    name: 'Карго штаны',
    category: 'штаны',
    price: 4200,
    size: ['M', 'L', 'XL'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop'
  },
  {
    id: '8',
    name: 'Бомбер',
    category: 'куртки',
    price: 5500,
    size: ['S', 'M', 'L'],
    inStock: false,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop'
  },
  {
    id: '9',
    name: 'Снепбек Premium',
    category: 'кепки',
    price: 1500,
    size: ['Универсальный'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=500&fit=crop'
  },
  {
    id: '10',
    name: 'Вязаная шапка',
    category: 'шапки',
    price: 1100,
    size: ['Универсальный'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1517677129300-07b130802f46?w=400&h=500&fit=crop'
  },
  {
    id: '11',
    name: 'Рубашка Оверсайз',
    category: 'верх',
    price: 2200,
    size: ['M', 'L', 'XL'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop'
  },
  {
    id: '12',
    name: 'Пуховик зимний',
    category: 'куртки',
    price: 9500,
    size: ['M', 'L', 'XL'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop'
  }
];

export const getProducts = (): Product[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts));
    return initialProducts;
  }
  return JSON.parse(stored);
};

export const saveProducts = (products: Product[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const addProduct = (product: Omit<Product, 'id'>): Product => {
  const products = getProducts();
  const newProduct = {
    ...product,
    id: Date.now().toString()
  };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
};

export const deleteProduct = (id: string): void => {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== id);
  saveProducts(filtered);
};

export const updateProduct = (id: string, updates: Partial<Product>): void => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updates };
    saveProducts(products);
  }
};

export const login = (username: string, password: string): boolean => {
  if (username === 'admin' && password === '1234') {
    localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }
  return false;
};

export const logout = (): void => {
  localStorage.removeItem(AUTH_KEY);
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem(AUTH_KEY) === 'true';
};

const STORE_STATUS_KEY = 'outfit_store_status';

export const isStoreOpen = (): boolean => {
  // Проверяем ручной статус из админки
  const manualStatus = localStorage.getItem(STORE_STATUS_KEY);
  if (manualStatus !== null) {
    return manualStatus === 'open';
  }
  
  // Автоматическая проверка по времени
  const now = new Date();
  const hour = now.getHours();
  return hour >= 9 && hour < 20;
};

export const setStoreStatus = (isOpen: boolean): void => {
  localStorage.setItem(STORE_STATUS_KEY, isOpen ? 'open' : 'closed');
};

export const getStoreStatus = (): boolean | null => {
  const status = localStorage.getItem(STORE_STATUS_KEY);
  if (status === null) return null;
  return status === 'open';
};

export const clearStoreStatus = (): void => {
  localStorage.removeItem(STORE_STATUS_KEY);
};
