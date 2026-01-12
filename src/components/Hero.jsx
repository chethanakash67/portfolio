import React, { useState, useEffect } from "react";
import "./Hero.css";
import resume from "../assets/resume.pdf";

export default function Hero() {
  const resumeUrl = resume;
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      className="hero" 
      style={{ 
        "--mouse-x": `${mousePosition.x}%`, 
        "--mouse-y": `${mousePosition.y}%` 
      }}
    >
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="eyebrow">$</span>
            Hi, I'm <span className="accent glow-text">Chethan</span> <span className="big-name">Akash</span>
          </h1>

          <h2 className="hero-role">
            Full Stack Developer
            <span className="cursor">_</span>
          </h2>

          <p className="hero-desc">
            I blend experience across coding, design, and product building. 
            Currently Technical lead at <strong>Airath</strong> and exploring Agentic AI & RAG.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-outline" href="#projects">
              View Work
            </a>
            <a
              className="btn btn-solid"
              href={resumeUrl}
              download="Chethan_Akash_Resume.pdf"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a className="social-btn" href="https://github.com/chethanakash67" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.2 9.14 7.63 10.62.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.95-3.1.67-3.76-1.5-3.76-1.5-.51-1.29-1.24-1.64-1.24-1.64-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .17 1.57 1.03 1.57 1.03.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.97 0 0 .95-.3 3.12 1.15a10.8 10.8 0 0 1 5.68 0c2.16-1.45 3.11-1.15 3.11-1.15.62 1.55.24 2.69.12 2.97.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.25-5.11 5.52.4.35.76 1.03.76 2.07 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.78.54 4.42-1.48 7.61-5.67 7.61-10.62C23.25 5.48 18.27.5 12 .5z"/></svg>
            </a>
            <a className="social-btn" href="https://www.linkedin.com/in/chethan-akash/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.78v2.26h.07c.66-1.25 2.28-2.56 4.69-2.56C22.98 7.7 24 11 24 15.8V24h-5v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24H8V8z"/></svg>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="floating-frames">
            <div className="frame f1" />
            <div className="frame f2" />
            <div className="frame f3" />
          </div>

          <div className="code-card">
            <div className="code-header">
              <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="code-tag">SYSTEM.js</div>
            </div>
            
            <div className="code-block">
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">developer</span> <span className="operator">=</span> {"{"}
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="key">name</span>: <span className="string">"Chethan Akash"</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="key">skills</span>: [<span className="string">"Cpp"</span>, <span className="string">"React"</span>, <span className="string">"Node"</span>],
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="key">hardWorker</span>: <span className="boolean">true</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="key">problemSolver</span>: <span className="boolean">true</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="function">hire</span>: <span className="keyword">function</span>() {"{"}
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="string">"Let's build!"</span>;
              </div>
              <div className="code-line">
                &nbsp;&nbsp;{"}"}
              </div>
              <div className="code-line">
                {"}"}
              </div>
            </div>
            <div className="code-corner" />
          </div>
        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <div className="scroll-indicator">
        <svg className="scroll-arrow" viewBox="0 0 24 24">
          <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="scroll-text">[ SCROLL ]</span>
      </div>

    </section>
  );
}