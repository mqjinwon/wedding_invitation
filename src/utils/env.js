// 환경변수 유틸리티 함수
export const checkEnvironmentVariables = () => {
  const requiredVars = [
    'VITE_FIREBASE_API_KEY',
    'VITE_FIREBASE_AUTH_DOMAIN',
    'VITE_FIREBASE_PROJECT_ID',
    'VITE_FIREBASE_STORAGE_BUCKET',
    'VITE_FIREBASE_MESSAGING_SENDER_ID',
    'VITE_FIREBASE_APP_ID',
    'VITE_GROOM_NAME',
    'VITE_BRIDE_NAME',
    'VITE_MASTER_PASSWORD'
  ];

  const missingVars = requiredVars.filter(varName => !import.meta.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn('Missing environment variables:', missingVars);
    return false;
  }
  
  return true;
};

// 환경변수 디버깅 (개발 환경에서만)
export const debugEnvironmentVariables = () => {
  if (import.meta.env.DEV) {
    console.log('Environment Variables Debug:');
    console.log('NODE_ENV:', import.meta.env.MODE);
    console.log('BASE_URL:', import.meta.env.BASE_URL);
    console.log('VITE_FIREBASE_API_KEY:', import.meta.env.VITE_FIREBASE_API_KEY ? 'Set' : 'Not set');
    console.log('VITE_GROOM_NAME:', import.meta.env.VITE_GROOM_NAME);
    console.log('VITE_BRIDE_NAME:', import.meta.env.VITE_BRIDE_NAME);
  }
};

// Firebase 설정 객체 생성
export const getFirebaseConfig = () => {
  return {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };
}; 