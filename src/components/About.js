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
    <StyledHide>

    <StyledGlobal variants={scrollReveal} initial="hidden" animate={controls} ref={element}>
      <StyledDescription>
        <motion.div
        // variants={titleAnimation}
        // initial="hidden"
        // animate="show"
        // className='title'
        >
          <StyledHide>
            <motion.p>
              <span> I am Baltasar</span>, a graduated software engineer at General Assembly, seeking my first <span> full-stack developer </span>role to share my ideas, collaborate and continue expanding my skills.
            </motion.p>
          </StyledHide>
          <StyledHide>
            <motion.p >
              After more than <span>12 years of hospitality experience</span>, I decided to blend <span> my passion</span> for software engineering and <span>my creative and analytical side</span> to pursue a career change <span>and become part of the solution</span> for today’s world challenges.    
            </motion.p>
          </StyledHide>
          <StyledHide>
            <motion.p >
              I am eager to contribute to projects that develop a better and more sustainable tomorrow.
            </motion.p>
          </StyledHide>
        </motion.div>
        {/* <motion.p variants={fade}>Get in touch to know more</motion.p> */}
        <motion.button variants={fade}>Get in touch</motion.button>
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
      </StyledHide>

  )
}



export default About
