import './App.css'
import React, { useState } from 'react'
import Header from './header.jsx'
import Home from './home.jsx'
import About from './about.jsx' 
import Skills from './Skills.jsx'
import Project from './project.jsx'
import Contact from './contact.jsx'
// Make sure this file exists

function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <Header onNavigate={setPage} />
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {page === 'skills' && <Skills />}
      {page === 'project' && <Project />}
      {page === 'contact' && <Contact />}
      {/* Add other pages as needed */}
    </>
  )
}

export default App
