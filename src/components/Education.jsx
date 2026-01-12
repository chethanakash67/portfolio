import React, { useState, useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay ensures the animation plays after the user settles on the section
            setTimeout(() => { setIsVisible(true); }, 200); 
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // --- 3D TILT LOGIC ---
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on mouse position
    const rotateX = ((y - centerY) / centerY) * -12; 
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e) => {
    // Reset to flat state
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <section 
      className={`education-section ${isVisible ? 'animate-pop' : ''}`} 
      ref={sectionRef}
    >
      <h2 className="section-title" data-text="> ACADEMIC_LOGS">
        <span>&gt;</span> ACADEMIC_LOGS
      </h2>

      <div className="timeline-wrapper">
        <div className="timeline-line"></div>

        {/* --- Card 1: B.Tech --- */}
        <div className="timeline-node-wrapper">
          <div className="timeline-dot"></div>
          
          <div 
            className="edu-card" 
            style={{ transitionDelay: '0.2s' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Texture & Decorators */}
            <div className="card-bg-texture"></div>
            <div className="card-sys-id">ID: 001-BTECH</div>
            
            {/* HUD Corners */}
            <div className="hud-corner top-left"></div>
            <div className="hud-corner bottom-right"></div>
            
            {/* 3D Content Layer (Elements inside this float at different depths) */}
            <div className="card-content-layer">
              <div className="card-header">
                <div className="icon-box">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm6.6 6.93l-6.6 3.6-6.6-3.6L12 5.95l6.6 3.98zM5 13.18v4.22c0 2.46 3.13 4.45 7 4.45s7-1.99 7-4.45v-4.22l-7 3.82-7-3.82z"/>
                  </svg>
                </div>
                <div className="role-info">
                  <h3>B.Tech in Computer Science</h3>
                  <p className="institution">SRM Kattankulathur</p>
                </div>
              </div>

              <div className="info-row">
                <div className="glass-badge">
                  <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  2023 - 2028
                </div>
                <div className="glass-badge">
                  <svg className="info-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  Bangalore, India
                </div>
              </div>

              <div className="gpa-container">
                  <div className="gpa-label">
                      <span>CGPA PERFORMANCE</span>
                      <span className="gpa-value">8.98 <small>/ 10.0</small></span>
                  </div>
                  <div className="gpa-track">
                      {/* Width animates only when section is visible */}
                      <div className="gpa-fill" style={{ width: isVisible ? '89.8%' : '0%' }}>
                          <div className="gpa-glow"></div>
                      </div>
                      <div className="gpa-ticks"></div>
                  </div>
              </div>

              <ul className="edu-description">
                <li><span>&gt;</span> Specialization: Computer Science</li>
                <li><span>&gt;</span> Coursework: OOPS, DSA, DBMS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Card 2: PU College --- */}
        <div className="timeline-node-wrapper">
          <div className="timeline-dot"></div>

          <div 
            className="edu-card" 
            style={{ transitionDelay: '0.4s' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-bg-texture"></div>
            <div className="card-sys-id">ID: 002-PUC</div>

            <div className="hud-corner top-left"></div>
            <div className="hud-corner bottom-right"></div>

            <div className="card-content-layer">
              <div className="card-header">
                <div className="icon-box">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm6.6 6.93l-6.6 3.6-6.6-3.6L12 5.95l6.6 3.98zM5 13.18v4.22c0 2.46 3.13 4.45 7 4.45s7-1.99 7-4.45v-4.22l-7 3.82-7-3.82z"/>
                  </svg>
                </div>
                <div className="role-info">
                  <h3>Pre-University (12th)</h3>
                  <p className="institution">Narayana PU College</p>
                </div>
              </div>

              <div className="info-row">
                <div className="glass-badge">
                  <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  2021 - 2023
                </div>
                <div className="glass-badge">
                  <svg className="info-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  Chittoor, India
                </div>
              </div>

              <div className="gpa-container">
                  <div className="gpa-label">
                      <span>BOARD SCORE</span>
                      <span className="gpa-value">90.7%</span>
                  </div>
                  <div className="gpa-track">
                      <div className="gpa-fill" style={{ width: isVisible ? '90.7%' : '0%' }}>
                          <div className="gpa-glow"></div>
                      </div>
                      <div className="gpa-ticks"></div>
                  </div>
              </div>

              <ul className="edu-description">
                <li><span>&gt;</span> PCM (Physics, Chem, Math)</li>
                <li><span>&gt;</span> Strong foundation in Math & Logic</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;