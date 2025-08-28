import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ImagePaths } from '../../../constants';

import features from './features';

import './styles.css';


const FeaturesList = () => {
  const { t } = useTranslation();
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
          {number === '01' && <h1 className="features-title">{t('titles.theTechnology')}</h1>}
          <div 
            className="feature-card"
            style={{ 
              ...(number === '01' ? {
                backgroundImage: `url(${ImagePaths.features_bg_2})`,
                backgroundSize: '50%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center left',
                backgroundColor: '#000407',
              } : number === '02' ? {
                backgroundImage: `url(${ImagePaths.features_bg})`,
                backgroundSize: 'fill',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#000407',
                backgroundPosition: 'top left',
              }: {})
            }}
          >
            <div className="feature-number">{number}</div>
            <div className="feature-content">
              <h2 className="feature-title">{t(title)}</h2>
              <p className="feature-subtitle">{t(subtitle)}</p>
            </div>
            <div className="feature-description">{t(description)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
