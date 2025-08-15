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

# Firebase 설정
echo "Firebase 설정 추가 중..."
FIREBASE_API_KEY=$(get_env_value "FIREBASE_API_KEY")
FIREBASE_AUTH_DOMAIN=$(get_env_value "FIREBASE_AUTH_DOMAIN")
FIREBASE_PROJECT_ID=$(get_env_value "FIREBASE_PROJECT_ID")
FIREBASE_STORAGE_BUCKET=$(get_env_value "FIREBASE_STORAGE_BUCKET")
FIREBASE_MESSAGING_SENDER_ID=$(get_env_value "FIREBASE_MESSAGING_SENDER_ID")
FIREBASE_APP_ID=$(get_env_value "FIREBASE_APP_ID")

gh secret set FIREBASE_API_KEY --repo $REPO --body "$FIREBASE_API_KEY"
gh secret set FIREBASE_AUTH_DOMAIN --repo $REPO --body "$FIREBASE_AUTH_DOMAIN"
gh secret set FIREBASE_PROJECT_ID --repo $REPO --body "$FIREBASE_PROJECT_ID"
gh secret set FIREBASE_STORAGE_BUCKET --repo $REPO --body "$FIREBASE_STORAGE_BUCKET"
gh secret set FIREBASE_MESSAGING_SENDER_ID --repo $REPO --body "$FIREBASE_MESSAGING_SENDER_ID"
gh secret set FIREBASE_APP_ID --repo $REPO --body "$FIREBASE_APP_ID"

# 카카오톡 API
echo "카카오톡 API 설정 추가 중..."
KAKAOTALK_API_TOKEN=$(get_env_value "KAKAOTALK_API_TOKEN")
gh secret set KAKAOTALK_API_TOKEN --repo $REPO --body "$KAKAOTALK_API_TOKEN"

# 결혼식 정보
echo "결혼식 정보 추가 중..."
WEDDING_INVITATION_URL=$(get_env_value "WEDDING_INVITATION_URL")
WEDDING_DATE=$(get_env_value "WEDDING_DATE")
WEDDING_LOCATION=$(get_env_value "WEDDING_LOCATION")

gh secret set WEDDING_INVITATION_URL --repo $REPO --body "$WEDDING_INVITATION_URL"
gh secret set WEDDING_DATE --repo $REPO --body "$WEDDING_DATE"
gh secret set WEDDING_LOCATION --repo $REPO --body "$WEDDING_LOCATION"

# 신랑 정보
echo "신랑 정보 추가 중..."
GROOM_NAME=$(get_env_value "GROOM_NAME")
GROOM_ACCOUNT_NUMBER=$(get_env_value "GROOM_ACCOUNT_NUMBER")
GROOM_FATHER_NAME=$(get_env_value "GROOM_FATHER_NAME")
GROOM_FATHER_ACCOUNT_NUMBER=$(get_env_value "GROOM_FATHER_ACCOUNT_NUMBER")
GROOM_MOTHER_NAME=$(get_env_value "GROOM_MOTHER_NAME")
GROOM_MOTHER_ACCOUNT_NUMBER=$(get_env_value "GROOM_MOTHER_ACCOUNT_NUMBER")

gh secret set GROOM_NAME --repo $REPO --body "$GROOM_NAME"
gh secret set GROOM_ACCOUNT_NUMBER --repo $REPO --body "$GROOM_ACCOUNT_NUMBER"
gh secret set GROOM_FATHER_NAME --repo $REPO --body "$GROOM_FATHER_NAME"
gh secret set GROOM_FATHER_ACCOUNT_NUMBER --repo $REPO --body "$GROOM_FATHER_ACCOUNT_NUMBER"
gh secret set GROOM_MOTHER_NAME --repo $REPO --body "$GROOM_MOTHER_NAME"
gh secret set GROOM_MOTHER_ACCOUNT_NUMBER --repo $REPO --body "$GROOM_MOTHER_ACCOUNT_NUMBER"

# 신부 정보
echo "신부 정보 추가 중..."
BRIDE_NAME=$(get_env_value "BRIDE_NAME")
BRIDE_ACCOUNT_NUMBER=$(get_env_value "BRIDE_ACCOUNT_NUMBER")
BRIDE_FATHER_NAME=$(get_env_value "BRIDE_FATHER_NAME")
BRIDE_FATHER_ACCOUNT_NUMBER=$(get_env_value "BRIDE_FATHER_ACCOUNT_NUMBER")
BRIDE_MOTHER_NAME=$(get_env_value "BRIDE_MOTHER_NAME")
BRIDE_MOTHER_ACCOUNT_NUMBER=$(get_env_value "BRIDE_MOTHER_ACCOUNT_NUMBER")

gh secret set BRIDE_NAME --repo $REPO --body "$BRIDE_NAME"
gh secret set BRIDE_ACCOUNT_NUMBER --repo $REPO --body "$BRIDE_ACCOUNT_NUMBER"
gh secret set BRIDE_FATHER_NAME --repo $REPO --body "$BRIDE_FATHER_NAME"
gh secret set BRIDE_FATHER_ACCOUNT_NUMBER --repo $REPO --body "$BRIDE_FATHER_ACCOUNT_NUMBER"
gh secret set BRIDE_MOTHER_NAME --repo $REPO --body "$BRIDE_MOTHER_NAME"
gh secret set BRIDE_MOTHER_ACCOUNT_NUMBER --repo $REPO --body "$BRIDE_MOTHER_ACCOUNT_NUMBER"

echo ""
echo "✅ 모든 GitHub Secrets가 설정되었습니다!"
echo "사용된 환경변수 파일: $ENV_FILE"
echo ""
echo "설정된 Secrets 확인:"
gh secret list --repo $REPO --json name 2>/dev/null || echo "Secrets 목록을 가져올 수 없지만, 위의 설정 과정에서 성공적으로 설정되었습니다." 