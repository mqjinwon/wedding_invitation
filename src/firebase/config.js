import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 설정 - 클라이언트와 서버 모두에서 안전하게 초기화
let app = null;
let db = null;

// 환경변수에서 Firebase 설정 가져오기
const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN || process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET || process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID || process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID || process.env.FIREBASE_APP_ID,
};

// 필수 설정이 있는 경우에만 초기화
if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log('Firebase 초기화 성공:', firebaseConfig.projectId);
  } catch (error) {
    console.error('Firebase 초기화 실패:', error);
  }
} else {
  console.warn('Firebase 설정이 완료되지 않았습니다. 환경변수를 확인해주세요.');
  console.log('현재 설정:', {
    apiKey: firebaseConfig.apiKey ? '설정됨' : '없음',
    projectId: firebaseConfig.projectId ? '설정됨' : '없음',
    authDomain: firebaseConfig.authDomain ? '설정됨' : '없음'
  });
}

export { db };
export default app;
