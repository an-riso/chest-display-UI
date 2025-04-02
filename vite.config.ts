import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: 'dist',
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/**/*.html'],
    }),
  ],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'display',
      fileName: (format) => `display.${format}.js`,
      formats: ['es', 'cjs'], // Genera ES e CommonJS
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  server: {
    host: true, // Permette l'accesso da altre reti
    /*watch: {
      usePolling: true,
    },*/
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
