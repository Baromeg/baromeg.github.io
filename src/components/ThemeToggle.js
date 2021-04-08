import React, { useState } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io'
import Switch from 'react-switch'

import { motion } from 'framer-motion'

const Toggle = styled(motion.div)`
  @font-face {
    font-family: 'Ionicons';
    src: url('https://code.ionicframework.com/ionicons/2.0.1/fonts/ionicons.eot?v=2.0.1');
    src: url('https://code.ionicframework.com/ionicons/2.0.1/fonts/ionicons.eot?v=2.0.1#iefix')
        format('embedded-opentype'),
      url('https://code.ionicframework.com/ionicons/2.0.1/fonts/ionicons.ttf?v=2.0.1')
        format('truetype'),
      url('https://code.ionicframework.com/ionicons/2.0.1/fonts/ionicons.woff?v=2.0.1')
        format('woff'),
      url('https://code.ionicframework.com/ionicons/2.0.1/fonts/ionicons.svg?v=2.0.1#Ionicons')
        format('svg');
    font-weight: normal;
    font-style: normal;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    border-radius: 100px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.toggle1};
    transition: 0.4s;
    opacity: 0.8;
  }

  .slider:before {
    font-family: Ionicons;
    font-size: 25px;
    position: absolute;
    content: '\f3b0';
    display: flex;
    justify-content: center;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.toggle};
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: '#fc8621';
  }

  input:checked + .slider:before {
    transform: translateX(26px);
    font-family: Ionicons;
    font-size: 24px;
    content: '\f467';
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: ${({ theme }) => theme.toggle};
  }
`
const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <Toggle>
        <label className='switch'>
          <input type='checkbox' onClick={toggleTheme} />
          <span className='slider' />
        </label>
      </Toggle>
    </>
  )
}

ThemeToggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default ThemeToggle
