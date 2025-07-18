import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Government Complaint Model (ML)',
      description: 'An ML-powered model to categorize and route government complaints efficiently. Built using Python and machine learning libraries.',
      tech: ['Python', 'Machine Learning', 'ML Libraries'],
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
      githubUrl: 'https://github.com/chahat9352/goverment-complain-ml-model-/blob/main/complain.py',
    },
    {
      title: 'Scan Spammer Website (Gradio)',
      description: 'A user-friendly web application built with Streamlit for spammer website tracking.',
      tech: ['Python', 'Gradio', 'Web Application'],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400',
      githubUrl: 'https://github.com/chahat9352/gradio-code/blob/main/gradio.py.ipynb',
    },
    {
      title: 'Hand Tracking Message System',
      description: 'Using hand tracking to send WhatsApp messages with pywhatkit system.',
      tech: ['Python', 'Hand Tracking', 'pywhatkit'],
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
      githubUrl: 'https://github.com/chahat9352/ck/blob/main/jupyter.ipynb',
    },
    {
      title: 'Menubase Project',
      description: 'A versatile menu-driven application demonstrating structured programming and user interaction. Can be adapted for various command-line tools.',
      tech: ['Python', 'Menu System', 'CLI'],
      image: '/menubase.jpg',
      githubUrl: 'https://github.com/chahat9352/menubase_project/blob/main/menubase.py',
    },
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16" data-aos="fade-up">
            Featured <span className="text-red-500">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;