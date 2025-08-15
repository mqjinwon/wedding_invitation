import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // React Strict Mode 비활성화 (프로덕션 에러 방지)
    jsxRuntime: 'automatic',
    // Strict Mode 완전 비활성화
    strict: false,
  })],
  
  // 기본 경로 설정 (GitHub Pages용)
  base: '/wedding_invitation/',
  
  // 빌드 설정
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    esbuild: { drop: ['console', 'debugger'] }, // 콘솔/디버거 제거
    cssCodeSplit: true,                         // CSS 분할(기본 true)
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          antd: ['antd'],
          antdIcons: ['@ant-design/icons'],
          firebase: ['firebase/app', 'firebase/firestore'],
          gallery: ['react-image-gallery'],
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