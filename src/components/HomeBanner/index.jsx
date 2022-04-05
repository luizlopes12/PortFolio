import React from "react";
import { BannerStyle } from "./styled";
import mail from "../../img/mail.svg";
import euImg from "../../img/eu.jpg";
const HomeBanner = () => {
  return (
    <BannerStyle>
      <aside>
        <h1>Olá, Eu sou o Luiz Desenvolvedor Front End React</h1>
        <p>
          Desenvolvo aplicações Fullstack com React e Firebase, estou em busca
          de uma oportunidade como Desenvolvedor Front End ou Fullstack Junior.
        </p>
        <button>
          <span>
            <img src={mail} alt="Email icone" />
          </span>
          Entre em contato
        </button>
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
