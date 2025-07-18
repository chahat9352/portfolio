import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', color: 'from-yellow-400 to-blue-500' },
    { name: 'Java', color: 'from-orange-500 to-red-600' },
    { name: 'HTML', color: 'from-orange-400 to-red-500' },
    { name: 'CSS', color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', color: 'from-yellow-300 to-yellow-500' },
    { name: 'C', color: 'from-blue-500 to-purple-600' },
    { name: 'C++', color: 'from-blue-600 to-indigo-700' },
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16" data-aos="fade-up">
            My <span className="text-red-500">Skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group"
              >
                <button className={`w-full bg-gradient-to-r ${skill.color} text-white font-semibold py-4 px-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-500/50`}>
                  <span className="relative z-10">{skill.name}</span>
                  <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;