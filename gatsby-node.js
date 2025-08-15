// 기본 webpack 설정만 유지
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

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  // GitHub Pages에서 SPA 라우팅을 위한 404.html 생성
  if (page.path === '/404/') {
    page.context.layout = '404';
    createPage(page);
  }
};
