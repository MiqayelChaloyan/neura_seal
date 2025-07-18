import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.svg';

import { Titles } from '../../constants';

import './styles.css';


const menuVariants = {
  hidden: { opacity: 0, y: 40, transition: { duration: 0.7, ease: 'easeOut' } },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
  exit: { opacity: 0, y: 40, transition: { duration: 0.5, ease: 'easeIn' } },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const pageTitles = {
  '/': '',
  '/technology': 'Technology',
  '/quality-policy': 'Quality Policy',
  '/how-it-works': 'How It Works',
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    // Dispatch menu state change event
    const event = new CustomEvent('menuStateChange', {
      detail: { isOpen: newState }
    });
    window.dispatchEvent(event);
  };

  const handleMenuItemClick = (target) => {
    // Close menu immediately for better UX
    setIsOpen(false);
    
    // Dispatch menu state change event
    const event = new CustomEvent('menuStateChange', {
      detail: { isOpen: false }
    });
    window.dispatchEvent(event);

    if (target === 'technology') {
      navigate('/technology');
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for route change then scroll
        setTimeout(() => {
          scrollToSection(target);
        }, 300); // Increased timeout to ensure DOM is ready
      } else {
        // If already on home page, scroll immediately
        scrollToSection(target);
      }
    }
  };

  const scrollToSection = (id) => {
    // Dispatch custom event for HomeT page to handle
    const event = new CustomEvent('scrollToSection', {
      detail: { target: id }
    });
    window.dispatchEvent(event);
  };

  return (
    <>
      <header className="fixed-header">
        <div className="header-left">
          <Link to="/" className='header-logo-link'>
            <img src={logo} alt="Logo" className="header-logo" />
          </Link>
        </div>

        <h1 className="header-title">{pageTitles[location.pathname] || ''}</h1>

        <button className="hamburger-button" onClick={toggleMenu}>
          <motion.span
            className="line"
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
          <motion.span
            className="line"
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />
            <motion.div
              className="fullscreen-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <div className="menu-content">
                <motion.ul
                  className="menu-items"
                  initial="hidden"
                  animate="visible"
                  variants={listVariants}
                >
                  <motion.li
                    className="menu-item"
                    variants={itemVariants}
                    onClick={() => handleMenuItemClick('about-us')}
                  >
                    {Titles.whoWeAre}
                  </motion.li>
                  <motion.li
                    className="menu-item"
                    variants={itemVariants}
                    onClick={() => handleMenuItemClick('technology')}
                  >
                    {Titles.theTechnology}
                  </motion.li>
                  <motion.li
                    className="menu-item"
                    variants={itemVariants}
                    onClick={() => handleMenuItemClick('contact-us')}
                  >
                    {Titles.contactUs}
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
