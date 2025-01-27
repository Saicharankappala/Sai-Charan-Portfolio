import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Accenture Solution Pvt Ltd",
      logo: `${process.env.PUBLIC_URL}/assets/accenture-logo-768x768.webp`, // Accenture logo
      role: "Software Engineer",
      duration: "Aug 2021 – Jan 2023",
      achievements: [
        "Collaborated with cross-functional teams, including product managers and designers, to deliver customer-centric features and ensure seamless user experiences.",
        "Developed scalable frontend interfaces using modern frameworks like React.js to enhance user interaction and improve application performance by 30%.",
        "Partnered with backend teams to integrate APIs efficiently, utilizing GraphQL and REST principles for data exchange, optimizing data flow for complex systems.",
        "Designed and implemented CI/CD pipelines to streamline the deployment of frontend applications, ensuring rapid feature rollouts and reducing deployment time by 40%.",
        "Conducted extensive testing with tools like Jest and Selenium, ensuring high-quality, bug-free code before deployment to production.",
        "Built responsive, user-friendly web components, utilizing HTML, CSS, and JavaScript, adhering to accessibility and performance best practices.",
        "Contributed to code reviews and technical documentation, fostering a culture of collaboration and continuous improvement within the team.",
        "Integrated frontend solutions with cloud-based systems on Microsoft Azure, enabling high-availability distributed systems.",
      ],
    },
    {
      company: "Maveric Systems Pvt Ltd",
      logo: `${process.env.PUBLIC_URL}/assets/Maveric_Systems-Logo.jpeg`, // Maveric Systems logo
      role: "Software Engineer",
      duration: "Oct 2020 – Aug 2021",
      achievements: [
        "Designed and executed frontend test cases for distributed systems, ensuring high reliability and fault tolerance across complex modules.",
        "Automated UI testing workflows using Selenium WebDriver, significantly reducing manual efforts and enhancing testing efficiency by 50%.",
        "Collaborated closely with developers and product teams to identify and resolve UI bottlenecks, improving application reliability and user experience by 20%.",
        "Developed Python-based frameworks to automate GUI testing, enabling rapid debugging and validation of frontend components in high-performance applications.",
        "Conducted performance and load testing using Azure Load Testing Tools to validate the scalability and responsiveness of web applications under varying user loads.",
        "Partnered with cross-functional teams to enhance customer-facing interfaces, ensuring alignment with business requirements and delivering high-quality user experiences.",
      ],
    },
  ];

  return (
    <div id="work-experience" className="work-experience">
      <h1>Work Experience</h1>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <img src={experience.logo} alt={`${experience.company} Logo`} />
            </div>
            <div className="timeline-content">
              <h2>{experience.role}</h2>
              <p className="company">{experience.company}</p>
              <p className="duration">{experience.duration}</p>
              <ul>
                {experience.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
