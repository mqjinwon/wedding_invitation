import { useState } from 'react';
import { Button, Divider, message, Modal } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useEnvironmentVariables } from '../hooks/useEnvironmentVariables';
import { Content, Title, Wrapper } from '../styles/common';

// Wrapper에 padding-bottom 추가를 위한 확장
const ExtendedWrapper = styled(Wrapper)`
  padding-bottom: 18px;
`;

// 기본 이미지: 호버/그림자/라운드 제거, 주변과 자연스럽게 융화
const NeutralImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 8px auto;
  border-radius: 0;
  box-shadow: none;
  filter: none;
`;

// 비디오용 기본 스타일 (장식 제거, 주변과 융화)
const NeutralVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  margin: 8px auto;
  border-radius: 0;
  box-shadow: none;
  
  /* 배경 투명 처리 - mask 속성 사용 */
  background: transparent;
  
  /* mask 속성으로 검은 배경 제거 */
  /* 방법 1: 기본 마스크 적용 */
  mask: linear-gradient(black, black);
  -webkit-mask: linear-gradient(black, black);
  
  /* 방법 2: 필터 제거 - 원본 색상 그대로 유지 */
  /* filter: none; */
  
  /* 방법 3: 블렌드 모드 제거 - 자연스러운 표시 */
  /* mix-blend-mode: normal; */
  
  /* 방법 4: 대안 - multiply 모드 */
  /* mix-blend-mode: multiply; */
  
  /* 방법 5: 대안 - overlay 모드 */
  /* mix-blend-mode: overlay; */
`;

const SubContent = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.8;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.9;
    margin-bottom: 24px;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.8;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.9;
  }
`;

const ButtonWrap = styled.div`
  margin-bottom: 3.125rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    gap: 12px;
    margin-bottom: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    flex-direction: row;
    gap: 8px;
    margin-bottom: 2rem;
  }
`;

const ContactButton = styled.div`
  width: 10.75rem;
  border: 1px solid var(--gray);
  padding: 2.188rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  min-height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(239, 221, 222, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 768px) {
    width: calc(50% - 6px);
    padding: 1.5rem 0;
    min-height: 48px;
  }

  @media screen and (max-width: 480px) {
    width: calc(50% - 4px);
    padding: 1.25rem 0;
    min-height: 52px;
  }
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
  }

  .ant-modal-header {
    border-radius: 12px 12px 0 0;
  }

  @media screen and (max-width: 768px) {
    .ant-modal {
      margin: 16px;
      max-width: calc(100vw - 32px);
    }

    .ant-modal-content {
      border-radius: 8px;
    }

    .ant-modal-header {
      border-radius: 8px 8px 0 0;
    }
  }

  @media screen and (max-width: 480px) {
    .ant-modal {
      margin: 8px;
      max-width: calc(100vw - 16px);
    }

    .ant-modal-content {
      border-radius: 6px;
    }

    .ant-modal-header {
      border-radius: 6px 6px 0 0;
    }
  }
`;

const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  const {
    GROOM_NAME,
    GROOM_ACCOUNT_NUMBER,
    GROOM_FATHER_NAME,
    GROOM_FATHER_ACCOUNT_NUMBER,
    GROOM_MOTHER_NAME,
    GROOM_MOTHER_ACCOUNT_NUMBER,
    BRIDE_NAME,
    BRIDE_ACCOUNT_NUMBER,
    // BRIDE_FATHER_NAME,
    // BRIDE_FATHER_ACCOUNT_NUMBER,
    // BRIDE_MOTHER_NAME,
    // BRIDE_MOTHER_ACCOUNT_NUMBER,
  } = useEnvironmentVariables();

  return (
    <ExtendedWrapper data-aos="fade-up">
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>마음 전하실 곳</Title>
      </Divider>
      <Content>
        참석이 어려우신 분들을 위해 기재했습니다. <br />
        너그러운 마음으로 양해 부탁드립니다.
      </Content>

      <ButtonWrap>
        <ContactButton onClick={() => setGroomVisible(true)}>
          <CheckCircleTwoTone
            style={{ fontSize: 64, marginBottom: 16 }}
            twoToneColor="#829fe0"
          />
          <br />
          <SubContent>신랑측 계좌번호 확인</SubContent>
        </ContactButton>
        <ContactButton onClick={() => setBrideVisible(true)}>
          <CheckCircleTwoTone
            style={{ fontSize: 64, marginBottom: 16 }}
            twoToneColor="#fe7daf"
          />
          <br />
          <SubContent>신부측 계좌번호 확인</SubContent>
        </ContactButton>
      </ButtonWrap>
      <StyledModal
        title={<b>신랑측 계좌번호</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[
          <Description key="groom-footer">
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div>
          <b>신랑 : 김진원</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {GROOM_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>부 : 김봉규</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {GROOM_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>모 : 송혜정</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {GROOM_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </StyledModal>
      <StyledModal
        title={<b>신부측 계좌번호</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={[
          <Description key="bride-footer">
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        {/* <div>
          <b>부 : {BRIDE_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모 :{BRIDE_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div> */}
        <div>
          <b>신부 : 이연제</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {BRIDE_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </StyledModal>
      <NeutralImage
        src={import.meta.env.BASE_URL + 'end.gif'}
        alt="추억 이미지"
      />
    </ExtendedWrapper>
  );
};

export default CongratulatoryMoney;
