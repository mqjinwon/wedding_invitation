// 환경변수 로드
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// 기본 .env 파일도 로드 (NODE_ENV가 설정되지 않은 경우)
if (!process.env.NODE_ENV) {
  require('dotenv').config({
    path: '.env',
  });
}

// GitHub Pages 배포를 위한 경로 설정
const isProduction = process.env.NODE_ENV === 'production';
const pathPrefix = isProduction ? '/wedding_invitation' : '';

module.exports = {
  pathPrefix,
  siteMetadata: {
    title: `김진원 & 이연제 결혼식 청첩장`,
    description: `김진원 & 이연제의 결혼식 청첩장입니다. 2025년 11월 8일, 프란치스코 교육회관 결혼식이 열립니다.`,
    author: `김진원 & 이연제`,
    siteUrl: `https://mqjinwon.github.io/wedding_invitation`,
    keywords: `결혼, 청첩장, 김진원, 이연제, 프란치스코 교육회관`,
    lang: `ko`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        fileName: false,
        pure: true,
        minify: true,
        transpileTemplateLiterals: true,
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /^\/wedding_invitation\//,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `김진원 & 이연제 결혼식 청첩장`,
        short_name: `결혼식 청첩장`,
        start_url: `${pathPrefix}/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        include_favicon: true,
        legacy: true,
        theme_color_in_head: true,
        cache_busting_mode: 'query',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
        workboxConfig: {
          globPatterns: ['**/*'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/mqjinwon\.github\.io\/wedding_invitation\/.*/,
              handler: 'StaleWhileRevalidate',
            },
          ],
        },
      },
    },
  ],
};
