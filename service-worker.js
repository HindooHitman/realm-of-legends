
const cacheName = 'realm-of-legends-v1';
const filesToCache = [
  './RealmOfLegends_DualPlatform.html',
  './manifest.json',
  './icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
