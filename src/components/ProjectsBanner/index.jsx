import React from 'react'
import { ProjectsBannerStyle } from './styled'
import hero from '../../img/Bethehero.png'
import feedback from '../../img/feedback.png'
import enver from '../../img/Enver.png'
import todo from '../../img/todo.png'
import leafly from '../../img/leafly.png'
import fruitz from '../../img/fruitz.png'
import letmeask from '../../img/letmeask.png'
import cep from '../../img/cep.png'
import cep2 from '../../img/cep2.png'
import trii from '../../img/trii.png'
import loop from '../../img/loop.png'



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
      img={letmeask}
      title='Let Me Ask'
      desc='Sistema onde usuarios podem entrar em uma sala e enviar perguntas, dar like, deixar em destaque e excluir perguntas,
      esse tipo de sistema pode ser útil em uma live, onde as pessoas deixam ali as peguntas e o streamer consegue marcar as que 
      ele já respondeu através do painel de administrador da aplicação.'
      tech='React, Context API, Styled Components e Firebase'
      linkRepo='https://github.com/luizlopes12/LetMeAsk'
      linkSite='https://letmeask-14c72.web.app/'
      />
      <ProjectsItem 
      img={feedback}
      title='Feedback UI'
      desc='Front End de uma pagina de captura de feedbacks sobre algum produto ou serviço.'
      tech='React e CSS'
      linkRepo='https://github.com/luizlopes12/feedback-app'
      linkSite='https://feedbackapp-p2lw5teau-luizlopes12.vercel.app/'
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
      <ProjectsItem 
      img={loop}
      title='Loopstudios'
      desc='Landing Page para empresa de desenvolvimento e realidade virtual.'
      tech='HTML, CSS, Javascript e Bootstrap'
      linkRepo='https://github.com/luizlopes12/Loopstudios'
      linkSite='https://luizlopes12.github.io/Loopstudios/'
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
      <ProjectsItem 
      img={cep}
      title='CEP Search'
      desc='Funcionalidade que busca a cidade e estado através do CEP, utilizando a API viaCEP.'
      tech='React, Axios e Material UI'
      linkRepo='https://github.com/luizlopes12/CEP_search'
      linkSite='https://luizlopes12.github.io/CEP_search/'
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
      <ProjectsItem 
      img={cep2}
      title='CEP Info'
      desc='Desafio para estagiário front end na DivTech, o objetivo era consumir a api ViaCEP para verificar a cidade e estado do usuario.'
      tech='HTML, CSS, Javascript e Jquery'
      linkRepo='https://github.com/luizlopes12/cep-info'
      linkSite='https://cep-info.vercel.app/'
      />
      <ProjectsItem 
      img={trii}
      title='Trii Forms'
      desc='Desafio para estagiário front end na Trii, contruir um formulario interativo com confirmação, mensagem de erro e alertas.'
      tech='HTML, CSS e Javascript'
      linkRepo='https://github.com/luizlopes12/Trii_forms'
      linkSite='https://luizlopes12.github.io/Trii_forms/'
      />
    </ProjectsBannerStyle>
  )
}

export default ProjectsBanner