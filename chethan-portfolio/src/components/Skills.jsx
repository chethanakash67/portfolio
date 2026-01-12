import React from 'react';

const skillsData = [
  { skill: 'JavaScript', level: 'Expert' },
  { skill: 'React', level: 'Expert' },
  { skill: 'Node.js', level: 'Intermediate' },
  { skill: 'CSS', level: 'Expert' },
  { skill: 'HTML', level: 'Expert' },
  { skill: 'Python', level: 'Intermediate' },
  { skill: 'Git', level: 'Expert' },
  { skill: 'SQL', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <section className="px-10 py-10">
      <h2 className="text-4xl font-bold text-[#ff0000] mb-6">Core Competencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((item, index) => (
          <div key={index} className="border border-gray-800 p-6 bg-[#111111] rounded-lg">
            <h3 className="text-[#ff0000] text-2xl font-semibold">{item.skill}</h3>
            <p className="text-gray-500 text-sm uppercase">{item.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;