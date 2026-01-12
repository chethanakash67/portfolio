import React, { useEffect, useRef, useState } from 'react';
import './ContentRecord.css';
import { FaYoutube, FaBroadcastTower, FaArrowRight } from "react-icons/fa";

const ContentRecord = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section ref={sectionRef} className={`content-record-section ${isVisible ? 'visible' : ''}`}>
      <div className="cr-bg-grid"></div>
      
      <div className="cr-header-container">
        <h2 className="cr-title" data-text="Content_Log //">
          <span className="accent">&gt;</span> Content_Log //
        </h2>
        <div className="cr-subtitle">[ SYSTEM_UPLOADS_PENDING ]</div>
      </div>

      <div className="cr-grid">
        
        {/* Card 1 */}
        <div className="cr-card tech-card">
          <div className="scan-line"></div>
          <div className="corner top-left"></div>
          <div className="corner bottom-right"></div>
          
          <div className="recording-indicator">
            <span className="rec-text">REC</span>
            <div className="rec-dot"></div>
          </div>
          
          <div className="cr-icon-box">
            <FaBroadcastTower className="cr-icon" />
          </div>
          
          <h3 className="cr-card-title">Technical Blog</h3>
          <p className="cr-desc">
            Insights on new inventions, the science behind existing tech, and entrepreneurship news.
          </p>
          
          <button className="cr-btn">
            <span>Coming Soon</span> <div className="btn-glitch"></div>
          </button>
        </div>

        {/* Card 2 */}
        <div className="cr-card tech-card">
          <div className="scan-line"></div>
          <div className="corner top-left"></div>
          <div className="corner bottom-right"></div>

          <div className="recording-indicator">
             {/* Spacer to align with first card if needed, or just remove */}
          </div>

          <div className="cr-icon-box">
            <FaYoutube className="cr-icon" />
          </div>
          
          <h3 className="cr-card-title">YouTube Channel</h3>
          <p className="cr-desc">
            Business, finance, productivity science, and practical learning for students exploring multiple fields.
          </p>
          
          <button className="cr-btn">
             <span>Coming Soon</span> <div className="btn-glitch"></div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContentRecord;