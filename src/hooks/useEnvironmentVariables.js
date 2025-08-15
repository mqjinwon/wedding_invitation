// 환경변수를 직접 사용하는 단순한 훅
export const useEnvironmentVariables = () => {
  return {
    // 결혼식 정보 (공개 정보)
    WEDDING_DATE: process.env.GATSBY_WEDDING_DATE || process.env.WEDDING_DATE || '',
    WEDDING_LOCATION: process.env.GATSBY_WEDDING_LOCATION || process.env.WEDDING_LOCATION || '',
    WEDDING_INVITATION_URL:
      process.env.GATSBY_WEDDING_INVITATION_URL || process.env.WEDDING_INVITATION_URL ||
      'https://mqjinwon.github.io/wedding_invitation',

    // 신랑 정보 (공개 정보)
    GROOM_NAME: process.env.GATSBY_GROOM_NAME || process.env.GROOM_NAME || '',
    GROOM_ACCOUNT_NUMBER: process.env.GATSBY_GROOM_ACCOUNT_NUMBER || process.env.GROOM_ACCOUNT_NUMBER || '',
    GROOM_FATHER_NAME: process.env.GATSBY_GROOM_FATHER_NAME || process.env.GROOM_FATHER_NAME || '',
    GROOM_FATHER_ACCOUNT_NUMBER: process.env.GATSBY_GROOM_FATHER_ACCOUNT_NUMBER || process.env.GROOM_FATHER_ACCOUNT_NUMBER || '',
    GROOM_MOTHER_NAME: process.env.GATSBY_GROOM_MOTHER_NAME || process.env.GROOM_MOTHER_NAME || '',
    GROOM_MOTHER_ACCOUNT_NUMBER: process.env.GATSBY_GROOM_MOTHER_ACCOUNT_NUMBER || process.env.GROOM_MOTHER_ACCOUNT_NUMBER || '',

    // 신부 정보 (공개 정보)
    BRIDE_NAME: process.env.GATSBY_BRIDE_NAME || process.env.BRIDE_NAME || '',
    BRIDE_ACCOUNT_NUMBER: process.env.GATSBY_BRIDE_ACCOUNT_NUMBER || process.env.BRIDE_ACCOUNT_NUMBER || '',
    BRIDE_FATHER_NAME: process.env.GATSBY_BRIDE_FATHER_NAME || process.env.BRIDE_FATHER_NAME || '',
    BRIDE_FATHER_ACCOUNT_NUMBER: process.env.GATSBY_BRIDE_FATHER_ACCOUNT_NUMBER || process.env.BRIDE_FATHER_ACCOUNT_NUMBER || '',
    BRIDE_MOTHER_NAME: process.env.GATSBY_BRIDE_MOTHER_NAME || process.env.BRIDE_MOTHER_NAME || '',
    BRIDE_MOTHER_ACCOUNT_NUMBER: process.env.GATSBY_BRIDE_MOTHER_ACCOUNT_NUMBER || process.env.BRIDE_MOTHER_ACCOUNT_NUMBER || '',


    // KakaoTalk API 토큰
    KAKAOTALK_API_TOKEN: process.env.GATSBY_KAKAOTALK_API_TOKEN || '',
    KAKAOTALK_SHARE_IMAGE:
      'https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg',
  };
};


