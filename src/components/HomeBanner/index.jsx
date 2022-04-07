import React from "react";
import { useNavigate } from "react-router-dom";
import { BannerStyle } from "./styled";
import mail from "../../img/mail.svg";
import euImg from "../../img/eu.jpg";
const HomeBanner = () => {
  const navigate = useNavigate()
  const goToContacts = () =>{
    navigate('/contact')
  }
  return (
    <BannerStyle>
      <aside>
        <h1>Olá, Eu sou o Luiz</h1>
        <h2>Desenvolvedor Front End React</h2>
        <p>
          18 Anos, apaixonado por tecnologia e obcecado em aprender continuamente, procuro uma oportunidade como estagiário de Desenvolvimento Web.
        </p>
        <button onClick={goToContacts}>
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
