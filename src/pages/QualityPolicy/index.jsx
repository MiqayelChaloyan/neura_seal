import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './styles.css';


const QualityPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="quality-policy-root">
      <div className="quality-policy-container">
        <h1 className="quality-policy-title">{t('qualityPolicy.title')}</h1>
        <p className="quality-policy-description">
          {t('qualityPolicy.description')}
        </p>
        <div className="quality-policy-section">
          <h2 className="quality-policy-section-title">{t('qualityPolicy.section1.title')}</h2>
          <p className="quality-policy-section-desc">{t('qualityPolicy.section1.description')}</p>
          <ul className="quality-policy-list">
            <li>{t('qualityPolicy.section1.list.0')}</li>
            <li>{t('qualityPolicy.section1.list.1')}</li>
            <li>{t('qualityPolicy.section1.list.2')}</li>
          </ul>
        </div>
        <div className="quality-policy-section">
          <h2 className="quality-policy-section-title">{t('qualityPolicy.section2.title')}</h2>
          <p className="quality-policy-section-desc">{t('qualityPolicy.section2.description')}</p>
          <ul className="quality-policy-list">
            <li>{t('qualityPolicy.section2.list.0')}</li>
            <li>{t('qualityPolicy.section2.list.1')}</li>
          </ul>
        </div>
        <div className="quality-policy-section">
          <h2 className="quality-policy-section-title">{t('qualityPolicy.section3.title')}</h2>
          <p className="quality-policy-section-desc">{t('qualityPolicy.section3.description')}</p>
          <ul className="quality-policy-list">
            <li>{t('qualityPolicy.section3.list.0')}</li>
            <li>{t('qualityPolicy.section3.list.1')}</li>
            <li>{t('qualityPolicy.section3.list.2')}</li>
          </ul>
        </div>
        <div className="quality-policy-section">
          <h2 className="quality-policy-section-title">{t('qualityPolicy.section4.title')}</h2>
          <p className="quality-policy-section-desc">{t('qualityPolicy.section4.description')}</p>
          <ul className="quality-policy-list">
            <li>{t('qualityPolicy.section4.list.0')}</li>
            <li>{t('qualityPolicy.section4.list.1')}</li>
            <li>{t('qualityPolicy.section4.list.2')}</li>
          </ul>
        </div>
        <div className="quality-policy-section">
          <h2 className="quality-policy-section-title">{t('qualityPolicy.section5.title')}</h2>
          <p className="quality-policy-section-desc">{t('qualityPolicy.section5.description')}</p>
          <ul className="quality-policy-list">
            <li>{t('qualityPolicy.section5.list.0')}</li>
            <li>{t('qualityPolicy.section5.list.1')}</li>
            <li>{t('qualityPolicy.section5.list.2')}</li>
          </ul>
        </div>
        <div className="quality-policy-section">
          <h2 className="quality-policy-section-title">{t('qualityPolicy.section6.title')}</h2>
          <p className="quality-policy-section-desc">{t('qualityPolicy.section6.description')}</p>
          <ul className="quality-policy-list">
            <li>{t('qualityPolicy.section6.list.0')}</li>
            <li>{t('qualityPolicy.section6.list.1')}</li>
            <li>{t('qualityPolicy.section6.list.2')}</li>
          </ul>
        </div>
        <div className="quality-policy-section">
          <p className="quality-policy-section-desc">
            {t('qualityPolicy.final.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualityPolicy; 