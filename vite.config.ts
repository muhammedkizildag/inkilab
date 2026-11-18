import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          const match = id.match(/src[/\\]data[/\\]lessons[/\\](ders\d+)\.ts/);
          if (match) {
            return match[1];
          }
        },
      },
    },
  },
});
