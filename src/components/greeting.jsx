
import styled from 'styled-components';
import { Divider } from 'antd';
import { useEnvironmentVariables } from '../hooks/useEnvironmentVariables';
import { Content, Title, Wrapper } from '../styles/common';

// Content 스타일을 greeting에 맞게 확장
const GreetingContent = styled(Content)`
  font-size: 1rem;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    margin-bottom: 12px;
  }
`;

const GroomBride = styled.p`
  font-size: 0.9rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.8;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.9;
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
      <GreetingContent>
        소망이 축복 속에서 기쁨으로 이루어지는 날,
        <br />
        <br />
        저희 두 사람이 하나가 될<br />
        뜻깊은 날을 맞게 되었습니다.
        <br />
        <br />
        소중하고 힘찬 내디딤이 될 수 있도록
        <br />
        격려해 주시면 더없는 기쁨이 되겠습니다.
        <br />
      </GreetingContent>
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
        <br />
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
