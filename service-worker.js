---
---
'use strict';
const version = '{{site.time | date: "%Y%m%d%H%M%S"}}';
const CACHE_NAME = 'cache-v'+version;
var urlsToCache = [
  '/',
  '/service-worker.js',
  '/favicon.ico',
  '/assets/1.png',
  '/contact',
  '/projects',
  '/assets/workintegratedlearing.png',
  '/assets/solarsystem.jpg',
  '/blog',
  '/assets/light.css',
  '/assets/reveal.js',
  '/assets/script.js',
  '/assets/ionicons3.woff2'
];

var fallback = new Response('Sorry, you appear to be offline and the resource is not cached.', {
  headers: {'Content-Type': 'text/plain'}
});

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(function(response) {
            // Check if we received a valid response
            if (!response || !response.ok || response.status !== 200 || response.type !== 'basic') {
              console.error('Response status ' + response.status, response.url);
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;

          }).catch(function(e) {
            console.error('Fetch failed. returning offline page instead.', e);
            return fallback;
            // return caches.open(OFFLINE_CACHE).then(function(cache) {
            //   return cache.match(OFFLINE_URL);
            // });
          });

      })
  );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
