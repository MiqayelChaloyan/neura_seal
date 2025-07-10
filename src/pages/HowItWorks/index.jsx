import React from 'react';
import './styles.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h1>How It Works</h1>
      
      <div className="step-card">
        <h2>Step 1: Seamless Security Integration</h2>
        <p>
          Our secure features can be embedded within any existing visual element — QR codes, barcodes, 
          GSI formats, or even logos — ensuring full compliance with industry standards. No changes to 
          your printing line are required, making deployment frictionless and fast across pharmaceuticals, 
          banking, government, and luxury sectors.
        </p>
      </div>
      
      <div className="product-card">
        <div className="product-code">F7</div>
        <div className="product-name">LOADACCO</div>
        <div className="product-type">Film-correct tablets</div>
        <div className="product-details">MEDICINE $0 mg</div>
      </div>
    </div>
  );
};

export default HowItWorks;