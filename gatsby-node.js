// webpack 설정
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      resolve: {
        fallback: {
          fs: false,
          path: false,
        },
      },
    });
  }
};

// You can delete this file if you don't need it

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  // GitHub Pages에서 SPA 라우팅을 위한 404.html 생성
  if (page.path === '/404/') {
    page.context.layout = '404';
    createPage(page);
  }
};

exports.onPostBuild = ({ actions }) => {
  const { createRedirect } = actions;

  // GitHub Pages에서 SPA 라우팅을 위한 리다이렉트 설정
  createRedirect({
    fromPath: '/404.html',
    toPath: '/',
    isPermanent: false,
  });

  // 정적 파일 리다이렉트 설정
  createRedirect({
    fromPath: '/static/*',
    toPath: '/wedding_invitation/static/*',
    isPermanent: false,
  });

  // 기타 정적 파일들 리다이렉트
  createRedirect({
    fromPath: '/icons/*',
    toPath: '/wedding_invitation/icons/*',
    isPermanent: false,
  });

  createRedirect({
    fromPath: '/manifest.webmanifest',
    toPath: '/wedding_invitation/manifest.webmanifest',
    isPermanent: false,
  });
};
