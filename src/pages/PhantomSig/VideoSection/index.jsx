import { VideoPaths } from "../../../constants";

import './styles.css';


const VideoSection = () => {
    return (
        <section className="phantom-video-section">
            <video 
            src={VideoPaths.phantomSigMp3}
            autoPlay 
            muted 
            loop 
            playsInline 
            alt="Kling video" 
            className="phantom-section-video" 
            />
        </section>
    )
};

export default VideoSection;