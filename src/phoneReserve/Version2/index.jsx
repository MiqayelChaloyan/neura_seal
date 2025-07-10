// import React from 'react';
// import './index.css';

// const Version2 = () => {
//   return (
//    <div className='container'>
//      <div className="app-container">
//       <div className="phone-wrapper">
//      <div className='ft'>
//      <div className="phone-frame">
//           <div className="phone-inner-bezel">
//             <div className="notch"></div>
//             <div className="login-screen">
//               <div className="logo-container">
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt="Logo" className="logo" />
//                 <h1 className="brand-name">neura seal</h1>
//               </div>
//               <form className="login-form">
//                 <label className="label">Username</label>
//                 <input type="text" placeholder="name.surname@gmail.com" className="input" />
//                 <label className="label">Password</label>
//                 <input type="password" placeholder="Password" className="input" />
//                 <a href="#" className="forgot-password">Forgot Password?</a>
//                 <button className="sign-in-btn">Sign in</button>
//                 <div className="signup-link">
//                   Don’t have an account? <a href="#">Sign up</a>
//                 </div>
//               </form>
//           </div>
//         </div>
//       </div>
//      </div>
//         <div className="phone-shadow" />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Version2;




import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';

const images = [
  "https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg",
  "https://cdn.pixabay.com/photo/2022/12/18/19/30/christmas-7664112_640.jpg",
  "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

const Version2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className='container'>
      <div className="app-container">
        <div className="phone-wrapper">
          <div className='ft'>
            <div className="phone-frame">
              <div className="phone-inner-bezel">
              <figure className='figure1'></figure>
              <figure className='figure2'></figure>

                <div className="notch"></div>
                <div className="login-screen">
                  <motion.div
                    className="image-slider"
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }} 
                  >
                    <img
                      src={images[currentImageIndex]}
                      alt={`Slide ${currentImageIndex}`}
                      className="slider-image"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="phone-shadow" />
        </div>
      </div>
    </div>
  );
};

export default Version2;
