import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'copy-staticwebapp-config',
      closeBundle() {
        // Copy staticwebapp.config.json to dist folder after build
        try {
          copyFileSync(
            join(__dirname, 'staticwebapp.config.json'),
            join(__dirname, 'dist', 'staticwebapp.config.json')
          )
        } catch (error) {
          // File might not exist, that's okay
          console.warn('Could not copy staticwebapp.config.json:', error)
        }
      },
    },
  ],
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': new URL('./', import.meta.url).pathname,
    },
  },
})

