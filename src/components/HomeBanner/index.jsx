import React from "react";
import { BannerStyle } from "./styled";
import gitIcon from "../../img/github.svg";
import euImg from "../../img/eu.jpg";
import downArrow from '../../img/downArrow.png'
import curriculo from '../../img/Luiz_Lopes.pdf'
const HomeBanner = () => {
  return (
    <BannerStyle>
      <aside>
        <h1>Olá, Eu sou o Luiz</h1>
        <h2>Desenvolvedor Front End React</h2>
        <p>
          18 Anos, apaixonado por tecnologia e obcecado em aprender
          continuamente, procuro uma oportunidade como estagiário de
          Desenvolvimento Web.
        </p>
        <div className="buttons">
        <button>
          <a href="https://github.com/luizlopes12">
            <span>
              <img src={gitIcon} alt="GitHub icon" />
              GitHub
            </span>
          </a>
        </button>
        <button>
          <a href={curriculo} download='Luiz_Lopes.pdf'>
            <span>
              <img src={downArrow} alt="Download" />
              Curriculo
            </span>
          </a>
        </button>
        </div>
      </aside>
      <section>
        <div>
          <img src={euImg} alt="Foto minha" />
        </div>
      </section>
    </BannerStyle>
  );
};

export default HomeBanner;
