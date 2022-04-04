import React, { useState } from 'react'
import { HeaderStyle, NavButton } from './styled'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
const Header = () => {
  const [toggled, setToggled] = useState(true)
  const navOpen = () =>{
    setToggled(!toggled)
    console.log(toggled)
  }
  return (
    <HeaderStyle toggled={toggled}>
      <div>
        <Link to='/'>
        <p><img src={logo} alt='Logo'/>Luiz Lopes</p>
        </Link>
      </div>
      <NavButton onClick={navOpen} toggled={toggled}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
      </NavButton>
      <nav>
        <ul>
          <li>
            <Link to='/'>Sobre</Link>
          </li>
          <li>
            <Link to='/'>Projetos</Link>
          </li>
          <li>
            <Link to='/'>Formações</Link>
          </li>
        </ul>
      </nav>

    </HeaderStyle>
  )
}

export default Header