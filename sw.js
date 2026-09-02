// Namibia Road Trip Quiz — offline service worker
//
// This caches the app shell + all question files so the site keeps working
// with zero network connection once it's been visited at least once on wifi.
//
// IMPORTANT: every time you add a new questions-*.js file, you must:
//   1. Add its filename to FILES_TO_CACHE below
//   2. Bump CACHE_NAME (e.g. 'v1' -> 'v2')
//   3. Commit + push, then reopen the site once on wifi so it re-caches
// If you skip this, the app will keep working offline but won't pick up
// the new questions until it's had a chance to re-cache on wifi.

const CACHE_NAME = "namibia-quiz-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./questions.js",
  "./questions-extra.js",
  "./questions-brainteasers.js",
  "./questions-travel.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          // Opportunistically cache anything new we fetch successfully
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(() => cached);
    })
  );
});
