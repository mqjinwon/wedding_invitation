
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState, useEffect } from 'react';
import { Button, Divider, message } from 'antd';
import { MessageFilled, LinkOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useEnvironmentVariables } from '../hooks/useEnvironmentVariables';

const Wrapper = styled.div`
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

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    gap: 10px;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
  }
`;

const KakaoTalkShareButton = styled(Button)`
  background: var(--white);
  border-color: var(--white);
  color: var(--black);
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-weight: 500;
  align-item: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--light-yellow) !important;
    border-color: var(--light-yellow) !important;
    color: var(--black) !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    background-color: var(--yellow) !important;
    border-color: var(--yellow) !important;
    color: var(--black) !important;
    outline: 2px solid var(--yellow) !important;
    outline-offset: 2px !important;
  }

  @media screen and (max-width: 768px) {
    height: 52px;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    height: 56px;
    font-size: 0.85rem;
  }
`;

const LinkShareButton = styled(Button)`
  background: var(--white);
  border-color: var(--white);
  color: var(--black);
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-weight: 500;
  align-item: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--light-green) !important;
    border-color: var(--light-green) !important;
    color: var(--black) !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    background-color: var(--medium-green) !important;
    border-color: var(--medium-green) !important;
    color: var(--black) !important;
    outline: 2px solid var(--medium-green) !important;
    outline-offset: 2px !important;
  }

  @media screen and (max-width: 768px) {
    height: 52px;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    height: 56px;
    font-size: 0.85rem;
  }
`;



const Share = () => {
  const [isClient, setIsClient] = useState(false);
  const [kakaoSdkLoaded, setKakaoSdkLoaded] = useState(false);
  const [kakaoSdkLoading, setKakaoSdkLoading] = useState(false);
  const [kakaoSdkFailed, setKakaoSdkFailed] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const {
    GROOM_NAME,
    BRIDE_NAME,
    KAKAOTALK_SHARE_IMAGE,
    WEDDING_INVITATION_URL,
    KAKAOTALK_API_TOKEN,
  } = useEnvironmentVariables();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 카카오톡 SDK 로드 상태 확인
  useEffect(() => {
    const checkKakaoSdk = () => {
      if (window.Kakao) {
        setKakaoSdkLoaded(true);
        setKakaoSdkLoading(false);
        setKakaoSdkFailed(false);
        return true;
      }
      return false;
    };

    // 즉시 확인
    if (checkKakaoSdk()) {
      return;
    }

    // SDK가 아직 로드되지 않았다면 주기적으로 확인
    const interval = setInterval(() => {
      if (checkKakaoSdk()) {
        clearInterval(interval);
      }
    }, 500);

    // 15초 후 타임아웃 - 더 긴 시간 제공
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setKakaoSdkLoading(false);
      if (!window.Kakao) {
        console.warn('카카오톡 SDK 로드 타임아웃 - 15초 후에도 로드되지 않음');
        setKakaoSdkFailed(true);
      }
    }, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const createKakaoButton = async () => {
    // API 토큰 확인
    if (!KAKAOTALK_API_TOKEN) {
      console.warn('카카오톡 API 토큰이 설정되지 않았습니다.');
      message.error('카카오톡 공유 기능을 사용할 수 없습니다.');
      return;
    }

    // SDK 로드 중이면 대기
    if (kakaoSdkLoading) {
      message.info('카카오톡 SDK를 로드하는 중입니다. 잠시만 기다려주세요.');
      return;
    }

    // SDK가 완전히 실패한 경우 대체 방법 제안
    if (kakaoSdkFailed && retryCount >= 3) {
      message.warning('카카오톡 공유가 불가능합니다. 링크 복사로 공유해주세요.');
      return;
    }

    // SDK가 로드되지 않았다면 재시도
    if (!kakaoSdkLoaded && !window.Kakao) {
      console.warn(`카카오톡 SDK가 로드되지 않았습니다. 재시도 중... (${retryCount + 1}/3)`);
      setKakaoSdkLoading(true);
      setRetryCount(prev => prev + 1);
      
      // SDK 재로드 시도
      try {
        await loadKakaoSdk();
        // 재로드 후 잠시 대기
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // 재로드 후에도 SDK가 없으면 실패 처리
        if (!window.Kakao) {
          throw new Error('SDK 재로드 후에도 window.Kakao가 없음');
        }
      } catch (error) {
        console.error('카카오톡 SDK 재로드 실패:', error);
        setKakaoSdkLoading(false);
        
        if (retryCount >= 2) {
          setKakaoSdkFailed(true);
          message.error('카카오톡 공유 기능을 사용할 수 없습니다. 링크 복사로 공유해주세요.');
        } else {
          message.error('카카오톡 공유 기능을 사용할 수 없습니다. 잠시 후 다시 시도해주세요.');
        }
        return;
      }
    }

    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        try {
          kakao.init(KAKAOTALK_API_TOKEN);
        } catch (error) {
          console.error('카카오톡 SDK 초기화 실패:', error);
          message.error('카카오톡 공유 기능을 초기화할 수 없습니다.');
          return;
        }
      }

      try {
        // sendCustom을 사용하여 템플릿 ID 124907로 공유
        kakao.Share.sendCustom({
          templateId: 124907
        });

        message.success('카카오톡으로 청첩장을 공유합니다!');
      } catch (error) {
        console.error('카카오톡 공유 버튼 생성 실패:', error);
        message.error('카카오톡 공유 기능을 사용할 수 없습니다.');
      }
    } else {
      console.warn('카카오톡 SDK가 로드되지 않았습니다.');
      message.error('카카오톡 공유 기능을 사용할 수 없습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  // 카카오톡 SDK 수동 로드 함수
  const loadKakaoSdk = () => {
    return new Promise((resolve, reject) => {
      // 이미 로드된 스크립트가 있는지 확인하고 제거
      const existingScripts = document.querySelectorAll('script[src*="kakao.min.js"]');
      existingScripts.forEach(script => script.remove());

      // 캐시 버스팅을 위한 타임스탬프 추가
      const timestamp = Date.now();
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://developers.kakao.com/sdk/js/kakao.min.js?v=${timestamp}`;
      
      // 타임아웃 설정 (10초)
      const timeout = setTimeout(() => {
        script.remove();
        reject(new Error('SDK 로드 타임아웃'));
      }, 10000);
      
      script.onload = () => {
        clearTimeout(timeout);
        console.log('카카오톡 SDK 수동 로드 완료');
        
        // SDK 로드 후 window.Kakao가 실제로 사용 가능한지 확인
        setTimeout(() => {
          if (window.Kakao && typeof window.Kakao.init === 'function') {
            setKakaoSdkLoaded(true);
            setKakaoSdkLoading(false);
            setKakaoSdkFailed(false);
            resolve();
          } else {
            reject(new Error('SDK 로드되었지만 window.Kakao가 사용 불가능'));
          }
        }, 500);
      };
      
      script.onerror = (error) => {
        clearTimeout(timeout);
        console.error('카카오톡 SDK 수동 로드 실패:', error);
        setKakaoSdkLoading(false);
        reject(error);
      };
      
      document.head.appendChild(script);
    });
  };

  // 카카오톡 API 토큰이 설정되지 않은 경우
  const isKakaoTokenMissing = !KAKAOTALK_API_TOKEN;

  return (
    <Wrapper style={{ marginBottom: 16 }}>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>청첩장 공유하기</Title>
      </Divider>

      <ButtonContainer data-aos="fade-up">
        {/* 카카오톡 API 토큰이 설정된 경우에만 카카오톡 공유 버튼 표시 */}
        {!isKakaoTokenMissing && (
          <KakaoTalkShareButton
            data-aos="fade-up"
            style={{ 
              margin: 0,
              opacity: kakaoSdkFailed ? 0.6 : 1
            }}
            icon={<MessageFilled />}
            id="sendKakao"
            size="large"
            loading={kakaoSdkLoading}
            disabled={kakaoSdkLoading}
            onClick={createKakaoButton}
          >
            {kakaoSdkLoading 
              ? '카카오톡 SDK 로드 중...' 
              : kakaoSdkFailed 
                ? '카카오톡 공유 (재시도)' 
                : '카카오톡으로 공유하기'
            }
          </KakaoTalkShareButton>
        )}

        {isClient ? (
          <CopyToClipboard text={WEDDING_INVITATION_URL}>
            <LinkShareButton
              style={{ 
                margin: 0,
                border: kakaoSdkFailed ? '2px solid var(--medium-green)' : '1px solid var(--white)',
                boxShadow: kakaoSdkFailed ? '0 0 10px rgba(76, 175, 80, 0.3)' : 'none'
              }}
              icon={<LinkOutlined />}
              size="large"
              onClick={() => {
                if (kakaoSdkFailed) {
                  message.success('청첩장 링크가 복사되었습니다. 카카오톡에 붙여넣기하여 공유해주세요!');
                } else {
                  message.success('청첩장 링크가 복사되었습니다.');
                }
              }}
            >
              {kakaoSdkFailed ? '📋 링크 복사 (카카오톡 공유용)' : '링크로 공유하기'}
            </LinkShareButton>
          </CopyToClipboard>
        ) : (
          <LinkShareButton
            style={{ margin: 0 }}
            icon={<LinkOutlined />}
            size="large"
            disabled
          >
            링크로 공유하기
          </LinkShareButton>
        )}
      </ButtonContainer>
    </Wrapper>
  );
};

export default Share;
