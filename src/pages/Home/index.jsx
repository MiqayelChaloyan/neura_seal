
import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

function Home() {
  const letters = ["n", "e", "u", "r", "a"];
  const initialY = [0, 170, 70, -80, 10];

  return (
    <section className="hero-section">
      <div className="hero">
        <div className="brand-name">
          {letters.map((letter, idx) => (
            <motion.span
              key={idx}
              initial={{ y: initialY[idx] }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
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
          Built to Know
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
