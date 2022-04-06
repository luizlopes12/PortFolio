import React from 'react'
import html from '../../img/html.svg'
import css from '../../img/css.svg'
import javascript from '../../img/javascript.svg'
import react from '../../img/react.svg'
import redux from '../../img/redux.svg'
import styled from '../../img/styled.png'
import firebase from '../../img/firebase.svg'
import figma from '../../img/figma.svg'

import { TechStyles } from './styled'
const TechBanner = () => {
  return (
    <TechStyles>
        <h2>Tecnologias</h2>
        <div>
            <h3>
                Principalmente focado em:
            </h3>
            <section>
            <p>
                HTML, CSS, Javascript, React, Redux, Styled Components, Axios, Firebase e Figma.
            </p>
            <ul>
                <li>
                    <img src={html} alt="HTML" />
                </li>
                <li>
                    <img src={css} alt="CSS" />
                </li>
                <li>
                    <img src={javascript} alt="javascript" />
                </li>
                <li>
                    <img src={react} alt="React" />
                </li>
                <li>
                    <img src={redux} alt="Redux" />
                </li>
                <li>
                    <img src={styled} alt="Styled Components" />
                </li>
                <li>
                    <img src={firebase} alt="Firebase" />
                </li>
                <li>
                    <img src={figma} alt="Figma" />
                </li>
            </ul>
            </section>
        </div>
        <div>
            <h3>
                Conceitos básicos em:
            </h3>
            <section>
            <p>
                UI/UX, Material UI, TailwindCSS, Bootstrap, Node, C#, PHP, MongoDB e MySQL.
            </p>

            </section>

        </div>
    </TechStyles>
  )
}

export default TechBanner