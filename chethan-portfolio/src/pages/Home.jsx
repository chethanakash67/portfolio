import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Certifications />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;