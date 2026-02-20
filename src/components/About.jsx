import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import profileImg from "../assets/profile.jpg";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // 1. Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 2. Scroll Listener
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className={`about ${isVisible ? "visible" : ""}`}>
      <button 
        className={`scroll-top-btn ${showTopBtn ? "visible" : ""}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className="arrow">↑</span>
        <span className="text">TOP</span>
      </button>

      <div className="about-container">
        
        {/* --- SECTION HEADING (Renamed Class) --- */}
        <h2 className="about-title">
          <span className="accent">&lt;</span> About Me <span className="accent">/&gt;</span>
        </h2>

        <div className="about-content">
          {/* LEFT COLUMN */}
          <div className="about-left">
            <SpotlightCard>
              <div className="profile-card">
                <div className="profile-img-wrapper">
                  <img
                    src={profileImg}
                    alt="profile"
                    className="profile-img"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://via.placeholder.com/150/000000/ff0000?text=IMG";
                    }}
                  />
                </div>
                <h3 className="glitch-name" data-text="Chethan Akash">Chethan Akash</h3>
                <p className="cyber-role">Emerging Founder • Developer</p>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <h4 className="card-heading">01 // Who I Am</h4>
              <p className="card-text">
                I am Chethan Akash, a multidisciplinary builder exploring the intersection of
                <strong> code, design, and product</strong>. I don't fit into a single box; 
                my expertise is forged by rapid experimentation and a relentless drive to 
                ship products that matter.
              </p>
            </SpotlightCard>

            <SpotlightCard>
              <h4 className="card-heading">02 // What I Do</h4>
              <p className="card-text">
                I'm currently Technical lead at <strong>Airath</strong>, a startup focused on building air purifiers. I also run an agency building AI-powered 
                MVPs. My stack is centered around Agentic AI, RAG pipelines, and 
                next-gen web technologies.
              </p>
            </SpotlightCard>
          </div>

          {/* RIGHT COLUMN */}
          <div className="about-right">
            <StatBox number={10} suffix="+" label="PROJECTS COMPLETED" isVisible={isVisible} />
            <StatBox number={9.07} label="CGPA" isVisible={isVisible} />
            <StatBox number={5} suffix="+" label="CERTIFICATIONS" isVisible={isVisible} />
            <StatBox number={3} suffix="+" label="YEARS CODING" isVisible={isVisible} />
            <StatBox number={100} suffix="+" label="GITHUB COMMITS" isVisible={isVisible} />
          </div>
        </div>

      </div>
    </section>
  );
}

// Sub-components remain unchanged
function SpotlightCard({ children, className = "" }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-wrapper ${className}`}
      style={{
        "--mouse-x": `${position.x}px`,
        "--mouse-y": `${position.y}px`,
        "--spotlight-opacity": opacity,
      }}
    >
      <div className="cyber-card">
        {children}
      </div>
    </div>
  );
}

function StatBox({ number, suffix = "", label, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000; 
    const incrementTime = Math.abs(Math.floor(duration / number));
    const isFloat = number % 1 !== 0;

    const timer = setInterval(() => {
      start += isFloat ? 0.1 : 1;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(start.toFixed(1)) : start);
      }
    }, isFloat ? 50 : Math.max(incrementTime, 20));

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <SpotlightCard>
      <div className="stat-box-content">
        <div className="stat-num">{count}{suffix}</div>
        <div className="stat-lbl">{label}</div>
      </div>
    </SpotlightCard>
  );
}