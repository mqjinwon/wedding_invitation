import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
  useEffect(() => {
    // GitHub Pages에서 SPA 라우팅을 위해 404 페이지에서 메인 페이지로 리다이렉트
    const path = window.location.pathname;

    // /wedding_invitation/ 경로가 포함된 경우 처리
    if (path.includes('/wedding_invitation/')) {
      const cleanPath = path.replace('/wedding_invitation', '');
      if (cleanPath && cleanPath !== '/') {
        navigate(cleanPath);
        return;
      }
    }

    // 기본적으로 메인 페이지로 이동
    navigate('/');
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: 'var(--background-color)',
        color: 'var(--text-color)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>페이지를 찾을 수 없습니다</h1>
        <p>잠시 후 메인 페이지로 이동합니다...</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
