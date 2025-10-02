import React from "react";
import "../../styles/Projects.scss";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HackSpark AI Security Suite",
      description:
        "An AI-powered security application that detects deepfake images, deepfake audio, and phishing URLs — all in one platform, along with a publishing tool for sharing insights.",
      technologies: [
        "React",
        "Node.js",
        "Python",
        "TensorFlow/PyTorch",
        "Flask/FastAPI",
        "MongoDB",
      ],
      image: require("../../assets/images/hackspark.png"),
      link: "https://github.com/The-Knightts/HackSpark",
    },
    {
      id: 2,

      title: "Weather Insight Hub",
      description:
        "A modern web application delivering real-time weather forecasts, location-based conditions, and visual insights with sleek UI and API integration.",
      technologies: [
        "React",
        "JavaScript/TypeScript",
        "Node.js/Express",
        "OpenWeatherMap API (or similar)",
        "CSS / Tailwind / Styled Components",
      ],
      image: require("../../assets/images/weather.png"),
      link: "https://github.com/The-Knightts/WeatherApp",
    },
    {
      id: 3,

      title: "VedaAI",
      description:
        "A generative AI platform that produces 20+ content variations on a single platform, while enabling teams to collaborate seamlessly in the content creation process.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "AI / LLMs",
        "Collaborative editing",
        "PostgreSQL",
        "Neon Database",
        "Docker",
        "Prisma"
      ],

      image: require("../../assets/images/vedaai.png"),
      link: "https://github.com/The-Knightts/Team-Lossers",
    },
  ];

  return (
    <section className="projects-section section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
