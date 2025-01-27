import React from "react";
import "./Banner.css";

const Banner = ({ onBackToLanding }) => {
  return (
    <div className="banner">
      {/* Logo */}
      <div className="logo">
        <span>A</span>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="#home" onClick={onBackToLanding}>
          Home
        </a>
        <a href="#work-experience">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Right Icons */}
      <div className="right-icons">
        <a
          href="https://www.linkedin.com/in/sai-charan-kappala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/linkedin-icon.png`}
            alt="LinkedIn"
            className="icon"
          />
        </a>
        <a
          href="https://github.com/Saicharankappala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/github-icon.png`}
            alt="GitHub"
            className="icon"
          />
        </a>
        <button className="close-btn" onClick={onBackToLanding}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default Banner;
