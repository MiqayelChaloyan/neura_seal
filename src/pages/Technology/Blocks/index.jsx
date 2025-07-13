import React from "react";
import "./styles.css";

const industries = [
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8L8 40L32 56L56 40L32 8Z" stroke="#00F0FF" strokeWidth="3" fill="none"/>
        <path d="M20 32L32 48L44 32" stroke="#00F0FF" strokeWidth="3" fill="none"/>
      </svg>
    ),
    title: "LUXURY GOODS & FASHION",
    description: "Protecting high-value brands from counterfeit infiltration.",
    colorClass: "industry-title-cyan"
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 32C16 22.0589 24.0589 14 34 14C43.9411 14 52 22.0589 52 32C52 41.9411 43.9411 50 34 50C24.0589 50 16 41.9411 16 32Z" stroke="#fff" strokeWidth="3" fill="none"/>
        <path d="M24 36C26 32 30 32 32 36C34 40 38 40 40 36" stroke="#fff" strokeWidth="3" fill="none"/>
      </svg>
    ),
    title: "PHARMACEUTICALS & HEALTHCARE",
    description: "Ensuring drug authenticity and preventing life-threatening fraud.",
    colorClass: "industry-title-white"
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="32" cy="40" rx="16" ry="10" stroke="#fff" strokeWidth="3" fill="none"/>
        <path d="M32 40V24" stroke="#fff" strokeWidth="3" fill="none"/>
        <path d="M28 24C28 20 36 20 36 24" stroke="#fff" strokeWidth="3" fill="none"/>
      </svg>
    ),
    title: "FINANCIAL INSTITUTIONS",
    description: "Securing financial documents such as cheques, banknotes, and certificates against forgery",
    colorClass: "industry-title-white"
  }
];

export default function IndustriesSection() {
  return (
    <section className="industries-section">
      <div className="industries-title">Industry's We Serve</div>
      <div className="industries-cards-container">
        {industries.map((ind) => (
          <div key={ind.title} className="industry-card">
            <span className="industry-icon">{ind.icon}</span>
            <div className={`industry-title ${ind.colorClass}`}>{ind.title}</div>
            <div className="industry-desc">{ind.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 