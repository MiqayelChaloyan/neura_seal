import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import SectionContent from './components/SectionContent';
import SectionImage from './components/SectionImage';

// import map1 from '../../../assets/images/Screenshot from 2025-07-18 18-04-23_PhotoGrid.png';
import step1Image from '../../../assets/gif/step_1.gif';
import step2Image from '../../../assets/gif/step_2.gif';
import step3Image from '../../../assets/gif/step_3.gif';
import step4Image from '../../../assets/images/Screenshot from 2025-07-18 18-04-23_PhotoGrid.png';

import './styles.css';


const Section = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const lastScrollTop = useRef(0);

  // Set loaded state after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll navigation
  useEffect(() => {
    let wheelTimeout;
    
    const handleWheel = (e) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!isInView) return;
      
      // Prevent default scroll behavior when in this section
      e.preventDefault();
      
      // Clear previous timeout
      clearTimeout(wheelTimeout);
      
      // Debounce wheel events - fast response for scroll
      wheelTimeout = setTimeout(() => {
        const deltaY = e.deltaY;
        
        if (deltaY > 0 && currentStep < 4) {
          // Scrolling down
          setCurrentStep(prev => prev + 1);
        } else if (deltaY < 0 && currentStep > 1) {
          // Scrolling up
          setCurrentStep(prev => prev - 1);
        }
      }, 100);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (section) {
        section.removeEventListener('wheel', handleWheel);
      }
      clearTimeout(wheelTimeout);
    };
  }, [currentStep]);

  // Auto-advance content every 10.1 seconds, but only after initial load
  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < 4) {
          return prevStep + 1;
        } 
        // Stop at step 4, don't loop back
        return prevStep;
      });
    }, 10100);

    return () => clearInterval(interval);
  }, [isLoaded]);

  const getContent = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "Step 1: Seal Detection",
          description: "Advanced AI-powered scanning technology detects and analyzes security seals in real-time.",
          boldText: "Our neural network identifies counterfeit patterns, tampering attempts, and authentication markers with unprecedented accuracy across your entire supply chain.",
          image: step1Image,
          showText: true,
          isLargeImage: false
        };
      case 2:
        return {
          title: "Step 2: Advanced Authentication",
          description: "Multi-layered verification process ensures only genuine products pass through your system.",
          boldText: "Combines blockchain verification, cryptographic signatures, and machine learning to authenticate every seal with 99.9% accuracy.",
          image: step2Image,
          showText: true,
          isLargeImage: false
        };
      case 3:
        return {
          title: "Step 3: Real-Time Analytics & Threat Intelligence",
          description: "Live dashboard provides comprehensive insights into your supply chain security.",
          boldText: "Track detection rates, scan volumes, authentication percentages, and estimated financial losses prevented — giving your organization unmatched visibility and control.",
          image: step3Image,
          showText: true,
          isLargeImage: false
        };
      case 4:
        return {
          title: "",
          description: "",
          boldText: "",
          image: step4Image,
          showText: false,
          isLargeImage: true
        };
      default:
        return {
          title: "Step 1: Seal Detection",
          description: "Advanced AI-powered scanning technology detects and analyzes security seals in real-time.",
          boldText: "Our neural network identifies counterfeit patterns, tampering attempts, and authentication markers with unprecedented accuracy across your entire supply chain.",
          image: step1Image,
          showText: true,
          isLargeImage: false
        };
    }
  };

  const content = getContent();

  return (
    <div className="analytics-section-outer" ref={sectionRef}>
      {/* Step indicator */}
      {/* <div className="step-indicator">
        <span className="step-counter">Step {currentStep} of 4</span>
        <div className="step-dots">
          {[1, 2, 3, 4].map((step) => (
            <div 
              key={step} 
              className={`step-dot ${step === currentStep ? 'active' : ''}`}
              onClick={() => setCurrentStep(step)}
            />
          ))}
        </div>
      </div> */}

      {/* Vertical line and dots outside the container */}
      <div className="vertical-line-wrapper">
        <div className="analytics-dot top"></div>
        <div className="vertical-divider"></div>
        <div className="analytics-dot bottom"></div>
      </div>

      {/* Container with extended borders and center line */}
      <div className={`analytics-section-container ${content.isLargeImage ? 'no-borders' : ''}`}>
        {!content.isLargeImage && <div className="vertical-divider-center"></div>}

        <div className="analytics-section-main">
          {!content.isLargeImage && <AnimatePresence mode="wait">
            {content.showText && (
              <SectionContent 
                key={currentStep}
                title={content.title}
                description={content.description}
                boldText={content.boldText}
              />
            )}
          </AnimatePresence>}
		  
          <SectionImage 
            key={currentStep}
            image={content.image}
            showText={content.showText}
            isLargeImage={content.isLargeImage}
            currentStep={currentStep}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;


