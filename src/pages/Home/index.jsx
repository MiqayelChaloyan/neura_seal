import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

// import "normalize.css";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Container from "../../components/Container";

import { Hosts } from "../../constants/hosts";
import { SvgPaths } from "../../constants";

import "./styles.css";


const messageAnimation = {
  initial: { y: -64 },
  whileInView: { y: 0 },
  viewport: { once: true },
  transition: { type: "spring", duration: 0.5, bounce: 0 }
};

const Home = () => {
  const sections = [ContactUs];
  const sectionIds = ["contact-us"];
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleCustomScroll = (e) => {
      const targetId = e.detail?.target;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll('.section');

      if (window.scrollY < window.innerHeight / 2) {
        setActiveSection(-1);
        return;
      }

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });

      if (window.scrollY < window.innerHeight / 2) {
        setActiveSection(-1);
      }
    };

    window.addEventListener("scrollToSection", handleCustomScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scrollToSection", handleCustomScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    const targetId = sectionIds[index];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      setActiveSection(index);
    }
  };

  const isHeroActive = activeSection === -1;

  return (
    <Container className="child-container">
      <ul className="nav-dots">
        <li>
          <button
            className={`dot ${isHeroActive ? 'active' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Go to hero section"
          />
        </li>
        <li>
          <button
            className={`dot ${activeSection === 0 ? 'active' : ''}`}
            onClick={() => document.getElementById('about-us').scrollIntoView({ behavior: 'smooth', block: 'start' })}
            aria-label="Go to about us section"
          />
        </li>
        {sections.map((_, idx) => (
          <li key={idx}>
            <button
              className={`dot ${activeSection === idx + 1 ? 'active' : ''}`}
              onClick={() => scrollToSection(idx)}
              aria-label={`Go to section ${idx + 2}`}
            />
          </li>
        ))}
      </ul>
      <ul className="social-icons">
        <li><Link to={Hosts.LINKEDIN} aria-label="LinkedIn"><SvgPaths.linkedinIcon /></Link></li>
        <li><Link to={Hosts.INSTAGRAM} aria-label="Instagram"><SvgPaths.instagramIcon /></Link></li>
        <li><Link to={Hosts.YOUTUBE} aria-label="YouTube"><SvgPaths.youtubeIcon /></Link></li>
        <li><Link to={Hosts.TWITTER} aria-label="Twitter"><SvgPaths.twitterIcon /></Link></li>
        <li><Link to={Hosts.FACEBOOK} aria-label="Facebook"><SvgPaths.facebookIcon /></Link></li>
      </ul>
      <div className="menu-lines menu-line-left" />
      <div className="menu-lines menu-line-right" />
      <div className="scroll-down__wrapper">
        <motion.div {...messageAnimation} className="scroll-down__message">
          <Hero />
          <div id="about-us">
            <AboutUs />
          </div>
        </motion.div>
      </div>
      <div className="motion__wrapper">
        {sections.map((SectionComp, idx) => (
          <div key={idx} id={sectionIds[idx]} className="section">
            <SectionComp />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Home;