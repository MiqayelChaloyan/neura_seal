import './styles.css';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import SectionContent from './components/SectionContent';
import SectionImage from './components/SectionImage';

import map1 from '../../../assets/images/Screenshot from 2025-07-18 18-04-23_PhotoGrid.png';


const Section = () => {
  const [currentStep, setCurrentStep] = useState(1); // Start with step 1 for regular section
  const [isLoaded, setIsLoaded] = useState(false);

  // Set loaded state after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance content every 10.5 seconds, but only after initial load
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
    }, 10500);

    return () => clearInterval(interval);
  }, [isLoaded]);

  const getContent = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "Step 1: Seal Detection",
          description: "Every scan feeds into a live global dashboard that reveals the geographic spread of counterfeit activity.",
          boldText: "Track detection rates, scan volumes, authentication percentages, and estimated financial losses prevented — giving your organization unmatched visibility and control across your supply chain.",
          image: map1,
          showText: true,
          isLargeImage: false
        };
      case 2:
        return {
          title: "Step 2: Advanced Authentication",
          description: "Every scan feeds into a live global dashboard that reveals the geographic spread of counterfeit activity.",
          boldText: "Track detection rates, scan volumes, authentication percentages, and estimated financial losses prevented — giving your organization unmatched visibility and control across your supply chain.",
          image: map1,
          showText: true,
          isLargeImage: false
        };
      case 3:
        return {
          title: "Step 3: Real-Time Analytics & Threat Intelligence",
          description: "Every scan feeds into a live global dashboard that reveals the geographic spread of counterfeit activity.",
          boldText: "Track detection rates, scan volumes, authentication percentages, and estimated financial losses prevented — giving your organization unmatched visibility and control across your supply chain.",
          image: map1,
          showText: true,
          isLargeImage: false
        };
      case 4:
        return {
          title: "",
          description: "",
          boldText: "",
          image: map1,
          showText: false,
          isLargeImage: true
        };
      default:
        return {
          title: "Step 1: Seal Detection",
          description: "Every scan feeds into a live global dashboard that reveals the geographic spread of counterfeit activity.",
          boldText: "Track detection rates, scan volumes, authentication percentages, and estimated financial losses prevented — giving your organization unmatched visibility and control across your supply chain.",
          image: map1,
          showText: true,
          isLargeImage: false
        };
    }
  };

  const content = getContent();

  return (
    <div className="analytics-section-outer">
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
                title={content.title}
                description={content.description}
                boldText={content.boldText}
              />
            )}
          </AnimatePresence>}
		  
          <SectionImage 
            image={content.image}
            showText={content.showText}
            isLargeImage={content.isLargeImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;


