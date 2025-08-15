# GitHub Secrets 자동 설정 가이드

## GitHub CLI를 사용한 자동 설정

### 1. GitHub CLI 설치 (아직 설치하지 않은 경우)

```bash
# Ubuntu/Debian
sudo apt install gh

# macOS
brew install gh

# Windows
winget install GitHub.cli
```

### 2. GitHub CLI 로그인

```bash
gh auth login
```

### 3. Secrets 자동 설정 스크립트

다음 스크립트를 실행하여 모든 Secrets를 한 번에 설정할 수 있습니다:

```bash
./setup-secrets.sh
```

### 4. 수동 설정 방법

GitHub CLI를 사용하지 않으려면:

1. GitHub 저장소 → Settings → Secrets and variables → Actions
2. "New repository secret" 클릭
3. 아래의 Name과 Value를 하나씩 입력
4. "Add secret" 클릭

### 5. 필수 Secrets 목록

#### Firebase 설정 (클라이언트 사이드용 - GATSBY_ 접두사)
- `GATSBY_FIREBASE_API_KEY`
- `GATSBY_FIREBASE_AUTH_DOMAIN`
- `GATSBY_FIREBASE_PROJECT_ID`
- `GATSBY_FIREBASE_STORAGE_BUCKET`
- `GATSBY_FIREBASE_MESSAGING_SENDER_ID`
- `GATSBY_FIREBASE_APP_ID`

#### Firebase 설정 (서버 사이드용)
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

#### 결혼식 정보 (클라이언트 사이드용)
- `GATSBY_WEDDING_DATE`
- `GATSBY_WEDDING_LOCATION`
- `GATSBY_WEDDING_INVITATION_URL`

#### 결혼식 정보 (서버 사이드용)
- `WEDDING_DATE`
- `WEDDING_LOCATION`
- `WEDDING_INVITATION_URL`

#### 신랑 정보 (클라이언트 사이드용)
- `GATSBY_GROOM_NAME`
- `GATSBY_GROOM_ACCOUNT_NUMBER`
- `GATSBY_GROOM_FATHER_NAME`
- `GATSBY_GROOM_FATHER_ACCOUNT_NUMBER`
- `GATSBY_GROOM_MOTHER_NAME`
- `GATSBY_GROOM_MOTHER_ACCOUNT_NUMBER`

#### 신랑 정보 (서버 사이드용)
- `GROOM_NAME`
- `GROOM_ACCOUNT_NUMBER`
- `GROOM_FATHER_NAME`
- `GROOM_FATHER_ACCOUNT_NUMBER`
- `GROOM_MOTHER_NAME`
- `GROOM_MOTHER_ACCOUNT_NUMBER`

#### 신부 정보 (클라이언트 사이드용)
- `GATSBY_BRIDE_NAME`
- `GATSBY_BRIDE_ACCOUNT_NUMBER`
- `GATSBY_BRIDE_FATHER_NAME`
- `GATSBY_BRIDE_FATHER_ACCOUNT_NUMBER`
- `GATSBY_BRIDE_MOTHER_NAME`
- `GATSBY_BRIDE_MOTHER_ACCOUNT_NUMBER`

#### 신부 정보 (서버 사이드용)
- `BRIDE_NAME`
- `BRIDE_ACCOUNT_NUMBER`
- `BRIDE_FATHER_NAME`
- `BRIDE_FATHER_ACCOUNT_NUMBER`
- `BRIDE_MOTHER_NAME`
- `BRIDE_MOTHER_ACCOUNT_NUMBER`

#### 기타
- `KAKAOTALK_API_TOKEN`

### 6. 설정 확인

설정이 완료되면 다음 명령어로 확인할 수 있습니다:

```bash
gh secret list --repo mqjinwon/wedding_invitation
```

## 주의사항

- **중요**: `GATSBY_` 접두사가 있는 변수는 클라이언트 사이드에서도 사용 가능합니다
- `GATSBY_` 접두사가 없는 변수는 서버 사이드에서만 사용 가능합니다
- Secrets는 한 번 설정하면 값을 다시 볼 수 없습니다
- 값을 변경하려면 기존 Secret을 삭제하고 새로 생성해야 합니다
- Secrets는 GitHub Actions에서만 사용되며, 로컬 개발에는 영향을 주지 않습니다
