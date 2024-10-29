import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { comlink } from 'vite-plugin-comlink';
import { VitePWA } from 'vite-plugin-pwa';
import wasm from 'vite-plugin-wasm';
import yamlImporter from './plugins/YAMLImporter';

const pwa = VitePWA({
  manifest: {
    name: 'Discretize Gear Optimizer',
    short_name: '[dT] Optimizer',
    id: 'gear-optimizer-standalone',
    description:
      'The [dT] Gear Optimizer helps Guild Wars 2 players find optimal builds for fractals, raids, and strike missions.',
    display: 'standalone', // minimal-ui breaks ios install
    display_override: ['minimal-ui', 'standalone'],
    theme_color: '#2f3136',
    background_color: '#2f3136',
    icons: [
      {
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },

  strategies: 'generateSW', // default; automatically generated service worker

  registerType: 'prompt', // default: do not force refresh user windows, but...
  workbox: {
    skipWaiting: true, // ...don't wait for them all to be closed to update service worker

    globPatterns: ['**/*.{js,css,html,ico,png,jpg,woff,woff2}'],
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    ignoreURLParametersMatching: [/.*/],

    mode: 'development',
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
  plugins: [comlink(), react(), yamlImporter(), wasm(), pwa],
  worker: {
    format: 'iife',
    plugins: () => [comlink(), yamlImporter(), wasm()],
  },
});
