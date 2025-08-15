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
3. 위의 Name과 Value를 하나씩 입력
4. "Add secret" 클릭

### 5. 설정 확인

설정이 완료되면 다음 명령어로 확인할 수 있습니다:

```bash
gh secret list --repo mqjinwon/wedding_invitation
```

## 주의사항

- Secrets는 한 번 설정하면 값을 다시 볼 수 없습니다
- 값을 변경하려면 기존 Secret을 삭제하고 새로 생성해야 합니다
- Secrets는 GitHub Actions에서만 사용되며, 로컬 개발에는 영향을 주지 않습니다
