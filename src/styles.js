import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledGlobal = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`
export const StyledDescription = styled.div`
  flex: 1.3;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  p {
    font-size: 1.3rem;
  }
  @media (max-width: 1300px) {
    padding: 4rem 0rem 0rem 0rem;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
  @media (max-width: 768px) {
    padding: 0rem 0rem 0rem 0rem;
  }
`

export const StyledImg = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const StyledHide = styled.div`
  overflow: hidden;
`
