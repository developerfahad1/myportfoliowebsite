import React from "react";

// ✅ Import skill images
import htmlIcon from "../images/html.png.png";
import cssIcon from "../images/css.png.png";
import jsIcon from "../images/js.png.jpg";
import reactIcon from "../images/react.png.png";
import bootstrapIcon from "../images/bootstrap.png.png";
import tailwindIcon from "../images/tailwind.png.png";
import githubIcon from "../images/github.png"




// ✅ Skills data
const skills = [
  { name: "HTML", icon: htmlIcon, major: true },
  { name: "CSS3", icon: cssIcon, major: true },
  { name: "JavaScript", icon: jsIcon, major: true },
  { name: "ReactJs", icon: reactIcon, major: true },
  { name: "Bootstrap", icon: bootstrapIcon, major: true },
  { name: "tailwind", icon: tailwindIcon, major: true},
  { name: "github", icon: githubIcon, major: true},
  

];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">My Skills</h2>
        <p className="text-gray-600">
          Tiles in <span className="text-blue-500 font-medium">blue</span> are some of my major skills.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg border transition-all duration-300 transform hover:scale-105 ${
              skill.major ? "bg-blue-50 border-blue-300" : "bg-gray-100 border-gray-200"
            }`}
          >
            <img src={skill.icon} alt={skill.name} className="w-14 h-14 mb-3" />
            <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
