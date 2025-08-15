import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
  opacity: ${props => props.$loaded ? 0 : 1};
  pointer-events: ${props => props.$loaded ? 'none' : 'auto'};
`;

const LoaderContent = styled.div`
  text-align: center;
  color: var(--title-color);
  padding: 20px;
  
  @media screen and (max-width: 768px) {
    padding: 16px;
  }
  
  @media screen and (max-width: 480px) {
    padding: 12px;
  }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid var(--title-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @media screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
    border-width: 2.5px;
    margin-bottom: 14px;
  }
  
  @media screen and (max-width: 480px) {
    width: 32px;
    height: 32px;
    border-width: 2px;
    margin-bottom: 12px;
  }
`;

const LoadingText = styled.div`
  font-size: 1rem;
  font-weight: 500;
  
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const SubText = styled.div`
  font-size: 0.8rem;
  margin-top: 8px;
  opacity: 0.7;
  
  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    margin-top: 6px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    margin-top: 4px;
  }
`;

const AudioLoader = ({ loaded, error }) => {
  const [timeoutMessage, setTimeoutMessage] = useState(false);

  useEffect(() => {
    // 3초 후에도 로딩이 안 되면 메시지 변경
    const timer = setTimeout(() => {
      setTimeoutMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loaded || error) return null;

  return (
    <LoaderWrapper $loaded={loaded}>
      <LoaderContent>
        <Spinner />
        <LoadingText>
          {timeoutMessage ? "음악 로딩에 시간이 걸리고 있습니다..." : "음악을 준비하고 있습니다..."}
        </LoadingText>
        <SubText>
          {timeoutMessage ? "잠시 후 자동으로 진행됩니다" : "잠시만 기다려주세요"}
        </SubText>
      </LoaderContent>
    </LoaderWrapper>
  );
};

export default AudioLoader; 