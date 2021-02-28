import React from "react"
import innovation from "../img/innovationorange.png"
import climate from "../img/climateorange.png"
import bcorp from "../img/b-corporange.png"
import mindfulness from "../img/mindfulnessorange.png"
import running from "../img/Runningorange.svg.png"
import roller from "../img/roller_bladingorange.png"

import baltasar from "../img/Baltasar.jpeg"
import {
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiSass,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
  DiGit,
  DiGithubBadge,
  DiTerminal,
  DiNpm,
  DiVisualstudio,
} from "react-icons/di"
import {
  SiJsonwebtokens,
  SiFlask,
  SiPostgresql,
  SiHeroku,
  SiSlack,
  SiZoom,
  SiBabel,
  SiBulma,
  SiAuth0,
  SiWebpack,
} from "react-icons/si"
import { FaRecycle } from "react-icons/fa"
import { GiWorld } from "react-icons/gi"
import styled from "styled-components"
import {
  StyledGlobal,
  StyledDescription,
  StyledImg,
  StyledHide,
} from "../styles"

// Animation
import { motion } from "framer-motion"
import { scrollReveal } from "../Animation"
import { UseScroll } from "./UseScroll"

const Interests = () => {
  const [element, controls] = UseScroll()

  return (
    <Hide>
      <StyledSkills
        variants={scrollReveal}
        initial='hidden'
        animate={controls}
        ref={element}
      >
        <StyledDescription>
          <h2>What gets my attention</h2>
          <Cards>
            <Card
              whileHover={{
                scale: 1.2,
              }}
            >
              <motion.div className='icon'>
                <img src={innovation} alt='innovation' />
                <motion.h3>Innovation</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2,
              }}
            >
              <motion.div className='icon'>
                <img src={climate} alt='Climate Change' />
                <motion.h3>Climate Change</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2,
              }}
            >
              <motion.div className='icon'>
                <FaRecycle />
                <motion.h3>Circular Economy</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2,
              }}
            >
              <a
                id='portfoliolink'
                target='_blank'
                rel='noreferrer'
                href='https://bcorporation.net/'
              >
                
                <motion.div className='icon'>
                  <img src={bcorp} alt='B-Corp Certification' />
                  <motion.h3>B-Corp Certification</motion.h3>
                </motion.div>
              </a>
            </Card>
            <Card
              whileHover={{
                scale: 1.2,
              }}
            >
              <motion.div className='icon'>
                <img src={roller} alt='Rolleblading' />
                <motion.h3>Rollerblading</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2,
              }}
            >
              <motion.div className='icon'>
                <img src={mindfulness} alt='Mindfulness' />
                <motion.h3>Mindfulness</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2,
              }}
            >
              <motion.div className='icon'>
                <img src={running} alt='Running' />
                <motion.h3>Running</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2,
              }}
            >
              <motion.div className='icon'>
                <GiWorld />
                <motion.h3>Travelling</motion.h3>
              </motion.div>
            </Card>
          </Cards>
        </StyledDescription>

        {/* <StyledImg>
        <img src={baltasar} alt='baltasar' />
        </StyledImg> */}
      </StyledSkills>
    </Hide>
  )
}

const StyledSkills = styled(StyledGlobal)`
  min-height: 90vh;
  padding: 1rem 10rem;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  font-size: 6rem;

  @media (max-width: 667px) {
    /* font-size: 4rem; */

    /* justify-content: center;
    padding: 0; */
    /* button {
      margin: 2rem 0rem 5rem 0rem;
    } */
  }
`

const Card = styled(motion.div)`
  flex-basis: 20rem;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 3rem;
    svg {
      color: #fc8621;
    }
    img {
      max-height: 5rem;
    }
  }
  h3 {
    opacity: 0;
    position: absolute;
    /* margin-left: 1rem; */
    background: white;
    color: black;
    font-size: 1rem;
    padding: 0.2rem;
    position: absolute;
    /* font-weight: 400;
        font-size: 20px;
        opacity: 0; */
    /* margin: 0 5px; */
    max-width: 100%;
    text-align: center;
  }
  :hover {
    h3 {
      opacity: 0.6;
      scale: 1.2;
    }
    svg {
      opacity: 0.6;
      scale: 0.8;
    }
  }
  @media (max-width: 1300px) {
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
const Hide = styled.div`
  overflow: hidden;
`
export default Interests
