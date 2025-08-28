import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { useLanguageSync } from '../../hooks/useLanguageSync';

import { motion, AnimatePresence } from 'framer-motion';

import { SvgPaths } from '../../constants';

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

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { t, i18n } = useTranslation();
  
  // Use the language sync hook
  useLanguageSync();


const pageTitles = {
  '/': '',
  '/en': '',
  '/ar': '',
  '/technology': 'titles.theTechnology',
  '/en/technology': 'titles.theTechnology',
  '/ar/technology': 'titles.theTechnology',
  '/quality-policy': 'titles.qualityPolicy',
  '/en/quality-policy': 'titles.qualityPolicy',
  '/ar/quality-policy': 'titles.qualityPolicy',
  '/how-it-works': 'titles.howItWorks',
  '/en/how-it-works': 'titles.howItWorks',
  '/ar/how-it-works': 'titles.howItWorks',
};

  const handleLanguageChange = (language) => {
    // Close the menu first
    setIsOpen(false);
    
    // Dispatch menu state change event
    const event = new CustomEvent('menuStateChange', {
      detail: { isOpen: false }
    });
    window.dispatchEvent(event);
    
    // Get current path without language prefix
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/');
    
    // Remove language prefix if it exists
    let routePath = '';
    if (pathSegments[1] === 'en' || pathSegments[1] === 'ar') {
      routePath = pathSegments.slice(2).join('/');
    } else {
      routePath = pathSegments.slice(1).join('/');
    }
    
    // Construct new path with new language
    const newPath = `/${language}${routePath ? `/${routePath}` : ''}`;
    
    // Change i18n language first
    i18n.changeLanguage(language);
    
    // Then navigate to new language route
    navigate(newPath);
  };

  // Function to determine if a language is currently active
  const isActiveLanguage = (language) => {
    // Check both i18n language and URL language
    const currentLang = i18n.language;
    const pathSegments = location.pathname.split('/');
    const urlLang = pathSegments[1];
    
    return currentLang === language && urlLang === language;
  };

  const toggleMenu = (e) => {
    // Only prevent default for click events, not touch events
    if (e && e.type === 'click') {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const newState = !isOpen;
    setIsOpen(newState);
    
    // Dispatch menu state change event
    const event = new CustomEvent('menuStateChange', {
      detail: { isOpen: newState }
    });
    window.dispatchEvent(event);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    
    // Get current language from URL or i18n
    const currentLang = i18n.language;
    
    // If not on home page, navigate to home in current language
    if (location.pathname !== `/${currentLang}` && location.pathname !== '/') {
      navigate(`/${currentLang}`);
    }
    
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuItemClick = (target) => {
    // Close menu immediately for better UX
    setIsOpen(false);
    
    // Dispatch menu state change event
    const event = new CustomEvent('menuStateChange', {
      detail: { isOpen: false }
    });
    window.dispatchEvent(event);

    // Get current language from URL or i18n
    const currentLang = i18n.language;

    if (target === 'technology') {
      navigate(`/${currentLang}/technology`);
    } else {
      if (location.pathname !== `/${currentLang}`) {
        navigate(`/${currentLang}`);
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
          <Link to="/" className='header-logo-link' onClick={handleLogoClick}>
            <SvgPaths.logoIcon />
          </Link>
        </div>

        <h1 className="header-title">{pageTitles[location.pathname] ? t(pageTitles[location.pathname]) : ''}</h1>

        <div className="header-right">
          <div className="language-switcher-header">
            <button 
              className={`lang-btn-header ${isActiveLanguage('en') ? 'active' : ''}`}
              onClick={() => handleLanguageChange('en')}
              aria-label="Switch to English"
            >
              <span className="flag-emoji">🇺🇸</span>
            </button>
            <button 
              className={`lang-btn-header ${isActiveLanguage('ar') ? 'active' : ''}`}
              onClick={() => handleLanguageChange('ar')}
              aria-label="Switch to Arabic"
            >
              <span className="flag-emoji">🇸🇦</span>
            </button>
          </div>

          <button 
            className="hamburger-button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
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
        </div>
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
                    {t('navigation.whoWeAre')}
                  </motion.li>
                  <motion.li
                    className="menu-item"
                    variants={itemVariants}
                    onClick={() => handleMenuItemClick('technology')}
                  >
                    {t('navigation.technology')}
                  </motion.li>
                  <motion.li
                    className="menu-item"
                    variants={itemVariants}
                    onClick={() => handleMenuItemClick('contact-us')}
                  >
                    {t('navigation.contactUs')}
                  </motion.li>
                </motion.ul>

                {/* <motion.div 
                  className="language-switcher"
                  variants={itemVariants}
                >
                  <button 
                    className={`lang-btn ${isActiveLanguage('en') ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    EN
                  </button>
                  <button 
                    className={`lang-btn ${isActiveLanguage('ar') ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('ar')}
                  >
                    AR
                  </button>
                </motion.div> */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
