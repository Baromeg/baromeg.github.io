import React from "react"
import baltasar from "../img/Baltasar.jpeg"

// Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../Animation";
import  Wave from "./Wave";

// Style
import {StyledGlobal, StyledDescription, StyledImg,StyledHide} from '../styles'

const About = () => {

  return (
    <StyledGlobal>
      <StyledDescription>
        <motion.div
          // variants={titleAnimation}
          // initial="hidden"
          // animate="show"
          // className='title'
        >
          <StyledHide>
            <motion.h2
              variants={titleAnimation}
              // initial="hidden"
              // animate="show"
            >
              Baltasar</motion.h2
            >
          </StyledHide>
          <StyledHide>
            <motion.h2
              variants={titleAnimation}
            >Romero</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2
            variants={titleAnimation}
            >Full-Stack <span>Software Engineer</span></motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p
                    variants={fade}

        >Get in touch to know more</motion.p>
        <motion.button
                    variants={fade}

        >Contact us</motion.button>
        
      </StyledDescription>
      <StyledImg>
        <motion.img
          variants={photoAnimation}
          // initial="hidden"
          // animate="show"
          src={baltasar} alt='' />
      </StyledImg>
      <Wave />
    </StyledGlobal>
  )
}



export default About
