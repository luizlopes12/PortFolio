import React from 'react'
import { ProjectsBannerStyle } from './styled'
import hero from '../../img/Bethehero.png'
import enver from '../../img/Enver.png'
import todo from '../../img/todo.png'
import ProjectsItem from '../ProjectsItem'
const ProjectsBanner = () => {
  return (
    <ProjectsBannerStyle>
      <h1>Aplicações</h1>
      <ProjectsItem 
      img={hero}
      title='Be The Hero'
      desc='Sistema que ajuda ONGs a receberem ajuda financeira para casos específicos,
      os interessados em colaborar podem entrar em contato por Email e WhatsApp da ONG, 
      para conversar mais sobre e fazer a doação.'
      tech='React, Redux, Styled Components e Firebase'
      linkRepo='https://github.com/luizlopes12/BeTheHero'
      linkSite='https://bethehero24.web.app/'
      />
      <h1>Landing Pages</h1>
      <ProjectsItem 
      img={enver}
      title='Enver'
      desc='Landing Page para empresa de desenvolvimento e design digital.'
      tech='React, Styled Components'
      linkRepo='https://github.com/luizlopes12/Enver'
      linkSite='https://luizlopes12.github.io/Enver/'
      />
      <h1>Funcionalidades</h1>
      <ProjectsItem 
      img={todo}
      title='Todo List'
      desc='Todo list basica, salvando os dados localmente.'
      tech='React e material UI'
      linkRepo='https://github.com/luizlopes12/Todo_list'
      linkSite='https://luizlopes12.github.io/Todo_list/'
      />
      <h1>Desafios de empresas</h1>
      <ProjectsItem 
      img={enver}
      title='Enver'
      desc='Landing Page para empresa de desenvolvimento e design digital.'
      tech='React, Styled Components'
      linkRepo='https://github.com/luizlopes12/Enver'
      linkSite='https://luizlopes12.github.io/Enver/'
      />
    </ProjectsBannerStyle>
  )
}

export default ProjectsBanner