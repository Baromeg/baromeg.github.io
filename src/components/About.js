import React from "react"
import baltasar from "../img/Baltasar.jpeg"

// Framer Motion
import { motion } from "framer-motion"
import { fade, photoAnimation } from "../Animation"

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
                Hi!<span> I am Baltasar</span>, self-taught and graduated
                software engineer at General Assembly.
              </motion.p>
            </StyledHide>
            <StyledHide>
              <motion.p>
                I seek a developer role to{" "}
                <span>contribute to both sides of the stack</span>, share my
                ideas, and grow in a continued-learning and knowledge-sharing
                environment. I am eager to collaborate on projects that{" "}
                <span>develop a better and more sustainable tomorrow</span>.
              </motion.p>
            </StyledHide>
            <StyledHide>
              <motion.p>
                I’ve thrived on leading and motivating people, improving
                operational processes and ultimately creating memorable customer
                experiences. After more than 12 years of hospitality background,
                <span>
                  {" "}
                  I’ve decided to blend my passion for software engineering, my
                  problem-solving skills and my creativity to join the developer
                  community
                </span>{" "}
                to pursue a career change and become part of the solution for
                today’s world challenges.
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
