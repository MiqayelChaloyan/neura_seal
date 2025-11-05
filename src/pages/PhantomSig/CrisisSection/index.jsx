import { useEffect, useRef, useState } from 'react';
import { VideoPaths, Texts, Titles, ImagePaths } from '../../../constants';
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

import './styles.css';


const CrisisSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!showVideo || !videoRef.current) return;
    const playPromise = videoRef.current.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      setIsPlaying(!videoRef.current.paused);
    }
  }, [showVideo]);

  const handleToggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="crisis-section-outer">
      <div className="vertical-line-wrapper">
        <div className="crisis-dot top"/>
        <div className="vertical-divider"/>
        <div className="crisis-dot bottom"/>
      </div>
      <div className="crisis-section-container">
        <div className="vertical-divider-center"/>
        <div className="crisis-section-main">
          <div className="crisis-section-visual">
            {showVideo ? (
              <div className="video-playing-wrapper">
                <video
                  ref={videoRef}
                  src={VideoPaths.klingMov}
                  autoPlay
                  loop
                  playsInline
                  alt="Kling video"
                  className="crisis-section-video"
                  onClick={handleToggle}
                />
                {!isPlaying && (
                  <button
                    type="button"
                    className="video-play-button"
                    onClick={handleToggle}
                    aria-label="Play video"
                  >
                    <span className="video-play-button" aria-hidden="true">
                      <FaRegCirclePause size={isMobile ? 40 : 70} color='#fff'/>
                    </span>
                  </button>
                )}
              </div>
            ) : (
              <button
                type="button"
                className="video-poster-wrapper"
                onClick={() => setShowVideo(true)}
                aria-label="Play video"
              >
                <img src={ImagePaths.crisis_video} alt="Kling poster" className="video-poster-image" />
                <span className="video-play-button" aria-hidden="true">
                  <FaRegCirclePlay size={isMobile ? 40 : 70} color='#fff'/>
                </span>
              </button>
            )}
          </div>
          <div className="crisis-section-content">
            <h1 className="crisis-section-title">{Titles.thePhantomSig}</h1>
            <p className="crisis-section-description">
              {Texts.weBuiltTheTechnologyToEndIt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisSection;