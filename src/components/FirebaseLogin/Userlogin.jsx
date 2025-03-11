import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import "./Userlogin.css"; 

const UserLogin = ({ onSignupClick }) => {
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
      <h2 className="login-title">Welcome Back</h2>
      <p className="login-subtitle">Login to your Account</p>

      <form className="login-form">
        <div>
          <label htmlFor="email" className="login-label">Email Address</label>
          <input required type="email" name="email" id="email" placeholder="Enter Your Email" className="login-input" />
        </div>

        <div className="password-container">
          <label htmlFor="password" className="login-label">Password</label>
          <input type={passwordVisible ? "text" : "password"} id="password" name="password" placeholder="Enter your Password" className="login-input" />
          <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="password-toggle">
            {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>

      <div className="divider-container">
        <span className="divider-line"></span>
        <span className="divider-text">OR</span>
        <span className="divider-line"></span>
      </div>

      <button className="google-button">
        <FcGoogle /> Continue with Google
      </button>

      <p className="signup-text">
        Don't have an account?  
        <button className="signup-link" onClick={onSignupClick}>Sign up</button>
      </p>
    </div>
    </div>
  );
};

export default UserLogin;
