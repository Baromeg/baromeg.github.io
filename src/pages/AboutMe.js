import React from "react"

// Page Components
import About from "../components/About"
import Skills from "../components/Skills"
import Learning from "../components/Learning"
import Interests from "../components/Interests"
import Navbar from "../components/Navbar"

// Animations
import { motion } from "framer-motion"
import { pageAnimation } from "../Animation";
import ScrollTop from "../components/ScrollTop"

const AboutMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <ScrollTop />
      <About />
      <Skills />
      <Learning />
      <Interests />
    </motion.div>
  )
}

export default AboutMe
