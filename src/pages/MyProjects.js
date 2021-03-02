import React from "react"
import styled from "styled-components"

// Images
import kyh from "../img/heritage.gif"
import heroes from "../img/heroes.gif"
import frogger from "../img/thefrogger.gif"
import greenworld from "../img/greenworld.gif"
import marshmallow from "../img/marshmalloworange.png"
import Mockup from "../components/Mockup"
import {
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiReact,
  DiMongodb,
  DiPython,
} from "react-icons/di"
import {
  SiJsonwebtokens,
  SiFlask,
  SiPostgresql,
  SiNodeDotJs,
  SiHeroku,
  SiBabel,
  SiWebpack,
} from "react-icons/si"
import { BiDevices } from "react-icons/bi"
import { BsGrid1X2Fill } from "react-icons/bs"
import { FaChrome, FaGithub, FaCloudDownloadAlt } from "react-icons/fa"
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
  lineAnimation,
  titleAnimation,
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
      <ProjectFirstPage>
        <motion.h2 variants={fade}>Know your Heritage</motion.h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>

        <StyledHide>
          <StyledProjects>
            <StyledMockup>
              <Mockup src={kyh}></Mockup>
            </StyledMockup>
            <StyledProjectDescription>
              <CardsLinks>
                <Card
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  <motion.div className='icon'>
                    <a
                      id='portfoliolink'
                      target='_blank'
                      rel='noreferrer'
                      href='https://knowyourheritage.herokuapp.com/'
                    >
                      <FaChrome />
                    </a>
                    {/* <motion.h3>weblink</motion.h3> */}
                  </motion.div>
                </Card>
                <Card
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  <motion.div className='icon'>
                    <a
                      id='portfoliolink'
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/Baromeg/project-4'
                    >
                      <FaGithub />
                    </a>
                    {/* <motion.h3>githubpage</motion.h3> */}
                  </motion.div>
                </Card>
              </CardsLinks>
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
              {/* <motion.p variants={fade}>Are you curious for more?</motion.p>
              <motion.button variants={fade}>Get in touch</motion.button> */}
            </StyledProjectDescription>
          </StyledProjects>
        </StyledHide>
        <Cards>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <BiDevices />
              <motion.h3>Responsive Design</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <DiJsBadge />
              <motion.h3>JavaScript</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <DiReact />
              <motion.h3>React.js</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <DiPython />
              <motion.h3>Python</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiFlask />
              <motion.h3>Flask</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiPostgresql />
              <motion.h3>PostgreSQL</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <img src={marshmallow} alt='Marshmallow' />
              <motion.h3>Marshmallow</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiNodeDotJs />
              <motion.h3>Node.js</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiBabel />
              <motion.h3>Babel</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiWebpack />
              <motion.h3>Webpack</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiHeroku />
              <motion.h3>Heroku</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <FaCloudDownloadAlt />
              <motion.h3>Rest API</motion.h3>
            </motion.div>
          </Card>
        </Cards>
      </ProjectFirstPage>

      <Project
        ref={element}
        variants={scrollReveal}
        animate={controls}
        initial='hidden'
      >
        {" "}
        <StyledHide>
          <h2>Green World</h2>
          <motion.div variants={lineAnimation} className='line'></motion.div>

          <StyledProjects>
            <StyledMockup>
              <Mockup src={greenworld}></Mockup>
            </StyledMockup>

            <StyledProjectDescription>
              <CardsLinks>
                <Card
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  <motion.div className='icon'>
                    <a
                      id='portfoliolink'
                      target='_blank'
                      rel='noreferrer'
                      href='https://greenworld-p3.herokuapp.com/'
                    >
                      <FaChrome />
                    </a>
                    {/* <motion.h3>weblink</motion.h3> */}
                  </motion.div>
                </Card>
                <Card
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  <motion.div className='icon'>
                    <a
                      id='portfoliolink'
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/Baromeg/project-3'
                    >
                      <FaGithub />
                    </a>
                    {/* <motion.h3>githubpage</motion.h3> */}
                  </motion.div>
                </Card>
              </CardsLinks>
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
              {/* <motion.p variants={fade}>Are you curious for more?</motion.p>
              <motion.button variants={fade}>Get in touch</motion.button> */}
            </StyledProjectDescription>
          </StyledProjects>
        </StyledHide>
        <Cards>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <BiDevices />
              <motion.h3>Responsive Design</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <DiJsBadge />
              <motion.h3>JavaScript</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <DiReact />
              <motion.h3>React.js</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <DiMongodb />
              <motion.h3>MongoDB</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiNodeDotJs />
              <motion.h3>Node.js</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiBabel />
              <motion.h3>Babel</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiWebpack />
              <motion.h3>Webpack</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiJsonwebtokens />
              <motion.h3>JWT</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiHeroku />
              <motion.h3>Heroku</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <FaCloudDownloadAlt />
              <motion.h3>Rest API</motion.h3>
            </motion.div>
          </Card>
        </Cards>
      </Project>
      <Project
        ref={element2}
        variants={scrollReveal}
        animate={controls2}
        initial='hidden'
      >
        {" "}
        <StyledHide>
          <h2>Heroes</h2>
          <motion.div variants={lineAnimation} className='line'></motion.div>
          <StyledProjects>
            <StyledMockup>
              <Mockup src={heroes}></Mockup>
            </StyledMockup>
            <StyledProjectDescription>
              <CardsLinks>
                <Card
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  <motion.div className='icon'>
                    <a
                      id='portfoliolink'
                      target='_blank'
                      rel='noreferrer'
                      href='https://baromeg.github.io/project-2'
                    >
                      <FaChrome />
                    </a>
                    {/* <motion.h3>weblink</motion.h3> */}
                  </motion.div>
                </Card>
                <Card
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  <motion.div className='icon'>
                    <a
                      id='portfoliolink'
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/Baromeg/project-2'
                    >
                      <FaGithub />
                    </a>
                    {/* <motion.h3>githubpage</motion.h3> */}
                  </motion.div>
                </Card>
              </CardsLinks>
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
              {/* <motion.p variants={fade}>Are you curious for more?</motion.p>
              <motion.button variants={fade}>Get in touch</motion.button> */}
            </StyledProjectDescription>
          </StyledProjects>
        </StyledHide>
        <Cards>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <BiDevices />
              <motion.h3>Responsive Design</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <DiJsBadge />
              <motion.h3>JavaScript</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <DiReact />
              <motion.h3>React.js</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiNodeDotJs />
              <motion.h3>Node.js</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiBabel />
              <motion.h3>Babel</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiWebpack />
              <motion.h3>Webpack</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <FaCloudDownloadAlt />
              <motion.h3>Rest API</motion.h3>
            </motion.div>
          </Card>
        </Cards>
      </Project>
      <Project
        ref={element3}
        variants={scrollReveal}
        animate={controls3}
        initial='hidden'
      >
        {" "}
        <StyledHide>
          <h2>The Frogger</h2>
          <motion.div variants={lineAnimation} className='line'></motion.div>
          <StyledProjects>
            <StyledMockup>
              <Mockup src={frogger}></Mockup>
            </StyledMockup>
            <StyledProjectDescription>
              <CardsLinks>
                <Card
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  <motion.div className='icon'>
                    <a
                      id='portfoliolink'
                      target='_blank'
                      rel='noreferrer'
                      href='https://baromeg.github.io/project-1'
                    >
                      <FaChrome />
                    </a>
                    {/* <motion.h3>weblink</motion.h3> */}
                  </motion.div>
                </Card>
                <Card
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  <motion.div className='icon'>
                    <a
                      id='portfoliolink'
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/Baromeg/project-1'
                    >
                      <FaGithub />
                    </a>
                    {/* <motion.h3>githubpage</motion.h3> */}
                  </motion.div>
                </Card>
              </CardsLinks>
              <motion.div
                variants={titleAnimation}
                initial='hidden'
                animate='show'
                className='title'
              >
                <StyledHide>
                  <motion.p>
                    It was my first independently made application. It is a
                    grid-based game where I implemented the concepts learned on
                    CSS, JavaScript, logical thinking and problem-solving.
                  </motion.p>
                </StyledHide>
                <StyledHide>
                  <motion.p>
                    The game handles moving obstacles and tracks the player's
                    scoring.
                  </motion.p>
                </StyledHide>
              </motion.div>
              {/* <motion.p variants={fade}>Are you curious for more?</motion.p>
              <motion.button variants={fade}>Get in touch</motion.button> */}
            </StyledProjectDescription>
          </StyledProjects>{" "}
        </StyledHide>
        <Cards>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <DiJsBadge />
              <motion.h3>JavaScript</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <DiHtml5 />
              <motion.h3>HTML5</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <DiCss3 />
              <motion.h3>CSS3</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <BsGrid1X2Fill />
              <motion.h3>Flexbox</motion.h3>
            </motion.div>
          </Card>
          <Card
            whileHover={{
              scale: 1.2,
            }}
          >
            <motion.div className='icon'>
              <SiNodeDotJs />
              <motion.h3>Node.js</motion.h3>
            </motion.div>
          </Card>
        </Cards>
      </Project>
    </Projects>
    // {/* </StyledGlobal> */}
    // {/* // </StyledHide> */}
  )
}

const Projects = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem 10rem;
  /* background: white; */
  @media (max-width: 1024px) {
    padding: 6rem 2rem 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
`
const Project = styled(motion.div)`
  min-height: 90vh;

  padding-top: 6vh;

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
const ProjectFirstPage = styled(Project)`
  padding-top: 8vh;
  @media (max-width: 1300px) {
    padding-top: 10vh;
  }
  @media (max-width: 1024px) {
    padding-top: 4vh;
  }
  @media (max-width: 414px) {
    padding-top: 8vh;
  }
`
const StyledProjects = styled(StyledGlobal)`
  padding: 0rem 0rem;
  min-height: 50vh;
  @media (max-width: 1300px) {
    display: block;
    /* padding: 5rem 4rem; */
    text-align: center;
    width: 100%;
  }

  @media (max-width: 414px) {
    /* padding: 5rem 4rem; */
    /* padding: 2rem 3rem; */
  }
`
const StyledMockup = styled(StyledImg)`
  flex: 1.6;
  padding: 0rem 1rem;
  z-index: 2;

  img {
    width: 100%;
    /* height: none; */
    object-fit: contain;
  }
  @media (max-width: 1024px) {
    width: 60rem;
    margin: auto;
  }
  @media (max-width: 768px) {
    width: 50rem;
    margin: auto;
  }
  @media (max-width: 414px) {
    width: 35rem;
    margin: auto;
  }
`
const StyledProjectDescription = styled(StyledDescription)`
  flex: 1;
  padding: 0rem 1rem;
  @media (max-width: 1366px) {
    p {
      font-size: 1.3rem;
      padding: 1rem 0.5rem;
    }
  }
  @media (max-width: 1024px) {
    p {
      font-size: 2rem;
      padding: 1rem 0.5rem;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 1.7rem;
    }
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
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  font-size: 6rem;
  margin-top: 2rem;
  @media (max-width: 667px) {
    /* font-size: 4rem; */

    /* justify-content: center;
    padding: 0; */
    /* button {
      margin: 2rem 0rem 5rem 0rem;
    } */
  }
`
const CardsLinks = styled(Cards)`
  @media (max-width: 1024px) {
    flex-wrap: nowrap;
  }
`

const Card = styled(motion.div)`
  flex-basis: 5rem;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* padding: 1rem; */
    font-size: 3rem;
    svg {
      color: #fc8621;
    }
    img {
      max-height: 4rem;
      width: 40%;
    }
  }
  h3 {
    opacity: 0;
    position: absolute;
    /* margin-left: 1rem; */
    background: white;
    color: black;
    font-size: 0.5rem;
    padding: 0.2rem;
    position: absolute;
    /* font-weight: 400;
        font-size: 20px;
        opacity: 0; */
    /* margin: 0 5px; */
    max-width: 100%;
    text-align: center;
  }
  #portfoliolink {
    font-size: 40px;
    box-shadow: -3px -3px 6px #504f4f, 3px 3px 6px black;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    padding: 0.5rem 0.5rem 0rem 0.5rem;
    svg {
      color: white;
    }
    &:hover {
      box-shadow: -1px -1px 3px #3b3b3b, 1px 1px 3px black;
      background-color: transparent;
      scale: 1;
    }
    &:focus {
      outline: none;
    }
    &:active {
      box-shadow: inset 1px 1px 2px #3b3b3b, inset -1px -1px 2px black;
      -webkit-tap-highlight-color: transparent;
    }
  }
  :hover {
    h3 {
      opacity: 0.6;
      scale: 1.2;
    }
    svg {
      /* opacity: 0.6; */
      scale: 0.8;
    }
  }
  @media (max-width: 1024px) {
    .icon {
      padding: 1rem 0;
      /* width: 1rem; */
    }
    flex-basis: 15rem;
  }
  @media (max-width: 667px) {
    .icon {
      padding: 1rem 0;
      /* width: 1rem; */
    }
    flex-basis: 5rem;
  }
`
export default MyProjects
