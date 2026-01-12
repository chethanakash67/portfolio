import React, { useRef, useState, useEffect } from "react";
import profile from "../assets/profile.jpg"; 

export default function Navbar() {
  const navRef = useRef(null);
  const cursorRef = useRef(null); 
  const movementTimeout = useRef(null); 
  
  // --- FIX 1: Ref to track if we are currently scrolling from a click
  const isClickScrolling = useRef(false);

  const [activeTab, setActiveTab] = useState("#home");
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  
  // Trail Logic
  const [trail, setTrail] = useState([]);
  const maxTrailSteps = 6; 

  // --- CURSOR LOGIC ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
        cursorRef.current.style.opacity = 1; 
        
        cursorRef.current.classList.add("is-moving");

        if (movementTimeout.current) {
          clearTimeout(movementTimeout.current);
        }

        movementTimeout.current = setTimeout(() => {
          if (cursorRef.current) {
            cursorRef.current.classList.remove("is-moving");
          }
        }, 100);
        
        const label = cursorRef.current.querySelector('.cursor-label');
        if (label) label.innerText = `LOC: ${clientX},${clientY}`;
      }

      setTrail((prevTrail) => {
        const newPos = { x: clientX, y: clientY };
        const updatedTrail = [newPos, ...prevTrail];
        return updatedTrail.slice(0, maxTrailSteps);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --- SCROLL ARROWS LOGIC ---
  const updateArrows = () => {
    const el = navRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 25);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 25);
  };

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    updateArrows();
    
    const onWheel = (e) => {
      if (el.scrollWidth <= el.clientWidth) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
      updateArrows();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const handleScroll = (dir) => {
    navRef.current?.scrollBy({ left: dir * 450, behavior: "smooth" });
  };

  // --- FIX 2: IMPROVED SCROLL SPY ---
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver((entries) => {
      // If we are scrolling via click, IGNORE observer updates
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(`#${entry.target.id}`);
        }
      });
    }, {
      // FIX 3: Adjusted detection zone
      // "threshold: 0" -> Trigger as soon as it touches the zone
      // "rootMargin" -> The detection zone is a horizontal strip in the upper-middle of the screen
      // It ignores the top 30% and the bottom 60% of the viewport.
      threshold: 0,
      rootMargin: "-30% 0px -60% 0px" 
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // --- FIX 4: CLICK HANDLER WITH LOCK ---
  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    // 1. Lock the observer so it doesn't fight us
    isClickScrolling.current = true;
    
    // 2. Set Active Tab immediately for instant UI feedback
    setActiveTab(href);

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // 3. Unlock the observer after the scroll finishes (approx 1 second)
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Content", href: "#content" },
    { name: "Recommendations", href: "#recommendations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* 1. Trace Trail */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: (maxTrailSteps - index) / (maxTrailSteps * 2),
            transform: `translate(-50%, -50%) scale(${(maxTrailSteps - index) / maxTrailSteps})`,
          }}
        />
      ))}

      {/* 2. Main HUD Cursor */}
      <div 
        ref={cursorRef}
        className="custom-cursor" 
        style={{ opacity: 0 }} 
      >
        <div className="cursor-label">LOC: 0,0</div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <div className="fixed-side">
            <div className="avatar-container">
              <div className="avatar-glow">
                <img src={profile} alt="avatar" className="avatar-img" />
              </div>
              <div className="status-dot1"></div>
            </div>
            <div className="brand">BUILD<span>/</span></div>
          </div>

          <div className="nav-wrapper">
            <button className={`nav-arrow ${canLeft ? "" : "disabled"}`} onClick={() => handleScroll(-1)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            <div className="nav-container">
              <nav className="nav-list" ref={navRef} onScroll={updateArrows}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`nav-link ${activeTab === item.href ? "active" : ""}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            <button className={`nav-arrow ${canRight ? "" : "disabled"}`} onClick={() => handleScroll(1)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}