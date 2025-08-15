# 🔒 보안 가이드

## 환경변수 보안

### 공개 정보 (클라이언트에서 사용 가능)

- `GATSBY_WEDDING_DATE`: 결혼식 날짜
- `GATSBY_WEDDING_LOCATION`: 결혼식 장소
- `GATSBY_GROOM_NAME`, `BRIDE_NAME`: 신랑/신부 이름
- `GATSBY_GROOM_ACCOUNT_NUMBER`, `BRIDE_ACCOUNT_NUMBER`: 계좌번호
- `GATSBY_WEDDING_INVITATION_URL`: 청첩장 URL
- `GATSBY_KAKAOTALK_API_TOKEN`: 카카오톡 API 토큰

### 민감한 정보 (서버 사이드에서만 사용)

- `FIREBASE_API_KEY`: Firebase API 키
- `FIREBASE_AUTH_DOMAIN`: Firebase 인증 도메인
- `FIREBASE_PROJECT_ID`: Firebase 프로젝트 ID
- `FIREBASE_STORAGE_BUCKET`: Firebase 스토리지 버킷
- `FIREBASE_MESSAGING_SENDER_ID`: Firebase 메시징 발신자 ID
- `FIREBASE_APP_ID`: Firebase 앱 ID

## 보안 주의사항

### 1. 환경변수 관리

- `.env` 파일을 `.gitignore`에 포함
- 프로덕션 환경에서는 환경변수를 안전하게 설정
- 민감한 정보는 절대 클라이언트에 노출하지 않음

### 2. Firebase 보안

- Firebase 보안 규칙을 적절히 설정
- API 키는 클라이언트에서 사용되지만 보안 규칙으로 보호
- 데이터베이스 접근 권한을 제한적으로 설정

### 3. 카카오톡 API

- API 토큰은 서버 사이드에서만 사용
- 클라이언트에서는 공유 기능만 사용
- API 사용량 모니터링

### 4. 배포 시 주의사항

- 환경변수가 올바르게 설정되었는지 확인
- 빌드된 파일에서 민감한 정보가 노출되지 않는지 확인
- HTTPS 사용 권장

## 보안 체크리스트

- [ ] `.env` 파일이 `.gitignore`에 포함됨
- [ ] 프로덕션 환경변수가 안전하게 설정됨
- [ ] Firebase 보안 규칙이 설정됨
- [ ] API 키가 클라이언트에 노출되지 않음
- [ ] HTTPS가 사용됨
- [ ] 정기적인 보안 업데이트 수행
