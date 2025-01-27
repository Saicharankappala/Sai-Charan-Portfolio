import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Carnest – Carpooling Platform",
      description:
        "A web-based platform developed to streamline carpooling by connecting users and enabling them to manage and share rides efficiently. Built using JavaScript, Node.js, and Django, Carnest offers a responsive and scalable interface with integrated real-time geolocation tracking to enhance user safety and improve ride coordination. Extensive performance testing and optimization ensures reliability and scalability, making the platform capable of handling high user traffic while providing an enhanced and seamless user experience.",
      image: `${process.env.PUBLIC_URL}/assets/carnest.png`,
      githubLink: "https://github.com/Saicharankappala/Carnest.git", // Replace with your GitHub repo link
    },
    {
      title: "MV Portfolio Optimization",
      description:
        "A financial modeling project designed to implement the Mean-Variance Optimization model for portfolio allocation. Developed using R, the project leverages advanced data analysis and visualization techniques to create efficient frontiers and risk-return plots, facilitating strategic investment decisions. PostgreSQL was utilized to store and manage historical financial data, ensuring seamless querying and retrieval for optimization processes. This project empowers investors with actionable insights through interactive and visually rich tools for data-driven portfolio management.",
      image: `${process.env.PUBLIC_URL}/assets/mv-portfolio.png`,
      githubLink: "https://github.com/Saicharankappala/Data-Transformation-Project---MV-Portfolio-Optimization.git", // Replace with your GitHub repo link
    },
  ];

  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-details">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/github-icon.png`}
                alt="GitHub Logo"
                className="github-logo"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
