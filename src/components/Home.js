import React from 'react'

import { Link } from 'react-router-dom'
// Framer Motion
import { motion } from 'framer-motion'
import { titleAnimation, fade } from '../Animation'

// Style
import styled from 'styled-components'
import { StyledGlobal, StyledDescription, StyledHide } from '../styles'

const Home = () => {
  return (
    <StyledHome>
      {/* <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div> */}
      <StyledDescription>
        <motion.div
        // variants={titleAnimation}
        // initial="hidden"
        // animate="show"
        // className='title'
        >
          <StyledHide>
            <motion.h1
              variants={titleAnimation}
              // initial="hidden"
              // animate="show"
            >
              Baltasar
            </motion.h1>
          </StyledHide>
          <StyledHide>
            <motion.h1 variants={titleAnimation}>Romero</motion.h1>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={fade}>
              Full-Stack <motion.span>Software Engineer</motion.span>
            </motion.h2>
          </StyledHide>
        </motion.div>
        {/* <motion.p variants={fade}>Get in touch to know more</motion.p> */}
        <Link
          to='/myprojects'
          // activeClassName="selected"
          // activeStyle={{
          //   fontWeight: "bold",
          //   color: "red"
          // }}
        >
          <StyledButton variants={fade}>See my work</StyledButton>
        </Link>
      </StyledDescription>
      {/* <StyledImg>
        <motion.img
          variants={photoAnimation}
          // initial="hidden"
          // animate="show"
          src={baltasar} alt='' />
      </StyledImg> */}
      {/* <Wave /> */}
    </StyledHome>
  )
}
const StyledHome = styled(StyledGlobal)`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme }) => theme.homeBackground};
  /* h2 {
    color: #fafafa;
  } */
  @media (max-width: 1300px) {
    padding-top: 13vh;
    padding-left: 5rem;
  }
  /* overflow:visible; */
`

const StyledButton = styled(motion.button)`
  margin-top: 4rem;
  color: ${({ theme }) => theme.text};
`

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;
`
export default Home
