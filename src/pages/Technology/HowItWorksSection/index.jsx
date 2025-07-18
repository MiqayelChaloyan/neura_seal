import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';

function HowItWorksSection() {
  return (
    <div className="how-it-works-container">
      {/* Left Section - Text Content */}
      <motion.div 
        className="text-section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="main-title">How It Works</h1>
        <div className="step-content">
          <h2 className="step-title">Step 1: Seamless Security Integration</h2>
          <p className="step-description">
            Our secure features can be embedded within any existing visual element — QR codes, barcodes, GS1 formats, or even logos — ensuring full compliance with industry standards. No changes to your printing line are required, making deployment frictionless and fast across pharmaceuticals, banking, government, and luxury sectors.
          </p>
        </div>
      </motion.div>

      {/* Right Section - Isometric Illustration */}
      <motion.div 
        className="illustration-section"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="isometric-container">
          {/* Document */}
          <motion.div 
            className="document"
            initial={{ rotateY: -15, rotateX: 10 }}
            animate={{ rotateY: -15, rotateX: 10 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            <div className="document-content">
              <div className="document-text">Sample Document</div>
              <div className="document-table">
                <div className="table-row">
                  <span>Item</span>
                  <span>Value</span>
                </div>
                <div className="table-row">
                  <span>Code</span>
                  <span>ABC123</span>
                </div>
              </div>
              <div className="document-qr">QR</div>
            </div>
            <div className="document-label">Scan for Original</div>
          </motion.div>

          {/* Product Boxes */}
          <motion.div 
            className="product-boxes"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Tobacco Box */}
            <div className="product-box tobacco-box">
              <div className="box-front">
                <div className="box-label">FR TOBACCO</div>
                <div className="box-pattern">
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                  <div className="hexagon"></div>
                </div>
              </div>
              <div className="box-top">
                <div className="scan-text">Scan for Original</div>
                <div className="box-qr">QR</div>
              </div>
              <div className="box-side">
                <div className="side-pattern">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>

            {/* Medicine Box */}
            <div className="product-box medicine-box">
              <div className="box-front">
                <div className="purple-stripe"></div>
                <div className="box-label-vertical">MEDICINE 5</div>
              </div>
              <div className="box-top">
                <div className="medicine-text">Film-coated tablets</div>
              </div>
            </div>
          </motion.div>

          {/* Industrial Scanner */}
          <motion.div 
            className="industrial-scanner"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="scanner-body"></div>
            <div className="scanner-light"></div>
          </motion.div>

          {/* Background Grid Lines */}
          <div className="grid-lines">
            <div className="grid-line blue-line"></div>
            <div className="grid-line purple-line"></div>
            <div className="grid-line blue-line"></div>
            <div className="grid-line purple-line"></div>
            <div className="grid-line blue-line"></div>
          </div>
        </div>
      </motion.div>

      {/* Step Indicator */}
      <div className="step-indicator">
        <div className="step-dot active"></div>
        <div className="step-dot"></div>
        <div className="step-dot"></div>
      </div>
    </div>
  );
}

export default HowItWorksSection; 