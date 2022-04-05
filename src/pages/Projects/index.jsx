import React from 'react'
import Header from '../../components/Header'
import ProjectsBanner from '../../components/ProjectsBanner'
import { ProjectsStyle } from './styled'
const Projects = () => {
  return (
    <ProjectsStyle>
    <Header/>
    <ProjectsBanner/>
    </ProjectsStyle>
  )
}

export default Projects