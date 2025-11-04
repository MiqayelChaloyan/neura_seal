
import { useEffect, useRef, useState } from 'react';
import { VideoPaths, ImagePaths } from '../../../constants';
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

import './styles.css';


const VideoSection = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const videoRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
          setIsMobile(window.innerWidth <= 900);
        };
        
        // Check on initial load
        checkMobile();
        
        // Add resize listener
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
        <div className="video-section-outer">
        {/* <div className="vertical-line-wrapper">
          <div className="video-dot top"/>
          <div className="vertical-divider"/>
          <div className="video-dot bottom"/>
        </div> */}
        <div className="video-section-container">
          <h1 className="video-section-title">Watch the video</h1>
          <div className="video-section-main">
            <div className="video-section-visual">
              {showVideo ? (
                <div className="video-playing-wrapper">
                  <video 
                    ref={videoRef}
                    src={VideoPaths.phantomSigMp4} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    alt="PhantomSig video" 
                    className="video-section-video" 
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
                  <FaRegCirclePause size={isMobile? 40 : 70} color='#fff'/>
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
                  <img src={ImagePaths.media} alt="PhantomSig poster" className="video-poster-image" />
                  <span className="video-play-button" aria-hidden="true">
                  <FaRegCirclePlay size={isMobile? 40 : 70} color='#fff'/>
                  </span>
                </button>
              )}
            </div>
            </div>
        </div>
      </div>
    )
};

export default VideoSection;