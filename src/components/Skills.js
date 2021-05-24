import React from 'react'
import marshmallow from '../img/marshmalloworange.png'
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
  DiNpm,
  DiVisualstudio
} from 'react-icons/di'
import {
  SiJsonwebtokens,
  SiFlask,
  SiPostgresql,
  SiHeroku,
  SiBabel,
  SiWebpack,
  SiRedux,
  SiCodewars,
  SiHackerrank,
  SiFreecodecamp,
  SiStackoverflow
} from 'react-icons/si'
import { BiDevices } from 'react-icons/bi'
import styled from 'styled-components'
import { StyledGlobal, StyledDescription } from '../styles'

// Animation
import { motion } from 'framer-motion'
import { scrollReveal } from '../Animation'
import { UseScroll } from './UseScroll'

const Skills = () => {
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
          <h2>What I'm skilled at</h2>
          <CardsLinks>
            <CardLink
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <a
                  id='portfoliolink'
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.codewars.com/users/Baromeg'
                >
                  <SiCodewars />
                  <motion.h3>CodeWars</motion.h3>
                </a>
              </motion.div>
            </CardLink>
            <CardLink
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <a
                  id='portfoliolink'
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.hackerrank.com/baromeg'
                >
                  <SiHackerrank />
                  <motion.h3>HackerRank</motion.h3>
                </a>
              </motion.div>
            </CardLink>
            <CardLink
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <a
                  id='portfoliolink'
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.freecodecamp.org/baromeg'
                >
                  <SiFreecodecamp />
                  <motion.h3>FreeCodeCamp</motion.h3>
                </a>
              </motion.div>
            </CardLink>
            <CardLink
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <a
                  id='portfoliolink'
                  target='_blank'
                  rel='noreferrer'
                  href='https://stackoverflow.com/users/14208806/baromeg?tab=profile'
                >
                  <SiStackoverflow />
                  <motion.h3>StackOverFlow</motion.h3>
                </a>
              </motion.div>
            </CardLink>
          </CardsLinks>

          <Cards>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <DiJsBadge />
                <motion.h3>JavaScript</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <DiReact />
                <motion.h3>React.js</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <DiPython />
                <motion.h3>Python</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <SiRedux />
                <motion.h3>Redux</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <DiNodejsSmall />
                <motion.h3>Node.js</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <DiHtml5 />
                <motion.h3>HTML5</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <DiCss3 />
                <motion.h3>CSS3</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <BiDevices />
                <motion.h3>Responsive Design</motion.h3>
              </motion.div>
            </Card>

            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <DiMongodb />
                <motion.h3>Mongodb</motion.h3>
              </motion.div>
            </Card>

            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <SiFlask />
                <motion.h3>Flask</motion.h3>
              </motion.div>
            </Card>

            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <SiPostgresql />
                <motion.h3>PostgreSQL</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <img src={marshmallow} alt='Marshmallow' />
                <motion.h3>Marshmallow</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <SiJsonwebtokens />
                <motion.h3>JWT</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <DiSass />
                <motion.h3>SASS</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <DiNpm />
                <motion.h3>NPM</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <SiBabel />
                <motion.h3>Babel</motion.h3>
              </motion.div>
            </Card>

            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <SiWebpack />
                <motion.h3>Webpack</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <DiVisualstudio />
                <motion.h3>VS Code</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <DiGit />
                <motion.h3>Git</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <DiGithubBadge />
                <motion.h3>GitHub</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2
              }}
            >
              <motion.div className='icon'>
                <SiHeroku />
                <motion.h3>Heroku</motion.h3>
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
    font-family: 'Megrim', cursive;
    font-weight: lighter;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 768px) {
    padding: 1rem 3rem;
  }
  @media (max-width: 414px) {
    padding: 1rem 2rem;
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  font-size: 4rem;
`
const CardsLinks = styled(Cards)`
  @media (max-width: 1024px) {
    flex-wrap: nowrap;
  }
`
const Card = styled(motion.div)`
  flex-basis: 13rem;

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
      width: 50%;
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
  @media (max-width: 1300px) {
    .icon {
      padding: 1rem 0;
    }
    flex-basis: 15rem;
  }
  @media (max-width: 667px) {
    .icon {
      padding: 1rem 0;
    }
    flex-basis: 5rem;
  }
  @media (max-width: 414px) {
    .icon {
      padding: 1rem 0;
      max-width: 100%;
      img {
        width: 5rem;
      }
    }
    flex-basis: 7rem;
  }
`
const CardLink = styled(Card)`
  flex-basis: 5rem;

  #portfoliolink {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    box-shadow: ${({ theme }) => theme.shadowButton};
    position: relative;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    padding: 1rem 3rem;
    svg {
      color: ${({ theme }) => theme.text};
    }
    &:hover {
      box-shadow: ${({ theme }) => theme.shadowHover};
      background-color: transparent;
      scale: 1;
    }
    &:focus {
      outline: none;
    }
    &:active {
      box-shadow: ${({ theme }) => theme.shadowActive};
      -webkit-tap-highlight-color: transparent;
    }
  }

  @media (max-width: 1024px) {
    .icon {
      padding: 1rem 0;
    }
    flex-basis: 15rem;
  }
  @media (max-width: 667px) {
    .icon {
      padding: 1rem 0;
    }
    flex-basis: 5rem;
  }
`
const Hide = styled.div`
  overflow: hidden;
`
export default Skills
