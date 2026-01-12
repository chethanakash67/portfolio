import React from 'react';

const certificationsData = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Coursera',
    year: '2023',
  },
  {
    title: 'Data Science Fundamentals',
    issuer: 'edX',
    year: '2022',
  },
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    year: '2023',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    year: '2021',
  },
];

const Certifications = () => {
  return (
    <section className="py-10 px-10">
      <h2 className="text-4xl font-bold text-[#ff0000] mb-6">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((certification, index) => (
          <div key={index} className="border border-gray-800 p-6 bg-[#111111]">
            <h3 className="text-[#ff0000] text-2xl font-semibold">{certification.title}</h3>
            <p className="text-gray-500 text-sm">{certification.issuer}</p>
            <p className="text-gray-500 text-xs uppercase">{certification.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;