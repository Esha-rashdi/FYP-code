import React, { useState } from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.svg";
import FileUpload from "../FileUpload/FileUpload"; // Import FileUpload component

const Hero = () => {
  const [showFileUpload, setShowFileUpload] = useState(false);

  return (
    <section className="hero">
      <div className="hero__column">
        <h1 className="h1 hero__heading">
          <span className="hero__heading-gradient">Transforming</span>
          Web Designs{" "}
          <span className="hero__heading-gradient">into Codes</span>
          in Minutes, Not Hours
        </h1>
        <p className="text-reg hero__subheading">
          Stop wasting time on manual coding. Let AI convert your design into clean,
          production-ready code with 99.9% accuracy.
        </p>
        <div className="hero__input-container">
          <input
            className="hero__input"
            type="email"
            placeholder="Start Converting Your Designs"
          />
          <button className="text-reg hero__submit" onClick={() => setShowFileUpload(true)}>
            Upload File
            <img className="hero__arrow" src={arrow} alt="arrow" />
          </button>
        </div>
      </div>

      {/* Conditionally show the FileUpload component */}
      {showFileUpload && <FileUpload />}
    </section>
  );
};

export default Hero;
