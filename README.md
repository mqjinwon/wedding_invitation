# 김진원 & 이연제 결혼식 청첩장

결혼식 초대를 위한 모바일 청첩장입니다.  
React + Vite를 사용하여 제작되었습니다.

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
4. `$ npm run dev` - 로컬 개발 서버 실행

## 🔥 Firebase 설정 (방명록 기능)

방명록 기능을 사용하려면 Firebase Firestore를 설정해야 합니다:

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트 생성
2. Firestore Database 활성화
3. 프로젝트 설정 > 일반 > 웹 앱 추가
4. Firebase 설정 정보를 환경변수에 설정

## 🛠 커스터마이징

### 환경변수 설정

```bash
# 환경변수 파일 복사
cp .env.example .env

# 환경변수 파일 편집
nano .env
```

```javascript
# Firebase 설정
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# 카카오톡 API
VITE_KAKAOTALK_API_TOKEN=your_kakao_api_token
VITE_KAKAOTALK_SHARE_IMAGE=https://your-domain.com/icon-512x512.png

# 결혼식 정보
VITE_WEDDING_INVITATION_URL=https://your-domain.com
VITE_WEDDING_DATE=2025년 11월 8일, 토요일 오후 12시 30분
VITE_WEDDING_LOCATION=프란치스코 교육회관, 3층 대강당

# 신랑/신부 정보
VITE_GROOM_NAME=김진원
VITE_BRIDE_NAME=이연제
# ... 기타 정보들
```

### 이미지 및 미디어 파일

- **이미지**: `public/images/` 폴더에 배치
- **아이콘**: `public/` 폴더에 다양한 사이즈로 배치
- **폰트**: `public/fonts/` 폴더에 배치
- **배경 음악**: `public/song.mp3`
- **배경 비디오**: `public/BackgroundVideo.mp4`

### 갤러리 이미지 추가

새로운 이미지를 갤러리에 추가하려면:

1. 이미지를 `public/images/` 폴더에 추가
2. `src/components/gallery.jsx`의 `images` 배열에 추가:

```javascript
const images = [
  {
    original: import.meta.env.BASE_URL + 'images/1.webp',
    thumbnail: import.meta.env.BASE_URL + 'images/1.webp',
    description: '우리의 아름다운 순간 1',
  },
  {
    original: import.meta.env.BASE_URL + 'images/2.webp',
    thumbnail: import.meta.env.BASE_URL + 'images/2.webp',
    description: '우리의 아름다운 순간 2',
  },
  // 새 이미지 추가
  {
    original: import.meta.env.BASE_URL + 'images/3.webp',
    thumbnail: import.meta.env.BASE_URL + 'images/3.webp',
    description: '우리의 아름다운 순간 3',
  },
];
```

## 🔧 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

## 📦 사용된 기술

- **React 18**: UI 라이브러리
- **Vite**: 빌드 도구
- **Firebase**: 백엔드 서비스 (Firestore)
- **Ant Design**: UI 컴포넌트 라이브러리
- **Styled Components**: CSS-in-JS
- **AOS**: 스크롤 애니메이션
- **React Image Gallery**: 이미지 갤러리

## 🔒 보안

- Firebase 보안 규칙을 설정하여 데이터베이스 보호
- 환경변수를 통한 민감한 정보 관리
- 클라이언트 사이드에서 안전한 Firebase 사용

## 📱 PWA 지원

- 다양한 아이콘 사이즈 지원
- Web App Manifest 설정
- 오프라인 지원 준비

## 🎵 배경 음악

- 자동 재생 방지
- 사용자 상호작용 후 재생
- 모바일 최적화

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.
