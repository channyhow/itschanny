// Using ESM syntax
export default {
    globDirectory: 'dist/',
    globPatterns: [
      '**/*.{html,js,css,svg,png}'
    ],
    swDest: 'dist/sw.js',
    clientsClaim: true,
    skipWaiting: true,
  };
  