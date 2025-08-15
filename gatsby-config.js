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
        short_name: `Wedding`,
        description: `김진원 & 이연제의 결혼식 청첩장입니다.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4a6741`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `icon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `icon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `icon-128x128.png`,
            sizes: `128x128`,
            type: `image/png`,
          },
          {
            src: `icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: `icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
