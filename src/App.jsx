// Importing all assets
import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './Nav.jsx'
import Section from './Section.jsx'
import About from './About.jsx'
import Experiences from './Experiences.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'


// Main app component
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section />
      <Navbar />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </>
  )
}

export default App
