import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/LAB1/',
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    allowedHosts: ['localhost', '.lhr.life', '.loca.lt'],
  },
});
