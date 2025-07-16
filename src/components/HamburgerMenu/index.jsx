// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// import { motion, AnimatePresence } from 'framer-motion';

// import { Instagram, Linkedin, Youtube, Twitter, Facebook } from 'lucide-react';

// import AboutUs from '../AboutUs';
// import ContactUs from '../ContactUs';

// import { Pages } from '../../constants/pages';
// import { Hosts } from '../../constants/hosts';
// import { Titles } from '../../constants';

// import './styles.css';
// import logo from '../../assets/logo.svg';


// const menuVariants = {
//   hidden: { opacity: 0, y: 40, transition: { duration: 0.7, ease: 'easeOut' } },
//   visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
//   exit: { opacity: 0, y: 40, transition: { duration: 0.5, ease: 'easeIn' } },
// };

// const listVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   },
// };

// const pageTitles = {
//   '/': '',
//   '/technology': 'Technology',
//   '/quality-policy': 'Quality Policy',
//   '/how-it-works': 'How It Works',
// };


// const HamburgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const currentTitle = pageTitles[location.pathname] || '';

//   const sectionRefs = [useRef(null), useRef(null), useRef(null)];
//   const scrollContainerRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen(prev => !prev);
//   };

//   const scrollTo = (index) => {
//     const ref = sectionRefs[index];
//     if (ref.current && scrollContainerRef.current) {
//       ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', id: index });
//       // setActiveIndex(index);
//     }
//   };


//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = sectionRefs.findIndex(ref => ref.current === entry.target);
//             if (index !== -1) {
//               setActiveIndex(index);
//             }
//           }
//         });
//       },
//       {
//         root: container,
//         threshold: 0.5,
//       }
//     );

//     sectionRefs.forEach(ref => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => {
//       sectionRefs.forEach(ref => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, []);


//   return (
//     <>
//       {/* Fixed top header */}
//       <header className="fixed-header">
//         <div className="header-left">
//          <Link to="/" className='header-logo-link'>
//           <img
//             src={logo}
//             alt="Logo"
//             className="header-logo"
//           />
//          </Link>
//         </div>

//         <h1 className="header-title">{currentTitle}</h1>

//         <button className="hamburger-button" onClick={toggleMenu}>
//           <motion.span
//             className="line"
//             animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//             transition={{ duration: 0.4, ease: 'easeInOut' }}
//           />
//           <motion.span
//             className="line"
//             animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//             transition={{ duration: 0.4, ease: 'easeInOut' }}
//           />
//         </button>
//       </header>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="fullscreen-menu"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={menuVariants}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="menu-bg" />

//             {/* <div className="top-left">
//               <img
//                 src="https://images.squarespace-cdn.com/content/v1/65f1f4c283c47475e7fc202f/6e60df43-e32e-4a08-b8e0-6b7f14417e6b/form+icon.png"
//                 alt="Logo"
//                 className="logo"
//               />
//             </div> */}

//             {/* <div className="left-panel">
//               <div className="menu-dots">
//                 {[0, 1, 2].map((idx) => (
//                   <button
//                     key={idx}
//                     className={`dot${activeIndex === idx ? ' active' : ''}`}
//                     onClick={() => scrollTo(idx)}
//                     aria-label={`Go to section ${idx + 1}`}
//                   />
//                 ))}
//               </div>
//             </div> */}

//             <div className="menu-center" ref={scrollContainerRef}>
//               <div className="menu-content">
//                 <motion.ul
//                   className="menu-items"
//                   initial="hidden"
//                   animate="visible"
//                   variants={listVariants}
//                 >
//                   <motion.li
//                     className="menu-item"
//                     variants={itemVariants}
//                     onClick={() => scrollTo('about-us')}
//                   >
//                     {Titles.whoWeAre}
//                   </motion.li>

//                   <motion.li
//                     className="menu-item"
//                     variants={itemVariants}
//                     onClick={() => {
//                       navigate(Pages.TECHNOLOGY);
//                       toggleMenu();
//                     }}
//                   >
//                     {Titles.theTechnology}
//                   </motion.li>

//                   <motion.li
//                     className="menu-item"
//                     variants={itemVariants}
//                     onClick={() => scrollTo(2)}
//                   >
//                     {Titles.contactUs}
//                   </motion.li>
//                 </motion.ul>
//                 {/* <div className="menu-sections">
//                   <section ref={sectionRefs[0]} className="menu-section">
//                     <AboutUs />
//                   </section>
//                   <section ref={sectionRefs[2]} className="menu-section">
//                     <ContactUs />
//                   </section>
//                 </div> */}
//               </div>
//             </div>
// {/* 
//             <div className="right-panel">
//               <div className="social-icons">
//                 <Link to={Hosts.INSTAGRAM}>
//                   <Instagram width={25} height={25} />
//                 </Link>
//                 <Link to={Hosts.LINKEDIN}>
//                   <Linkedin width={25} height={25} />
//                 </Link>
//                 <Link to={Hosts.YOUTUBE}>
//                   <Youtube width={25} height={25} />
//                 </Link>
//                 <Link to={Hosts.TWITTER}>
//                   <Twitter width={25} height={25} />
//                 </Link>
//                 <Link to={Hosts.FACEBOOK}>
//                   <Facebook width={25} height={25} />
//                 </Link>
//               </div>
//             </div> */}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default HamburgerMenu;



import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';
import logo from '../../assets/logo.svg';
import { Titles } from '../../constants';



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
    setIsOpen(prev => !prev);
  };

  const handleMenuItemClick = (target) => {
    // Close menu immediately for better UX
    setIsOpen(false);

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
