import React, { useState, useEffect } from "react";
import "./EntryScreen.css";

const EntryScreen = ({ onComplete }) => {
  const [clicked, setClicked] = useState(false);
  const [fadeExit, setFadeExit] = useState(false);
  
  // Loading State Logic
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  
  const logs = [
    "INITIALIZING SYSTEM...",
    "LOADING CORE MODULES...",
    "ESTABLISHING NEURAL LINK...",
    "COMPILING EXPERIENCE DATA...",
    "RENDERING PROJECTS...",
    "SYNCHRONIZING SKILLS MATRIX...",
    "DECRYPTING ACHIEVEMENTS...",
    "SYSTEM READY.",
  ];

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      // 1. Progress Bar Animation
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + Math.floor(Math.random() * 4) + 1; // Random increments
        });
      }, 100);

      // 2. Log Text Animation
      const logInterval = setInterval(() => {
        setLogIndex((prev) => {
          if (prev >= logs.length - 1) {
            clearInterval(logInterval);
            return prev;
          }
          return prev + 1;
        });
      }, 500);

      // 3. Completion Trigger
      const totalTime = 4000; // Total load time
      setTimeout(() => {
        setFadeExit(true);
        setTimeout(() => {
          onComplete();
        }, 800);
      }, totalTime);

      return () => {
        clearInterval(progressInterval);
        clearInterval(logInterval);
      };
    }
  }, [clicked, onComplete, logs.length]);

  return (
    <div className={`entry-screen ${fadeExit ? "fade-exit" : ""}`}>
      
      {/* --- NEW EFFECTS: CRT OVERLAY --- */}
      <div className="crt-overlay"></div>
      <div className="scanline"></div>

      {/* --- IDLE STATE --- */}
      {!clicked ? (
        <div className="idle-container" onClick={handleClick}>
            
            {/* Background Particles */}
            <div className="particles">
                <div className="p p1"></div>
                <div className="p p2"></div>
                <div className="p p3"></div>
                <div className="p p4"></div>
            </div>

            <div className="main-title-wrapper">
                {/* Added 'glitch' class and 'data-text' for the effect */}
                <h1 className="title-white glitch" data-text="CHETHAN">CHETHAN</h1>
                <h1 className="title-red glitch" data-text="AKASH">AKASH</h1>
            </div>

            <div className="subtitle-wrapper">
                {/* Added 'typewriter' class */}
                <span className="role-text typewriter">FULL_STACK_DEVELOPER</span>
            </div>

            <div className="initialize-box">
                <div className="corner c-tl"></div>
                <div className="corner c-tr"></div>
                <div className="corner c-bl"></div>
                <div className="corner c-br"></div>
                <span className="click-text">[ CLICK TO INITIALIZE ]</span>
            </div>

            <div className="system-status">
                <div className="status-dot"></div>
                <span>SYSTEM READY</span>
            </div>

            <div className="bottom-bar">
                <span>v4.0.1</span>
                <span>STATUS: STANDBY</span>
                <span>USER_ID: GUEST</span>
            </div>
        </div>
      ) : (
        
      /* --- LOADING STATE (Preserved Original Design) --- */
        <div className="boot-container">
            <div className="boot-header">
                <h2>SYSTEM BOOT</h2>
            </div>

            <div className="terminal-box">
                {logs.slice(0, logIndex + 1).map((log, i) => (
                    <div key={i} className="log-line">
                        <span className="arrow">&gt;</span> 
                        <span className="log-text">{log}</span>
                    </div>
                ))}
                <span className="cursor-block"></span>
            </div>

            <div className="progress-section">
                <div className="bar-header">
                    <span>LOADING...</span>
                    <span>{progress}%</span>
                </div>
                
                <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
                
                <div className="ruler">
                    <span>0</span>
                    <span>25</span>
                    <span>50</span>
                    <span>75</span>
                    <span>100</span>
                </div>
            </div>

            <div className="stats-footer">
                <div className="stat-col">
                    <div className="stat-label">CPU</div>
                    <div className="stat-val red">95%</div>
                </div>
                <div className="stat-col">
                    <div className="stat-label">MEMORY</div>
                    <div className="stat-val red">12GB</div>
                </div>
                <div className="stat-col">
                    <div className="stat-label">STATUS</div>
                    <div className="stat-val green">ACTIVE</div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default EntryScreen;