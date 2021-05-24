import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { fade } from '../Animation'

import { SiLinkedin } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <StyledFooter>
      <Cards>
        <Card
          whileHover={{
            scale: 1.2
          }}
        >
          <motion.div className='icon'>
            <a
              id='portfoliolink'
              target='_blank'
              rel='noreferrer'
              href='http://www.linkedin.com/in/baltasar-romero'
            >
              <SiLinkedin />
            </a>
          </motion.div>
        </Card>
        <Card
          whileHover={{
            scale: 1.2
          }}
        >
          <motion.div className='icon'>
            <a
              id='portfoliolink'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/Baromeg/'
            >
              <FaGithub />
            </a>
          </motion.div>
        </Card>
      </Cards>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  height: 7rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.navbarBackground};
  position: relative;
  width: 100%;
  bottom: 0;
  z-index: 10;
`

const Cards = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  justify-content: space-evenly;
`

const Card = styled(motion.div)`
  #portfoliolink {
    font-size: 30px;
    box-shadow: ${({ theme }) => theme.shadowButton};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    padding: 0.5rem 0.5rem 0rem 0.5rem;
    margin: 2rem;
    &:hover {
      box-shadow: ${({ theme }) => theme.shadowHover};
      background-color: transparent;
      scale: 1;
      svg {
        color: #fc8621;
      }
    }
    &:focus {
      outline: none;
    }
    &:active {
      box-shadow: ${({ theme }) => theme.shadowActive};
      -webkit-tap-highlight-color: transparent;
    }

    svg {
      color: ${({ theme }) => theme.text};
    }
  }
  :hover {
    h3 {
      opacity: 0.6;
      scale: 1.2;
    }
    svg {
      scale: 0.8;
    }
  }
`
export default Footer
