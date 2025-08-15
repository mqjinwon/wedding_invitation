# 🚀 배포 가이드

김진원 & 이연제 결혼식 청첩장 프로덕션 배포 방법입니다.

## 📋 사전 준비

1. **Firebase 설정 확인**
   - `src/firebase/config.js` 파일이 올바르게 설정되어 있는지 확인
   - Firebase 프로젝트의 Firestore 규칙 설정

2. **환경 변수 확인**
   - 환경변수 파일의 모든 설정값이 올바른지 확인
   - 카카오톡 API 토큰 설정

## 🛠️ 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드된 사이트 로컬 테스트
npm run serve

```

## 🌐 배포 옵션

### 1. Netlify (추천)

**장점**: 무료, 간편, 자동 배포

1. [Netlify](https://netlify.com) 가입
2. "New site from Git" 클릭
3. GitHub 저장소 연결
4. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `public`
5. 배포 완료!

### 2. Vercel (추천)

**장점**: 빠른 배포, 자동 HTTPS

1. [Vercel](https://vercel.com) 가입
2. "New Project" 클릭
3. Git 저장소 연결
4. 자동 감지되어 배포됨

### 3. GitHub Pages

**장점**: 완전 무료, Git 통합

```bash
# GitHub Pages 배포
npm run deploy
```

### 4. Firebase Hosting

**장점**: Google 인프라, Firebase 통합

```bash
# Firebase 로그인
firebase login

# Firebase 프로젝트 초기화
firebase init hosting

# 배포
firebase deploy
```

## 🔧 환경별 설정

### 개발 환경

```bash
npm start
# http://localhost:8001
```

### 프로덕션 환경

```bash
npm run build
npm run serve
# http://localhost:9000
```

## 📱 모바일 최적화

- 반응형 디자인 적용됨
- PWA 기능 지원
- 모바일 터치 인터페이스 최적화

## 🔒 보안 설정

### Firebase Firestore 규칙

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /guestbooks/{document} {
      allow read, write: if true;
    }
  }
}
```

## 📊 성능 최적화

- 이미지 최적화 (WebP 형식)
- 코드 스플리팅
- 지연 로딩
- 캐싱 최적화

## 🚨 문제 해결

### 빌드 오류

```bash
# 캐시 정리
npm run clean

# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
```

### 배포 후 문제

1. Firebase 설정 확인
2. 환경 변수 확인
3. 브라우저 캐시 삭제

## 📞 지원

배포 관련 문제가 발생하면:

1. 브라우저 개발자 도구 확인
2. Firebase 콘솔 확인
3. 배포 플랫폼 로그 확인

# GitHub Pages 배포 가이드

## Private Repository를 GitHub Pages로 배포하는 방법

### ⚠️ Private Repository 제한사항

**GitHub 무료 계정에서는 private repository의 GitHub Pages 사용이 제한됩니다.**

### 해결 방법

#### 방법 1: Repository를 Public으로 변경 (가장 간단)

1. GitHub 저장소 페이지에서 **Settings** 클릭
2. 페이지 맨 아래로 스크롤
3. **Danger Zone**에서 **Change repository visibility**
4. **Make public** 선택
5. 그 후 아래 GitHub Pages 설정 진행

#### 방법 2: 다른 배포 플랫폼 사용 (Private 유지)

##### Netlify 배포 (권장)

1. [netlify.com](https://netlify.com)에서 계정 생성
2. **New site from Git** 클릭
3. GitHub 저장소 연결
4. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `public`
5. **Deploy site** 클릭

##### Vercel 배포

1. [vercel.com](https://vercel.com)에서 계정 생성
2. **New Project** 클릭
3. GitHub 저장소 연결
4. 자동으로 Gatsby 설정 감지
5. **Deploy** 클릭

### 1. GitHub 설정 (Public repository인 경우)

#### 1.1 GitHub Pages 활성화

1. GitHub 저장소 페이지에서 `Settings` 탭 클릭
2. 왼쪽 메뉴에서 `Pages` 클릭
3. `Source` 섹션에서 `Deploy from a branch` 선택
4. `Branch`에서 `gh-pages` 선택 (없다면 생성)
5. `Folder`는 `/ (root)` 선택
6. `Save` 클릭

#### 1.2 Personal Access Token 생성

1. GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. `Generate new token (classic)` 클릭
3. 권한 설정: `repo` (전체 repository 접근 권한) 체크
4. 토큰 생성 후 안전한 곳에 저장

### 2. 배포 방법

#### 방법 1: 수동 배포 (deploy.sh 스크립트 사용)

1. 환경변수 설정:

```bash
export GITHUB_TOKEN=your_token_here
```

2. 스크립트 실행:

```bash
./deploy.sh
```

#### 방법 2: npm 스크립트 사용

1. 환경변수 설정 후 실행:

```bash
export GITHUB_TOKEN=your_token_here
npm run deploy
```

#### 방법 3: GitHub Actions 자동 배포 (권장)

1. 위의 설정이 완료되면 `main` 또는 `master` 브랜치에 푸시할 때마다 자동으로 배포됩니다.
2. GitHub Actions 탭에서 배포 상태를 확인할 수 있습니다.

### 3. 배포 확인

배포가 완료되면 다음 URL에서 사이트를 확인할 수 있습니다:

```
https://[your-username].github.io/[repository-name]/
```

### 4. 문제 해결

#### 빌드 실패

- Node.js 버전 확인 (18.x 이상 권장)
- 의존성 설치 확인: `npm install`

#### 배포 실패

- Personal Access Token 권한 확인
- GitHub Pages 설정 확인
- gh-pages 브랜치가 생성되었는지 확인

#### 사이트가 보이지 않음

- GitHub Pages 설정에서 올바른 브랜치가 선택되었는지 확인
- 배포 후 몇 분 기다린 후 다시 확인

### 5. GitHub Secrets 설정 (Public Repository용)

Public repository로 변경하기 전에 다음 GitHub Secrets를 설정해야 합니다:

1. **GitHub 저장소에서 Settings → Secrets and variables → Actions** 클릭
2. **New repository secret** 클릭하여 다음 값들을 추가:

#### Firebase 설정

- `FIREBASE_API_KEY`: [your-firebase-api-key]
- `FIREBASE_AUTH_DOMAIN`: [your-project-id].firebaseapp.com
- `FIREBASE_PROJECT_ID`: [your-project-id]
- `FIREBASE_STORAGE_BUCKET`: [your-project-id].firebasestorage.app
- `FIREBASE_MESSAGING_SENDER_ID`: [your-sender-id]
- `FIREBASE_APP_ID`: [your-app-id]

#### 카카오톡 API

- `KAKAOTALK_API_TOKEN`: [your-kakao-api-token]

#### 결혼식 정보

- `WEDDING_INVITATION_URL`: https://[your-username].github.io/[repository-name]/
- `WEDDING_DATE`: [결혼식 날짜]
- `WEDDING_LOCATION`: [결혼식 장소]

#### 신랑 정보

- `GROOM_NAME`: [신랑 이름]
- `GROOM_ACCOUNT_NUMBER`: [신랑 계좌번호]
- `GROOM_FATHER_NAME`: [신랑 아버지 이름]
- `GROOM_FATHER_ACCOUNT_NUMBER`: [신랑 아버지 계좌번호]
- `GROOM_MOTHER_NAME`: [신랑 어머니 이름]
- `GROOM_MOTHER_ACCOUNT_NUMBER`: [신랑 어머니 계좌번호]

#### 신부 정보

- `BRIDE_NAME`: [신부 이름]
- `BRIDE_ACCOUNT_NUMBER`: [신부 계좌번호]
- `BRIDE_FATHER_NAME`: [신부 아버지 이름]
- `BRIDE_FATHER_ACCOUNT_NUMBER`: [신부 아버지 계좌번호]
- `BRIDE_MOTHER_NAME`: [신부 어머니 이름]
- `BRIDE_MOTHER_ACCOUNT_NUMBER`: [신부 어머니 계좌번호]

### 6. 로컬 개발 환경변수 설정

#### 환경변수 파일 구조

- `.env`: 기본 환경변수 (모든 환경에서 공통)
- `.env.development`: 개발 환경 전용 변수
- `.env.production`: 프로덕션 환경 전용 변수

#### 환경변수 확인

```bash
npm run check-env
```

#### 환경변수 파일 생성

```bash
# 개발 환경
cp env.example .env.development

# 프로덕션 환경
cp env.example .env.production
```

### 7. 보안 주의사항

- Personal Access Token을 절대 코드에 하드코딩하지 마세요
- `.env` 파일이 `.gitignore`에 포함되어 있는지 확인하세요
- 토큰을 안전한 곳에 백업해두세요
- GitHub Secrets에 설정한 값들은 절대 공개하지 마세요
- `.env` 파일은 절대 Git에 커밋하지 마세요
