import React from 'react'
import { ProjectsBannerStyle } from './styled'
import hero from '../../img/Bethehero.png'
import feedback from '../../img/feedback.png'
import enver from '../../img/Enver.png'
import todo from '../../img/todo.png'
import leafly from '../../img/leafly.png'
import fruitz from '../../img/fruitz.png'
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
      <ProjectsItem 
      img={feedback}
      title='Feedback UI'
      desc='Front End de uma pagina de captura de feedbacks sobre algum produto ou serviço.'
      tech='React e CSS'
      linkRepo='https://github.com/luizlopes12/Enver'
      linkSite='https://luizlopes12.github.io/Enver/'
      />
      <h1>Landing Pages</h1>
      <ProjectsItem 
      img={enver}
      title='Enver'
      desc='Landing Page para empresa de desenvolvimento e design digital.'
      tech='React e Styled Components'
      linkRepo='https://github.com/luizlopes12/Enver'
      linkSite='https://luizlopes12.github.io/Enver/'
      />
      <h1>Funcionalidades</h1>
      <ProjectsItem 
      img={todo}
      title='Todo List'
      desc='Todo list basica, salvando os dados localmente.'
      tech='React, Styled Components e material UI'
      linkRepo='https://github.com/luizlopes12/Todo_list'
      linkSite='https://luizlopes12.github.io/Todo_list/'
      />
      <ProjectsItem 
      img={leafly}
      title='Leafly'
      desc='App de clima básico, utilizando a localização atual do usuario, utilizando os dados da API OpenWeatherMap.'
      tech='React, Axios e Bootstrap'
      linkRepo='https://github.com/luizlopes12/Leafly'
      linkSite='https://luizlopes12.github.io/Leafly/'
      />
      <h1>Desafios de empresas</h1>
      <ProjectsItem 
      img={fruitz}
      title='Fruitz'
      desc='Desafio para estagiário front end na Frexco, o objetivo era construir um sistema de carrinho de compras consumindo a API Fruitvice (necessario a extensão "Moesif Origin & CORS Changer" do google chrome para funcionar pois a API não possui CORS).'
      tech='React, Axios, Bootstrap e React-Bootstrap'
      linkRepo='https://github.com/luizlopes12/Fruitz'
      linkSite='https://fruitz.vercel.app/'
      />
    </ProjectsBannerStyle>
  )
}

export default ProjectsBanner