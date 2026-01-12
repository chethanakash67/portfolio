import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
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
    <section ref={sectionRef} className={`contact-section ${isVisible ? 'visible' : ''}`}>
      <div className="contact-bg-grid"></div>

      {/* Header */}
      <div className="contact-header-container">
        <h2 className="contact-title" data-text="Get In Touch">
          <span className="accent">&gt;</span> Get In Touch
          <span className="cursor-blink">|</span>
        </h2>
      </div>

      <div className="contact-container">
        
        {/* Main "Transmission" Box */}
        <div className="main-message-box">
          <div className="msg-header">
            <span className="msg-label">INCOMING_TRANSMISSION...</span>
            <FaPaperPlane className="msg-icon" />
          </div>
          <h3 className="msg-title">Let's Work Together</h3>
          <p className="msg-body">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>
          <div className="msg-border-glow"></div>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          
          {/* Email Card */}
          <div className="contact-card">
            <div className="card-bg-anim"></div>
            <div className="icon-box">
              <FaEnvelope className="c-icon" />
            </div>
            <h4 className="c-label">Email</h4>
            <p className="c-text">chethanakash67@gmail.com</p>
            <div className="corner-decor top-left"></div>
            <div className="corner-decor bottom-right"></div>
          </div>

          {/* Phone Card */}
          <div className="contact-card">
            <div className="card-bg-anim"></div>
            <div className="icon-box">
              <FaPhone className="c-icon" />
            </div>
            <h4 className="c-label">Phone</h4>
            <p className="c-text">+91 8919870959</p>
            <div className="corner-decor top-left"></div>
            <div className="corner-decor bottom-right"></div>
          </div>

          {/* Location Card */}
          <div className="contact-card">
            <div className="card-bg-anim"></div>
            <div className="icon-box">
              <FaMapMarkerAlt className="c-icon" />
            </div>
            <h4 className="c-label">Location</h4>
            <p className="c-text">Andhra Pradesh, Chittoor<br/>India</p>
            <div className="corner-decor top-left"></div>
            <div className="corner-decor bottom-right"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;