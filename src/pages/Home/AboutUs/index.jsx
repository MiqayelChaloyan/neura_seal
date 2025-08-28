import { useTranslation } from "react-i18next";

import Container from "../../../components/Container";

import { ImagePaths, Texts } from "../../../constants";

import "./styles.css";


const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-us-container">
        <Container>
          <div className="who-we-are">
            <div className="who-we-are-content">
              <h1>{t('titles.whoWeAre')}</h1>
              <p>{t('texts.whoWeAreText')}</p>
            </div>
            <div
              className="who-we-are-visual"
              style={{ backgroundImage: `url(${ImagePaths.visualImg})` }}
            />
          </div>
        </Container>
        <div className="mission-vision-section">
          <div className="mission-vision-row">
            <div className="mission-vision-title">
              <h2>{t('titles.mission')}</h2>
            </div>
            <div className="mission-vision-description-container">
              <p className="mission-vision-description">
                {t('texts.missionText')}
              </p>
            </div>
          </div>
          <div className="mission-vision-row">
            <div className="mission-vision-title">
              <h2 className="mission-vision-title-vision">{t('titles.vision')}</h2>
            </div>
            <div className="mission-vision-description-container">
              <p className="mission-vision-description">
                {t('texts.visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;