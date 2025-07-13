import React from "react";
import './styles.css';
import { Link } from 'react-router-dom';

import how_it_work from '../../../assets/how_it_work.png'
// how_it_work.png

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-section-border-wrapper">
        <div className="how-it-works-section-container">
          <div className="how-it-works-section-main">
            <div className="how-it-works-section-content">
              <h1 className="how-it-works-section-title">How it works</h1>
              <p className="how-it-works-section-description">
                Step 1: Counterfeiting drains trillions from the global economy,<br />
                destabilizes industries, and destroys trust.
              </p>
              <Link to="/technology" className="how-it-works-section-link">
                <p className="how-it-works-section-link-text">
                  Learn more
                </p>
                <div className="how-it-works-section-link-dote"/>
                <div className="how-it-works-section-link-line" />
              </Link>
            </div>
            <div className="how-it-works-section-visual">
              <img
                src={how_it_work}
                alt="Anti-counterfeit technology visual"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
