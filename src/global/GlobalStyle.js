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

    }
    @media(max-width: 900px){
        body{
        }
    }
`;

export default GlobalStyle;
