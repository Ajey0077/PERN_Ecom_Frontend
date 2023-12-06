const CACHE_NAME = 'my-ecommerce-app-cache';
const urlsToCache = [
  '/',
  '/index.html',
  // Add other static assets and HTML files
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       return response || fetch(event.request);
//     })
//   );
// });
self.addEventListener('fetch', event => {
  if (
    event.request.url.startsWith('https://ecom-node-server.onrender.com/api/')
  ) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Optionally, you can add logic here to cache the API responses if needed.
          return response;
        })
        .catch(error => {
          console.error('Error fetching API:', error);
        })
    );
  } else {
    // For other requests, use cache-first strategy
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  }
});
