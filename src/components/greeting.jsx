
import styled from 'styled-components';
import { Divider } from 'antd';
import { useEnvironmentVariables } from '../hooks/useEnvironmentVariables';
import { Content, Title, Wrapper } from '../styles/common';

// const GroomBride = styled.p`
//   font-size: 1.0rem;
//   line-height: 1.75;
//   opacity: 0.85;
//   margin-bottom: 0px;
//   width: 100%;
//   text-align: center;

//   @media screen and (max-width: 768px) {
//     font-size: 0.9rem;
//     line-height: 1.8;
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 0.9rem;
//     line-height: 1.9;
//   }
// `;

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
      <Content>
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
        <br />
      </Content>
      <Content>
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 아들{' '}
        <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
          {GROOM_NAME}
        </span>
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 딸{' '}
        <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
          {BRIDE_NAME}
        </span>
        <br />
        <br />
      </Content>
    </Wrapper>
  );
};

export default Greeting;
