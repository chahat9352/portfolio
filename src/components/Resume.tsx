import React from 'react';

const Resume: React.FC = () => (
  <section id="resume" className="py-20 bg-[#181818] text-white min-h-screen">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-4xl font-bold mb-8 text-center">Resume</h2>
      <div className="flex justify-center mb-6">
        <a
          href="/chahat_kumawat.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
        >
          View/Download PDF Resume
        </a>
      </div>
      <div className="bg-[#232323] rounded-xl shadow-lg p-8">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-semibold">Chahat Kumawat</h3>
          <p>Student | Jaipur, India</p>
          <p className="mt-2">📞 9216270394 | ✉️ chahatkumawat525@gmail.com</p>
          <a href="https://www.linkedin.com/in/chahat-kumawat-3772242" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mt-1">LinkedIn</a>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Professional Summary</h4>
          <p className="text-gray-300">
            Resourceful and technology-focused student with a strong background in AI and programming. Skilled at optimizing data structures, developing applications, and communicating technical concepts to stakeholders. Experienced in building and refining models to solve real-world problems.
          </p>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Skills</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>Data structure and algorithm optimization</li>
            <li>Java, C, C++, and Python programming</li>
            <li>AI application development</li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Education</h4>
          <ul className="text-gray-300">
            <li><strong>Bachelor of Computer Applications</strong>, ICFAI University, Jaipur — CGPA: 8.91</li>
            <li>12th Commerce (RBSE): 79.40%</li>
            <li>10th (RBSE): 91.00%</li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Languages</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>Hindi</li>
            <li>English</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Hobbies</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>Coding</li>
            <li>Debugging and problem-solving</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Resume; 