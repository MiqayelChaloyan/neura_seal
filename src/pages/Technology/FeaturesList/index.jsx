import React from 'react';
import './styles.css';

const features = [
  {
    number: '02',
    title: 'DETECTION ENGINE:\nNO MATCH? NO PASS',
    description: "If it’s not a match, it doesn't pass. Period.",
  },
  {
    number: '03',
    title: 'GETS SMARTER\nWITH EVERY ATTEMPT',
    description: 'It evolves faster than counterfeiting tactics, learning and adapting with every attempt.',
  },
  {
    number: '04',
    title: 'LIVE INTELLIGENCE\nDASHBOARD',
    description: 'Real-Time map of where counterfeits hit,\ntheir frequency, and financial impact.',
  },
  {
    number: '05',
    title: 'SEAMLESS INTEGRATION.\nZERO DISRUPTION.',
    description: 'Works with your\nexisting systems - no changes needed.',
  },
];

const FeaturesList = () => {
  return (
    <div className="features-wrapper">
      {features.map(({ number, title, description }) => (
  <div class="feature-block">
  <div class="feature-number">03</div>
  <div class="feature-content">
    <h2 class="feature-title">GETS SMARTER<br/>WITH EVERY ATTEMPT</h2>
  </div>
  <div class="feature-content">
  <p class="feature-description">
      It evolves faster than counterfeiting tactics,<br/>
      learning and adapting with every attempt.
    </p>
  </div>
</div>

   
      ))}
    </div>
  );
};

export default FeaturesList;
