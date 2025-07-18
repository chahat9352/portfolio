import React from 'react';
import { Download, ExternalLink, Github, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Hi I Am <span className="text-red-500">Chahat Kumawat</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Student & Developer passionate about AI and IoT
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Projects
              </button>
              <a
                href="/chahat_kumawat.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center gap-2 font-semibold"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/chahatkumawat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/chahatkumawat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://instagram.com/chahatkumawat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-red-500" />
                <span>Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-red-500" />
                <a href="mailto:chahatkumawat525@gmail.com" className="hover:text-red-500 transition-colors">
                  chahatkumawat525@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-red-500" />
                <span>+91 9216270394</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-red-500 to-blue-600 rounded-lg p-1">
                <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                  <img
                    src="/profile-photo.jpg"
                    alt="Chahat Kumawat"
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;