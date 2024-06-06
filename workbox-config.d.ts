declare module 'workbox-config.js' {
  const config: {
    globDirectory: string;
    globPatterns: string[];
    swDest: string;
    runtimeCaching: Array<{
      urlPattern: ({ request }: { request: Request }) => boolean;
      handler: string;
      options: {
        cacheName: string;
        expiration: {
          maxEntries: number;
        };
      };
    }>;
  };
  export default config;
}
