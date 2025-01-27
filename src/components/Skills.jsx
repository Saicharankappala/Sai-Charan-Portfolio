import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["JavaScript", "React.js", "Python", "Java", "HTML", "CSS", "C++", "Algorithms", "Data Structures"],
    },
    {
      category: "Frontend Ecosystem",
      skills: ["React.js", "Node.js", "GraphQL", "Jest", "Cypress", "Mocha", "Chai", "Bundling", "Linting", "Releasing Tools"],
    },
    {
      category: "Cloud",
      skills: ["Google Cloud Platform (GCP)", "Microsoft Azure", "AWS"],
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Cassandra"],
    },
    {
      category: "Automation Tools",
      skills: ["Docker", "Kubernetes", "GitLab", "Jenkins", "Azure DevOps", "ARM Templates"],
    },
    {
      category: "Operating Systems",
      skills: ["Linux","Mac OS","Windows"],
    },
    {
      category: "Testing & Quality Assurance",
      skills: ["Selenium", "Performance and Load Testing", "JUnit", "TestNG"],
    },
    {
      category: "Soft Skills",
      skills: ["Agile Methodology", "Problem Solving", "Collaboration", "Technical Documentation"],
    },
  ];

  return (
    <div id="skills" className="skills-section">
      <h1>Skills</h1>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="skill-category"
            style={{ "--animation-order": index }}
          >
            <h2>{category.category}</h2>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
