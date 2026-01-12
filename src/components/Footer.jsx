import React from 'react';
import './Footer.css';
import { FaCoffee, FaCode } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Animated Top Line */}
      <div className="footer-line-container">
        <div className="footer-line"></div>
        <div className="footer-scanner"></div>
      </div>

      <div className="footer-content">
        <p className="copyright">
          &copy; {currentYear} Chethan Akash. All rights reserved.
        </p>
        
        <p className="tagline">
          Built with <span className="highlight">curiosity</span> <FaCode className="footer-icon"/> and <span className="highlight">caffeine</span> <FaCoffee className="footer-icon"/>
        </p>
      </div>
      
      {/* Optional: subtle background glow at the bottom */}
      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;