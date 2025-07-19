import React, { useEffect } from 'react';

import './styles.css';


const QualityPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="quality-policy-root">
      <div className="quality-policy-container">
        <h1 className="quality-policy-title">Quality Policy Statement</h1>
        <p className="quality-policy-description">
          At Neura, we are committed to providing a secure, reliable, and user-focused online experience that reflects the innovation, precision, and trust at the core of our AI-powered authentication and anti-counterfeiting technologies. Our platform aligns fully with Saudi Arabia's digital standards and legal frameworks, while upholding international best practices.
        </p>
        <div className="quality-policy-section">
          <h2 className="quality-policy-section-title">1. Commitment to Innovation and Accuracy</h2>
          <p className="quality-policy-section-desc">Our website is an extension of our secure technology stack:</p>
          <ul className="quality-policy-list">
            <li>End-to-end encryption and secure storage for all user interactions.</li>
            <li>Compliance with Saudi Data Privacy Law and relevant global frameworks such as GDPR.</li>
            <li>Continuous monitoring and implementation of cybersecurity best practices.</li>
          </ul>
        </div>
        <div className="quality-policy-section">
          <h2 className="quality-policy-section-title">2. Security and Data Protection</h2>
          <p className="quality-policy-section-desc">Our website is an extension of our secure technology stack:</p>
          <ul className="quality-policy-list">
            <li>End-to-end encryption and secure storage for all user interactions.</li>
            <li>Compliance with Saudi Data Privacy Law and relevant global frameworks such as GDPR.</li>
          </ul>
        </div>
        <div className="quality-policy-section">
          <h2 className="quality-policy-section-title">3. Compliance and Ethical Standards</h2>
          <p className="quality-policy-section-desc">We maintain transparency and respect for legal and cultural expectations:</p>
          <ul className="quality-policy-list">
            <li>Full alignment with policies set by the Saudi Communications, Space & Technology Commission (CST).</li>
            <li>Culturally appropriate content, messaging, and visuals.</li>
            <li>Transparent disclosures regarding AI capabilities and limitations.</li>
          </ul>
        </div>
        <div className="quality-policy-section">
          <h2 className="quality-policy-section-title">4. Accessibility, Performance, and Usability</h2>
          <p className="quality-policy-section-desc">We strive for a seamless, inclusive, and responsive digital experience:</p>
          <ul className="quality-policy-list">
            <li>Optimized for speed, mobile responsiveness, and cross-platform functionality.</li>
            <li>Full accessibility compliance with WCAG standards.</li>
            <li>Bilingual support in Arabic and English to serve all users effectively.</li>
          </ul>
        </div>
        <div className="quality-policy-section">
          <h2 className="quality-policy-section-title">5. Continuous Improvement</h2>
          <p className="quality-policy-section-desc">Our digital presence evolves alongside our technology:</p>
          <ul className="quality-policy-list">
            <li>Client and user feedback loops embedded in our content development.</li>
            <li>Frequent updates to reflect product advancements and regulatory changes.</li>
            <li>Use of analytics and AI to improve the user journey and interface design.</li>
          </ul>
        </div>
        <div className="quality-policy-section">
          <h2 className="quality-policy-section-title">6. Trust and Transparency</h2>
          <p className="quality-policy-section-desc">Trust is foundational to anti-counterfeiting. We reflect this through:</p>
          <ul className="quality-policy-list">
            <li>Verified case studies, proof-of-performance data, and key partnerships.</li>
            <li>Secure, authenticated processes for demo requests and contact forms.</li>
            <li>Real customer testimonials and quantifiable success metrics.</li>
          </ul>
        </div>
        <div className="quality-policy-section">
          <p className="quality-policy-section-desc">
            This policy is reviewed regularly to remain aligned with technological developments, user needs, and the Kingdom's evolving digital vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualityPolicy; 