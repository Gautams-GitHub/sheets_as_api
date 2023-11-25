self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('shopping-list-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/4211497.png',
        '/sw.js',
        // Add other files and dependencies that your app needs to work offline
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
