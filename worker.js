const CACHE = 'piccolo-v1';


const FILES = [
  './',
  './index.css',
  './index.html',
  './worker.js',
  './client/index.js',
  './client/index.html',
  './icons/piccaloe-254.png',
  './client/css/all.css',
  './client/css/game/background.css',
  './client/css/game/foreground.css',
  './client/css/mainMenu/namesAndOpperationalStyles.css',
  './client/css/mainMenu/titleStyles.css',
  './client/game/cards/p0Cards.mjs',
  './client/game/cards/p1Cards.mjs',
  './client/game/cards/p2Cards.mjs',
  './client/game/cards/p3Cards.mjs',
  './client/game/card-helpers.mjs',
  './client/game/game-helpers.mjs',
  './client/game/setup.mjs',
  './client/game/helpers/element-creation.mjs',
  './client/game/helpers/local-storage.mjs',
];

async function fetchFromCache(request) {
  const cache = await caches.open(CACHE);
  const data = await cache.match(request);
  if (data) {
    return data;
  } else {
    await cache.add(request);
    return cache.match(request);
  }
}

function interceptFetch(e) {
  e.respondWith(fetchFromCache(e.request));
}

async function installMyServiceWorker() {
  // pre-cache everything
  try {
    const c = await caches.open(CACHE);
    await c.addAll(FILES);
    console.log('Cache is primed.');
  } catch (e) {
    console.warn("Priming cache failed.  Falling back to 'online only'.", e);
  }
}

self.addEventListener('install', installMyServiceWorker);
self.addEventListener('fetch', interceptFetch);
