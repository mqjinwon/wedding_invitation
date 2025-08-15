import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 기본 경로 설정 (GitHub Pages용)
  base: '/wedding_invitation/',
  
  // 빌드 설정
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          firebase: ['firebase/app', 'firebase/firestore'],
          antd: ['antd', '@ant-design/icons'],
        },
      },
    },
  },
  
  // 개발 서버 설정
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  
  // 미리보기 서버 설정
  preview: {
    port: 4173,
    host: true,
  },
  
  // CSS 설정
  css: {
    devSourcemap: true,
  },
  
  // 최적화 설정
  optimizeDeps: {
    include: ['react', 'react-dom', 'firebase/app', 'firebase/firestore'],
  },
}); 