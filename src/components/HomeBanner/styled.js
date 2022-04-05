import styled from "styled-components";

export const BannerStyle = styled.section`
  display: flex;
  justify-content: space-between;
  aside {
    h1 {
      width: 70%;
      font-size: 3.5em;
      font-weight: 500;
      margin-top: 60px;
      color: #dedede;
    }
    p {
      margin-top: 20px;
      font-size: 1.1em;
      color: #959595;
      width: 65%;
    }
    button {
      margin: 50px 0;
      display: flex;
      gap: 5px;
      justify-content: center;
      background-color: #6441a5;
      border: 0;
      padding: 15px 15px;
      width: 240px;
      border-radius: 8px;
      font-size: 1em;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        box-shadow: 0px 5px 25px 0px #6a4ba6;
      }
    }
  }
  section {
    div {
      margin-top: 20px;
      margin-right: 15px;
      img {
        border-radius: 200px;
      }
    }
  }
  @media (max-width: 900px) {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column-reverse;
    aside {
      h1 {
        width: 100%;
        font-size: 2.2em;
        font-weight: 500;
        margin-top: 10px;
        color: #dedede;
      }
      p {
        margin-top: 20px;
        font-size: 1.2em;
        color: #959595;
        width: 100%;
      }
      button {
        margin: 30px auto;
        display: flex;
        gap: 5px;
        justify-content: center;
        background-color: #6441a5;
        border: 0;
        padding: 15px 15px;
        width: 240px;
        border-radius: 8px;
        font-size: 1em;
      }
    }
    section {
      width: 100%;
      display: flex;
      justify-content: center;
      div {
        margin-top: 10px;
        margin-right: 15px;
        img {
          width: 280px;
          border-radius: 200px;
        }
      }
    }
  }
`;
