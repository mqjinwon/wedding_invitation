import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
const Flower = import.meta.env.BASE_URL + 'flower2.png';

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
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

const Content = styled.div`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.8;
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.9;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

const Map = styled.div`
  width: 100%;
  padding: 0;

  @media screen and (max-width: 768px) {
    margin: 0 -12px;
    width: calc(100% + 24px);
  }

  @media screen and (max-width: 480px) {
    margin: 0 -8px;
    width: calc(100% + 16px);
  }
`;

const BusButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border: 1px solid var(--title-color);
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
  min-height: 44px;
  min-width: 29px;
  width: 66%;
  max-width: 240px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const BusDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  animation: fadeIn 0.3s ease-in;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    gap: 6px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 480px) {
    gap: 4px;
    margin-bottom: 12px;
  }
`;

const Location = () => {
  const [showBusDetails, setShowBusDetails] = useState(false);

  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement('script');
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1753587778659",
    "key" : "5xqv9qeza2u",
    "mapWidth" : "640",
    "mapHeight" : "480"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  useEffect(() => {
    // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
    // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
    (function () {
      let c = window.location.protocol === 'https:' ? 'https:' : 'http:';
      let a = '16137cec';

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + '//t1.daumcdn.net/roughmap/',
        url_protocal: c,
      };
      let b =
        c +
        '//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/' +
        a +
        '/roughmapLander.js';

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement('script');
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map
        id="daumRoughmapContainer1753587778659"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
        <Title>찾아오시는 길</Title>
        <br />
        <span style={{ fontWeight: 'bold' }}>프란치스코 교육회관</span>
        <br />
        서울 중구 정동길 9 (정동 17-1, 04518)
        <br />
        &nbsp;
        <a
          href="https://kko.kakao.com/SfeKhu-9eY"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#3A6B5A',
            textDecoration: 'underline',
            fontWeight: 'normal',
            fontSize: '0.95em',
          }}
        >
          카카오지도
        </a>
        &nbsp;|&nbsp;
        <a
          href="https://map.naver.com/p/entry/place/13353340?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202507271836&locale=ko&svcName=map_pcv5"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#3A6B5A',
            textDecoration: 'underline',
            fontWeight: 'normal',
            fontSize: '0.95em',
          }}
        >
          네이버지도
        </a>
        <br />
        <br />
        <Title>지하철 이용시</Title>
        <br />
        5호선 서대문역 5호선 출구에서 경향신문사 방향으로 7분 거리
        <br />
        1,2호선 시청역 1,2,12번 출구(덕수궁 방향)에서 정동길을 따라 15분 거리
        <br />
        <br />
        <Title>버스 이용시</Title>
        <br />
        <span style={{ fontWeight: 'bold' }}>서울역사박물관 앞 하차</span>
        <br />
        <BusButton
          onMouseEnter={() => setShowBusDetails(true)}
          onMouseLeave={() => setShowBusDetails(false)}
          onClick={() => setShowBusDetails(!showBusDetails)}
        >
          <span style={{ fontWeight: '500' }}>🚌 이용 가능한 버스 보기</span>
        </BusButton>
        {showBusDetails && (
          <BusDetails>
            {/* 파란색 간선버스 */}
            <div
              style={{
                border: '1px solid #1976d2',
                borderRadius: '6px',
                padding: '8px',
                backgroundColor: 'rgba(25, 118, 210, 0.05)',
              }}
            >
              <div
                style={{
                  color: '#1976d2',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                  marginBottom: '6px',
                }}
              >
                파란색 간선버스
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}
              >
                {[
                  '101',
                  '103',
                  '150',
                  '160',
                  '260',
                  '270',
                  '271',
                  '273',
                  '370',
                  '470',
                  '600',
                  '601',
                  '602',
                  '704',
                  '702A 서오릉',
                  '702B 용두초교',
                  '705',
                  '720',
                  '721',
                  '741',
                  '6002',
                  'N26',
                  'N37',
                  'N75',
                ].map((bus, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: '#1976d2',
                      color: 'white',
                      padding: '2px 5px',
                      borderRadius: '3px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                    }}
                  >
                    {bus}
                  </span>
                ))}
              </div>
            </div>

            {/* 초록색 일반버스 */}
            <div
              style={{
                border: '1px solid #008000',
                borderRadius: '6px',
                padding: '8px',
                backgroundColor: 'rgba(0, 128, 0, 0.05)',
              }}
            >
              <div
                style={{
                  color: '#008000',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                  marginBottom: '6px',
                }}
              >
                초록색 일반버스
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}
              >
                {['790', '1002', '7019', '8101', '8701'].map((bus, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: '#008000',
                      color: 'white',
                      padding: '2px 5px',
                      borderRadius: '3px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                    }}
                  >
                    {bus}
                  </span>
                ))}
              </div>
            </div>

            {/* 빨간색 광역버스 */}
            <div
              style={{
                border: '1px solid #ff0000',
                borderRadius: '6px',
                padding: '8px',
                backgroundColor: 'rgba(255, 0, 0, 0.05)',
              }}
            >
              <div
                style={{
                  color: '#ff0000',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                  marginBottom: '6px',
                }}
              >
                빨간색 광역버스
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}
              >
                {[
                  '1004',
                  '8600',
                  '8601',
                  '9709',
                  '9709N',
                  '9710',
                  '9710-1',
                  'G6005',
                ].map((bus, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: '#ff0000',
                      color: 'white',
                      padding: '2px 5px',
                      borderRadius: '3px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                    }}
                  >
                    {bus}
                  </span>
                ))}
              </div>
            </div>
          </BusDetails>
        )}
        <br />
        <Title>주차</Title>
        <br />
        <span style={{ fontWeight: 'bold' }}>이화정동빌딩</span>
        <br />
        주말 시내 교통 체증이 예상되오니 대중교통을 권장드리며,
        <br />
        승용차를 가져오시는 경우{' '}
        <span style={{ fontWeight: 'bold' }}>이화정동빌딩 주차장</span>을
        이용하시기 바랍니다.
        <br />
        <br />
        <Title>축하 화환</Title>
        <br />
        축하 화환은 정중히 사양합니다.
        <br />
        화환을 대신하여 어려운 이웃을 위해 쌀 ·성금으로 기부하실 수 있습니다.
        <br />
        (성금 기부 문의처 : 02) 6364-2245)
      </Content>
    </Wrapper>
  );
};

export default Location;
