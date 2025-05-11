import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'
import SkillsSection from './Components/SkillsSection'

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <div className='text-center'>App</div>
    </>
  )
}

export default App