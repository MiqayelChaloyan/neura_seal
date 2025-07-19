import { motion } from 'framer-motion';
import video from '../../../../assets/videos/videoundefined.mp4';

const SectionImage = ({ image, showText, isLargeImage }) => {
  return (
    <div 
      className={`analytics-section-visual ${!showText ? 'full-width' : ''} ${isLargeImage ? 'large-image' : ''}`}
    >
      {isLargeImage ? (
        <motion.img
          src={image}
          alt="Real-time analytics dashboard visual"
          key={image}
          initial={{ 
            opacity: 0, 
            scale: 0.85,
            rotateX: 5,   // Adding a slight tilt to the image for depth
            y: 60         // Start slightly below the final position for the zoom effect
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,     // Scale to 1 for full size
            rotateX: 0,   // Reset tilt to make it upright
            y: 0          // Smooth slide from bottom to top
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.8, 
            y: -50        // Slight slide out with a smaller scale
          }}
          transition={{ 
            duration: 1.8, 
            ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing for cinematic effect
            delay: 0.1
          }}
          className="large-image-content"
        />
      ) : (
        <video className="full-video" src={video} autoPlay muted />
      )}
    </div>
  );
};

export default SectionImage;
