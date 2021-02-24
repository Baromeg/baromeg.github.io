import React from "react"
import innovation from "../img/innovation.png"
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
import { GiMarshmallows } from "react-icons/gi"
import { BiDevices } from "react-icons/bi"
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
          <h2>Skills</h2>
        <Cards>

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
                <DiSass />
                <motion.h3>SASS</motion.h3>
              </motion.div>
            </Card>
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
                <motion.h3>Mongodb</motion.h3>
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
                <GiMarshmallows />
                <motion.h3>Marshmallow</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2,
              }}
            >
              <motion.div className='icon'>
                <DiNodejsSmall />
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
                <DiNpm />
                <motion.h3>NPM</motion.h3>
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
                <DiVisualstudio />
                <motion.h3>VS Code</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2,
              }}
            >
              <motion.div className='icon'>
                <DiGit />
                <motion.h3>Git</motion.h3>
              </motion.div>
            </Card>
            <Card
              whileHover={{
                scale: 1.2,
              }}
            >
              <motion.div className='icon'>
                <DiGithubBadge />
                <motion.h3>GitHub</motion.h3>
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
  flex-basis: 25rem;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 3rem;
    svg {
      color: #fc8621;
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
export default Skills
