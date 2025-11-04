import { ImagePaths, Texts, Titles } from '../../../constants';

import './styles.css';


const CrisisSection = () => {
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
          <div className="crisis-section-content rtl">
            <h1 className="crisis-section-title">{Titles.neuraSeal}</h1>
            <p className="crisis-section-description">
              {Texts.solution_desc_1}
            </p>
          </div>
          <div className="crisis-section-visual">
            <img
              src={ImagePaths.glowing_abstract}
              alt="Anti-counterfeit technology visual"
              loading="lazy"
            />
          </div>
        </div>
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
            <h1 className="crisis-section-title crisis">{Titles.theCrisis}</h1>
            <p className="crisis-section-description">
              {Texts.solution_desc_2}
            </p>
            <p className="crisis-section-description rtl-rgb">
              {Texts.solution_desc_3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisSection;