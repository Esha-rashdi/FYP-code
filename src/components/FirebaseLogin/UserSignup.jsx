import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import "./Userlogin.css";

const UserSignup = ({ switchToLogin }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFormVisible(true);
    }, 100);
  }, []);

  return (
    <div className="login-wrapper">
    <div className={`login-container ${formVisible ? "visible" : "hidden"}`}>
      <h2 className="login-title">Create an Account</h2>
      <p className="login-subtitle">Join us today!</p>

      <form className="login-form">
        <div>
          <label className="login-label">Full Name</label>
          <input required type="text" placeholder="Enter Your Name" className="login-input" />
        </div>

        <div>
          <label className="login-label">Email Address</label>
          <input required type="email" placeholder="Enter Your Email" className="login-input" />
        </div>

        <div className="password-container">
          <label className="login-label">Password</label>
          <input type={passwordVisible ? "text" : "password"} placeholder="Create a Password" className="login-input" />
          <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="password-toggle">
            {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        <button type="submit" className="login-button">Sign Up</button>
      </form>

      <div className="divider-container">
        <span className="divider-line"></span>
        <span className="divider-text">OR</span>
        <span className="divider-line"></span>
      </div>

      <button className="google-button">
        <FcGoogle /> Sign up with Google
      </button>

      <p className="signup-text">
        Already have an account?  
        <button className="signup-link" onClick={switchToLogin}>Login</button>
      </p>
    </div>
    </div>
  );
};

export default UserSignup;
