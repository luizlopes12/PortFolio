import React from 'react'
import { ItemStyle } from './styled'
import gitIcon from '../../img/github.svg'
import linkIcon from '../../img/link.svg'
import LinkButton from '../LinkButton'
const ProjectsItem = ({img, title, desc, tech, linkRepo, linkSite}) => {
  return (
    <ItemStyle>
            <img src={img} alt={`${img}`} />
            <aside>
            <h2>{title}</h2>
            <p>
              {desc}
            </p>
            <h3>
                Tecnologias:
            </h3>
            <span>
                {tech}
            </span>
            <div>
            <a href={linkRepo} target='noreferrer'>
            <LinkButton><img src={gitIcon} alt="Github icon" /> 
            Repositório
            </LinkButton>
            </a>
            <a href={linkSite} target='noreferrer'>
            <LinkButton><img src={linkIcon} alt="Github icon" /> 
            Site
            </LinkButton>
            </a>
            </div>
            </aside>
    </ItemStyle>
  )
}

export default ProjectsItem