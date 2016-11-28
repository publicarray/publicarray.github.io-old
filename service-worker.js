---
---
// https://serviceworke.rs/

// Name of the caches used in this version of the service worker.
const PRECACHE = 'precache-v{{site.time | date: "%Y%m%d%H%M%S"}}';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  '/',
  '/service-worker.js',
  '/favicon.ico',
  '/assets/1.jpg',
  '/blog/',
  '/contact/',
  '/projects/',
  '/assets/light.css',
  '/assets/reveal.js',
  '/assets/script.js',
  '/assets/ionicons3.woff2'
];

var fallback = new Response('Sorry, you appear to be offline and the resource is not cached.', {
  headers: {
    'Content-Type': 'text/plain'
  }
});

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 https://googlechrome.github.io/samples/service-worker/basic/index.html
*/

// Names of the runtime cache, items will be added once the user has visited
// new resources on the same domain.
const RUNTIME = 'runtime';

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  // empty runtime and old versions of the cache
  const currentCaches = [PRECACHE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          }).catch(function(e) {
            console.error('Failed to fetch; ' + e.toString());
            return fallback;
          });
        });
      })
    );
  }
});

