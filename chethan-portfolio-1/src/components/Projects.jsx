import React from 'react';
import projectsData from '../data/projects';

const Projects = () => {
  return (
    <section className="py-10 px-10">
      <h2 className="text-4xl font-bold text-[#ff0000] mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="border border-gray-800 p-6 bg-[#111111] rounded-lg">
            <h3 className="text-xl font-semibold text-[#ff0000]">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#ff0000] hover:underline">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;