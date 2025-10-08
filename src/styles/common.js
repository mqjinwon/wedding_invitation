import styled from 'styled-components';

// 공통 Content 스타일
export const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.0rem;
    line-height: 1.8;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.9;
    margin-bottom: 24px;
  }
`;

// 공통 Title 스타일
export const Title = styled.p`
  font-size: 1.2rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.0rem;
  }
`;

// 공통 Wrapper 스타일
export const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
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
