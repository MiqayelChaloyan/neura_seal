import { motion } from "framer-motion";

import Container from "../../../components/Container";
import { SvgPaths, Texts } from "../../../constants";

import "./styles.css";


const Hero = () => {
  const letters = ["n", "e", "u", "r", "a"];

  const initialPositions = [
    { x: -100, y: -70 },    // n - left
    { x: -50, y: 100 },   // e - top-left  
    { x: 0, y: -20 },    // u - bottom-right
    { x: 20, y: -150 },  // r - center
    { x: 80, y: 0 }       // a - right
  ];

  const scrollToAbout = () => {
    const event = new CustomEvent('scrollToSection', {
      detail: { target: 'about-us' }
    });
    window.dispatchEvent(event);
  };

  return (
    <section className="hero-container">
      <Container>
        <div className="hero-content-wrapper">
          <div className="brand-name">
            {letters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ x: initialPositions[idx].x, y: initialPositions[idx].y }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: idx * 0.1 }}
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
      </Container>

      <div className="line-container-hero">
        <div className="line-hero" />
        <div className="line-hero" />
        <div className="line-hero" />
      </div>
    </section>
  );
};

export default Hero;