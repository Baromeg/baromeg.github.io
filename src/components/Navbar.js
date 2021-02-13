import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>
        <Link id='logo' to='/'>
          Baltasar Romero
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>About Me</Link>
        </li>
        <li>
          <Link to='/myprojects'>my projects</Link>
        </li>
        <li>
          <Link to='/contact'>get in touch</Link>
        </li>
      </ul>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`
export default Navbar
