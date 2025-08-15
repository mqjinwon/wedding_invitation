#!/bin/bash

# GitHub Personal Access Token 확인
if [ -z "$GITHUB_TOKEN" ]; then
    echo "Error: GITHUB_TOKEN 환경변수가 설정되지 않았습니다."
    echo "다음 명령어로 설정하세요:"
    echo "export GITHUB_TOKEN=your_token_here"
    exit 1
fi

# 현재 브랜치 확인
CURRENT_BRANCH=$(git branch --show-current)
echo "현재 브랜치: $CURRENT_BRANCH"

# Gatsby 빌드
echo "Gatsby 빌드 중..."
NODE_ENV=production npm run build

if [ $? -ne 0 ]; then
    echo "빌드 실패!"
    exit 1
fi

# gh-pages 배포
echo "GitHub Pages에 배포 중..."
npx gh-pages -d public --repo https://$GITHUB_TOKEN@github.com/mqjinwon/wedding_invitation.git

if [ $? -eq 0 ]; then
    echo "배포 완료!"
    echo "GitHub Pages URL: https://mqjinwon.github.io/wedding_invitation"
else
    echo "배포 실패!"
    exit 1
fi 