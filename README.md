# 김진원 & 이연제 결혼식 청첩장

결혼식 초대를 위한 모바일 청첩장입니다.  
Gatsby와 React를 사용하여 제작되었습니다.

## 📚 주요 기능

- 결혼식 날짜, 위치, 인사말 출력
- 사진첩 갤러리
- 축의금 계좌번호 (클립보드 복사 기능)
- 카카오톡 공유 기능 및 링크 공유
- 방명록 기능 (Firebase Firestore 연동)
- 배경 음악 재생/정지 기능

## 🚀 시작하기

1. `$ cd wedding_invitation` - 프로젝트 폴더로 이동
2. `$ npm install` - 의존성 설치
3. Firebase 설정 (방명록 기능 사용 시)
4. `$ npm start` - 로컬 개발 서버 실행

## 🔥 Firebase 설정 (방명록 기능)

방명록 기능을 사용하려면 Firebase Firestore를 설정해야 합니다:

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트 생성
2. Firestore Database 활성화
3. 프로젝트 설정 > 일반 > 웹 앱 추가
4. `firebase-config-example.js`를 `src/firebase/config.js`로 복사
5. Firebase 설정 정보를 실제 값으로 교체:

```javascript
const firebaseConfig = {
  apiKey: '실제_API_KEY',
  authDomain: '실제_PROJECT_ID.firebaseapp.com',
  projectId: '실제_PROJECT_ID',
  storageBucket: '실제_PROJECT_ID.appspot.com',
  messagingSenderId: '실제_MESSAGING_SENDER_ID',
  appId: '실제_APP_ID',
};
```

6. Firestore 보안 규칙 설정 (테스트 모드로 시작):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

## 🛠 커스터마이징

환경변수 파일을 수정하여 사용합니다.

```bash
# 환경변수 파일 복사
cp env.example .env.development

# 환경변수 파일 편집
nano .env.development
```

```javascript
export const GATSBY_WEDDING_INVITATION_URL = 'http://localhost:8000/';
export const GATSBY_KAKAOTALK_API_TOKEN = '카카오톡 API 키 입력';
export const KAKAOTALK_SHARE_IMAGE =
  'https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg';

export const GATSBY_WEDDING_DATE = '1970년 01월 01일, 목요일 오전 12시 00분';
export const GATSBY_WEDDING_LOCATION = '○○○웨딩, ○층 ○○홀';

export const GATSBY_GROOM_NAME = '○○○';
export const GATSBY_GROOM_ACCOUNT_NUMBER = '○○은행 ***-***-******';
export const GATSBY_GROOM_FATHER_NAME = '○○○';
export const GATSBY_GROOM_FATHER_ACCOUNT_NUMBER = '○○은행 ***-***-******';
export const GATSBY_GROOM_MOTHER_NAME = '○○○';
export const GATSBY_GROOM_MOTHER_ACCOUNT_NUMBER = '○○은행 ***-***-******';

export const GATSBY_BRIDE_NAME = '○○○';
export const GATSBY_BRIDE_ACCOUNT_NUMBER = '○○은행 ***-***-******';
export const GATSBY_BRIDE_FATHER_NAME = '○○○';
export const GATSBY_BRIDE_FATHER_ACCOUNT_NUMBER = '○○은행 ***-***-******';
export const GATSBY_BRIDE_MOTHER_NAME = '○○○';
export const GATSBY_BRIDE_MOTHER_ACCOUNT_NUMBER = '○○은행 ***-***-******';
```

## 🗺️ 카카오 지도 설정

`./src/components/location.jsx`를 수정하여 원하는 위치의 카카오 지도를 사용합니다.

```javascript
//  1. `https://map.kakao.com/`로 이동
//  2. 원하는 위치를 검색하여 `HTML 태그 복사`클릭
//  3. `소스 생성하기`클릭
//  4. `timestamp,key` 위의 코드에 알맞게 입력

const executeScript = () => {
  const scriptTag = document.createElement('script');
  const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1652464367301",
    "key" : "2a8fe",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
  scriptTag.appendChild(inlineScript);
  document.body.appendChild(scriptTag);
};
```

## 🔧 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드된 사이트 서빙
npm run serve
```

## 📦 사용된 기술

- **Gatsby 5**: 정적 사이트 생성기
- **React 18**: UI 라이브러리
- **Styled Components 6**: CSS-in-JS
- **Ant Design 5**: UI 컴포넌트 라이브러리
- **Firebase**: 백엔드 서비스
- **AOS**: 스크롤 애니메이션

## ❌ 문제 해결

의존성 관련 문제가 발생하면:

```bash
rm -rf package-lock.json
rm -rf node_modules
npm install
```

## 📄 라이선스

이 프로젝트는 개인적인 결혼식 청첩장 용도로 제작되었습니다.
