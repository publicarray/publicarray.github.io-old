(() => {
  // https://serviceworke.rs/
  // https://adactio.com/journal/9775 -> https://gist.github.com/adactio/4d588bb8a65fa11a3ea3
  // http://caniuse.com/#feat=serviceworkers
  // Name of the caches used in this version of the service worker.
  // A cache for core files like CSS and JavaScript
  const staticCacheName = "static";
  // A cache for pages to store for offline
  const pagesCacheName = "pages";
  // A cache for images to store for offline
  const imagesCacheName = "images";
  // Update 'version' if you need to refresh the caches
  const version = "v{{site.time | date: \"%Y%m%d%H%M%S\"}}";

  // A list of local resources we always want to be cached.
  const offlinePages = [
    "/",
    "/blog/",
    "/contact/",
    "/projects/",
    "/offline.html"
  ];

  const staticAssets = [
    "/favicon.ico",
    "/assets/fluidBox.js",
    "/assets/ionicons4.woff2"
  ];

  // Store core files in a cache (including a page to display when offline)
  // These items must be cached for the Service Worker to complete installation
  const updateStaticCache = () => {
    caches
      .open(version + staticCacheName)
      .then(cache => cache.addAll(offlinePages));
    return caches
      .open(version + staticCacheName)
      .then(cache => cache.addAll(staticAssets));
  };

  // Put an item in a specified cache
  const stashInCache = (cacheName, request, response) => {
    caches.open(cacheName).then(cache => {
      cache.put(request, response);
    });
  };

  // Limit the number of items in a specified cache.
  const trimCache = (cacheName, maxItems) => {
    caches.open(cacheName).then(cache => {
      cache.keys().then(keys => {
        if (keys.length > maxItems) {
          cache.delete(keys[0]).then(trimCache(cacheName, maxItems));
        }
      });
    });
  };

  // Remove caches whose name is no longer valid
  const clearOldCaches = () => caches.keys().then(
    keys => Promise.all(
      keys
        .filter(key => key.indexOf(version) !== 0)
        .map(key => caches.delete(key))
    )
  );

  // The install handler takes care of precaching the resources we always need.
  self.addEventListener("install", event => {
    event.waitUntil(updateStaticCache().then(() => self.skipWaiting()));
  });

  // The activate handler takes care of cleaning up old caches.
  self.addEventListener("activate", event => {
    // empty runtime and old versions of the cache
    event.waitUntil(clearOldCaches().then(() => self.clients.claim()));
  });

  self.addEventListener("message", event => {
    if (event.data.command === "trimCaches") {
      trimCache(version + pagesCacheName, 35);
      trimCache(version + imagesCacheName, 20);
    }
  });

  // The fetch handler serves responses for same-origin resources from a cache.
  // If no response is found, it populates the runtime cache with the response
  // from the network before returning it to the page.
  self.addEventListener("fetch", event => {
    let request = event.request;
    let url = new URL(request.url);

    // Skip cross-origin requests, like those for Google Analytics.
    if (!request.url.startsWith(self.location.origin)) {
      return;
    }

    // For non-GET requests, try the network first, fall back to the offline page
    if (request.method !== "GET") {
      event.respondWith(
        fetch(request).catch(() => caches.match("/offline.html"))
      );
      return;
    }

    // For HTML requests, try the network first, fall back to the cache, finally the offline page
    if (request.headers.get("Accept").includes("text/html")) {
      // Fix for Chrome bug: https://code.google.com/p/chromium/issues/detail?id=573937
      // only relevant for POST requests, Ignore for now
      // if (request.mode != "navigate") {
      //   request = new Request(request.url, {
      //     method: "GET",
      //     headers: request.headers,
      //     mode: request.mode,
      //     credentials: request.credentials,
      //     redirect: request.redirect
      //   });
      // }

      event.respondWith(
        fetch(request)
          .then(response => {
            // NETWORK
            // Stash a copy of this page in the pages cache
            const copy = response.clone();

            if (
              offlinePages.includes(url.pathname) ||
                offlinePages.includes(`${url.pathname}/`)
            ) {
              var cacheName = version + staticCacheName;
            } else {
              var cacheName = version + pagesCacheName;
            }

            stashInCache(cacheName, request, copy);
            return response;
          })
          .catch(() => {
            // CACHE or FALLBACK
            return caches
              .match(request)
              .then(response => response || caches.match("/offline.html"));
          })
      );
      return;
    }

    // For non-HTML requests, look in the cache first, fall back to the network
    event.respondWith(
      caches.match(request).then(
        response => // CACHE
        response || fetch(request)
            .then(response => {
              // NETWORK
              // If the request is for an image, stash a copy of this image in the images cache
              if (request.headers.get("Accept").includes("image")) {
                const copy = response.clone();
                const cacheName = version + imagesCacheName;
                stashInCache(cacheName, request, copy);
              }
              return response;
            })
            .catch(() => {
              // OFFLINE
              // If the request is for an image, show an offline placeholder
              if (request.headers.get("Accept").includes("image")) {
                return new Response(
                  "<svg role=\"img\" aria-labelledby=\"offline-title\" viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"offline-title\">Offline</title><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#D8D8D8\" d=\"M0 0h400v300H0z\"/><text fill=\"#9B9B9B\" font-family=\"Helvetica Neue,Arial,Helvetica,sans-serif\" font-size=\"72\" font-weight=\"bold\"><tspan x=\"93\" y=\"172\">offline</tspan></text></g></svg>",
                  { headers: { "Content-Type": "image/svg+xml" } }
                );
              }
            })
      )
    );
  });
})();
