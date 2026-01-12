import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

// Import Icons
import { 
  SiTailwindcss, 
  SiRender, 
  SiOllama,
  SiPostman,
  SiNotion,
  SiVercel,
  SiKaggle,
  SiLinux,
  SiExpress,
  SiGithub
} from "react-icons/si";
import { FaUsers, FaBug } from "react-icons/fa6";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skillsData = [
    { name: 'C', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: SiExpress, isComponent: true, color: '#ffffff' },
    { name: 'Tailwind', icon: SiTailwindcss, isComponent: true, color: '#38bdf8' },
    { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
    { name: 'SQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
    { name: 'ML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Leadership', icon: FaUsers, isComponent: true, color: '#ff003c' },
    { name: 'Vibe Coding', icon: FaBug, isComponent: true, color: '#4ade80' },
  ];

  const toolsData = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: SiGithub, isComponent: true, color: '#ffffff' },
    // UPDATED: Postman to Component
    { name: 'Postman', icon: SiPostman, isComponent: true, color: '#ff6c37' },
    { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    // UPDATED: Notion to Component (Fixes size issue)
    { name: 'Notion', icon: SiNotion, isComponent: true, color: '#ffffff' },
    { name: 'Vercel', icon: SiVercel, isComponent: true, color: '#ffffff' },
    { name: 'Render', icon: SiRender, isComponent: true, color: '#fff' }, 
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Kaggle', icon: SiKaggle, isComponent: true, color: '#20beff' },
    { name: 'Ollama', icon: SiOllama, isComponent: true, color: '#fff' },
  ];

  return (
    <section
      ref={sectionRef}
      className={`skills-section ${isVisible ? 'animate-pop' : ''}`}
    >
      <div className="section-title-wrapper">
        <h2 className="section-title">
          &lt; Skills & Technologies /&gt;
        </h2>
      </div>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} isVisible={isVisible} />
        ))}
      </div>

      <h3 className="subsection-title">[ Tools & Software ]</h3>
      <div className="tools-container">
        {toolsData.map((tool, index) => (
          <ToolCard key={tool.name} tool={tool} index={index} isVisible={isVisible} />
        ))}
      </div>

      <p className="skills-tagline">
        // SYSTEM STATUS: Constantly learning and adapting...
      </p>
    </section>
  );
};

function SkillCard({ skill, index, isVisible }) {
  const IconComponent = skill.isComponent ? skill.icon : null;
  
  return (
    <div
      className="skill-card"
      style={{ animationDelay: isVisible ? `${index * 0.05}s` : '0s' }}
    >
      <div className="skill-card-content">
        <div className="skill-icon-wrapper">
          {skill.isComponent ? (
            <IconComponent className="skill-icon skill-icon-svg" style={{ color: skill.color }} />
          ) : (
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
          )}
        </div>
        <div className="skill-name">{skill.name}</div>
      </div>
      <div className="card-corner corner-tl"></div>
      <div className="card-corner corner-br"></div>
    </div>
  );
}

function ToolCard({ tool, index, isVisible }) {
  const IconComponent = tool.isComponent ? tool.icon : null;

  return (
    <div
      className="tool-card"
      style={{ animationDelay: isVisible ? `${index * 0.05}s` : '0s' }}
    >
      <div className="tool-icon-wrapper">
        {tool.isComponent ? (
          <IconComponent className="tool-icon skill-icon-svg" style={{ color: tool.color }} />
        ) : (
          <img src={tool.icon} alt={tool.name} className="tool-icon" />
        )}
      </div>
      <div className="tool-name">{tool.name}</div>
    </div>
  );
}

export default Skills;