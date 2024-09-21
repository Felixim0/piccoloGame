const CACHE = 'piccolo-v1';


const FILES = [
  '/piccoloGame/',
  '/piccoloGame/index.css',
  '/piccoloGame/index.html',
  '/piccoloGame/worker.js',
  '/piccoloGame/client/index.js',
  '/piccoloGame/client/index.html',
  '/piccoloGame/icons/piccaloe-254.png',
  '/piccoloGame/client/css/all.css',
  '/piccoloGame/client/css/game/background.css',
  '/piccoloGame/client/css/game/foreground.css',
  '/piccoloGame/client/css/mainMenu/namesAndOpperationalStyles.css',
  '/piccoloGame/client/css/mainMenu/titleStyles.css',
  '/piccoloGame/client/game/cards/p0Cards.mjs',
  '/piccoloGame/client/game/cards/p1Cards.mjs',
  '/piccoloGame/client/game/cards/p2Cards.mjs',
  '/piccoloGame/client/game/cards/p3Cards.mjs',
  '/piccoloGame/client/game/card-helpers.mjs',
  '/piccoloGame/client/game/game-helpers.mjs',
  '/piccoloGame/client/game/setup.mjs',
  '/piccoloGame/client/game/helpers/element-creation.mjs',
  '/piccoloGame/client/game/helpers/local-storage.mjs',
];

// Pre-fetch the files for offline usage
async function fetchFromCache(request) {
  const cache = await caches.open(CACHE);
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());  // Cache the network response
    }
    return networkResponse;
  } catch (error) {
    // In case the fetch fails (offline), check for fallback or cached files
    console.error(`Fetch failed for ${request.url}`, error);
    // Fallback to index.html for navigation requests
    if (request.mode === 'navigate') {
      return cache.match('/piccoloGame/index.html');
    }
    return cachedResponse || new Response('Offline and not cached', { status: 404 });
  }
}

// Intercept fetch events and respond with cache or network fallback
function interceptFetch(e) {
  e.respondWith(fetchFromCache(e.request));
}

// Install the service worker and cache specified files
async function installMyServiceWorker(event) {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll(FILES);
    }).then(() => {
      console.log('Cache is primed with static assets.');
    }).catch((err) => {
      console.error('Failed to pre-cache files', err);
    }),
  );
}

// Clean up old caches during activation (optional but recommended)
async function activateMyServiceWorker(event) {
  const cacheNames = await caches.keys();
  const validCacheSet = new Set([CACHE]);
  event.waitUntil(
    Promise.all(
      cacheNames.forEach(cacheName => {
        if (!validCacheSet.has(cacheName)) {
          console.log(`Deleting old cache: ${cacheName}`);
          caches.delete(cacheName);
        }
      }),
    ),
  );
}

self.addEventListener('install', installMyServiceWorker);
self.addEventListener('fetch', interceptFetch);
self.addEventListener('activate', activateMyServiceWorker);
