self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('shopping-list-v1').then((cache) => {
      return cache.addAll([
        '/https://gautams-github.github.io/sheets_as_api/',
        'https://raw.githubusercontent.com/Gautams-GitHub/sheets_as_api/main/index.html',
        'https://raw.githubusercontent.com/Gautams-GitHub/sheets_as_api/main/manifest.json',
        'https://raw.githubusercontent.com/Gautams-GitHub/sheets_as_api/main/4211497.png',
        'https://raw.githubusercontent.com/Gautams-GitHub/sheets_as_api/main/sw.js',
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
