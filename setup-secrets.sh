#!/bin/bash

# GitHub 저장소 정보
REPO="mqjinwon/wedding_invitation"

# .env 파일 경로 (우선순위: .env.production > .env.development > .env)
ENV_FILE=""
if [ -f ".env.production" ]; then
    ENV_FILE=".env.production"
elif [ -f ".env.development" ]; then
    ENV_FILE=".env.development"
elif [ -f ".env" ]; then
    ENV_FILE=".env"
else
    echo "❌ .env 파일을 찾을 수 없습니다!"
    echo "다음 파일 중 하나가 필요합니다: .env, .env.development, .env.production"
    exit 1
fi

echo "GitHub Secrets 설정을 시작합니다..."
echo "저장소: $REPO"
echo "환경변수 파일: $ENV_FILE"
echo ""

# .env 파일에서 환경변수 읽기 함수
get_env_value() {
    local key=$1
    local value=$(grep "^${key}=" "$ENV_FILE" | cut -d'=' -f2- | sed 's/^"//;s/"$//')
    echo "$value"
}

# Firebase 설정 (클라이언트 사이드용)
echo "Firebase 설정 추가 중..."
VITE_FIREBASE_API_KEY=$(get_env_value "VITE_FIREBASE_API_KEY")
VITE_FIREBASE_AUTH_DOMAIN=$(get_env_value "VITE_FIREBASE_AUTH_DOMAIN")
VITE_FIREBASE_PROJECT_ID=$(get_env_value "VITE_FIREBASE_PROJECT_ID")
VITE_FIREBASE_STORAGE_BUCKET=$(get_env_value "VITE_FIREBASE_STORAGE_BUCKET")
VITE_FIREBASE_MESSAGING_SENDER_ID=$(get_env_value "VITE_FIREBASE_MESSAGING_SENDER_ID")
VITE_FIREBASE_APP_ID=$(get_env_value "VITE_FIREBASE_APP_ID")

gh secret set VITE_FIREBASE_API_KEY --repo $REPO --body "$VITE_FIREBASE_API_KEY"
gh secret set VITE_FIREBASE_AUTH_DOMAIN --repo $REPO --body "$VITE_FIREBASE_AUTH_DOMAIN"
gh secret set VITE_FIREBASE_PROJECT_ID --repo $REPO --body "$VITE_FIREBASE_PROJECT_ID"
gh secret set VITE_FIREBASE_STORAGE_BUCKET --repo $REPO --body "$VITE_FIREBASE_STORAGE_BUCKET"
gh secret set VITE_FIREBASE_MESSAGING_SENDER_ID --repo $REPO --body "$VITE_FIREBASE_MESSAGING_SENDER_ID"
gh secret set VITE_FIREBASE_APP_ID --repo $REPO --body "$VITE_FIREBASE_APP_ID"

# 카카오톡 API
echo "카카오톡 API 설정 추가 중..."
VITE_KAKAOTALK_API_TOKEN=$(get_env_value "VITE_KAKAOTALK_API_TOKEN")
VITE_KAKAOTALK_SHARE_IMAGE=$(get_env_value "VITE_KAKAOTALK_SHARE_IMAGE")

gh secret set VITE_KAKAOTALK_API_TOKEN --repo $REPO --body "$VITE_KAKAOTALK_API_TOKEN"
gh secret set VITE_KAKAOTALK_SHARE_IMAGE --repo $REPO --body "$VITE_KAKAOTALK_SHARE_IMAGE"

# 결혼식 정보
echo "결혼식 정보 추가 중..."
VITE_WEDDING_INVITATION_URL=$(get_env_value "VITE_WEDDING_INVITATION_URL")
VITE_WEDDING_DATE=$(get_env_value "VITE_WEDDING_DATE")
VITE_WEDDING_LOCATION=$(get_env_value "VITE_WEDDING_LOCATION")

gh secret set VITE_WEDDING_INVITATION_URL --repo $REPO --body "$VITE_WEDDING_INVITATION_URL"
gh secret set VITE_WEDDING_DATE --repo $REPO --body "$VITE_WEDDING_DATE"
gh secret set VITE_WEDDING_LOCATION --repo $REPO --body "$VITE_WEDDING_LOCATION"

# 신랑 정보
echo "신랑 정보 추가 중..."
VITE_GROOM_NAME=$(get_env_value "VITE_GROOM_NAME")
VITE_GROOM_ACCOUNT_NUMBER=$(get_env_value "VITE_GROOM_ACCOUNT_NUMBER")
VITE_GROOM_FATHER_NAME=$(get_env_value "VITE_GROOM_FATHER_NAME")
VITE_GROOM_FATHER_ACCOUNT_NUMBER=$(get_env_value "VITE_GROOM_FATHER_ACCOUNT_NUMBER")
VITE_GROOM_MOTHER_NAME=$(get_env_value "VITE_GROOM_MOTHER_NAME")
VITE_GROOM_MOTHER_ACCOUNT_NUMBER=$(get_env_value "VITE_GROOM_MOTHER_ACCOUNT_NUMBER")

gh secret set VITE_GROOM_NAME --repo $REPO --body "$VITE_GROOM_NAME"
gh secret set VITE_GROOM_ACCOUNT_NUMBER --repo $REPO --body "$VITE_GROOM_ACCOUNT_NUMBER"
gh secret set VITE_GROOM_FATHER_NAME --repo $REPO --body "$VITE_GROOM_FATHER_NAME"
gh secret set VITE_GROOM_FATHER_ACCOUNT_NUMBER --repo $REPO --body "$VITE_GROOM_FATHER_ACCOUNT_NUMBER"
gh secret set VITE_GROOM_MOTHER_NAME --repo $REPO --body "$VITE_GROOM_MOTHER_NAME"
gh secret set VITE_GROOM_MOTHER_ACCOUNT_NUMBER --repo $REPO --body "$VITE_GROOM_MOTHER_ACCOUNT_NUMBER"

# 신부 정보
echo "신부 정보 추가 중..."
VITE_BRIDE_NAME=$(get_env_value "VITE_BRIDE_NAME")
VITE_BRIDE_ACCOUNT_NUMBER=$(get_env_value "VITE_BRIDE_ACCOUNT_NUMBER")
VITE_BRIDE_FATHER_NAME=$(get_env_value "VITE_BRIDE_FATHER_NAME")
VITE_BRIDE_FATHER_ACCOUNT_NUMBER=$(get_env_value "VITE_BRIDE_FATHER_ACCOUNT_NUMBER")
VITE_BRIDE_MOTHER_NAME=$(get_env_value "VITE_BRIDE_MOTHER_NAME")
VITE_BRIDE_MOTHER_ACCOUNT_NUMBER=$(get_env_value "VITE_BRIDE_MOTHER_ACCOUNT_NUMBER")

gh secret set VITE_BRIDE_NAME --repo $REPO --body "$VITE_BRIDE_NAME"
gh secret set VITE_BRIDE_ACCOUNT_NUMBER --repo $REPO --body "$VITE_BRIDE_ACCOUNT_NUMBER"
gh secret set VITE_BRIDE_FATHER_NAME --repo $REPO --body "$VITE_BRIDE_FATHER_NAME"
gh secret set VITE_BRIDE_FATHER_ACCOUNT_NUMBER --repo $REPO --body "$VITE_BRIDE_FATHER_ACCOUNT_NUMBER"
gh secret set VITE_BRIDE_MOTHER_NAME --repo $REPO --body "$VITE_BRIDE_MOTHER_NAME"
gh secret set VITE_BRIDE_MOTHER_ACCOUNT_NUMBER --repo $REPO --body "$VITE_BRIDE_MOTHER_ACCOUNT_NUMBER"

# 방명록 보안 설정
echo "방명록 보안 설정 추가 중..."
VITE_MASTER_PASSWORD=$(get_env_value "VITE_MASTER_PASSWORD")

gh secret set VITE_MASTER_PASSWORD --repo $REPO --body "$VITE_MASTER_PASSWORD"

echo ""
echo "✅ 모든 GitHub Secrets가 설정되었습니다!"
echo "사용된 환경변수 파일: $ENV_FILE"
echo ""
echo "설정된 Secrets 확인:"
gh secret list --repo $REPO --json name 2>/dev/null || echo "Secrets 목록을 가져올 수 없지만, 위의 설정 과정에서 성공적으로 설정되었습니다." 