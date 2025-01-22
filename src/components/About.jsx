
import React from 'react';

const About = () => {
  // About section code here//-
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 dark:text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I'm a passionate Full Stack Developer with a keen eye for design and a love for solving complex problems. With expertise in both front-end and back-end technologies, I create seamless, user-friendly applications that make a difference.
          </p>
          {/* Add more details about your skills, experience, or personal interests */}
        </div>
      </div>
    </section>
  );
};

export default About;
