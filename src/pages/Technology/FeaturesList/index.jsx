import React, { useState, useEffect } from 'react';

import { ImagePaths } from '../../../constants';

import features from './features';

import './styles.css';


const FeaturesList = () => {
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  useEffect(() => {
    const animateFeatures = () => {
      features.forEach((_, index) => {
        setTimeout(() => {
          setVisibleFeatures(prev => [...prev, index]);
        }, index * 300);
      });
    };

    const timer = setTimeout(animateFeatures, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="features-wrapper">
      {features.map(({ number, title, subtitle, description }, index) => (
        <div 
          className={`feature-card-wrapper ${visibleFeatures.includes(index) ? 'feature-visible' : 'feature-hidden'}`}
          key={number}
        >
          {number === '01' && <h1 className="features-title">The Technology</h1>}
          <div 
            className="feature-card"
            style={{ 
              ...(number === '01' ? {
                backgroundImage: `url(${ImagePaths.features_bg})`,
                backgroundSize: 'fill',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left bottom',
                backgroundColor: '#000407'
              } : number === '02' ? {
                backgroundImage: `url(${ImagePaths.features_bg})`,
                backgroundSize: 'fill',
                backgroundRepeat: 'repeat-y',
                backgroundColor: '#000407',
                backgroundPosition: 'left'
              } : number === '03' ? {
                backgroundImage: `url(${ImagePaths.features_bg})`,
                backgroundSize: 'fill',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left top',
                backgroundColor: '#000407'
              } : {})
            }}
          >
            <div className="feature-number">{number}</div>
            <div className="feature-content">
              <h2 className="feature-title">{title}</h2>
              <p className="feature-subtitle">{subtitle}</p>
            </div>
            <div className="feature-description">{description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
