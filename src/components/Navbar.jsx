import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = ({ onBackToLanding }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
      <li>
  <Link to="about" smooth={true} duration={500}>
    About Me
  </Link>
</li>
        <li>
          <a href="#home" onClick={onBackToLanding}>
            Home
          </a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#work-experience">Work Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
