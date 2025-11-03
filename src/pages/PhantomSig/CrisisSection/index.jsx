import { VideoPaths, Texts, Titles } from '../../../constants';

import './styles.css';


const CrisisSection = () => {
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
            <video 
              src={VideoPaths.klingMp3} 
              autoPlay 
              muted 
              loop 
              playsInline 
              alt="Kling video" 
              className="crisis-section-video" 
            />
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