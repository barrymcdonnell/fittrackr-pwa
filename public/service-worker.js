// Define a cache name for your application assets
const CACHE_NAME = 'fit-track-cache-v1';

// List of URLs to cache during installation
// This should include all static assets required for the app to work offline
const urlsToCache = [
  '/',
  '/index.html',
  // Add paths to your bundled JavaScript and CSS files here
  // In a Create React App, these are typically generated in the 'build' folder.
  // For a single file setup, you might cache the HTML and the JS file itself.
  // For example: '/static/js/main.chunk.js', '/static/css/main.chunk.css'
  // Since this is a single file, we'll assume the HTML includes everything.
  // If you later bundle with Webpack/Vite, you'll need to update these paths.
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/icon-maskable-192x192.png',
  '/icons/icon-maskable-512x512.png',
  'https://cdn.tailwindcss.com', // Cache Tailwind CSS CDN
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', // Cache Google Fonts CSS
  'https://images.unsplash.com/photo-1571019613454-1cb2f99f231b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Cache background image
];

// Install event: This is fired when the service worker is first registered.
// It's used to populate the initial cache with essential assets.
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('[Service Worker] Failed to cache during install:', error);
      })
  );
});

// Activate event: This is fired when the service worker is activated.
// It's typically used to clean up old caches.
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    })
  );
  // Ensure the service worker takes control of clients immediately
  event.waitUntil(self.clients.claim());
});

// Fetch event: This is fired for every network request made by the page.
// It allows the service worker to intercept requests and serve cached content.
self.addEventListener('fetch', (event) => {
  // Only handle GET requests for navigation and assets
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // If the request is in the cache, return the cached response
          if (response) {
            return response;
          }
          // If not in cache, fetch from the network
          return fetch(event.request)
            .then((networkResponse) => {
              // Check if we received a valid response
              if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                return networkResponse;
              }
              // Clone the response because it's a stream and can only be consumed once
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
              return networkResponse;
            })
            .catch(() => {
              // Fallback for when both cache and network fail (e.g., offline and not cached)
              // You could return an offline page here if you had one.
              return new Response('<h1>Offline</h1><p>You are offline and this content is not cached.</p>', {
                headers: { 'Content-Type': 'text/html' }
              });
            });
        })
    );
  }
});
