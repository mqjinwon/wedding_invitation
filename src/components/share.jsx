import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
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

const AlertContainer = styled.div`
  margin-bottom: 16px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const Share = () => {
  const [isClient, setIsClient] = React.useState(false);

  const {
    GROOM_NAME,
    BRIDE_NAME,
    KAKAOTALK_SHARE_IMAGE,
    WEDDING_INVITATION_URL,
  } = useEnvironmentVariables();

  // 카카오톡 API 토큰 - 클라이언트에서도 접근 가능
  const KAKAOTALK_API_TOKEN = process.env.KAKAOTALK_API_TOKEN || '';

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // API 토큰 확인
        if (KAKAOTALK_API_TOKEN) {
          kakao.init(KAKAOTALK_API_TOKEN);
        } else {
          console.warn('카카오톡 API 토큰이 설정되지 않았습니다.');
          message.error('카카오톡 공유 기능을 사용할 수 없습니다.');
          return;
        }
      }

      kakao.Link.createDefaultButton({
        objectType: 'feed',
        container: '#sendKakao',
        content: {
          title: `${GROOM_NAME}❤${BRIDE_NAME} 결혼식에 초대합니다`,
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
          imageUrl: KAKAOTALK_SHARE_IMAGE,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '청첩장 열기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
        installTalk: true,
      });

      setTimeout(() => {
        document.getElementById('sendKakao')?.click();
        message.success('카카오톡으로 청첩장을 공유합니다!');
      }, 100);
    }
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

      <ButtonContainer>
        {/* 카카오톡 API 토큰이 설정된 경우에만 카카오톡 공유 버튼 표시 */}
        {!isKakaoTokenMissing && (
          <KakaoTalkShareButton
            style={{ margin: 0 }}
            icon={<MessageFilled />}
            id="sendKakao"
            size="large"
            onClick={createKakaoButton}
          >
            카카오톡으로 공유하기
          </KakaoTalkShareButton>
        )}

        {isClient ? (
          <CopyToClipboard text={WEDDING_INVITATION_URL}>
            <LinkShareButton
              style={{ margin: 0 }}
              icon={<LinkOutlined />}
              size="large"
              onClick={() => message.success('청첩장 링크가 복사되었습니다.')}
            >
              링크로 공유하기
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
