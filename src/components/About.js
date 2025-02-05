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
                I’m passionate about building
                <span> intuitive, impactful technology</span> that enhances user
                experiences. I’m open to opportunities in any field that
                <span>
                  {' '}
                  makes life easier or has a positive impact on the world
                </span>
                .
              </motion.p>
            </StyledHide>
            <StyledHide>
              <motion.p>
                With experience across industries, I've developed a keen ability
                to
                <span> solve complex problems</span>, drive
                <span> technical excellence</span>, and collaborate in
                <span> autonomous, cross-functional teams</span>. Previously, I
                led and coached diverse teams in hospitality, honing
                adaptability, empathetic leadership, and open
                communication—qualities that now define my approach to software
                engineering.
              </motion.p>
            </StyledHide>
            <StyledHide>
              <motion.p>
                I’m passionate about building
                <span> intuitive, impactful technology</span> that enhances user
                experiences. I’m open to opportunities in any field that
                <span>
                  {' '}
                  makes life easier or has a positive impact on the world
                </span>
                .
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
