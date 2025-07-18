import { motion } from 'framer-motion';

const SectionContent = ({ title, description, boldText }) => {
  return (
    <motion.div 
      key={`${title}-${description}-${boldText}`}
      className="analytics-section-content"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.h1 
        className="analytics-section-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h1>
      <motion.p 
        className="analytics-section-description"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <motion.p 
        className="analytics-section-bold"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {boldText}
      </motion.p>
    </motion.div>
  );
};

export default SectionContent; 