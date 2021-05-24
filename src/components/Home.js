import React from 'react'

import { Link } from 'react-router-dom'
// Framer Motion
import { motion } from 'framer-motion'
import { titleAnimation, fade } from '../Animation'

// Style
import styled from 'styled-components'
import { StyledGlobal, StyledDescription, StyledHide } from '../styles'
import macbookEdited from '../img/macbookEdited1.png'

const Home = () => {
  return (
    <StyledHome>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h1 variants={titleAnimation}>Baltasar</motion.h1>
          </StyledHide>
          <StyledHide>
            <motion.h1 variants={titleAnimation}>Romero</motion.h1>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={fade}>
              <motion.span>Full-Stack </motion.span>Software Engineer
            </motion.h2>
          </StyledHide>
        </motion.div>

        <Link to='/myprojects'>
          <StyledButton variants={fade}>See my work</StyledButton>
        </Link>
      </StyledDescription>
    </StyledHome>
  )
}
const StyledHome = styled(StyledGlobal)`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${macbookEdited});
  @media (max-width: 1300px) {
    padding-top: 13vh;
    padding-left: 5rem;
  }
`

const StyledButton = styled(motion.button)`
  margin-top: 4rem;
  color: ${({ theme }) => theme.text};
`

export default Home
