import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-mono selection:bg-[#ff0000] selection:text-white text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Skills />
      <Certifications />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;