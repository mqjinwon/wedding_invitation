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

module.exports = {
    pathPrefix: `/wedding_invitation`,
    siteMetadata: {
        title: `[신랑 이름] & [신부 이름] 결혼식 청첩장`,
        description: `[신랑 이름] & [신부 이름]의 결혼식 청첩장입니다. [결혼식 날짜], [결혼식 장소]에서 열립니다.`,
        author: `[신랑 이름] & [신부 이름]`,
        siteUrl: `https://[your-username].github.io/wedding_invitation`,
        keywords: `결혼, 청첩장, [신랑 이름], [신부 이름], [결혼식 장소]`,
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `[신랑 이름] & [신부 이름] 결혼식 청첩장`,
                short_name: `결혼식 청첩장`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/`],
            },
        },
    ],
};