// 환경변수를 직접 사용하는 단순한 훅
export const useEnvironmentVariables = () => {
  return {
    // 결혼식 정보 (공개 정보)
    WEDDING_DATE: process.env.WEDDING_DATE || '',
    WEDDING_LOCATION: process.env.WEDDING_LOCATION || '',
    WEDDING_INVITATION_URL:
      process.env.WEDDING_INVITATION_URL ||
      'https://mqjinwon.github.io/wedding_invitation',

    // 신랑 정보 (공개 정보)
    GROOM_NAME: process.env.GROOM_NAME || '',
    GROOM_ACCOUNT_NUMBER: process.env.GROOM_ACCOUNT_NUMBER || '',
    GROOM_FATHER_NAME: process.env.GROOM_FATHER_NAME || '',
    GROOM_FATHER_ACCOUNT_NUMBER: process.env.GROOM_FATHER_ACCOUNT_NUMBER || '',
    GROOM_MOTHER_NAME: process.env.GROOM_MOTHER_NAME || '',
    GROOM_MOTHER_ACCOUNT_NUMBER: process.env.GROOM_MOTHER_ACCOUNT_NUMBER || '',

    // 신부 정보 (공개 정보)
    BRIDE_NAME: process.env.BRIDE_NAME || '',
    BRIDE_ACCOUNT_NUMBER: process.env.BRIDE_ACCOUNT_NUMBER || '',
    BRIDE_FATHER_NAME: process.env.BRIDE_FATHER_NAME || '',
    BRIDE_FATHER_ACCOUNT_NUMBER: process.env.BRIDE_FATHER_ACCOUNT_NUMBER || '',
    BRIDE_MOTHER_NAME: process.env.BRIDE_MOTHER_NAME || '',
    BRIDE_MOTHER_ACCOUNT_NUMBER: process.env.BRIDE_MOTHER_ACCOUNT_NUMBER || '',

    // 공유 이미지 (공개 URL)
    KAKAOTALK_SHARE_IMAGE:
      'https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg',
  };
};

// 서버 사이드에서만 사용할 수 있는 민감한 정보
export const getServerSideEnvVars = () => {
  if (typeof window !== 'undefined') {
    console.warn('서버 사이드에서만 사용해야 하는 환경변수입니다.');
    return {};
  }

  return {
    KAKAOTALK_API_TOKEN: process.env.KAKAOTALK_API_TOKEN || '',
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || '',
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || '',
    FIREBASE_MESSAGING_SENDER_ID:
      process.env.FIREBASE_MESSAGING_SENDER_ID || '',
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID || '',
  };
};
