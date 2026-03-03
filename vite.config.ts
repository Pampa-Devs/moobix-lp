import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/moobix-lp/',
  // GitHub Pages via actions/deploy-pages serves from the repo name path
  build: {
    minify: 'esbuild'
  }
})
