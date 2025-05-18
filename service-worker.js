const cacheName = 'lambo-learn-v1';
const staticAssets = [
  './',
  './index.html',
  './lambo.jpg',
  './engine.mp3',
  './icon-192x192.png',
  './icon-512x512.png'
];

self.addEventListener('install', async (event) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached || fetch(request);
}
