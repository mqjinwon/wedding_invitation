import React, { useState } from 'react';
import { Button, Divider, message, Modal } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import Flower from '../assets/flower3.png';
import { useEnvironmentVariables } from '../hooks/useEnvironmentVariables';

const Wrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 18px;
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

const Title = styled.p`
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

const Content = styled.p`
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
    flex-direction: column;
    gap: 12px;
    margin-bottom: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
    margin-bottom: 2rem;
  }
`;

const ContactButton = styled.div`
  width: 10.75rem;
  border: 1px solid var(--light-green);
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
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    padding: 1.5rem 0;
    min-height: 48px;
  }

  @media screen and (max-width: 480px) {
    padding: 1.25rem 0;
    min-height: 52px;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;

  @media screen and (max-width: 768px) {
    width: 1.2rem;
    padding-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    width: 1.1rem;
    padding-bottom: 24px;
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
    BRIDE_FATHER_NAME,
    BRIDE_FATHER_ACCOUNT_NUMBER,
    BRIDE_MOTHER_NAME,
    BRIDE_MOTHER_ACCOUNT_NUMBER,
  } = useEnvironmentVariables();

  return (
    <Wrapper>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>축하의 마음을 전하세요</Title>
      </Divider>
      <Image src={Flower} />
      <Content data-aos="fade-up">
        축하의 마음을 담아 축의금을 전달해 보세요.
      </Content>

      <ButtonWrap>
        <ContactButton data-aos="fade-up" onClick={() => setGroomVisible(true)}>
          <CheckCircleTwoTone
            style={{ fontSize: 64, marginBottom: 16 }}
            twoToneColor="#829fe0"
          />
          <br />
          <SubContent>신랑측 계좌번호 확인</SubContent>
        </ContactButton>
        <ContactButton data-aos="fade-up" onClick={() => setBrideVisible(true)}>
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
          <b>부 : {GROOM_FATHER_NAME}</b>
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
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모 : {GROOM_MOTHER_NAME}</b>
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
        <div>
          <b>신랑 {GROOM_NAME}</b>
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
          <b>신부 {BRIDE_NAME}</b>
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
    </Wrapper>
  );
};

export default CongratulatoryMoney;
