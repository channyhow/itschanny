export default {
    globDirectory: 'dist/',
    globPatterns: [
      '**/*.{js,css,html,png,jpg,svg,json}'
    ],
    swDest: 'dist/sw.js',
    runtimeCaching: [
      {
        urlPattern: ({ request }) => request.destination === 'document',
        handler: 'NetworkFirst',
        options: {
          cacheName: 'documents',
          expiration: {
            maxEntries: 10,
          },
        },
      },
      {
        urlPattern: ({ request }) => request.destination === 'image',
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 50,
          },
        },
      },
      {
        urlPattern: ({ request }) => request.destination === 'script' || request.destination === 'style',
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-resources',
          expiration: {
            maxEntries: 30,
          },
        },
      },
    ],
  };
  