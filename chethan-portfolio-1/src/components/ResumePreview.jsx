import React from 'react';

const ResumePreview = () => {
  return (
    <section className="bg-[#111111] p-10 rounded-lg shadow-lg">
      <h2 className="text-[#ff0000] text-2xl font-bold mb-4">Professional Overview</h2>
      <p className="text-gray-300 mb-6">
        A dedicated and results-driven professional with a passion for technology and innovation. 
        Committed to continuous learning and applying knowledge to solve real-world challenges.
      </p>

      <h3 className="text-[#ff0000] text-xl font-semibold mb-2">Core Competencies</h3>
      <ul className="list-disc list-inside text-gray-400 mb-6">
        <li>Web Development</li>
        <li>Software Engineering</li>
        <li>Project Management</li>
        <li>Data Analysis</li>
        <li>Team Collaboration</li>
      </ul>

      <h3 className="text-[#ff0000] text-xl font-semibold mb-2">Experience Highlights</h3>
      <div className="text-gray-400 mb-6">
        <p className="font-bold">Software Developer</p>
        <p>Innovative Solutions Inc. | 2021 - Present</p>
        <p>Contributed to the development of scalable web applications, enhancing user experience and performance.</p>
      </div>
      <div className="text-gray-400 mb-6">
        <p className="font-bold">Intern</p>
        <p>Tech Startups Co. | 2020 - 2021</p>
        <p>Assisted in the design and implementation of software solutions, gaining hands-on experience in coding and debugging.</p>
      </div>

      <h3 className="text-[#ff0000] text-xl font-semibold mb-2">Education</h3>
      <p className="text-gray-400 mb-6">
        Bachelor of Science in Computer Science | University of Technology | 2017 - 2021
      </p>

      <h3 className="text-[#ff0000] text-xl font-semibold mb-2">Contact Information</h3>
      <p className="text-gray-400">Email: example@example.com</p>
      <p className="text-gray-400">Location: City, Country</p>
    </section>
  );
};

export default ResumePreview;