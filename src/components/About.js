import React from 'react'
import baltasar from '../img/Baltasar.jpg'

// Framer Motion
import { motion } from 'framer-motion'
import { fade, photoAnimation } from '../Animation'

// Style
import styled from 'styled-components'
import {
  StyledGlobal,
  StyledDescription,
  StyledImg,
  StyledHide
} from '../styles'

// Animation
import { scrollReveal } from '../Animation'
import { UseScroll } from './UseScroll'

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
          <motion.div>
            <StyledHide>
              <motion.p>
                Hi!<span> I'm Baltasar</span>, self-taught and graduated
                <span> software engineer</span> seeking to develop and nurture
                my experience and knowledge, enhancing user experiences within
                an ethical and forward-thinking company.
              </motion.p>
            </StyledHide>
            <StyledHide>
              <motion.p>
                I've coached and grown diverse teams within hospitality by being
                adaptable and empathetic, with open-minded communication & a
                passion for solving everyday challenges,
                <span> handy skills to bring to my journey in tech</span>.
              </motion.p>
            </StyledHide>
          </motion.div>
          <motion.button variants={fade}>Get in touch</motion.button>
        </AboutDescription>
        <StyledImg>
          <motion.img variants={photoAnimation} src={baltasar} alt='' />
        </StyledImg>
      </StyledAbout>
    </StyledHide>
  )
}
const StyledAbout = styled(StyledGlobal)`
  h2 {
    font-family: 'Megrim', cursive;
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    display: block;
    text-align: center;
    width: 100%;
    h2 {
      text-align: left;
    }
  }
  @media (max-width: 414px) {
    padding: 2rem 3rem;
  }
`
const AboutDescription = styled(StyledDescription)`
  @media (max-width: 1450px) {
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
