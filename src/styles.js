import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledGlobal = styled(motion.div)`
  min-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`
export const StyledDescription = styled.div`
  flex: 1.3;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  p {
    font-size: 1.5rem;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`

export const StyledImg = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`

export const StyledHide = styled.div`
  overflow: hidden;
`
