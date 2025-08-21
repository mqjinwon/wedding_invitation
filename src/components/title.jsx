
import styled from 'styled-components';
import { useEnvironmentVariables } from '../hooks/useEnvironmentVariables';
const BackgroundVideo = import.meta.env.BASE_URL + 'BackgroundVideo.mp4';

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

const VideoBackground = styled.video`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    max-height: 300px;
  }

  @media screen and (max-width: 480px) {
    max-height: 250px;
  }
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
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={BackgroundVideo} type="video/mp4" />
      </VideoBackground>
    </Layout>
  );
};

export default Title;
