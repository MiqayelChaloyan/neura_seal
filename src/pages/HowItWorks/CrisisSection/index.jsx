import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './styles.css';

const steps = [
  {
    title: 'Step 1: The Crisis',
    description: 'Counterfeiting drains trillions from the global economy, destabilizes industries, and destroys trust.',
    boldText: 'We built the technology to end it.',
    color: '#088D95',
    image: 'https://cdn.viberu.ru/articles/news/2025/05.2025/13.05/tehnologia-sensornogo-ekrana-ob-edinaet-sovremennyh-pol-zovatelei-mobil-nyh-telefonov-sozdannyh-iskusstvennym-intellektom_1170x669.jpg',
    hasContent: true,
  },
  {
    title: 'Step 2: The Solution',
    description: 'NeuraSeal provides a secure, verifiable seal that cannot be duplicated, restoring trust.',
    boldText: 'Advanced technology meets simple implementation.',
    color: '#E85D04',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80',
    hasContent: true,
  },
  {
    title: 'Step 3: The Impact',
    description: 'Brands reclaim revenue, consumers gain confidence, and supply-chain integrity is restored.',
    boldText: 'The future of authentic commerce.',
    color: '#1D3557',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80',
    hasContent: true,
  },
  {
    title: '',
    description: '',
    boldText: '',
    color: '#2A5F73',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    hasContent: false,
  },
];

const CrisisSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollY = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;

      const progress = (scrollY - containerTop) / containerHeight;
      const index = Math.floor(progress * steps.length);
      const clamped = Math.max(0, Math.min(steps.length - 1, index));

      if (clamped !== activeStep) {
        setActiveStep(clamped);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep]);

  const currentStep = steps[activeStep];
  const isReverse = activeStep % 2 === 1;

  return (
    <div ref={containerRef} className="neura-crisis-outer">
      <div className="neura-crisis-container">
        <div className="neura-crisis-divider-center" />
        <div className={`neura-crisis-main ${isReverse ? 'reverse' : ''}`}>
          <AnimatePresence mode="wait">
            {currentStep.hasContent && (
              <motion.div
                key={`step-content-${activeStep}`}
                className="neura-crisis-content"
                initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isReverse ? -50 : 50 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="neura-crisis-title">{currentStep.title}</h1>
                <p className="neura-crisis-description">{currentStep.description}</p>
                <p className="neura-crisis-bold">{currentStep.boldText}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            key={`step-image-${activeStep}`}
            className={`neura-crisis-visual ${!currentStep.hasContent ? 'full-screen' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              backgroundColor: currentStep.color,
              backgroundImage: `url(${currentStep.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CrisisSection;
