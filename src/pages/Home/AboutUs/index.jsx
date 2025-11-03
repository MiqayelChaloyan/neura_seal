// import { motion } from "framer-motion";

// import Container from "../../../components/Container";

// import { ImagePaths, Texts } from "../../../constants";

// import "./styles.css";


// const AboutUs = () => {
//   return (
//     <>
//       <section className="about-us-container">
//         <Container>
//           <div className="who-we-are">
//             <div className="who-we-are-content">
//               <h1>Who We Are</h1>
//               <p>{Texts.whoWeAreText}</p>
//             </div>
//             <div
//               className="who-we-are-visual"
//               style={{ backgroundImage: `url(${ImagePaths.visualImg})` }}
//             />
//           </div>
//         </Container>
//         <div className="mission-vision-section">
//           <div className="mission-vision-row">
//             <div className="mission-vision-title">
//               <h2>Mission</h2>
//             </div>
//             <div className="mission-vision-description-container">
//               <p className="mission-vision-description">
//                 {Texts.missionText}
//               </p>
//             </div>
//           </div>
//           <div className="mission-vision-row">
//             <div className="mission-vision-title">
//               <h2 className="mission-vision-title-vision">Vision</h2>
//             </div>
//             <div className="mission-vision-description-container">
//               <p className="mission-vision-description">
//                 {Texts.visionText}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutUs;



import { motion } from "framer-motion";

import Container from "../../../components/Container";

import { ImagePaths, Texts } from "../../../constants";

import "./styles.css";


const AboutUs = () => {
  // Animation variants for bottom-to-top animation
  const slideUpVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <section className="about-us-container">
        <Container>
          <div className="who-we-are">
            <div className="who-we-are-content">
              <h1>Who We Are</h1>
              <p>{Texts.whoWeAreText}</p>
            </div>
            <div
              className="who-we-are-visual"
              style={{ backgroundImage: `url(${ImagePaths.visualImg})` }}
            />
          </div>
        </Container>
        <motion.div 
          className="mission-vision-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="mission-vision-row"
            variants={slideUpVariants}
          >
            <motion.div 
              className="mission-vision-title"
              variants={slideUpVariants}
            >
              <h2>Mission</h2>
            </motion.div>
            <motion.div 
              className="mission-vision-description-container"
              variants={slideUpVariants}
            >
              <p className="mission-vision-description">
                {Texts.missionText}
              </p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mission-vision-row"
            variants={slideUpVariants}
          >
            <motion.div 
              className="mission-vision-title"
              variants={slideUpVariants}
            >
              <h2 className="mission-vision-title-vision">Vision</h2>
            </motion.div>
            <motion.div 
              className="mission-vision-description-container"
              variants={slideUpVariants}
            >
              <p className="mission-vision-description">
                {Texts.visionText}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutUs;