import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-gray-900">
      <div className="text-[#ff0000] font-bold text-xl">{"<Build/>"}</div>
      <div className="hidden md:flex gap-8 text-gray-400 text-sm">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/resume" className="hover:text-white">Resume</Link>
        <Link to="#about" className="hover:text-white">About</Link>
        <Link to="#experience" className="hover:text-white">Experience</Link>
        <Link to="#education" className="hover:text-white">Education</Link>
        <Link to="#skills" className="hover:text-white">Skills</Link>
        <Link to="#projects" className="hover:text-white">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;