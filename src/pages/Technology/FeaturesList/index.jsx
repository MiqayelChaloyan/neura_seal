import React from 'react';
import './styles.css';

const features = [
  {
    number: '02',
    title: 'DETECTION ENGINE:',
    subtitle: 'NO MATCH? NO PASS',
    description: "If it’s not a match, it doesn't pass. Period.",
  },
  {
    number: '03',
    title: 'GETS SMARTER',
    subtitle: 'WITH EVERY ATTEMPT',
    description: 'It evolves faster than counterfeiting tactics, learning and adapting with every attempt.',
  },
  {
    number: '04',
    title: 'LIVE INTELLIGENCE',
    subtitle: 'DASHBOARD',
    description: 'Real-Time map of where counterfeits hit,\ntheir frequency, and financial impact.',
  },
  {
    number: '05',
    title: 'SEAMLESS INTEGRATION.',
    subtitle: 'ZERO DISRUPTION.',
    description: 'Works with your\nexisting systems - no changes needed.',
  },
];

const FeaturesList = () => {
  return (
    <div className="features-wrapper">
      {features.map(({ number, title, subtitle, description }) => (
        <div className="info-card">
          <div className="info-number">{number}</div>
          <div className="info-content">
            <h2 className="info-title">{title}</h2>
            <p className="info-subtitle">{subtitle}</p>
          </div>
          <div className="info-description">{description}</div>
        </div>


      ))}
    </div>
  );
};

export default FeaturesList;
