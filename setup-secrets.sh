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

# Firebase Admin SDK 설정 (서버 사이드용)
echo "Firebase Admin SDK 설정 추가 중..."
FIREBASE_PROJECT_ID=$(get_env_value "FIREBASE_PROJECT_ID")
FIREBASE_PRIVATE_KEY_ID=$(get_env_value "FIREBASE_PRIVATE_KEY_ID")
FIREBASE_PRIVATE_KEY=$(get_env_value "FIREBASE_PRIVATE_KEY")
FIREBASE_CLIENT_EMAIL=$(get_env_value "FIREBASE_CLIENT_EMAIL")
FIREBASE_CLIENT_ID=$(get_env_value "FIREBASE_CLIENT_ID")
FIREBASE_CLIENT_CERT_URL=$(get_env_value "FIREBASE_CLIENT_CERT_URL")

gh secret set FIREBASE_PROJECT_ID --repo $REPO --body "$FIREBASE_PROJECT_ID"
gh secret set FIREBASE_PRIVATE_KEY_ID --repo $REPO --body "$FIREBASE_PRIVATE_KEY_ID"
gh secret set FIREBASE_PRIVATE_KEY --repo $REPO --body "$FIREBASE_PRIVATE_KEY"
gh secret set FIREBASE_CLIENT_EMAIL --repo $REPO --body "$FIREBASE_CLIENT_EMAIL"
gh secret set FIREBASE_CLIENT_ID --repo $REPO --body "$FIREBASE_CLIENT_ID"
gh secret set FIREBASE_CLIENT_CERT_URL --repo $REPO --body "$FIREBASE_CLIENT_CERT_URL"

# 카카오톡 API
echo "카카오톡 API 설정 추가 중..."
GATSBY_KAKAOTALK_API_TOKEN=$(get_env_value "GATSBY_KAKAOTALK_API_TOKEN")
gh secret set GATSBY_KAKAOTALK_API_TOKEN --repo $REPO --body "$GATSBY_KAKAOTALK_API_TOKEN"

# 결혼식 정보
echo "결혼식 정보 추가 중..."
GATSBY_WEDDING_INVITATION_URL=$(get_env_value "GATSBY_WEDDING_INVITATION_URL")
GATSBY_WEDDING_DATE=$(get_env_value "GATSBY_WEDDING_DATE")
GATSBY_WEDDING_LOCATION=$(get_env_value "GATSBY_WEDDING_LOCATION")

gh secret set GATSBY_WEDDING_INVITATION_URL --repo $REPO --body "$GATSBY_WEDDING_INVITATION_URL"
gh secret set GATSBY_WEDDING_DATE --repo $REPO --body "$GATSBY_WEDDING_DATE"
gh secret set GATSBY_WEDDING_LOCATION --repo $REPO --body "$GATSBY_WEDDING_LOCATION"

# 신랑 정보
echo "신랑 정보 추가 중..."
GATSBY_GROOM_NAME=$(get_env_value "GATSBY_GROOM_NAME")
GATSBY_GROOM_ACCOUNT_NUMBER=$(get_env_value "GATSBY_GROOM_ACCOUNT_NUMBER")
GATSBY_GROOM_FATHER_NAME=$(get_env_value "GATSBY_GROOM_FATHER_NAME")
GATSBY_GROOM_FATHER_ACCOUNT_NUMBER=$(get_env_value "GATSBY_GROOM_FATHER_ACCOUNT_NUMBER")
GATSBY_GROOM_MOTHER_NAME=$(get_env_value "GATSBY_GROOM_MOTHER_NAME")
GATSBY_GROOM_MOTHER_ACCOUNT_NUMBER=$(get_env_value "GATSBY_GROOM_MOTHER_ACCOUNT_NUMBER")

gh secret set GATSBY_GROOM_NAME --repo $REPO --body "$GATSBY_GROOM_NAME"
gh secret set GATSBY_GROOM_ACCOUNT_NUMBER --repo $REPO --body "$GATSBY_GROOM_ACCOUNT_NUMBER"
gh secret set GATSBY_GROOM_FATHER_NAME --repo $REPO --body "$GATSBY_GROOM_FATHER_NAME"
gh secret set GATSBY_GROOM_FATHER_ACCOUNT_NUMBER --repo $REPO --body "$GATSBY_GROOM_FATHER_ACCOUNT_NUMBER"
gh secret set GATSBY_GROOM_MOTHER_NAME --repo $REPO --body "$GATSBY_GROOM_MOTHER_NAME"
gh secret set GATSBY_GROOM_MOTHER_ACCOUNT_NUMBER --repo $REPO --body "$GATSBY_GROOM_MOTHER_ACCOUNT_NUMBER"

# 신부 정보
echo "신부 정보 추가 중..."
GATSBY_BRIDE_NAME=$(get_env_value "GATSBY_BRIDE_NAME")
GATSBY_BRIDE_ACCOUNT_NUMBER=$(get_env_value "GATSBY_BRIDE_ACCOUNT_NUMBER")
GATSBY_BRIDE_FATHER_NAME=$(get_env_value "GATSBY_BRIDE_FATHER_NAME")
GATSBY_BRIDE_FATHER_ACCOUNT_NUMBER=$(get_env_value "GATSBY_BRIDE_FATHER_ACCOUNT_NUMBER")
GATSBY_BRIDE_MOTHER_NAME=$(get_env_value "GATSBY_BRIDE_MOTHER_NAME")
GATSBY_BRIDE_MOTHER_ACCOUNT_NUMBER=$(get_env_value "GATSBY_BRIDE_MOTHER_ACCOUNT_NUMBER")

gh secret set GATSBY_BRIDE_NAME --repo $REPO --body "$GATSBY_BRIDE_NAME"
gh secret set GATSBY_BRIDE_ACCOUNT_NUMBER --repo $REPO --body "$GATSBY_BRIDE_ACCOUNT_NUMBER"
gh secret set GATSBY_BRIDE_FATHER_NAME --repo $REPO --body "$GATSBY_BRIDE_FATHER_NAME"
gh secret set GATSBY_BRIDE_FATHER_ACCOUNT_NUMBER --repo $REPO --body "$GATSBY_BRIDE_FATHER_ACCOUNT_NUMBER"
gh secret set GATSBY_BRIDE_MOTHER_NAME --repo $REPO --body "$GATSBY_BRIDE_MOTHER_NAME"
gh secret set GATSBY_BRIDE_MOTHER_ACCOUNT_NUMBER --repo $REPO --body "$GATSBY_BRIDE_MOTHER_ACCOUNT_NUMBER"

echo ""
echo "✅ 모든 GitHub Secrets가 설정되었습니다!"
echo "사용된 환경변수 파일: $ENV_FILE"
echo ""
echo "설정된 Secrets 확인:"
gh secret list --repo $REPO --json name 2>/dev/null || echo "Secrets 목록을 가져올 수 없지만, 위의 설정 과정에서 성공적으로 설정되었습니다." 