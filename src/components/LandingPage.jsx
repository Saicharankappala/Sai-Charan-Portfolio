import React from "react";
import "./LandingPage.css";

const LandingPage = ({ onExplore }) => {
  return (
    <div id="home" className="landing-page">
      <img
        src={`${process.env.PUBLIC_URL}/assets/animation.gif`}
        alt="Sai Charan's Animation"
        className="landing-gif"
      />
      <div className="intro">
        <h1>👋 I'm Sai Charan Kappala</h1>
        <div className="social-links">
          <a
            href="https://github.com/Saicharankappala"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/github-icon.png`}
              alt="GitHub"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-charan-kappala"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/linkedin-icon.png`}
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
        </div>
        <div className="buttons">
          {/* Resume Preview and Download */}
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn resume-btn"
          >
            Resume
          </a>
          {/* Email Button */}
          <a
            href="mailto:kappalasaicharan22@gmail.com"
            className="btn email-btn"
          >
            Email Me
          </a>
        </div>
      </div>
      <button className="explore-button" onClick={onExplore}>
        Explore My Work
      </button>
    </div>
  );
};

export default LandingPage;
