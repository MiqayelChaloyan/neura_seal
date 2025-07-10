import React from 'react';
import './styles.css';

const features = [
  {
    title: 'PATENTED TECHNOLOGY',
    desc: 'A groundbreaking end-end authentication system',
    position: 'top-right',
    icon: 'icon-tech', // use actual SVG or icon class
  },
  {
    title: 'ADAPTIVE AI & COUNTERFEIT RESISTANCE',
    desc: 'A self-learning system that continuously strengthens counterfeit resistance',
    position: 'middle-right',
    icon: 'icon-ai',
  },
  {
    title: 'SEAMLESS INDUSTRY INTEGRATION',
    desc: 'Adaptable to diverse sectors without disrupting existing operations',
    position: 'middle-left',
    icon: 'icon-integration',
  },
  {
    title: 'ENTERPRISE-GRADE SECURITY & SCALABILITY',
    desc: 'Designed for global implementation at scale',
    position: 'bottom-left',
    icon: 'icon-security',
  },
];

const WhyNeuroSeat = () => {
  return (
    <section className="neuro-container">
      <div className="phone-wrapper">
        <img src="https://www.neura.com/wp-content/uploads/2024/03/neura-phone-mockup-1.png" alt="Phone with Authentication" className="phone-image" />

        {features.map((feat, i) => (
          <div key={i} className={`feature-bubble ${feat.position}`}>
            <div className={`feature-icon ${feat.icon}`} />
            <div className="feature-title">{feat.title}</div>
            <div className="feature-desc">{feat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyNeuroSeat;
