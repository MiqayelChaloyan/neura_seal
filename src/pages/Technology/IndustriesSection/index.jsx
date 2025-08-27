import React from "react";

import Slider from "react-slick";

import LuxuryIcon from "../../../assets/svg/LuxuryIcon";
import FinancialIcon from "../../../assets/svg/FinancialIcon";
import IntersectionIcon from "../../../assets/svg/IntersectionIcon";
import StampIcon from "../../../assets/svg/StampIcon";
import SubtractionIcon from "../../../assets/svg/SubtractionIcon";

import './styles.css';


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
        swipeToSlide: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
        swipeToSlide: true,
        touchMove: true,
      }
    }
  ]
};

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

              <div className="slider-container">

                <Slider {...settings}>

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
