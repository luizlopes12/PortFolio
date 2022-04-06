import React from 'react'
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
                    <img src="" alt="" />
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