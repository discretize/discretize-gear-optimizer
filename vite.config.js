import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import yamlImporter from './plugins/YAMLImporter';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // main: resolve(__dirname, 'src/pages/index/index.html'),
        main: resolve(__dirname, 'index.html'),
        build: resolve(__dirname, 'build/index.html'),
      },
    },
  },
  plugins: [react(), yamlImporter()],
  resolve: {
    alias: {
      'react-dom': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    },
  },
});
