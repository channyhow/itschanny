const CACHE_NAME = 'channyhow.com';
const urlsToCache = [
  '/',
  '/index.html', // Ensure this matches the entry HTML file
  // Additional static assets you want to cache
];


// Install event - cache files
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
        .catch((error) => console.error('Caching failed during install: ', error))
    );
  });
  
  // Fetch event - serve cached content when offline
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            console.log('Serving from cache: ', event.request.url);
            return response;
          }
          console.log('Fetching from network: ', event.request.url);
          return fetch(event.request).then(
            (response) => {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              const responseToCache = response.clone();
  
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                })
                .catch((error) => console.error('Caching failed during fetch: ', error));
  
              return response;
            }
          ).catch((error) => {
            console.error('Fetch failed: ', error);
            // Optionally, you can return a fallback resource here
          });
        }).catch((error) => {
          console.error('Cache match failed: ', error);
          // Optionally, you can return a fallback resource here
        })
    );
  });
  
  // Activate event - clean up old caches
  self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              console.log('Deleting old cache: ', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }).catch((error) => console.error('Cache keys retrieval failed: ', error))
    );
  });