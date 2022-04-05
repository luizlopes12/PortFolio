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
          18 Anos, apaixonado por tecnologia e obcecado em aprender continuamente, procuro uma oportunidade como estagiário de Desenvolvimento Web.
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
