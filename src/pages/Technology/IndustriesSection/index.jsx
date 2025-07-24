import React from "react";
import './styles.css';

import { Gem, HeartPulse, Handshake } from 'lucide-react';
import LuxuryIcon from "../../../assets/svg/LuxuryIcon";
import FinancialIcon from "../../../assets/svg/FinancialIcon";
import IntersectionIcon from "../../../assets/svg/IntersectionIcon";

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
                <LuxuryIcon />
                <h3>LUXURY GOODS & FASHION</h3>
                <p>Protecting high-value brands from counterfeit infiltration.</p>
              </div>
              <div className="industry-card hover-highlight">
                <IntersectionIcon />
                <h3>PHARMACEUTICALS & HEALTHCARE</h3>
                <p>Ensuring drug authenticity and preventing life-threatening fraud.</p>
              </div>
              <div className="industry-card hover-highlight">
                <FinancialIcon />
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
