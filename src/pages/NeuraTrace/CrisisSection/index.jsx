import { Texts, Titles, ImagePaths } from '../../../constants';

import './styles.css';


const CrisisSection = () => {
  return (
    <div className="crisis-section-outer">
      <div className="vertical-line-wrapper">
        <div className="crisis-dot top" />
        <div className="vertical-divider" />
        <div className="crisis-dot bottom" />
      </div>
      <div className="crisis-section-container">
        <div className="vertical-divider-center" />
        <div className="crisis-section-main">
          <div className="crisis-section-visual">
          <img
              src={ImagePaths.trace_1}
              alt="NeuraTrace trace visualization showing product lineage"
              loading="lazy"
            />
          </div>
          <div className="crisis-section-content">
            <h1 className="crisis-section-title">{Titles.neuraTrace}</h1>
            <p className="crisis-section-description">
              {Texts.neuraTracedescription_1}
            </p>
          </div>
        </div>
      </div>
      <div className="crisis-section-container">
        <div className="vertical-divider-center" />
        <div className="crisis-section-main">
          <div className="crisis-section-content rtl">
            <h1 className="crisis-section-title">{Titles.theCrisis}</h1>
            <p className="crisis-section-description">
              {Texts.neuraTracedescription_2}
            </p>
            <p className="crisis-section-description">
              {Texts.neuraTracedescription_2_1}
            </p>
            <p className="crisis-section-description rtl-rgb">
              {Texts.neuraTracedescription_2_2}
            </p>
          </div>
          <div className="crisis-section-visual">
          <img
              src={ImagePaths.trace_2}
              alt="NeuraTrace trace verification interface with secure identifiers"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisSection;