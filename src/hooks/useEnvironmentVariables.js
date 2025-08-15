// Vite 환경변수를 사용하는 훅
export const useEnvironmentVariables = () => {
  return {
    // 결혼식 정보 (공개 정보)
    WEDDING_DATE: import.meta.env.VITE_WEDDING_DATE || '',
    WEDDING_LOCATION: import.meta.env.VITE_WEDDING_LOCATION || '',
    WEDDING_INVITATION_URL:
      import.meta.env.VITE_WEDDING_INVITATION_URL ||
      'https://mqjinwon.github.io/wedding_invitation',

    // 신랑 정보 (공개 정보)
    GROOM_NAME: import.meta.env.VITE_GROOM_NAME || '',
    GROOM_ACCOUNT_NUMBER: import.meta.env.VITE_GROOM_ACCOUNT_NUMBER || '',
    GROOM_FATHER_NAME: import.meta.env.VITE_GROOM_FATHER_NAME || '',
    GROOM_FATHER_ACCOUNT_NUMBER: import.meta.env.VITE_GROOM_FATHER_ACCOUNT_NUMBER || '',
    GROOM_MOTHER_NAME: import.meta.env.VITE_GROOM_MOTHER_NAME || '',
    GROOM_MOTHER_ACCOUNT_NUMBER: import.meta.env.VITE_GROOM_MOTHER_ACCOUNT_NUMBER || '',

    // 신부 정보 (공개 정보)
    BRIDE_NAME: import.meta.env.VITE_BRIDE_NAME || '',
    BRIDE_ACCOUNT_NUMBER: import.meta.env.VITE_BRIDE_ACCOUNT_NUMBER || '',
    BRIDE_FATHER_NAME: import.meta.env.VITE_BRIDE_FATHER_NAME || '',
    BRIDE_FATHER_ACCOUNT_NUMBER: import.meta.env.VITE_BRIDE_FATHER_ACCOUNT_NUMBER || '',
    BRIDE_MOTHER_NAME: import.meta.env.VITE_BRIDE_MOTHER_NAME || '',
    BRIDE_MOTHER_ACCOUNT_NUMBER: import.meta.env.VITE_BRIDE_MOTHER_ACCOUNT_NUMBER || '',

    // KakaoTalk API 토큰
    KAKAOTALK_API_TOKEN: import.meta.env.VITE_KAKAOTALK_API_TOKEN || '',
    KAKAOTALK_SHARE_IMAGE: import.meta.env.VITE_KAKAOTALK_SHARE_IMAGE ||
      'https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg',
    
    // 마스터 비밀번호
    MASTER_PASSWORD: import.meta.env.VITE_MASTER_PASSWORD || '',
  };
};


