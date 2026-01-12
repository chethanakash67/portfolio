import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-[#ff0000] to-[#ff7f50]">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
        I am a passionate developer with a knack for creating dynamic and responsive web applications. Explore my work and discover my journey in the tech world.
      </p>
      <a href="#projects" className="bg-white text-[#ff0000] px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
        View My Projects
      </a>
    </section>
  );
};

export default Hero;