



// import React from 'react';
// import './index1.css';

// const Version1 = () => {
//   return (
//    <div className='container'>
//      <div className="app-container">
//       <div className="phone-wrapper">
//         <div className="phone-frame">
//           <div className="notch"></div>
//           <div className="login-screen">
//             <div className="logo-container">
//               <img src="/logo.svg" alt="Logo" className="logo" />
//               <h1 className="brand-name">neura seal</h1>
//             </div>
//             <form className="login-form">
//               <label className="label">Username</label>
//               <input type="text" placeholder="name.surname@gmail.com" className="input" />
//               <label className="label">Password</label>
//               <input type="password" placeholder="Password" className="input" />
//               <a href="#" className="forgot-password">Forgot Password?</a>
//               <button className="sign-in-btn">Sign in</button>
//               <div className="signup-link">
//                 Don’t have an account? <a href="#">Sign up</a>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="phone-shadow" />
//       </div>
//     </div>
//    </div>
//   );
// };

// export default Version1;




import React from 'react';
import './index1.css';

const Version1 = () => {
  return (
    <div className="app-container">
      <div className="phone-wrapper">
        <div className="phone-border">
          <div className="phone-frame-custom">
            <div className="notch"></div>
            <div className="login-screen">
              <div className="logo-container">
                <img src="/logo.svg" alt="Logo" className="logo" />
                <h1 className="brand-name">neura seal</h1>
              </div>
              <form className="login-form">
                <input type="text" placeholder="name.surname@gmail.com" className="input" />
                <input type="password" placeholder="Password" className="input" />
                <a href="#" className="forgot-password">Forgot Password?</a>
                <button className="sign-in-btn">Sign in</button>
                <div className="signup-link">
                  Don’t have an account? <a href="#">Sign up</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="phone-shadow" />
      </div>
    </div>
  );
};

export default Version1;

/* App.css */

