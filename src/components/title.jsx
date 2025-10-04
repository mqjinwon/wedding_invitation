
import styled from 'styled-components';
import { useEnvironmentVariables } from '../hooks/useEnvironmentVariables';
const BackgroundImage = import.meta.env.BASE_URL + 'upper_image.png';

const Layout = styled.div`
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (max-width: 768px) {
    padding: 0 12px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 8px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */

  @media screen and (max-width: 768px) {
    padding-top: 32px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
  }
`;

const ImageBackground = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
`;

const WeddingInvitation = styled.p`
  font-size: 0.825rem;
  opacity: 0.45;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 20px;
  }
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 16px;
  }
`;

const Title = () => {
  const { WEDDING_DATE, WEDDING_LOCATION, GROOM_NAME, BRIDE_NAME } =
    useEnvironmentVariables();

  return (
    <Layout>
      <ImageBackground 
        src={BackgroundImage} 
        alt="Wedding invitation background" 
      />
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          김진원 &#38; 이연제
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
};

export default Title;
