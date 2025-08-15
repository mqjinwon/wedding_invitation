// 환경변수 로드 확인 스크립트
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// 기본 .env 파일도 로드
if (!process.env.NODE_ENV) {
  require('dotenv').config({
    path: '.env',
  });
}

console.log('=== 환경변수 로드 확인 ===');
console.log('NODE_ENV:', process.env.NODE_ENV || 'development');
console.log('');

console.log('=== Firebase 설정 ===');
console.log(
  'FIREBASE_API_KEY:',
  process.env.FIREBASE_API_KEY ? '✅ 설정됨' : '❌ 설정되지 않음'
);
console.log(
  'FIREBASE_AUTH_DOMAIN:',
  process.env.FIREBASE_AUTH_DOMAIN ? '✅ 설정됨' : '❌ 설정되지 않음'
);
console.log(
  'FIREBASE_PROJECT_ID:',
  process.env.FIREBASE_PROJECT_ID ? '✅ 설정됨' : '❌ 설정되지 않음'
);
console.log(
  'FIREBASE_STORAGE_BUCKET:',
  process.env.FIREBASE_STORAGE_BUCKET ? '✅ 설정됨' : '❌ 설정되지 않음'
);
console.log(
  'FIREBASE_MESSAGING_SENDER_ID:',
  process.env.FIREBASE_MESSAGING_SENDER_ID ? '✅ 설정됨' : '❌ 설정되지 않음'
);
console.log(
  'FIREBASE_APP_ID:',
  process.env.FIREBASE_APP_ID ? '✅ 설정됨' : '❌ 설정되지 않음'
);
console.log('');

console.log('=== 카카오톡 API ===');
console.log(
  'GATSBY_KAKAOTALK_API_TOKEN:',
  process.env.GATSBY_KAKAOTALK_API_TOKEN ? '✅ 설정됨' : '❌ 설정되지 않음'
);
console.log('');

console.log('=== 결혼식 정보 ===');
console.log(
  'GATSBY_WEDDING_INVITATION_URL:',
  process.env.GATSBY_WEDDING_INVITATION_URL || '❌ 설정되지 않음'
);
console.log('GATSBY_WEDDING_DATE:', process.env.GATSBY_WEDDING_DATE || '❌ 설정되지 않음');
console.log(
  'GATSBY_WEDDING_LOCATION:',
  process.env.GATSBY_WEDDING_LOCATION || '❌ 설정되지 않음'
);
console.log('');

console.log('=== 신랑 정보 ===');
console.log('GATSBY_GROOM_NAME:', process.env.GATSBY_GROOM_NAME || '❌ 설정되지 않음');
console.log(
  'GATSBY_GROOM_ACCOUNT_NUMBER:',
  process.env.GATSBY_GROOM_ACCOUNT_NUMBER || '❌ 설정되지 않음'
);
console.log(
  'GATSBY_GROOM_FATHER_NAME:',
  process.env.GATSBY_GROOM_FATHER_NAME || '❌ 설정되지 않음'
);
console.log(
  'GATSBY_GROOM_FATHER_ACCOUNT_NUMBER:',
  process.env.GATSBY_GROOM_FATHER_ACCOUNT_NUMBER || '❌ 설정되지 않음'
);
console.log(
  'GATSBY_GROOM_MOTHER_NAME:',
  process.env.GATSBY_GROOM_MOTHER_NAME || '❌ 설정되지 않음'
);
console.log(
  'GATSBY_GROOM_MOTHER_ACCOUNT_NUMBER:',
  process.env.GATSBY_GROOM_MOTHER_ACCOUNT_NUMBER || '❌ 설정되지 않음'
);
console.log('');

console.log('=== 신부 정보 ===');
console.log('GATSBY_BRIDE_NAME:', process.env.GATSBY_BRIDE_NAME || '❌ 설정되지 않음');
console.log(
  'GATSBY_BRIDE_ACCOUNT_NUMBER:',
  process.env.GATSBY_BRIDE_ACCOUNT_NUMBER || '❌ 설정되지 않음'
);
console.log(
  'GATSBY_BRIDE_FATHER_NAME:',
  process.env.GATSBY_BRIDE_FATHER_NAME || '❌ 설정되지 않음'
);
console.log(
  'GATSBY_BRIDE_FATHER_ACCOUNT_NUMBER:',
  process.env.GATSBY_BRIDE_FATHER_ACCOUNT_NUMBER || '❌ 설정되지 않음'
);
console.log(
  'GATSBY_BRIDE_MOTHER_NAME:',
  process.env.GATSBY_BRIDE_MOTHER_NAME || '❌ 설정되지 않음'
);
console.log(
  'GATSBY_BRIDE_MOTHER_ACCOUNT_NUMBER:',
  process.env.GATSBY_BRIDE_MOTHER_ACCOUNT_NUMBER || '❌ 설정되지 않음'
);
console.log('');

console.log('=== 환경변수 파일 확인 ===');
const fs = require('fs');
const envFiles = ['.env', '.env.development', '.env.production'];
envFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`${file}: ✅ 존재함`);
  } else {
    console.log(`${file}: ❌ 존재하지 않음`);
  }
});
