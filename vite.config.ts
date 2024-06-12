import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
    }
  },
  publicDir: 'public', // Ensuring Vite uses the public directory
  server: {
    open: true,
    port: 3001,
  }
});
