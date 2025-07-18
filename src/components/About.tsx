import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" data-aos="fade-up">
            About <span className="text-red-500">Me</span>
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800" data-aos="fade-up" data-aos-delay="200">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              My name is <span className="text-red-500 font-semibold">Chahat Kumawat</span>, 
              student of ICFAI University, Jaipur, currently doing internship at LinuxWorld. 
              I'm passionate about technology and constantly learning new skills to build innovative solutions.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800" data-aos="fade-right" data-aos-delay="400">
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <p className="text-gray-300">
                Pursuing <span className="text-red-500">BCA specialization in AI and IoT</span> from ICFAI University, 
                also doing internship at LinuxWorld
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800" data-aos="fade-left" data-aos-delay="600">
              <h3 className="text-2xl font-bold text-white mb-4">Current Focus</h3>
              <p className="text-gray-300">
                Learning and implementing <span className="text-red-500">AI and IoT technologies</span> while 
                gaining practical experience through my internship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;