const CACHE_NAME = 'sri-sri-gurukul-v1';
const IMAGE_CACHE_NAME = 'sri-sri-gurukul-images-v1';

// URLs to cache on install
const STATIC_CACHE_URLS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/index.html'
];

// Image URL patterns to cache
const IMAGE_URL_PATTERNS = [
  /\/lovable-uploads\//,
  /subhanustaging\.com.*\.(webp|jpg|jpeg|png|gif|svg)$/i,
  /i0\.wp\.com.*\.(webp|jpg|jpeg|png|gif|svg)$/i
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Handle image requests separately
  if (isImageRequest(request.url)) {
    event.respondWith(handleImageRequest(request));
    return;
  }

  // Handle other requests
  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(request).then((fetchResponse) => {
          // Cache successful responses
          if (fetchResponse.status === 200) {
            const responseClone = fetchResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return fetchResponse;
        });
      })
      .catch(() => {
        // Return offline fallback if available
        if (request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// Check if request is for an image
function isImageRequest(url) {
  return IMAGE_URL_PATTERNS.some(pattern => pattern.test(url));
}

// Handle image requests with aggressive caching
async function handleImageRequest(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Fetch from network with timeout and retry logic
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
    
    try {
      const fetchResponse = await fetch(request, { 
        signal: controller.signal,
        headers: {
          'Accept': 'image/webp,image/avif,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br'
        }
      });
      clearTimeout(timeoutId);
      
      if (fetchResponse.status === 200) {
        // Cache the image
        const cache = await caches.open(IMAGE_CACHE_NAME);
        cache.put(request, fetchResponse.clone());
      }
      
      return fetchResponse;
    } catch (fetchError) {
      clearTimeout(timeoutId);
      throw fetchError;
    }
  } catch (error) {
    console.log('Image fetch failed:', error);
    // Return a placeholder image or cached fallback
    return new Response('', { status: 404, statusText: 'Image not found' });
  }
}

// Clean up image cache periodically (keep only recent images)
setInterval(async () => {
  try {
    const cache = await caches.open(IMAGE_CACHE_NAME);
    const requests = await cache.keys();
    const now = Date.now();
    const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days

    for (const request of requests) {
      const response = await cache.match(request);
      if (response) {
        const cachedDate = new Date(response.headers.get('date')).getTime();
        if (now - cachedDate > maxAge) {
          await cache.delete(request);
        }
      }
    }
  } catch (error) {
    console.log('Cache cleanup failed:', error);
  }
}, 24 * 60 * 60 * 1000); // Run daily
