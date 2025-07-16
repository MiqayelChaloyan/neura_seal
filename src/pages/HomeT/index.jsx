import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Instagram, Linkedin, Youtube, Twitter, Facebook } from "lucide-react";

// import "normalize.css";
import "./styles.css";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";


const messageAnimation = {
  initial: { y: -64 },
  whileInView: { y: 0 },
  viewport: { once: true },
  transition: { type: "spring", duration: 0.5, bounce: 0 }
};


export default function HomeT() {
  const sections = [ContactUs];
  const sectionIds = ["contact-us"];
  const [activeSection, setActiveSection] = useState(0);

  // Handle scroll events from hamburger menu and arrow button
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

    // Handle scroll to update active section
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll('.section');
      
      // Check if we're in the hero section (top of page)
      if (window.scrollY < window.innerHeight / 2) {
        setActiveSection(-1);
        return;
      }
      
      // Check all sections including AboutUs
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });

      // Check if we're in the hero section (top of page)
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

  // Hide navigation elements when any section is active (not just Contact Us)
  const isAnySectionActive = activeSection >= 0 && window.scrollY > window.innerHeight / 2.3;
  const isHeroActive = activeSection === -1;

  return (
    <div className="containerr">
      {/* Navigation dots */}
      <ul className={`nav-dots`}>
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

      {/* Social icons */}
      <ul className={`social-icons`}>
        <li><a href="#" aria-label="Instagram"><Instagram size={30} /></a></li>
        <li><a href="#" aria-label="LinkedIn"><Linkedin size={30} /></a></li>
        <li><a href="#" aria-label="YouTube"><Youtube size={30} /></a></li>
        <li><a href="#" aria-label="Twitter"><Twitter size={30} /></a></li>
        <li><a href="#" aria-label="Facebook"><Facebook size={30} /></a></li>
      </ul>

      {/* Menu lines */}
      <div className={`menu-lines menu-line-left`}></div>
      <div className={`menu-lines menu-line-right`}></div>

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
          <div key={idx} id={sectionIds[idx]} className={`section`}>
            <SectionComp />
          </div>
        ))}
      </div>
    </div>
  );
}
