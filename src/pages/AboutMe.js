import React from 'react'

// Page Components
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Learning from '../components/Learning'
import Interests from '../components/Interests'
import Footer from '../components/Footer'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../Animation'
import ScrollTop from '../components/ScrollTop'

const AboutMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <ScrollTop />
      <Home />
      <About />
      <Skills />
      {/* <Learning /> */}
      <Interests />
      <Footer />
    </motion.div>
  )
}

export default AboutMe
