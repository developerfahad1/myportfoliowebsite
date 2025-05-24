import React from "react";
import { motion } from "framer-motion";  // ✅ Added framer-motion import
import heroimg from "../images/hero.jpg.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="mt-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-24 bg-white"
    >
      {/* Left Text Content with animation */}
      <motion.div
        className="max-w-xl w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}        // 👈 Animation start (slide from left + fade in)
        animate={{ opacity: 1, x: 0 }}          // 👈 Animation end (fully visible, original position)
        transition={{ duration: 1 }}            // 👈 Animation duration
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hey, I’m <span className="text-yellow-500">M-Fahad</span>
        </h1>
        <motion.p
          className="text-gray-600 text-lg mb-6"
          initial={{ opacity: 0 }}               // 👈 Paragraph fade in delay
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }} // 👈 Starts after h1 animation
        >
          As a frontend-focused web developer, I am passionate about creating
          user-friendly, visually appealing, and responsive web applications.
        </motion.p>
        <a
          href="#about"
          className="inline-block text-sm font-medium text-gray-800 hover:text-yellow-500 transition"
        >
          About Me &rarr;
        </a>
      </motion.div>

      {/* Right Image with animation */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 md:pl-10 lg:pl-20"
        initial={{ opacity: 0, x: 50 }}          // 👈 Slide from right + fade in
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }} // 👈 Starts a bit after left text starts animating
      >
        <img
          src={heroimg}
          alt="Hero"
          className="w-72 h-72 md:w-96 md:h-96 object-contain"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
