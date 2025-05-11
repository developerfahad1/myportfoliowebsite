import React from 'react';
import heroimg from "../images/hero.jpg.png";

const HeroSection = () => {
  return (
    <section id='home' className="mt-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-24 bg-white">
      {/* Left Text Content */}
      <div className="max-w-xl w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hey, I’m <span className="text-yellow-500">M-Fahad</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          As a frontend-focused web developer, I am passionate about creating user-friendly, visually appealing, and responsive web applications.
        </p>
        <a
          href="#about"
          className="inline-block text-sm font-medium text-gray-800 hover:text-yellow-500 transition"
        >
          About Me &rarr;
        </a>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 md:pl-10 lg:pl-20">
        <img
          src={heroimg}
          alt="Hero"
          className="w-72 h-72 md:w-96 md:h-96 object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
