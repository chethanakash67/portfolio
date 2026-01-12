import React, { useEffect, useRef, useState } from 'react';
import './Recommendations.css';
import { FaLinkedin, FaQuoteRight, FaFingerprint } from "react-icons/fa";

const Recommendations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section ref={sectionRef} className="recommendations-section">
      
      {/* Moving Header */}
      <div className={`rec-header-track ${isVisible ? 'centered' : ''}`}>
        <h2 className="rec-title">
          <span className="accent">&gt;</span> Recommendations
        </h2>
      </div>

      <div className="rec-container">
        {/* Animated Border Wrapper */}
        <div className={`rec-card-wrapper ${isVisible ? 'fade-in' : ''}`}>
          
          <div className="rec-card">
            <div className="rec-bg-glow"></div>

            <div className="rec-icon-box">
              <FaLinkedin className="rec-main-icon" />
            </div>

            <h3 className="rec-card-title">
              View My LinkedIn Recommendations
            </h3>

            <p className="rec-desc">
              // Check out recommendations from colleagues, mentors, and supervisors on my LinkedIn profile.
            </p>

            <a 
              href="https://www.linkedin.com/in/chethan-akash/details/recommendations/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rec-btn"
            >
              VIEW_RECOMMENDATIONS <FaFingerprint />
            </a>

            <FaQuoteRight className="rec-quote-decor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;