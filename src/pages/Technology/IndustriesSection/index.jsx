import React from "react";
import { useTranslation } from "react-i18next";

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
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
        autoplay: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
        autoplay: false,
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
        autoplay: false,
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
        autoplay: false,
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
        swipeToSlide: true,
        touchMove: true,
        autoplay: false,
      }
    }
  ]
};

export default function IndustriesSection() {
  const { t } = useTranslation();

  return (
    <section className="industries-section">
      <div className="crisis-section-outer">
        <div className="industries-section-title">
          <h1>{t('industriesSection.title')}</h1>
        </div>
        <div className="industries-section-border-wrapper">
          <div className="industries-section-container">
            <div className="industries-section-main">

              <div className="slider-container">

                <Slider {...settings}>

                  <div className="industry-card hover-highlight">
                    <LuxuryIcon />
                    <h3>{t('industriesSection.luxuryGoodsFashion.title')}</h3>
                    <p>{t('industriesSection.luxuryGoodsFashion.description')}</p>
                  </div>

                  <div className="industry-card hover-highlight">
                    <IntersectionIcon />
                    <h3>{t('industriesSection.pharmaceuticalsHealthcare.title')}</h3>
                    <p>{t('industriesSection.pharmaceuticalsHealthcare.description')}</p>
                  </div>

                  <div className="industry-card hover-highlight">
                    <FinancialIcon />
                    <h3>{t('industriesSection.financialInstitutions.title')}</h3>
                    <p>{t('industriesSection.financialInstitutions.description')}</p>
                  </div>

                  <div className="industry-card hover-highlight">
                    <SubtractionIcon />
                    <h3>{t('industriesSection.governmentEntities.title')}</h3>
                    <p>{t('industriesSection.governmentEntities.description')}</p>
                  </div>

                  <div className="industry-card hover-highlight">
                    <StampIcon />
                    <h3>{t('industriesSection.taxStampsExcessTracking.title')}</h3>
                    <p>{t('industriesSection.taxStampsExcessTracking.description')}</p>
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
