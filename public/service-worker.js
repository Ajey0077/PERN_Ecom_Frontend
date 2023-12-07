const CACHE_NAME = 'my-ecommerce-app-cache';
const urlsToCache = [
  '/',
  '/index.html',
  // Add other static assets and HTML files
];
console.log('public service worker');

try {
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(urlsToCache);
      })
    );
  });

  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
} catch (err) {
  console.log('🚀 ~ file: service-worker.js:27 ~ err:', err);
}
