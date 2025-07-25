import { motion } from 'framer-motion';
// import video from '../../../../assets/videos/videoundefined.mp4';
// import step1 from '../../../../assets/gif/step_1.gif';
// import step2 from '../../../../assets/gif/step_2.gif';
// import step3 from '../../../../assets/gif/step_3.gif';


const SectionImage = ({ image, showText, isLargeImage, currentStep }) => {
  // Determine if we should use advanced animations (only for steps 3 and 4)
  const useAdvancedAnimations = currentStep === 3 || currentStep === 4;

  return (
    <div 
      className={`analytics-section-visual ${!showText ? 'full-width' : ''} ${isLargeImage ? 'large-image' : ''}`}
    >
      {/* {isLargeImage ? ( */}
        <motion.img
          src={image}
          alt="Real-time analytics dashboard visual"
          key={image}
          loading="lazy"
          initial={useAdvancedAnimations && { 
            opacity: 0, 
            
            scale: 0.85,
            rotateX: 5,   // Adding a slight tilt to the image for depth
            y: 60         // Start slightly below the final position for the zoom effect
          }}
          animate={useAdvancedAnimations && { 
            opacity: 1, 
            scale: 1,     // Scale to 1 for full size
            rotateX: 0,   // Reset tilt to make it upright
            y: 0          // Smooth slide from bottom to top
          }}
          exit={useAdvancedAnimations && { 
            opacity: 0, 
            scale: 0.8, 
            y: -50        // Slight slide out with a smaller scale
          }}
          transition={useAdvancedAnimations && { 
            duration: 1.8, 
            ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing for cinematic effect
            delay: 0.1
          }}
          className="large-image-content"
        />
      {/* ) */}
    </div>
  );
};

export default SectionImage;
