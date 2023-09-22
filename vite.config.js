import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  proxy: {
    '/api': {
      target: 'https://nextflix-1vb5.onrender.com', 
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api(.*)/, '/$1'),
    },
  },
});