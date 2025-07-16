import { motion } from "framer-motion";
import visualImg from "../../../assets/images/visual.png";
import "./styles.css";
import Container from "../../../components/Container";
import missionImg from "../../../assets/images/mission.png";
import visionImg from "../../../assets/images/vision.png";
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
                    <p>
                        We're a team of engineers tackling one of the world's most damaging and
                        overlooked threats: counterfeiting. We've built the next evolution in product
                        and document security — an impenetrable, scalable authentication system
                        redefining how the world proves authenticity. We don't just stop counterfeiting;
                        we ensure it never happens again.
                    </p>
                </div>
                <div
                    className="who-we-are-visual"
                    style={{ backgroundImage: `url(${visualImg})` }}
                />
            </div>
            </Container>
            <div className="mission-vision-section">
                <div className="mission-vision-row">
                    {/* <h2 className="mission-vision-title">MISSION</h2> */}
                    <img className="mission-vision-image" src={missionImg} alt="mission" />
                    <p className="mission-vision-description">
                    We exist to make counterfeiting obsolete - empowering anyone to prove authenticity instantly, globally, and without compromise.
                    </p>
                </div>

                <div className="mission-vision-row">
                    {/* <h2 className="mission-vision-title">VISION</h2> */}
                    <img className="mission-vision-image" src={visionImg} alt="vision" />
                    <p className="mission-vision-description">
                    To establish the global standard for product and document authenticity - a secure, open protocol that anyone, 
                    anywhere can adopt to eliminate counterfeiting at its source. This is the new foundation for trust in the global marketplace.
                    </p>
                </div>
            </div>
      </motion.section>
    </>
  );
}

export default AboutUs;