import React from 'react';
import styled from 'styled-components';
import QuotePaper from '../assets/Quote.png';
import Flower from '../assets/flower1.png';

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: 'mom_to_daughter';
  text-align: center;
  color: var(--title-color);
  line-height: 2.2rem;
  opacity: 1;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 500% 500%; /* 이미지를 3배 확대 */
  position: relative;
  padding: 60px 40px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
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

const Quote = () => {
  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        Please let my star rise on your night
        <br />
        나도 빛을 내어
        <br />
        누군가를 바라보는
        <br />
        작은 별이 되고 싶네요
        <br />
        <br />- AKMU, 작은별 -
      </Content>
    </Wrapper>
  );
};

export default Quote;
