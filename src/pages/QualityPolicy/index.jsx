import React from 'react';

const QualityPolicy = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#181A1B',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat, Arial, sans-serif',
      padding: '40px 0'
    }}>
      <div style={{
        maxWidth: 700,
        width: '100%',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <h1 style={{ fontWeight: 500, fontSize: 40, marginBottom: 32 }}>Quality Policy Statement</h1>
        <p style={{ fontSize: 16, marginBottom: 32 }}>
          At Neura, we are committed to providing a secure, reliable, and user-focused online experience that reflects the innovation, precision, and trust at the core of our AI-powered authentication and anti-counterfeiting technologies. Our platform aligns fully with Saudi Arabia's digital standards and legal frameworks, while upholding international best practices.
        </p>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontWeight: 600, fontSize: 20, marginBottom: 12 }}>1. Commitment to Innovation and Accuracy</h2>
          <p style={{ marginBottom: 8 }}>Our website is an extension of our secure technology stack:</p>
          <ul style={{ marginLeft: 24, marginBottom: 0 }}>
            <li>End-to-end encryption and secure storage for all user interactions.</li>
            <li>Compliance with Saudi Data Privacy Law and relevant global frameworks such as GDPR.</li>
            <li>Continuous monitoring and implementation of cybersecurity best practices.</li>
          </ul>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontWeight: 600, fontSize: 20, marginBottom: 12 }}>2. Security and Data Protection</h2>
          <p style={{ marginBottom: 8 }}>Our website is an extension of our secure technology stack:</p>
          <ul style={{ marginLeft: 24, marginBottom: 0 }}>
            <li>End-to-end encryption and secure storage for all user interactions.</li>
            <li>Compliance with Saudi Data Privacy Law and relevant global frameworks such as GDPR.</li>
          </ul>
        </div>
        <div>
          <h2 style={{ fontWeight: 600, fontSize: 20, marginBottom: 12 }}>3. Compliance and Ethical Standards</h2>
          <p style={{ marginBottom: 8 }}>We maintain transparency and respect for legal and cultural expectations:</p>
          <ul style={{ marginLeft: 24, marginBottom: 0 }}>
            <li>Full alignment with policies set by the Saudi Communications, Space & Technology Commission (CST).</li>
            <li>Culturally appropriate content, messaging, and visuals.</li>
            <li>Transparent disclosures regarding AI capabilities and limitations.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QualityPolicy; 