import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  )
}

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
