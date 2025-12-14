import react from '@vitejs/plugin-react';
import { execSync } from 'node:child_process';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { comlink } from 'vite-plugin-comlink';
import wasm from 'vite-plugin-wasm';
import yamlImporter from './plugins/YAMLImporter';

const getCommitHash = () => {
  try {
    if (process.env.GITHUB_HEAD_REF) {
      return `pull request (${process.env.GITHUB_HEAD_REF})`;
    }
    return execSync('git rev-parse --short HEAD').toString();
  } catch {
    return undefined;
  }
};

const filterHotUpdate = () => ({
  name: 'filter-hot-update',
  handleHotUpdate({ file, modules }) {
    // don't full reload the page when updating translations
    if (file.endsWith('translation.json')) {
      return [];
    }
    return modules;
  },
});

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
    sourcemap: true,
  },
  plugins: [comlink(), react(), yamlImporter(), wasm(), filterHotUpdate()],
  worker: {
    format: 'iife',
    plugins: () => [comlink(), yamlImporter(), wasm()],
  },
  define: {
    '__COMMIT_HASH__': JSON.stringify(getCommitHash()),
  },
});
