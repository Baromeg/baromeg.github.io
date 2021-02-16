import React from "react"
import baltasar from "../img/Baltasar.jpeg"

// Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../Animation";
import  Wave from "./Wave";

// Style
import {
  StyledGlobal,
  StyledDescription,
  StyledImg,
  StyledHide,
} from "../styles"

// Animation
import { scrollReveal } from "../Animation"
import { UseScroll } from "./UseScroll"

const About = () => {
  const [element, controls] = UseScroll()

  return (
    <StyledGlobal variants={scrollReveal} initial="hidden" animate={controls} ref={element}>
      <StyledDescription>
        <motion.div
        // variants={titleAnimation}
        // initial="hidden"
        // animate="show"
        // className='title'
        >
          <StyledHide>
            <motion.p
              variants={titleAnimation}
              // initial="hidden"
              // animate="show"
            >
              I am Baltasar, a graduated software engineer at General Assembly, seeking my first junior full-stack developer role to share my ideas, collaborate and continue developing my skills.
            </motion.p>
          </StyledHide>
          <StyledHide>
            <motion.p variants={titleAnimation}>After more than 12 years of hospitality experience, I decided to blend my passion for software engineering and my creative and analytical side to pursue a career change and become part of the solution for today’s world challenges.</motion.p>
          </StyledHide>
          <StyledHide>
            <motion.p variants={titleAnimation}>
              I am eager to contribute to projects that develop a better and more sustainable tomorrow. <span>Software Engineer</span>
            </motion.p>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>Get in touch to know more</motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </StyledDescription>
      <StyledImg>
        <motion.img
          variants={photoAnimation}
          // initial="hidden"
          // animate="show"
          src={baltasar}
          alt=''
        />
      </StyledImg>
    </StyledGlobal>
  )
}



export default About
