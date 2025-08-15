import React, { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { Divider } from 'antd';
import styled from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery.css';

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const StyledImageGallery = styled.div`
  .image-gallery {
    width: 100%;
  }

  .image-gallery-slide {
    border-radius: 8px;
    overflow: hidden;
  }

  .image-gallery-image {
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
    height: 400px;
  }

  .image-gallery-thumbnail {
    border-radius: 4px;
    overflow: hidden;
  }

  .image-gallery-thumbnail-image {
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
    height: 60px;
  }

  .image-gallery-thumbnails-wrapper {
    margin-top: 10px;
  }

  .image-gallery-thumbnails {
    padding: 5px 0;
  }

  .image-gallery-thumbnail {
    margin: 0 5px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }

  .image-gallery-thumbnail.active {
    border-color: var(--medium-green);
  }

  .image-gallery-thumbnail:hover {
    border-color: var(--light-green);
  }

  /* 모바일에서 터치 동작 개선 */
  @media screen and (max-width: 768px) {
    .image-gallery {
      touch-action: pan-y pinch-zoom !important;
    }

    .image-gallery-slide {
      border-radius: 6px;
      overflow: hidden !important;
      touch-action: pan-y pinch-zoom !important;
    }

    .image-gallery-image {
      border-radius: 6px;
      touch-action: pan-y pinch-zoom !important;
      height: 300px;
    }

    .image-gallery-content {
      touch-action: pan-y pinch-zoom !important;
    }

    .image-gallery-slide-wrapper {
      touch-action: pan-y pinch-zoom !important;
    }

    .image-gallery-slides {
      touch-action: pan-y pinch-zoom !important;
    }

    .image-gallery-thumbnail {
      border-radius: 3px;
      margin: 0 3px;
    }

    .image-gallery-thumbnail-image {
      border-radius: 3px;
      height: 50px;
    }

    /* 갤러리 내부 모든 요소에 스크롤 허용 */
    .image-gallery * {
      touch-action: pan-y pinch-zoom !important;
    }
  }

  @media screen and (max-width: 480px) {
    .image-gallery-slide {
      border-radius: 4px;
    }

    .image-gallery-image {
      border-radius: 4px;
      height: 250px;
    }

    .image-gallery-thumbnail {
      border-radius: 2px;
      margin: 0 2px;
    }

    .image-gallery-thumbnail-image {
      border-radius: 2px;
      height: 40px;
    }
  }
`;

// 이미지 배열 정의 (public 폴더 기준)
const images = [
  {
    original: import.meta.env.BASE_URL + 'images/1.webp',
    thumbnail: import.meta.env.BASE_URL + 'images/1.webp',
    description: '우리의 아름다운 순간 1',
  },
  {
    original: import.meta.env.BASE_URL + 'images/2.webp',
    thumbnail: import.meta.env.BASE_URL + 'images/2.webp',
    description: '우리의 아름다운 순간 2',
  },
];

const Gallery = () => {
  // 디버깅을 위한 콘솔 로그
  console.log('Images loaded:', images);

  // 모바일에서 위아래 스크롤을 위한 인라인 스타일
  const galleryStyle = {
    touchAction: 'pan-y pinch-zoom',
    WebkitOverflowScrolling: 'touch',
  };

  // DOM 렌더링 후 직접 스타일 적용
  useEffect(() => {
    const applyTouchStyles = () => {
      const galleryElements = document.querySelectorAll(
        '.image-gallery, .image-gallery *'
      );
      galleryElements.forEach(element => {
        element.style.touchAction = 'pan-y pinch-zoom';
      });
    };

    // 초기 적용
    applyTouchStyles();

    // 약간의 지연 후 다시 적용 (동적 렌더링 대응)
    const timer = setTimeout(applyTouchStyles, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <StyledImageGallery style={galleryStyle}>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          showThumbnails={true}
          showNav={true}
          showIndex={true}
          showBullets={true}
          thumbnailPosition="bottom"
          slideInterval={5000}
          slideDuration={450}
          slideOnThumbnailOver={false}
          useBrowserFullscreen={false}
          disableSwipe={false}
          enableSwipe={true}
          enableTouchDrag={true}
          enableMouseDrag={true}
          lazyLoad={true}
          infinite={true}
          startIndex={0}
        />
      </StyledImageGallery>
    </Wrapper>
  );
};

export default Gallery;
