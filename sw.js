const CACHE = 'cholpon-v2';

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Установка — кешируем основные файлы
self.addEventListener('install', e => {
  console.log('Service Worker устанавливается...');
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      console.log('Кеширование assets');
      return cache.addAll(ASSETS).catch(err => {
        console.error('Ошибка кеширования:', err);
      });
    })
  );
  self.skipWaiting();
});

// Активация — удаляем старый кеш
self.addEventListener('activate', e => {
  console.log('Service Worker активируется...');
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE).map(k => {
          console.log('Удаляем старый кеш:', k);
          return caches.delete(k);
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch — сначала сеть, при ошибке кеш
self.addEventListener('fetch', e => {
  // Пропускаем запросы не к нашему домену
  if (!e.request.url.startsWith(self.location.origin)) return;

  // Пропускаем запросы к API и динамические данные
  if (e.request.url.includes('telegram') || e.request.url.includes('api')) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Кешируем успешные ответы (только GET запросы)
        if (res.ok && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return res;
      })
      .catch(() => {
        // Если сеть недоступна, пытаемся взять из кеша
        return caches.match(e.request).then(cached => {
          if (cached) return cached;
          // Если нет в кеше, показываем заглушку или редирект на главную
          return caches.match('./index.html');
        });
      })
  );
});