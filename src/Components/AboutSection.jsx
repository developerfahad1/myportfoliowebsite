import React from 'react'
// import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import aboutimg from "../images/about.jpg.png"
const AboutSection = () => {
  return (
<section id='about' className="bg-white px-6 md:px-20 py-16 mt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start w-full md:w-1/3 md:pt-10">
          <img src={aboutimg} alt="About Avatar" className="w-72 h-auto" />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3">
          {/* Name and Role */}
          <h2 className="text-3xl font-bold text-gray-800">Muhammad Fahad</h2>
          <span className="inline-block bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full mt-2">
            Frontend Web Developer
          </span>

          {/* Description */}
          <div className="text-gray-700 mt-6 space-y-4 text-justify">
            <p>
              As a frontend-focused web developer, I am passionate about creating
              user-friendly, visually appealing, and responsive web applications.
              With a solid foundation in <strong>HTML, CSS, and JavaScript</strong>,
              I have experience working with frameworks like
              <strong> ReactJS, Redux, and Bootstrap</strong> to build dynamic
              interfaces.
            </p>
            <p>
              As a fresher, I’m highly motivated to learn new technologies and
              best practices. I'm a quick learner and problem solver with a
              focus on writing clean and maintainable code that follows industry standards.
            </p>
            <p>
              I also have strong communication and collaboration skills,
              enabling me to work well in cross-functional teams. I'm always
              striving to improve and ensure my work meets the highest quality standards.
            </p>
            <p>
              My goal is to grow my skills, contribute to organizational success,
              and continue my journey as a frontend developer.
            </p>
          </div>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href="https://drive.google.com/uc?export=download&id=1AbCDEFGhiJKlmnopQRstuVwxyz" // Replace with your real FILE ID
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-semibold text-sm inline-flex items-center gap-2"
            >
              Resume <span>📄</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection