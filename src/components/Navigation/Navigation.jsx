import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Navigation.css";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__logo-section">
        <img className="navigation__logo" src={logo} alt="logo" />
        <h3 className="navigation__name">WebDesign2Code</h3>
      </div>
      <ul className="navigation__link-section">
        <Link to="/features" className="text-reg navigation__link">Features</Link>
        <Link to="/pricing" className="text-reg navigation__link">Pricing</Link>
        <Link to="/support" className="text-reg navigation__link">Support</Link>
      </ul>
      {/* Corrected Link to navigate to /login */}
      <Link to="/login" className="text-reg navigation__cta">
        Get Started
        <img className="navigation__arrow" src={arrow} alt="arrow" />
      </Link>
    </nav>
  );
};

export default Navigation;
