import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates"; 
import ContentRecord from "./components/ContentRecord";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EntryScreen from "./components/EntryScreen"; // Add this import
import "./App.css";
//EntryScreen
function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  if (!showPortfolio) {
    return <EntryScreen onComplete={() => setShowPortfolio(true)} />;
  }

  return (
    <div className="min-h-screen neon-bg text-white font-sans selection:bg-[#ff2d2d] selection:text-white">
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      
      <section id="education">
        <Education />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="achievements">
        <Certificates />
      </section>
      
      <section id="content">
        <ContentRecord />
      </section>
      
      <section id="recommendations">
        <Recommendations />
      </section>
      
      <section id="contact">
        <Contact />
      </section>


      <main className="max-w-[1100px] mx-auto px-6 py-12">
      </main>
      
      <Footer />
    </div>
  );
}

export default App;