import React, { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'antd/dist/reset.css';
import styled from 'styled-components';
import Title from './components/title.jsx';
import Greeting from './components/greeting.jsx';
import Gallery from './components/gallery.jsx';
import Location from './components/location.jsx';
import Quote from './components/quote.jsx';
import CongratulatoryMoney from './components/congratulatoryMoney.jsx';
import Share from './components/share.jsx';
import Guestbook from './components/guestbook.jsx';
import Footer from './components/footer.jsx';
import AudioLoader from './components/audioLoader.jsx';
import MusicControl from './components/musicControl.jsx';
const Song = import.meta.env.BASE_URL + 'song.mp3';

const Wrapper = styled.div`
  background-image: url(${import.meta.env.BASE_URL + 'GroovePaper.png'});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
  color: var(--text-color);
  position: relative;
`;

const GlobalFontStyle = styled.div`
  @font-face {
    font-family: 'mom_to_daughter';
    src: url(${import.meta.env.BASE_URL + 'fonts/mom_to_daughter.woff2'}) format('woff2'),
         url(${import.meta.env.BASE_URL + 'fonts/mom_to_daughter.woff'}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

const App = () => {
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef(null);

  // 오디오 로딩 및 재생 최적화
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 타임아웃 설정 (5초 후 자동으로 로딩 완료 처리)
    const timeoutId = setTimeout(() => {
      console.log('Audio loading timeout - proceeding anyway');
      setAudioLoaded(true);
    }, 5000);

    const handleCanPlay = () => {
      console.log('Audio can play');
      clearTimeout(timeoutId);
      setAudioLoaded(true);
    };

    const handleCanPlayThrough = () => {
      console.log('Audio can play through');
      clearTimeout(timeoutId);
      setAudioLoaded(true);
    };

    const handleError = e => {
      console.error('Audio loading failed:', e);
      clearTimeout(timeoutId);
      setAudioError(true);
      setAudioLoaded(true);
    };

    const handleLoadStart = () => {
      console.log('Audio loading started');
    };

    const handleProgress = () => {
      console.log('Audio loading progress');
    };

    const handleLoadedData = () => {
      console.log('Audio data loaded');
      clearTimeout(timeoutId);
      setAudioLoaded(true);
    };

    const handleLoadedMetadata = () => {
      console.log('Audio metadata loaded');
      clearTimeout(timeoutId);
      setAudioLoaded(true);
    };

    // 이벤트 리스너 등록
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('progress', handleProgress);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    audio.addEventListener('error', handleError);

    return () => {
      clearTimeout(timeoutId);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('progress', handleProgress);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  useEffect(() => {
    // 카카오톡 SDK가 이미 로드되어 있는지 확인
    if (window.Kakao) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    
    script.onload = () => {
      console.log('카카오톡 SDK 로드 완료');
    };
    
    script.onerror = () => {
      console.error('카카오톡 SDK 로드 실패');
    };
    
    document.body.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      const existingScript = document.querySelector('script[src*="kakao.min.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  // 음악 토글 핸들러
  const handleMusicToggle = isPlaying => {
    console.log('Music toggled:', isPlaying ? 'ON' : 'OFF');
  };

  return (
    <Wrapper>
      <GlobalFontStyle />
      <AudioLoader loaded={audioLoaded} error={audioError} />
      <MusicControl audioRef={audioRef} onMusicToggle={handleMusicToggle} />
      <audio
        ref={audioRef}
        preload="auto"
        loop
        style={{ display: 'none' }}
        onLoadStart={() => console.log('Audio load start')}
        onCanPlay={() => {
          console.log('Audio can play from inline');
          setAudioLoaded(true);
        }}
        onError={e => {
          console.error('Audio error from inline:', e);
          setAudioError(true);
          setAudioLoaded(true);
        }}
      >
        <source src={Song} type="audio/mpeg" />
        <source src={Song} type="audio/mp3" />
        <track kind="captions" />
      </audio>
      <Title />
      <Greeting />
      <Gallery />
      <Location />
      <Quote />
      <CongratulatoryMoney />
      <Share />
      <Guestbook />
      <Footer
        style={{
          background: 'var(--dark-green)',
          opacity: 0.8,
          textAlign: 'center',
          color: 'var(--dark-green)',
        }}
      >
        <div style={{ marginBottom: '8px', color: 'var(--background-color)' }}>
          Copyright © 2025 Jinwon Kim & Yeonje Lee
        </div>
        <div
          style={{
            fontSize: '0.7rem',
            opacity: 0.6,
            marginTop: '4px',
            fontStyle: 'italic',
            color: 'var(--background-color)',
          }}
        >
          Background Music:{' '}
          <a
            href="https://youtu.be/RbCjnviTo_s?si=oj1JppC3nud_nu96"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'underline',
              opacity: 0.8,
            }}
          >
            YouTube
          </a>
        </div>
      </Footer>
    </Wrapper>
  );
};

export default App; 