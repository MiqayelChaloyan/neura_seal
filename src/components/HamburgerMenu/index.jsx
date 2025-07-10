import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import F from '../../assets/55555.png';

const menuVariants = {
  hidden: {
    opacity: 0,
    y: '-100%',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    y: '-100%',
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const scrollContainerRef = useRef(null);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const scrollTo = (index) => {
    const ref = sectionRefs[index];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(ref => ref.current === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.5,
      }
    );

    sectionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      <button className="hamburger-button" onClick={toggleMenu}>
        <motion.span
          className="line"
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        />
        <motion.span
          className="line"
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fullscreen-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {/* Background (optional image) */}
            <div className="menu-bg" />

            {/* Top-left logo */}
            <div className="top-left">
              <img src="https://yt3.googleusercontent.com/ytc/AIdro_lldtO065jRenSWpWuyx3Gx168SmqH6h1YZ8T6y3qBXQYY=s900-c-k-c0x00ffffff-no-rj" alt="Logo" className="logo" />
            </div>

            {/* Center content */}
            <div className="menu-center" ref={scrollContainerRef}>
              <div className="menu-content">
                <ul className="menu-items">
                  <li onClick={() => scrollTo(0)}>Who We are</li>
                  <li onClick={() => {
                    navigate('/technology');
                    toggleMenu();
                  }}>The Technology</li>
                  <li onClick={() => scrollTo(2)}>Contact Us</li>
                </ul>

                <div className="menu-sections">
                  <section ref={sectionRefs[0]} className="menu-section">
                    <div className="section-content">
                    <h1>Who We Are</h1>

                      <div className='section-content-container'>
                      <div>
                        <p>
                          We're a team of engineers tackling one of the world's most damaging and overlooked threats: counterfeiting.<br /><br />
                          We've built the next evolution in product and document security — an impenetrable, scalable authentication system redefining how the world proves authenticity. We don't just stop counterfeiting; we ensure it never happens again.
                        </p>
                      </div>

                      <div>
                        <img src={F} alt="Team" className='team-image' />
                      </div>
                      </div>
                    </div>
                  </section>

                  {/* <section ref={sectionRefs[1]} className="menu-section">
                    <div className="section-content">
                      <h1>The Technology</h1>
                      <p>
                        [Technology content would go here]
                      </p>
                    </div>
                  </section> */}

                  <section ref={sectionRefs[2]} className="menu-section">
                    <div class="section-contentr">
                    <h1>Contact Us</h1>

                      <div className='contact-us-container'>
                        <div class="contact-info">
                          <p><strong>Address:</strong><br />Al-Duhail-North Road, P.O.Box: 5179</p>
                          <p><strong>Email:</strong><br />info@neura.com</p>
                          <p><strong>Phone:</strong><br />1-234-567-8910</p>
                        </div>
                        <div class="contact-form">
                          <input type="text" placeholder="Name: Enter your full name" />
                          <input type="email" placeholder="Email: Enter your mail" />
                          <textarea placeholder="Details: Lorem ipsum dolor"></textarea>
                          <button>Send Message</button>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Right social icons - now part of scrolling content */}
            <div className="right-panel">
              <div className="social-icons">
                <a href="#">I</a>
                <a href="#">L</a>
                <a href="#">Y</a>
                <a href="#">T</a>
                <a href="#">F</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;