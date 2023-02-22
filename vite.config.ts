import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
    }),
    Markdown()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      packages: path.resolve(__dirname, './packages'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: false
  },
})
