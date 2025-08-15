import React, { useEffect, useState, useRef } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../styles/antd-override.css';
import 'antd/dist/reset.css';
import Gallery from '../components/gallery';
import Greeting from '../components/greeting';
import Title from '../components/title';
import AudioLoader from '../components/audioLoader';
import MusicControl from '../components/musicControl';
import '../styles/index.css';

import GroovePaper from '../assets/GroovePaper.png';
import Location from '../components/location';
import CongratulatoryMoney from '../components/congratulatoryMoney';
import Share from '../components/share';
import Guestbook from '../components/guestbook';
import Quote from '../components/quote';
import Song from '../assets/song.mp3';

import AOS from 'aos';
import 'aos/dist/aos.css';

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: var(--background-color);
  background-image: url(${GroovePaper});
  background-repeat: repeat;
  background-size: auto;
  width: 100%;
  color: var(--text-color);
  min-height: 100vh;

  /* 모바일 최적화 */
  @media screen and (max-width: 768px) {
    background-size: 200px auto;
    background-position: center;
  }

  @media screen and (max-width: 480px) {
    background-size: 150px auto;
    background-position: center;
  }
`;

const IndexPage = () => {
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef(null);

  // 오디오 로딩 및 재생 최적화
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    console.log('Setting up audio...');

    // 오디오 설정
    audio.preload = 'auto';
    audio.crossOrigin = 'anonymous';

    // 타임아웃 설정 (5초 후 자동으로 로딩 완료 처리) - 더 빠르게
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
      // 에러가 발생해도 로딩 완료로 처리하여 앱이 계속 작동하도록 함
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

    // 로딩 시작
    console.log('Starting audio load...');
    audio.load();

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
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  // 음악 토글 핸들러
  const handleMusicToggle = isPlaying => {
    console.log('Music toggled:', isPlaying ? 'ON' : 'OFF');
  };

  return (
    <Wrapper>
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

export default IndexPage;
