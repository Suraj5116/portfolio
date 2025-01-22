
import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';

const Projects = ({ projects }) => {
  // Projects section code here//-
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 dark:text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-4 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  View Project <ExternalLinkIcon size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
