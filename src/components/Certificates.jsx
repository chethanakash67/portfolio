import React from 'react';
import './Certificates.css';
import { FaAward, FaExternalLinkAlt, FaArrowDown } from "react-icons/fa";

const Certificates = () => {
  const certificatesData = [
    {
      id: "01", // Changed to string for display aesthetics
      title: "DBMS Certification",
      issuer: "NPTEL",
      date: "2024",
      link: "https://drive.google.com/file/d/13h3xlDf9XIrC_kesPaVl1z1ExDggerLv/view?usp=drive_link"
    },
    {
      id: "02",
      title: "Internship Certificate",
      issuer: "Sarvagya Nirakar Community",
      date: "2024",
      link: "https://drive.google.com/file/d/1q53_S6on0fZNj4-5N5faBMWfiaax4boe/view?usp=drive_link"
    },
    {
      id: "03",
      title: "Gen AI Professional 2025",
      issuer: "Oracle Cloud Infrastructure",
      date: "2025",
      link: "https://drive.google.com/file/d/1rIh_ShbX03N3VNFxvF1bNQEypjVTR1Z6/view?usp=drive_link"
    }
  ];

  return (
    <section className="certificates-section">
      <div className="bg-grid-overlay"></div> {/* New ambient background layer */}
      
      <div className="certificates-container">
        
        {/* Main Title with Glitch Effect Wrapper */}
        <div className="title-wrapper">
          <h2 className="cert-section-title" data-text="Certificates & Achievements">
            <span className="accent">&gt;</span> Certificates & Achievements
          </h2>
        </div>

        {/* Subsection Label */}
        <div className="subsection-container">
            <h3 className="subsection-label">[ :: SYSTEM_CERTIFICATIONS :: ]</h3>
            <div className="deco-line"></div>
        </div>

        {/* Grid */}
        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="cert-card">
              {/* Decorative Scanning Line */}
              <div className="scan-line"></div>
              
              <div className="card-header">
                  <span className="serial-no">REC_NO: {cert.id}</span>
                  <div className="status-dot"></div>
              </div>

              <div className="cert-icon-box">
                <FaAward className="cert-icon" />
              </div>
              
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">ISSUER: <span className="highlight">{cert.issuer}</span></p>
                <div className="cert-date-badge">{cert.date}</div>
              </div>

              {/* Hover Overlay with Link */}
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-overlay"
              >
                <span className="overlay-btn">
                    ACCESS_FILE <FaExternalLinkAlt className="icon-sm"/>
                </span>
              </a>

              {/* Decorative Corners (Target Lock Style) */}
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>
            </div>
          ))}
        </div>

        {/* Visual Scroll Indicator */}
        <div className="scroll-visual-container">
          <FaArrowDown className="scroll-icon" />
          <span className="scroll-text">/// SCROLL_FOR_MORE ///</span>
        </div>

      </div>
    </section>
  );
};

export default Certificates;