import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Pages } from "../../../constants/pages";
import { ImagePaths, HowItWorksConstants } from "../../../constants";

import './styles.css';


const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-section-border-wrapper">
        <div className="how-it-works-section-container">
          <div className="how-it-works-section-main">
            <div className="how-it-works-section-content">
              <h1 className="how-it-works-section-title">{t('howItWork.title')}</h1>
              <p className="how-it-works-section-description">
                {t('howItWork.step1.title')}<br />
              </p>
              <p className="how-it-works-section-content">
                {t('howItWork.step1.description')}
              </p>
              <Link to={Pages.HOW_IT_WORKS} className="how-it-works-section-link">
                <p className="how-it-works-section-link-text">
                  {t('howItWork.step1.viewMoreText')}
                </p>
                <div className="how-it-works-section-link-dote"/>
                <div className="how-it-works-section-link-line" />
              </Link>
            </div>
            <div className="how-it-works-section-visual">
              <img
                src={ImagePaths.how_it_work}
                alt={HowItWorksConstants.imageAlt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
