import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Images
import kyh from "../img/kyhfrontpage.png"
import heroes from "../img/heroes.png"
import frogger from "../img/frogger.png"
import greenworld from "../img/greenworld.png"
import Mockup from "../components/Mockup"

// Style
import {
  StyledHide,
  StyledDescription,
  StyledGlobal,
  StyledImg,
} from "../styles"
// Animations
import { motion } from "framer-motion"
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  titleAnimation,
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
  // const [element1, controls1] = UseScroll()

  return (
    <Projects
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      // style={{ background: "#fff" }}
    >
      <ScrollTop />
      <Project>
        <motion.h2 variants={fade}>Know your Heritage</motion.h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>

        <StyledHide>
          <StyledProjects>
            <StyledMockup>
              <Mockup src={kyh}></Mockup>
            </StyledMockup>
            <StyledProjectDescription>
              <motion.div
                variants={titleAnimation}
                initial='hidden'
                animate='show'
                className='title'
              >
                <StyledHide>
                  <motion.p>
                    The application showcases the wonders of the UNESCO’s World
                    Heritage List to promote its awareness.
                  </motion.p>
                </StyledHide>
                <StyledHide>
                  <motion.p>
                    Using Python I computed the data from several API’s requests
                    (UNESCO list + Google Places & Photos) and built the
                    componentry for the UI.
                  </motion.p>
                </StyledHide>
                <StyledHide>
                  <motion.p>
                    The app has email verification using SendGrid, a map feature
                    using Mapbox and an image carousel using ImageGallery.
                  </motion.p>
                </StyledHide>
              </motion.div>
              <motion.p variants={fade}>Are you curious for more?</motion.p>
              <motion.button variants={fade}>Get in touch</motion.button>
            </StyledProjectDescription>
          </StyledProjects>
        </StyledHide>
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

          <StyledProjects>
            <StyledMockup>
              <Mockup src={greenworld}></Mockup>
            </StyledMockup>
            <StyledProjectDescription>
              <motion.div
                variants={titleAnimation}
                initial='hidden'
                animate='show'
                className='title'
              >
                <StyledHide>
                  <motion.p>
                    The application helps the user make greener decisions by
                    discovering sustainable business and communities locally.
                  </motion.p>
                </StyledHide>
                <StyledHide>
                  <motion.p>
                    I built the "Single location" page and enriched the UX with
                    the map tile using MapBox, the comments and ratings using
                    React-Ratings, the photo upload feature using Cloudinary.
                  </motion.p>
                </StyledHide>
                <StyledHide>
                  <motion.p>
                    It handles async requests (Yelp, Mapbox) with error handling
                    triggers and geolocation for best UX.
                  </motion.p>
                </StyledHide>
              </motion.div>
              <motion.p variants={fade}>Are you curious for more?</motion.p>
              <motion.button variants={fade}>Get in touch</motion.button>
            </StyledProjectDescription>
          </StyledProjects>
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
          <StyledProjects>
            <StyledMockup>
              <Mockup src={heroes}></Mockup>
            </StyledMockup>
            <StyledProjectDescription>
              <motion.div
                variants={titleAnimation}
                initial='hidden'
                animate='show'
                className='title'
              >
                <StyledHide>
                  <motion.p>
                    The application features all-time comic heroes.
                  </motion.p>
                </StyledHide>
                <StyledHide>
                  <motion.p>
                    Pair programming throughout the project fetching several
                    API’s (SuperHero & ComicVine) to link each hero with its
                    first comic appearance as well as the entire UI.
                  </motion.p>
                </StyledHide>
                <StyledHide>
                  <motion.p>
                    I enhanced the UX by implementing the image carousel on the
                    home page using react-carousel library.
                  </motion.p>
                </StyledHide>
              </motion.div>
              <motion.p variants={fade}>Are you curious for more?</motion.p>
              <motion.button variants={fade}>Get in touch</motion.button>
            </StyledProjectDescription>
          </StyledProjects>
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
          <StyledProjects>
            <StyledMockup>
              <Mockup src={frogger}></Mockup>
            </StyledMockup>
            <StyledProjectDescription>
              <motion.div
                variants={titleAnimation}
                initial='hidden'
                animate='show'
                className='title'
              >
                
                <StyledHide>
                  <motion.p>
                  It was my first independently made application. It is a grid-based game where I implemented the concepts learned on CSS, JavaScript, logical thinking and problem-solving.


                  </motion.p>
                </StyledHide>
                <StyledHide>
                  <motion.p>
                  The game handles moving obstacles and tracks the player's scoring.


                  </motion.p>
                </StyledHide>
              </motion.div>
              <motion.p variants={fade}>Are you curious for more?</motion.p>
              <motion.button variants={fade}>Get in touch</motion.button>
            </StyledProjectDescription>
          </StyledProjects>
        </Project>
      </StyledHide>
    </Projects>
    // {/* </StyledGlobal> */}
    // {/* // </StyledHide> */}
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
    background: #fc8621;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    /* height: 70vh; */
    /* object-fit: cover; */
  }
`

const StyledProjects = styled(StyledGlobal)`
  padding: 0rem 0rem;
`
const StyledMockup = styled(StyledImg)`
  flex: 1.6;
  padding: 0rem 1rem;
`
const StyledProjectDescription = styled(StyledDescription)`
  flex: 1;
  padding: 0rem 1rem;
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
