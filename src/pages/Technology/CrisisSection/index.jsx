import './styles.css';

const CrisisSection = () => {
  return (
    <div className="crisis-section-outer">
      {/* Vertical line and dots outside the container */}
      <div className="vertical-line-wrapper">
        <div className="crisis-dot top"></div>
        <div className="vertical-divider"></div>
        <div className="crisis-dot bottom"></div>
      </div>

      {/* Container with extended borders and center line */}
      <div className="crisis-section-container">
        <div className="vertical-divider-center"></div>

        <div className="crisis-section-main">
          <div className="crisis-section-visual">
            <img
              src="https://cdn.viberu.ru/articles/news/2025/05.2025/13.05/tehnologia-sensornogo-ekrana-ob-edinaet-sovremennyh-pol-zovatelei-mobil-nyh-telefonov-sozdannyh-iskusstvennym-intellektom_1170x669.jpg"
              alt="Anti-counterfeit technology visual"
            />
          </div>
          <div className="crisis-section-content">
            <h1 className="crisis-section-title">The Crisis</h1>
            <p className="crisis-section-description">
              Counterfeiting drains trillions from the global economy,<br />
              destabilizes industries, and destroys trust.
            </p>
            <p className="crisis-section-bold">
              We built the technology to end it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisSection;






{/* <div className="crisis-section-visual">
<img src="https://cdn.viberu.ru/articles/news/2025/05.2025/13.05/tehnologia-sensornogo-ekrana-ob-edinaet-sovremennyh-pol-zovatelei-mobil-nyh-telefonov-sozdannyh-iskusstvennym-intellektom_1170x669.jpg" alt="Anti-counterfeit technology visual" />
</div>
<div className="crisis-section-content">
<h1 className="crisis-section-title">The Crisis</h1>
<p className="crisis-section-description">
  Counterfeiting drains trillions from the global economy,<br />
  destabilizes industries, and destroys trust.
</p>
<p className="crisis-section-bold">
  We built the technology to end it.
</p>
</div> */}