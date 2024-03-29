import React from "react";
import { BannerStyle } from "./styled";
import gitIcon from "../../img/github.svg";
import euImg from "../../img/eu.jpg";
import downArrow from '../../img/downArrow.png'
import curriculo1 from '../../img/curriculos/Luiz__Lopes_Pt.pdf'
import curriculo2 from '../../img/curriculos/Luiz__Lopes_En.pdf'
import curriculo3 from '../../img/curriculos/Luiz__Lopes_Es.pdf'

const HomeBanner = () => {
  if(navigator.language.includes('pt')){
    var curriculo = curriculo1
  }else if(navigator.language.includes('es')){
    var curriculo = curriculo3
  }else{
    var curriculo = curriculo2
  }
  return (
    <BannerStyle>
      <aside>
        <h1>Olá, Eu sou o Luiz</h1>
        <h2>Desenvolvedor Front end</h2>
        <p>
          Sou um desenvolvedor Front end iniciante, focado em React, em busca de novas oportunidades no mundo de desenvolvimento web.
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
