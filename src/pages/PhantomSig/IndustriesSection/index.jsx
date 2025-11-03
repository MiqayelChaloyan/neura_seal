import React, { useState, useEffect } from "react";

import Slider from "react-slick";


import AerospaceAviationIcon from "../../../assets/svg/AerospaceAviationIcon.jsx";
import DefenseTacticalOperationsIcon from "../../../assets/svg/DefenseTacticalOperationsIcon.jsx";
import SatelliteSpaceCommunicationsIcon from "../../../assets/svg/SatelliteSpaceCommunicationsIcon.jsx";
import TelecommunicationInfrastructureIcon from "../../../assets/svg/TelecommunicationInfrastructureIcon.jsx";


// import GovernmentsCustomsIcon from "../../../assets/svg/GovernmentsCustomsIcon.jsx";
// import ImportersExportersIcon from "../../../assets/svg/ImportersExportersIcon.jsx";
// import ManufacturersIcon from "../../../assets/svg/ManufacturersIcon.jsx";

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
                    <DefenseTacticalOperationsIcon />
                    <h3>DEFENSE & TACTICAL {'\n'} OPERATIONS</h3>
                    <p>Ensures secure, reliable communication in {'\n'} contested or hostile environments.</p>
                  </div>

                  <div className="industry-card hover-highlight">
                    <SatelliteSpaceCommunicationsIcon />
                    <h3>SATELLITE & SPACE {'\n'} COMMUNICATIONS</h3>
                    <p>Maintains reliable orbital communications {'\n'} under jamming attempts.</p>
                  </div>

                  <div className="industry-card hover-highlight">
                    <TelecommunicationInfrastructureIcon />
                    <h3>TELECOMMUNICATION {'\n'} & INFRASTRUCTURE</h3>
                    <p>Secure communications where {'\n'} failure is not an option.</p>
                  </div>

                  <div className="industry-card hover-highlight">
                    <AerospaceAviationIcon />
                    <h3>AEROSPACE & AVIATION</h3>
                    <p>Support aircraft, drones, and unmanned systems {'\n'} with low latency, high integrity signals.</p>
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
