import { motion } from 'framer-motion';

const NavigationButton = ({ currentStep, onNext }) => {
  const getButtonText = () => {
    if (currentStep === 4) {
      return 'Back to Step 1';
    }
    return `Step ${currentStep + 1}`;
  };

  return (
    <motion.button
      className="step-navigation-btn"
      onClick={onNext}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {getButtonText()}
    </motion.button>
  );
};

export default NavigationButton; 