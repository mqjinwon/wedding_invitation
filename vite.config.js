import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/wedding_invitation/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
}) 