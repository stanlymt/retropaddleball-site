// Service Worker for Retro Paddle Ball website
const CACHE_NAME = 'retro-paddle-ball-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/css/tailwind.css',
  '/assets/js/error-handler.js',
  '/assets/js/scroll-to-top.js',
  '/assets/icon.png',
  '/assets/hero.webp',
  '/manifest.json',
  '/about/',
  '/privacy/',
  '/support/'
];

// Install event - precache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
      .catch(err => console.error('Cache open failed:', err))
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  // Don't cache third-party resources
  if (
    event.request.url.includes('tawk.to') ||
    event.request.url.includes('cloudflareinsights') ||
    event.request.url.includes('get.microsoft.com')
  ) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from cache
        if (response) {
          return response;
        }
        
        // Clone the request - request can only be used once
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response - can only be used once
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              // Only cache same-origin assets
              if (event.request.url.startsWith(self.location.origin)) {
                cache.put(event.request, responseToCache);
              }
            });
            
          return response;
        });
      })
      .catch(error => {
        // If both cache and network fail, return a fallback offline page
        if (event.request.mode === 'navigate') {
          return caches.match('/404.html');
        }
        
        console.error('Fetch failed:', error);
        return new Response('Network error', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      })
  );
});
