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

const AboutMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit='exit'
    >
      <About />
      <Skills />
      <Learning />
      <Interests />
    </motion.div>
  )
}

export default AboutMe
