# 김진원 & 이연제 결혼식 청첩장

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-10.7.1-FFCA28?logo=firebase)
![Ant Design](https://img.shields.io/badge/Ant%20Design-5.12.8-1890FF?logo=ant-design)
![License](https://img.shields.io/badge/License-MIT-green.svg)

**결혼식 초대를 위한 모바일 청첩장입니다.**  
React + Vite를 사용하여 제작되었으며, Firebase Firestore를 통한 방명록 기능을 제공합니다.

[🌐 데모 보기](https://mqjinwon.github.io/wedding_invitation) | [📖 문서](https://github.com/mqjinwon/wedding_invitation#readme)

</div>

## ✨ 주요 기능

- 🗓️ **결혼식 정보**: 날짜, 위치, 인사말 표시
- 📸 **사진 갤러리**: 반응형 이미지 갤러리
- 💰 **축의금 안내**: 계좌번호 클립보드 복사 기능
- 📱 **공유 기능**: 카카오톡 공유 및 링크 공유
- 📝 **방명록**: Firebase Firestore 연동 (비밀번호 보호)
- 🎵 **배경 음악**: 자동 재생 방지, 사용자 상호작용 후 재생
- 📱 **PWA 지원**: 모바일 앱처럼 설치 가능
- 🎨 **반응형 디자인**: 모든 디바이스 최적화

## 🚀 빠른 시작

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 8.0.0 이상

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/mqjinwon/wedding_invitation.git
cd wedding_invitation

# 2. 의존성 설치
npm install

# 3. 환경변수 설정
cp env.example .env
# .env 파일을 편집하여 실제 값들을 입력하세요

# 4. 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하세요.

## 🔥 Firebase 설정

방명록 기능을 사용하려면 Firebase 설정이 필요합니다:

### 1. Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트 생성
2. **Firestore Database** 활성화
3. **프로젝트 설정** > **일반** > **웹 앱 추가**

### 2. 환경변수 설정

`.env` 파일에 Firebase 설정 정보를 입력하세요:

```env
# Firebase 설정
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Firestore 보안 규칙 설정

Firebase Console > Firestore Database > 규칙에서 다음 규칙을 설정하세요:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /guestbooks/{document} {
      allow read: if true;
      allow create: if 
        request.resource.data.keys().hasOnly(['name', 'message', 'relationship', 'password', 'timestamp']) 
        && request.resource.data.name is string
        && request.resource.data.message is string
        && request.resource.data.password is string
        && request.resource.data.name.size() <= 50
        && request.resource.data.message.size() <= 500
        && request.resource.data.password.size() >= 4
        && request.resource.data.password.size() <= 20
        && request.resource.data.name.size() > 0
        && request.resource.data.message.size() > 0;
      allow update: if 
        request.resource.data.keys().hasOnly(['name', 'message', 'relationship', 'password', 'timestamp', 'updatedAt']) 
        && request.resource.data.name is string
        && request.resource.data.message is string
        && request.resource.data.password is string
        && request.resource.data.name.size() <= 50
        && request.resource.data.message.size() <= 500
        && request.resource.data.password.size() >= 4
        && request.resource.data.password.size() <= 20
        && request.resource.data.name.size() > 0
        && request.resource.data.message.size() > 0;
      allow delete: if true;
    }
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## 🛠️ 커스터마이징

### 환경변수 설정

```env
# 결혼식 정보
VITE_WEDDING_DATE=2025년 11월 8일, 토요일 오후 12시 30분
VITE_WEDDING_LOCATION=프란치스코 교육회관, 3층 대강당
VITE_WEDDING_INVITATION_URL=https://your-domain.com

# 신랑/신부 정보
VITE_GROOM_NAME=김진원
VITE_BRIDE_NAME=이연제
VITE_GROOM_ACCOUNT_NUMBER=your_groom_account_number
VITE_GROOM_FATHER_NAME=your_groom_father_name
VITE_GROOM_FATHER_ACCOUNT_NUMBER=your_groom_father_account_number
VITE_GROOM_MOTHER_NAME=your_groom_mother_name
VITE_GROOM_MOTHER_ACCOUNT_NUMBER=your_groom_mother_account_number
VITE_BRIDE_ACCOUNT_NUMBER=your_bride_account_number
VITE_BRIDE_FATHER_NAME=your_bride_father_name
VITE_BRIDE_FATHER_ACCOUNT_NUMBER=your_bride_father_account_number
VITE_BRIDE_MOTHER_NAME=your_bride_mother_name
VITE_BRIDE_MOTHER_ACCOUNT_NUMBER=your_bride_mother_account_number

# 카카오톡 API
VITE_KAKAOTALK_API_TOKEN=your_kakao_api_token
VITE_KAKAOTALK_SHARE_IMAGE=https://your-domain.com/icon-512x512.png
```

### 이미지 및 미디어 파일

- **갤러리 이미지**: `public/images/` 폴더에 배치
- **아이콘**: `public/` 폴더에 다양한 사이즈로 배치
- **폰트**: `public/fonts/` 폴더에 배치
- **배경 음악**: `public/song.mp3`
- **배경 비디오**: `public/BackgroundVideo.mp4`

### 갤러리 이미지 추가

```javascript
// src/components/gallery.jsx
const images = [
  {
    original: import.meta.env.BASE_URL + 'images/1.webp',
    thumbnail: import.meta.env.BASE_URL + 'images/1.webp',
    description: '우리의 아름다운 순간 1',
  },
  // 새 이미지 추가
  {
    original: import.meta.env.BASE_URL + 'images/new-image.webp',
    thumbnail: import.meta.env.BASE_URL + 'images/new-image.webp',
    description: '새로운 순간',
  },
];
```

## 📦 사용된 기술

| 기술 | 버전 | 용도 |
|------|------|------|
| **React** | 18.2.0 | UI 라이브러리 |
| **Vite** | 5.0.8 | 빌드 도구 |
| **Firebase** | 10.7.1 | 백엔드 서비스 (Firestore) |
| **Ant Design** | 5.12.8 | UI 컴포넌트 라이브러리 |
| **Styled Components** | 6.1.1 | CSS-in-JS |
| **AOS** | 2.3.4 | 스크롤 애니메이션 |
| **React Image Gallery** | 1.3.0 | 이미지 갤러리 |

## 🔒 보안

### 방명록 보안 시스템

- **개별 비밀번호**: 각 방명록마다 고유한 비밀번호
- **마스터 비밀번호**: `admin12345678` (모든 방명록 관리 가능)
- **비밀번호 검증**: 수정/삭제 시 비밀번호 확인
- **Firebase 보안 규칙**: 서버 측 추가 보호

### API 키 보안

- **환경변수 관리**: `.env` 파일을 `.gitignore`에 포함
- **도메인 제한**: Firebase Console에서 API 키 제한 설정
- **보안 규칙**: Firestore 데이터베이스 접근 제한

### ⚠️ 중요 주의사항

- `VITE_` 접두사가 붙은 환경변수는 클라이언트 사이드에 노출됩니다
- Firebase API 키는 보안 규칙과 도메인 제한으로 보호해야 합니다
- 실제 API 키가 포함된 파일은 절대 Git에 커밋하지 마세요

## 📱 PWA 지원

- **다양한 아이콘 사이즈**: 16x16 ~ 512x512 지원
- **Web App Manifest**: 앱 설치 가능
- **오프라인 지원**: 서비스 워커 준비
- **모바일 최적화**: 터치 제스처 및 반응형 디자인

## 🎵 배경 음악

- **자동 재생 방지**: 브라우저 정책 준수
- **사용자 상호작용 후 재생**: 클릭/터치 후 음악 시작
- **모바일 최적화**: 배터리 및 데이터 사용량 고려
- **음악 컨트롤**: 재생/정지, 볼륨 조절

## 🚀 배포

### GitHub Pages 배포

```bash
# 프로덕션 빌드 및 배포
npm run deploy
```

### 다른 플랫폼 배포

```bash
# 프로덕션 빌드
npm run build

# dist 폴더의 내용을 웹 서버에 업로드
```

## 📋 스크립트

```bash
npm run dev          # 개발 서버 실행
npm run build        # 프로덕션 빌드
npm run preview      # 빌드 결과 미리보기
npm run deploy       # GitHub Pages 배포
npm run lint         # 코드 린팅
npm run format       # 코드 포맷팅
```

## 📄 레퍼런스

[Jooyoung Shin](https://github.com/S-jooyoung)-[WEDDING_INVITATION](https://github.com/S-jooyoung/WEDDING_INVITATION)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 문의

프로젝트 관련 문의사항이 있으시면 [이슈](https://github.com/mqjinwon/wedding_invitation/issues)를 등록해주세요.

---

<div align="center">

**김진원 & 이연제의 특별한 순간을 함께해주세요** 💕

</div>
