import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Images
import kyh from "../img/kyhfrontpage.png"
import heroes from "../img/heroes.png"
import frogger from "../img/frogger.png"
import greenworld from "../img/greenworld.png"

// Style
import {
  StyledHide,
} from "../styles"
// Animations
import { motion } from "framer-motion"
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  newSlider,
  sliderContainer,
  scrollReveal,
} from "../Animation"
import { UseScroll } from "../components/UseScroll"
import ScrollTop from "../components/ScrollTop"

const MyProjects = () => {
  const [element, controls] = UseScroll()
  const [element2, controls2] = UseScroll()
  const [element3, controls3] = UseScroll()
  const [element4, controls4] = UseScroll()

  return (
    <Projects
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: "#fff" }}
    >
            <ScrollTop />

      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Project>
        <motion.h2 variants={fade}>Know your Heritage</motion.h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <Link to='/myprojects/know-your-heritage'>
          <StyledHide>
            <motion.img variants={photoAnimation} src={kyh} alt='' />
          </StyledHide>
        </Link>
      </Project>
      <StyledHide>
        <Project
          ref={element}
          variants={scrollReveal}
          animate={controls}
          initial='hidden'
        >
          <h2>Green World</h2>
          <motion.div variants={lineAnimation} className='line'></motion.div>
          <Link to='/myprojects/greenworld'>
            <img src={greenworld} alt='' />
          </Link>
        </Project>
      </StyledHide>
      <StyledHide>
        <Project
          ref={element2}
          variants={scrollReveal}
          animate={controls2}
          initial='hidden'
        >
          <h2>Heroes</h2>
          <motion.div variants={lineAnimation} className='line'></motion.div>
          <Link to='/myprojects/heroes'>
            <img src={heroes} alt='' />
          </Link>
        </Project>
      </StyledHide>
      <StyledHide>
        <Project
          ref={element3}
          variants={scrollReveal}
          animate={controls3}
          initial='hidden'
        >
          <h2>The Frogger</h2>
          <motion.div variants={lineAnimation} className='line'></motion.div>
          <Link to='/myprojects/the-frogger'>
            <img src={frogger} alt='' />
          </Link>
        </Project>
      </StyledHide>
    </Projects>
  )
}

const Projects = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  /* background: white; */
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`
const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
// const Hide = styled.div`
//   overflow: hidden;
// `

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
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
export default MyProjects
