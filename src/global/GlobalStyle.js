import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        color: #fff;
        font-family: 'Roboto', sans-serif;
    }
    body{
        background-color: #323232;
        background-image: url(${require("../img/bg-shape.svg").default});
        background-repeat: no-repeat;
        background-position: right top;
        max-width: 100%;
        min-height: 98vh;
        margin: auto;
    }
    @media (min-width: 1440px) {
    max-width: 1440px;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    background-position: right -200px;
  }
`;

export default GlobalStyle;
