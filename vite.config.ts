import react from '@vitejs/plugin-react';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport(),
    Components({
      dirs: ['src/components', 'src/otherComponents'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
});
