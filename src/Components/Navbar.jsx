import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9uTjweCgAv-RwoFCp4UolAciG4Ee8Uf3r4w&s" alt="Logo" className="w-12 h-12" />
          
        </div>

        {/* Hamburger Button - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links + Contact - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 font-medium text-gray-700">
            <li><a href="#home" className="hover:text-black">Home</a></li>
            <li><a href="#about" className="hover:text-black" >About</a></li>
            <li><a href="#skills" className="hover:text-black">Skills</a></li>
            <li><a href="#projects" className="hover:text-black">Projects</a></li>
            <li><a href="#education" className="hover:text-black">Education</a></li>
          </ul>
          <a href="#contact" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <ul className="space-y-2 font-medium text-gray-700">
            <li><a href="#home" className="block hover:text-black">Home</a></li>
            <li><a href="#about" className="block hover:text-black">About</a></li>
            <li><a href="#skills" className="block hover:text-black">Skills</a></li>
            <li><a href="#projects" className="block hover:text-black">Projects</a></li>
            <li><a href="#education" className="block hover:text-black">Education</a></li>
          </ul>
          <a href="#contact" className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
