import { useTranslation } from 'react-i18next';
import { ImagePaths, Texts, Titles } from '../../../constants';

import './styles.css';


const CrisisSection = () => {
  const { t } = useTranslation();

  return (
    <div className="crisis-section-outer">
      <div className="vertical-line-wrapper">
        <div className="crisis-dot top"/>
        <div className="vertical-divider"/>
        <div className="crisis-dot bottom"/>
      </div>
      <div className="crisis-section-container">
        <div className="vertical-divider-center"/>
        <div className="crisis-section-main">
          <div className="crisis-section-visual">
            <img
              src={ImagePaths.crisis_image}
              alt="Anti-counterfeit technology visual"
              loading="lazy"
            />
          </div>
          <div className="crisis-section-content">
            <h1 className="crisis-section-title">{t('titles.theCrisis')}</h1>
            <p className="crisis-section-description"
               dangerouslySetInnerHTML={{ __html: t('crisisSection.counterfeitingText') }}>
            </p>
            <p className="crisis-section-bold">
              {t('crisisSection.boldText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisSection;