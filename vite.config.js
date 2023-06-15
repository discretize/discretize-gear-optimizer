import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import wasmPack from 'vite-plugin-wasm-pack';
import yamlImporter from './plugins/YAMLImporter';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        // main: resolve(__dirname, 'src/pages/index/index.html'),
        main: resolve(__dirname, 'index.html'),
        build: resolve(__dirname, 'build/index.html'),
      },
    },
    target: 'es2020',
  },
  plugins: [react(), yamlImporter(), wasmPack('./wasm_module')],
  worker: {
    format: 'iife',
    plugins: [yamlImporter(), wasmPack('./wasm_module')],
  },
});
