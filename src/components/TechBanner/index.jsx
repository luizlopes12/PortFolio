import React from "react";
import html from "../../img/html.svg";
import css from "../../img/css.svg";
import javascript from "../../img/javascript.svg";
import react from "../../img/react.svg";
import redux from "../../img/redux.svg";
import styled from "../../img/styled.png";
import firebase from "../../img/firebase.svg";
import figma from "../../img/figma.svg";
import material from "../../img/material.svg";
import dotnet from "../../img/dotnet.svg";
import bootstrap from "../../img/bootstrap.svg";
import node from "../../img/node.svg";
import csharp from "../../img/csharp.svg";
import php from "../../img/php.svg";
import mongo from "../../img/mongo.svg";
import mysql from "../../img/mysql.svg";

import { TechStyles } from "./styled";
const TechBanner = () => {
  return (
    <TechStyles>
      <h2>Tecnologias</h2>
      <div>
        <h3>Principalmente focado em:</h3>
        <section>
          <p>
            HTML, CSS, Javascript, GIT, GitHub, React, Redux, Styled Components, Axios,
            Firebase e Figma.
          </p>
          <ul>
            <li>
              <img src={html} alt="HTML" />
            </li>
            <li>
              <img src={css} alt="CSS" />
            </li>
            <li>
              <img src={javascript} alt="javascript" className="tech"/>
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
        <h3>Conceitos básicos em:</h3>
        <section>
          <p>UI/UX, Material UI, Bootstrap, jQuery, Node, C#, .NET, PHP, MongoDB e MySQL.</p>
          <ul>
            <li>
              <img src={material} alt="Material UI" />
            </li>
            <li>
              <img src={bootstrap} alt="Bootstrap" />
            </li>
            <li>
              <img src={node} alt="Node" />
            </li>
            <li>
              <img src={csharp} alt="C Sharp" />
            </li>
            <li>
              <img src={dotnet} alt="dotnet" />
            </li>
            <li>
              <img src={php} alt="PHP" />
            </li>
            <li>
              <img src={mongo} alt="MongoDB" />
            </li>
            <li>
              <img src={mysql} alt="MySQL" />
            </li>
          </ul>
        </section>
      </div>
    </TechStyles>
  );
};

export default TechBanner;
