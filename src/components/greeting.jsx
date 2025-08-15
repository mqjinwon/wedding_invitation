import React from 'react';
import styled from 'styled-components';
import { Divider } from 'antd';
import { useEnvironmentVariables } from '../hooks/useEnvironmentVariables';
import Flower from '../assets/flower1.png';

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
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

const Content = styled.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.8;
    margin-bottom: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.9;
    margin-bottom: 12px;
  }
`;

const GroomBride = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.8;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.9;
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

const Greeting = () => {
  const {
    GROOM_NAME,
    GROOM_FATHER_NAME,
    GROOM_MOTHER_NAME,
    BRIDE_NAME,
    BRIDE_FATHER_NAME,
    BRIDE_MOTHER_NAME,
  } = useEnvironmentVariables();

  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title>초대합니다</Title>
      </Divider>
      <Image src={Flower} />
      <Content>
        함께 보내는 열 한 번째 가을,
        <br />
        <br />
        소중한 분들을 모시고 평생 함께할 것을 약속하고자 합니다.
        <br />
        <br />
        가까이서 축복해주신다면 더없는 기쁨으로 간직하겠습니다.
      </Content>
      <GroomBride>
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 아들{' '}
        <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>
          {GROOM_NAME}
        </span>
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 딸{' '}
        <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>
          {BRIDE_NAME}
        </span>
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
