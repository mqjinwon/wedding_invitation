import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 설정
// 주의: apiKey는 클라이언트에서 사용되지만 Firebase 보안 규칙으로 보호됨
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 인스턴스
export const db = getFirestore(app);

export default app; 