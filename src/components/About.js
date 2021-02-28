import React from "react"
import baltasar from "../img/Baltasar.jpeg"

// Framer Motion
import { motion } from "framer-motion"
import { titleAnimation, fade, photoAnimation } from "../Animation"
import Wave from "./Wave"

// Style
import styled from "styled-components"
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
      <StyledAbout
        variants={scrollReveal}
        initial='hidden'
        animate={controls}
        ref={element}
      >
        <AboutDescription>
          <h2>About me</h2>
          <motion.div
          // variants={titleAnimation}
          // initial="hidden"
          // animate="show"
          // className='title'
          >
            <StyledHide>
              <motion.p>
                <span> I am Baltasar</span>, a graduated software engineer at
                General Assembly. I am eager to collaborate on projects that
                develop a better and more sustainable tomorrow. I seek a
                developer role to make impactful contributions to both sides of
                the stack, share my ideas, and grow in a continued-learning and
                knowledge-sharing environment.
              </motion.p>
            </StyledHide>
            <StyledHide>
              <motion.p>
                I’ve thrived on leading and motivating people, improving
                operational processes and ultimately making customers happier.
                I’ve taken advantage of technology’s fast evolution to solve
                problems and enhance experiences, hence my admiration for the
                developer community.
              </motion.p>
            </StyledHide>
            <StyledHide>
              <motion.p>
                After more than 12 years of hospitality experience, I’ve decided
                to blend my passion for software engineering and my creative and
                analytical side to join this vibrant community to pursue a
                career change and become part of the solution for today’s world
                challenges.
              </motion.p>
            </StyledHide>
          </motion.div>
          <motion.p variants={fade}>Are you curious for more?</motion.p>
          <motion.button variants={fade}>Get in touch</motion.button>
        </AboutDescription>
        <StyledImg>
          <motion.img
            variants={photoAnimation}
            // initial="hidden"
            // animate="show"
            src={baltasar}
            alt=''
          />
        </StyledImg>
      </StyledAbout>
    </StyledHide>
  )
}
const StyledAbout = styled(StyledGlobal)`
  @media (max-width: 1300px) {
    display: block;
    /* padding: 5rem 4rem; */
    text-align: center;
    width: 100%;
  }
  @media (max-width: 414px) {
    /* padding: 5rem 4rem; */
    padding: 2rem 3rem;
  }
`
const AboutDescription = styled(StyledDescription)`
  @media (max-width: 1366px) {
    p {
      font-size: 1.2rem;
      padding-right: 2rem;
    }
    padding: 0rem;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
  @media (max-width: 414px) {
    p {
      padding-top: 0.5rem;
    }
    button {
      margin: 1rem 0rem 5rem 0rem;
    }
  }
`

export default About
