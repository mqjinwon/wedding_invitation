import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 설정 - 서버 사이드에서만 초기화
let app = null;
let db = null;

if (typeof window === 'undefined') {
  // 서버 사이드에서만 Firebase 초기화
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };

  // 모든 필수 설정이 있는 경우에만 초기화
  if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  } else {
    console.warn('Firebase 설정이 완료되지 않았습니다. 환경변수를 확인해주세요.');
  }
} else {
  // 클라이언트 사이드에서는 빈 객체 반환
  console.warn('Firebase는 서버 사이드에서만 초기화됩니다.');
}

export { db };
export default app;
