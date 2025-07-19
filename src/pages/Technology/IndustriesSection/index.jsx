import React from "react";
import './styles.css';

import { Gem , HeartPulse, Handshake } from 'lucide-react';

export default function IndustriesSection() {
  return (
    <section className="industries-section">
      <div className="crisis-section-outer">
        <div className="industries-section-title">
          <h1>Industry's We Serve</h1>
        </div>
        <div className="industries-section-border-wrapper">
          <div className="industries-section-container">
            <div className="industries-section-main">
              <div className="industry-card hover-highlight">
              <Gem />
                <h3>LUXURY GOODS & FASHION</h3>
                <p>Protecting high-value brands from counterfeit infiltration.</p>
              </div>
              <div className="industry-card hover-highlight">
              <Handshake />
                <h3>PHARMACEUTICALS & HEALTHCARE</h3>
                <p>Ensuring drug authenticity and preventing life-threatening fraud.</p>
              </div>
              <div className="industry-card hover-highlight">
              <HeartPulse />
                <h3>FINANCIAL INSTITUTIONS</h3>
                <p>Securing financial documents such as cheques, banknotes, and certificates against forgery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
