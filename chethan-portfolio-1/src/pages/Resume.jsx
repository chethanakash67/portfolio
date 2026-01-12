import React from 'react';

const Resume = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-mono text-white p-10">
      <h1 className="text-4xl font-bold text-[#ff0000] mb-6">Professional Profile</h1>
      <p className="text-gray-400 mb-4">
        A dedicated and passionate individual with a strong foundation in software development and a keen interest in creating innovative solutions. 
      </p>

      <h2 className="text-3xl font-semibold text-[#ff0000] mt-8 mb-4">Core Competencies</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Proficient in JavaScript, React, and Node.js</li>
        <li>Strong understanding of web development principles</li>
        <li>Experience with version control systems like Git</li>
        <li>Ability to work collaboratively in team environments</li>
      </ul>

      <h2 className="text-3xl font-semibold text-[#ff0000] mt-8 mb-4">Experience Highlights</h2>
      <div className="border border-gray-800 p-4 mb-4 bg-[#111111]">
        <h3 className="text-xl font-bold">Software Developer Intern</h3>
        <p className="text-gray-500">XYZ Company | June 2022 - August 2022</p>
        <p className="text-gray-400">
          Contributed to the development of web applications, enhancing user experience and functionality through effective coding practices.
        </p>
      </div>

      <div className="border border-gray-800 p-4 mb-4 bg-[#111111]">
        <h3 className="text-xl font-bold">Freelance Web Developer</h3>
        <p className="text-gray-500">Self-Employed | January 2021 - Present</p>
        <p className="text-gray-400">
          Designed and developed custom websites for various clients, focusing on responsive design and performance optimization.
        </p>
      </div>

      <h2 className="text-3xl font-semibold text-[#ff0000] mt-8 mb-4">Education</h2>
      <div className="border border-gray-800 p-4 mb-4 bg-[#111111]">
        <h3 className="text-xl font-bold">Bachelor of Technology in Computer Science</h3>
        <p className="text-gray-500">ABC University | Graduated: 2023</p>
      </div>

      <h2 className="text-3xl font-semibold text-[#ff0000] mt-8 mb-4">Certifications</h2>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Full Stack Web Development Certification</li>
        <li>JavaScript Algorithms and Data Structures Certification</li>
      </ul>

      <footer className="mt-10 text-center border-t border-gray-900 pt-4">
        <p className="text-gray-600">Contact: your.email@example.com</p>
      </footer>
    </div>
  );
};

export default Resume;