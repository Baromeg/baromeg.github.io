import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { ProjectsContent } from "../ProjectsContent"

// Images
import kyh from "../img/kyhfrontpage.png"
import heroes from "../img/heroes.png"
import frogger from "../img/frogger.png"
import greenworld from "../img/greenworld.png"
import webpack from "../img/webpack.png"
import heroku from "../img/heroku.png"

// Animations
import { motion } from "framer-motion"
import { pageAnimation } from "../Animation"

const ProjectDetail = () => {
  const history = useHistory()
  const url = history.location.pathname
  const [projects, setProjects] = useState(ProjectsContent)
  const [project, setProject] = useState(null)

  // UseEffect
  useEffect(() => {
    const currentProject = projects.filter(
      (projectscontent) => projectscontent.url === url
    )
    setProject(currentProject[0])
    console.log(project)
  }, [projects, url])

  return (
    <>
      {/* {project && ( */}
      <StyledDetails
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <StyledHeadLine>
          <h2>{project?.name}</h2>
          <img src={project?.mainImg} alt={project?.name} />
        </StyledHeadLine>
        <StyledDescriptions>
          {project?.description.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </StyledDescriptions>
        <StyledTools>
          {project?.tools.map((tool, index) => (
            <Tool key={index} tool={tool.tool} toolImg={tool.toolImg} />
          ))}
        </StyledTools>
        <ImageDisplay>
          <img src={project?.secondaryImg} alt='' />
        </ImageDisplay>
      </StyledDetails>
      ){/* } */}
    </>
  )
}

const StyledDetails = styled(motion.div)`
  color: white;
`

const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
const StyledDescriptions = styled.div`
  min-height: 80vh;
  display: block;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`
const StyledTools = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  img {
    height: 50px;
  }
`

const StyledTool = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`
// Tools Component
const Tool = ({ tool, toolImg }) => {
  return (
    <>
      {tool && (
        <StyledTool>
          <h3>{tool}</h3>
          <div className='line'></div>
          <img src={toolImg} alt='' />
        </StyledTool>
      )}
    </>
  )
}

export default ProjectDetail
