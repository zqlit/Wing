/**
 * Wing Blog Service Worker
 * 提供离线访问支持和资源缓存
 */

const CACHE_NAME = 'wing-blog-v2';
const STATIC_ASSETS = [
  '/',
  '/about',
  '/archive',
  '/links',
  '/favicon.svg',
  '/avatar.jpg',
  '/fonts/atkinson-regular.woff',
  '/fonts/atkinson-bold.woff',
  '/fonts/remixicon.css',
  '/fonts/remixicon.woff2',
  '/artalk.js',
  '/artalk.css',
];

// 安装时缓存静态资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// 激活时清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// 拦截请求并提供缓存
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 只处理 GET 请求
  if (request.method !== 'GET') {
    return;
  }

  // 跳过第三方请求
  if (url.origin !== self.location.origin) {
    return;
  }

  // 页面导航请求 - 使用 Network First 策略
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request).then((cached) => {
            if (cached) {
              return cached;
            }
            // 如果缓存中没有，返回离线页面
            return caches.match('/');
          });
        })
    );
    return;
  }

  // 静态资源 - 使用 Cache First 策略
  if (
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'font' ||
    request.destination === 'image'
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          // 后台更新缓存
          fetch(request).then((response) => {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, response);
            });
          });
          return cached;
        }
        return fetch(request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clone);
          });
          return response;
        });
      })
    );
    return;
  }

  // 其他请求 - 使用 Stale While Revalidate 策略
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, clone);
        });
        return response;
      });
      return cached || fetchPromise;
    })
  );
});

// 后台同步（用于离线评论提交等）
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // 这里可以处理后台同步逻辑
      Promise.resolve()
    );
  }
});
