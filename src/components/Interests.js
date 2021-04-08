import React from 'react'
import innovation from '../img/innovationorangew.png'
import climate from '../img/climateorange.png'
import bcorp from '../img/bcorp.png'
import mindfulness from '../img/mindfulness.png'
import running from '../img/Runningorange.svg.png'
import roller from '../img/roller_bladingorange.png'

import { FaRecycle } from 'react-icons/fa'
import { GiWorld } from 'react-icons/gi'
import styled from 'styled-components'
import { StyledGlobal, StyledDescription } from '../styles'

// Animation
import { motion } from 'framer-motion'
import { scrollReveal } from '../Animation'
import { UseScroll } from './UseScroll'

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
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <img src={innovation} alt='innovation' />
                <motion.h3>Innovation</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <img src={climate} alt='Climate Change' />
                <motion.h3>Climate Change</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <FaRecycle />
                <motion.h3>Circular Economy</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
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
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <img src={roller} alt='Rolleblading' />
                <motion.h3>Rollerblading</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <img src={mindfulness} alt='Mindfulness' />
                <motion.h3>Mindfulness</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <img src={running} alt='Running' />
                <motion.h3>Running</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <GiWorld />
                <motion.h3>Travelling</motion.h3>
              </motion.div>
            </Card>
          </Cards>
        </StyledDescription>
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
  @media (max-width: 768px) {
    padding: 1rem 7rem;
  }
  @media (max-width: 414px) {
    padding: 1rem 4rem;
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  font-size: 6rem;
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
    background: white;
    color: black;
    font-size: 1rem;
    padding: 0.2rem;
    position: absolute;
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
  @media (max-width: 1515px) {
    flex-basis: 17rem;
  }
  @media (max-width: 1300px) {
    .icon {
      padding: 1rem 0;
    }
    flex-basis: 15rem;
  }
  @media (max-width: 1024px) {
    flex-basis: 12rem;
  }
  @media (max-width: 768px) {
    .icon {
      padding: 3rem 3rem;
    }
    flex-basis: 2rem;
  }
  @media (max-width: 414px) {
    .icon {
      padding: 1rem 1rem;
    }
    flex-basis: 5rem;
  }
`
const Hide = styled.div`
  overflow: hidden;
`
export default Interests
