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


const Home = () => {
  const sections = [ContactUs];
  const sectionIds = ["contact-us"];
  const [activeSection, setActiveSection] = useState(1);

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
        setActiveSection(1); // Hero section
        return;
      }

      // Check if we're in the about-us section
      const aboutUsElement = document.getElementById('about-us');
      if (aboutUsElement) {
        const aboutUsTop = aboutUsElement.offsetTop;
        const aboutUsBottom = aboutUsTop + aboutUsElement.offsetHeight;
        
        if (scrollPosition >= aboutUsTop && scrollPosition < aboutUsBottom) {
          setActiveSection(2); // About-us section
          return;
        }
      }

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(3); // Contact-us section (index + 3)
        }
      });
    };

    window.addEventListener("scrollToSection", handleCustomScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scrollToSection", handleCustomScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    if (index === 1) {
      // Hero section
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection(1);
    } else if (index === 2) {
      // About-us section
      const aboutUsElement = document.getElementById('about-us');
      if (aboutUsElement) {
        aboutUsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(2);
      }
    } else if (index === 3) {
      // Contact-us section
      const targetId = sectionIds[0]; // contact-us
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        setActiveSection(3);
      }
    }
  };

  const isHeroActive = activeSection === 1;

  return (
    <Container className="child-container">
      <ul className="nav-dots">
        <li>
          <button
            className={`dot ${isHeroActive ? 'active' : ''}`}
            onClick={() => scrollToSection(1)}
            aria-label="Go to hero section"
          />
        </li>
        <li>
          <button
            className={`dot ${activeSection === 2 ? 'active' : ''}`}
            onClick={() => scrollToSection(2)}
            aria-label="Go to about us section"
          />
        </li>
        <li>
          <button
            className={`dot ${activeSection === 3 ? 'active' : ''}`}
            onClick={() => scrollToSection(3)}
            aria-label="Go to contact us section"
          />
        </li>
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
        <div className="scroll-down__message">
          <Hero />
          <div id="about-us">
            <AboutUs />
          </div>
        </div>
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