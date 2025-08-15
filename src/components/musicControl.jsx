import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SoundOutlined, CustomerServiceOutlined } from '@ant-design/icons';

const MusicControlWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    top: 16px;
    right: 16px;
    gap: 6px;
  }

  @media screen and (max-width: 480px) {
    top: 12px;
    right: 12px;
    gap: 4px;
  }
`;

const MusicButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: var(--music-button-bg);
  color: var(--background-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: var(--music-button-hover);
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  &.playing {
    background: var(--music-button-playing);
    color: var(--music-button-playing-text);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--light-yellow);
    }
    70% {
      box-shadow: 0 0 0 5px var(--light-yellow);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
    }
  }

  @media screen and (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 16px;
    min-height: 44px;
    min-width: 44px;
  }

  @media screen and (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 18px;
    min-height: 48px;
    min-width: 48px;
  }
`;

const MusicLabel = styled.div`
  font-size: 10px;
  color: var(--title-color);
  text-align: center;
  font-weight: 500;
  opacity: 0.8;
  background: var(--music-label-bg);
  padding: 2px 6px;
  border-radius: 8px;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 9px;
    padding: 3px 8px;
  }

  @media screen and (max-width: 480px) {
    font-size: 8px;
    padding: 4px 10px;
  }
`;

const MusicControl = ({ audioRef, onMusicToggle }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      // 노래가 끝나면 처음부터 다시 재생
      audio.currentTime = 0;
      audio.play().catch(e => {
        console.log('Music replay failed:', e);
      });
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioRef]);

  const handleMusicToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => {
        console.log('Music play failed:', e);
      });
    }

    if (onMusicToggle) {
      onMusicToggle(!isPlaying);
    }
  };

  return (
    <MusicControlWrapper>
      <MusicButton
        onClick={handleMusicToggle}
        className={isPlaying ? 'playing' : ''}
        title={isPlaying ? '음악 끄기' : '음악 켜기'}
      >
        {isPlaying ? <SoundOutlined /> : <CustomerServiceOutlined />}
      </MusicButton>
      <MusicLabel>{isPlaying ? '음악 ON' : '음악 OFF'}</MusicLabel>
    </MusicControlWrapper>
  );
};

export default MusicControl;
