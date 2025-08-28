import React, { useState, useEffect } from "react";

import Slider from "react-slick";

import LuxuryIcon from "../../../assets/svg/LuxuryIcon";
import FinancialIcon from "../../../assets/svg/FinancialIcon";
import IntersectionIcon from "../../../assets/svg/IntersectionIcon";
import StampIcon from "../../../assets/svg/StampIcon";
import SubtractionIcon from "../../../assets/svg/SubtractionIcon";

import './styles.css';


export default function IndustriesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const settings = {
    // Mobile-first approach: default to mobile settings
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: isMobile ? false : true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    dots: isMobile ? true : false,
    touchMove: true,
    centerMode: isMobile ? false : false,
    swipeToSlide: isMobile ? true : false,
    responsive: [
      {
        // Large Desktop
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          arrows: false,
          dots: false,
        }
      },
      {
        // Desktop
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          arrows: false,
          dots: false,
        }
      },
      {
        // Laptop
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          arrows: false,
          dots: false,
        }
      },
      {
        // Tablet Landscape
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: false,
          arrows: false,
          dots: true,
          centerMode: false,
          useCSS: true,
        }
      },
      {
        // Tablet Portrait
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: false,
          arrows: false,
          dots: true,
          centerMode: false,
          swipeToSlide: true,
        }
      },
      {
        // Mobile Landscape
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: false,
          arrows: false,
          dots: true,
          centerMode: true,
          swipeToSlide: true,
          touchMove: true,
        }
      },
      {
        // Mobile Portrait
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: false,
          arrows: false,
          dots: true,
          centerMode: false,
          swipeToSlide: true,
          touchMove: true,
        }
      },
      {
        // Small Mobile
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: false,
          arrows: false,
          dots: true,
          centerMode: true,
          swipeToSlide: true,
          touchMove: true,
        }
      },
      {
        // Extra Small Mobile
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 300,
          autoplay: false,
          arrows: false,
          dots: true,
          centerMode: false,
          swipeToSlide: true,
          touchMove: true,
        }
      }
    ]
  };
  return (
    <section className="industries-section">
      <div className="crisis-section-outer">
        <div className="industries-section-title">
          <h1>Industry's We Serve</h1>
        </div>
        <div className="industries-section-border-wrapper">
          <div className="industries-section-container">
            <div className="industries-section-main">

              <div className="slider-container">

                <Slider {...settings} key={isMobile ? 'mobile-slider' : 'desktop-slider'}>

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

                  <div className="industry-card hover-highlight">
                    <SubtractionIcon />
                    <h3>GOVERNMENT ENTITIES</h3>
                    <p>Protecting official documents, IDs, passports, and other official records</p>
                  </div>

                  <div className="industry-card hover-highlight">
                    <StampIcon />
                    <h3>TAX STAMPS & EXCISE TRACKING</h3>
                    <p>AI-verified tax stamps prevent counterfeiting and ensure proper tax collection on regulated products.</p>
                  </div>

                </Slider>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
