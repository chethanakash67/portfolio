import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Slight delay before starting the animation for dramatic effect
            setTimeout(() => {
              setIsVisible(true);
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleAirathClick = () => setIsModalOpen(true);
  const handleSarvagyaClick = () => window.open("https://drive.google.com/file/d/1v0dIyZC4QXBQ4kdKhNYk9NH0lhN-Bi04/view?usp=drive_link", "_blank");

  return (
    <section 
      className={`experience-section ${isVisible ? 'animate-pop' : ''}`} 
      ref={sectionRef}
    >
      <h2 className="section-title" data-text="> SYSTEM_LOGS: EXP">
        <span>&gt;</span> EXPERIENCE_LOGS
      </h2>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {/* --- Card 1 --- */}
        <div className="timeline-item" style={{ transitionDelay: '0.4s' }}>
          <div className="timeline-node"></div>
          
          <div className="job-card">
            {/* Decorative HUD Elements */}
            <div className="hud-corner top-left"></div>
            <div className="hud-corner bottom-right"></div>
            <div className="scan-line"></div>
            
            <div className="card-header">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
              </div>
              <div className="role-info">
                <h3>Technical Lead</h3>
                <p className="company">Airath Innovations Pvt. Ltd.</p>
              </div>
              <div className="date-badge">Sep 2025 - Present</div>
            </div>

            <ul className="job-description">
              <li><span>&gt;</span> Researched 7+ competitor platforms, benchmarking product flow, UI systems, and market gaps.</li>
              <li><span>&gt;</span> Designed and built the complete landing page and dashboard layouts (in progress) with one teammate.</li>
            </ul>

            {/* Tech Stack Chips */}
            <div className="tech-stack">
              <span>React.js</span>
              <span>Figma</span>
              <span>Dashboard UI</span>
            </div>

            <button className="btn-certificate" onClick={handleAirathClick}>
              <span className="star-icon">✹</span> View Certificate
            </button>
          </div>
        </div>

        {/* --- Card 2 --- */}
        <div className="timeline-item" style={{ transitionDelay: '0.7s' }}>
          <div className="timeline-node"></div>

          <div className="job-card">
            <div className="hud-corner top-left"></div>
            <div className="hud-corner bottom-right"></div>
            <div className="scan-line"></div>

            <div className="card-header">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
              </div>
              <div className="role-info">
                <h3>Products Intern</h3>
                <p className="company">Sarvagya Nirakar</p>
              </div>
              <div className="date-badge">Apr 2024 - Sep 2024</div>
            </div>

            <ul className="job-description">
              <li><span>&gt;</span> Led cross-functional team of 8+ contributors as Product Manager and Developer.</li>
              <li><span>&gt;</span> Directed HR & Public Executive operations by coordinating 10+ community interactions.</li>
            </ul>

             {/* Tech Stack Chips */}
             <div className="tech-stack">
              <span>Management</span>
              <span>Public Relations</span>
              <span>DevOps</span>
            </div>

            <button className="btn-certificate" onClick={handleSarvagyaClick}>
              <span className="star-icon">✹</span> View Certificate
            </button>
          </div>
        </div>
      </div>

      {/* --- Modal --- */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
                <span className="modal-indicator"></span> 
                STATUS: PENDING
            </div>
            <h3 className="modal-heading">Certificate Processing</h3>
            <p className="modal-text">
              I've done technical research for the hardware product, and built landing page and dashboard for them, however certificate will be received shortly.
            </p>
            <button className="btn-modal-action" onClick={() => setIsModalOpen(false)}>
              ACKNOWLEDGE
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;