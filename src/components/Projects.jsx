import React, { useState } from 'react';
import './Projects.css';
import { SiGithub } from "react-icons/si";
import { FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";

// --- IMPORT LOCAL IMAGES ---
import contractImg from '../assets/AI Powered Contract Generator.png';
import agricultureImg from '../assets/Predictive Analysis for Smart Agriculture.png';
import foodImg from '../assets/Online Food Donation.png';
import airathImg from '../assets/Airath Company Website.png';
import vakyaImg from '../assets/Vakya Sangam The Language Learning App.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "AI Contract Generator",
      category: "Fullstack",
      description: "Automated legal document generation using AI. Streamlines contract creation with secure workflows.",
      stack: ["Next.js", "TypeScript", "Prisma", "Docker"],
      github: "https://github.com/chethanakash67/ai-contract-bot-starter",
      image: contractImg
    },
    {
      id: 2,
      title: "Smart Agriculture Analysis",
      category: "ML",
      description: "Data-driven insights for farming using PySpark. Predicts crop yields and optimizes resources.",
      stack: ["Python", "Streamlit", "PySpark", "Scikit-learn"],
      github: "https://github.com/chethanakash67/Predictive-Analysis-for-Smart-Agriculture",
      image: agricultureImg
    },
    {
      id: 3,
      title: "Online Food Donation",
      category: "Fullstack",
      description: "Platform connecting donors with NGOs to reduce food waste. Features real-time tracking.",
      stack: ["Node.js", "MySQL", "HTML/CSS", "JavaScript"],
      github: "https://github.com/chethanakash67/online-food-donation",
      image: foodImg
    },
    {
      id: 4,
      title: "Airath Company Website",
      category: "Fullstack",
      description: "Official corporate website for Airath. Built for high performance and scalability.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Sai-Videsh/ARC",
      image: airathImg
    },
    {
      id: 5,
      title: "Vakya Sangam App",
      category: "Mobile",
      description: "Cross-platform mobile application for language learning, designed to bridge communication gaps.",
      stack: ["React Native", "Android", "iOS"],
      github: "https://github.com/Somesh520/Vakya-Sangham",
      image: vakyaImg
    }
  ];

  const categories = ['All', 'Fullstack', 'ML', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects-section">
      <div className="projects-bg-grid"></div>

      <div className="projects-container">
        
        {/* Header with Glitch Effect */}
        <div className="header-wrapper">
            <h2 className="projects-title" data-text="Featured Projects">
            <span className="accent">&gt;</span> Featured Projects
            </h2>
            <div className="sys-status">SYSTEM_STATUS: ONLINE</div>
        </div>

        {/* Tactical Filter Buttons */}
        <div className="filter-container">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              <span className="btn-decor"></span>
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid (Key forces re-render animation on filter change) */}
        <div className="projects-grid" key={activeFilter}>
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              
              {/* Scanning Laser Effect */}
              <div className="scan-line"></div>
              
              {/* Image Area */}
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="img-overlay"></div>
                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn">
                    SOURCE_CODE <SiGithub />
                  </a>
                </div>
              </div>

              {/* Content Area */}
              <div className="project-content">
                <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="cat-badge">
                        <FaCodeBranch size={10} /> {project.category}
                    </div>
                </div>
                
                <p className="project-desc">{project.description}</p>
                
                <div className="divider-line"></div>

                {/* Tech Stack Tags */}
                <div className="project-stack">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="stack-tag">
                        <span className="hash">#</span>{tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative Tech Corners */}
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;