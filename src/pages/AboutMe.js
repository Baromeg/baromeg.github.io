import React from "react"

// Page Components
import About from "../components/About"
import Skills from "../components/Skills"
import Learning from "../components/Learning"
import Interests from "../components/Interests"
import Navbar from "../components/Navbar"

const AboutMe = () => {
  return (
    <div>
      <About />
      <Skills />
      <Learning />
      <Interests />
    </div>
  )
}

export default AboutMe
