// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/project/',
  build: {
    outDir: '/var/www/html/project',
  },
  server: {
    port: 3000, // Change this to your desired port
  },
});
