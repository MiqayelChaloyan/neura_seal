import { motion } from "framer-motion";

import Container from "../../../components/Container";
import { SvgPaths, Texts } from "../../../constants";

import "./styles.css";


const Hero = () => {
  const letters = ["n", "e", "u", "r", "a"];
  const initialY = [0, 170, 70, -80, 10];

  const scrollToAbout = () => {
    const event = new CustomEvent('scrollToSection', {
      detail: { target: 'about-us' }
    });
    window.dispatchEvent(event);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="hero-container"
    >
      <Container>
        <div className="hero-content-wrapper">
          <div className="brand-name">
            {letters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ y: initialY[idx] }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: idx * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="tagline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: letters.length * 0.1 + 0.5, duration: 0.6 }}
          >
            {Texts.builtToKnow}
          </motion.div>
          <motion.button
            className="arrow-button"
            onClick={scrollToAbout}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: letters.length * 0.1 + 0.8, duration: 0.6 }}
            aria-label="Scroll to about section"
          >
            <SvgPaths.arrowIcon />
          </motion.button>
        </div>

        <div className="line-container-hero">
          <div className="line-hero" />
          <div className="line-hero" />
          <div className="line-hero" />
        </div>
      </Container>
    </motion.section>
  );
};

export default Hero;