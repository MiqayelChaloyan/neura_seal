import { motion } from "framer-motion";

import Container from "../../../components/Container";

import { ImagePaths, Texts } from "../../../constants";

import "./styles.css";


const AboutUs = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="about-us-container"
      >
        <Container>
          <div className="who-we-are">
            <div className="who-we-are-content">
              <h1>Who We Are</h1>
              <p>{Texts.whoWeAreText}</p>
            </div>
            <div
              className="who-we-are-visual"
              style={{ backgroundImage: `url(${ImagePaths.visualImg})` }}
            />
          </div>
        </Container>
        <div className="mission-vision-section">
          <div className="mission-vision-row">
            {/* <img className="mission-vision-image" src={ImagePaths.missionImg} alt="mission" /> */}
            <div className="mission-vision-title">
              <h2>Mission</h2>
            </div>
            <div className="mission-vision-description-container">
              <p className="mission-vision-description">
                {Texts.missionText}
              </p>
            </div>
          </div>
          <div className="mission-vision-row">
            {/* <img className="mission-vision-image" src={ImagePaths.visionImg} alt="vision" /> */}
            <div className="mission-vision-title">
              <h2>Vision</h2>
            </div>
            <div className="mission-vision-description-container">
              <p className="mission-vision-description">
                {Texts.visionText}
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutUs;