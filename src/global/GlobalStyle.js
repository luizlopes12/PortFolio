import { createGlobalStyle } from 'styled-components'

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
        background-image: url(${require('../img/bg-shape.svg').default});
        background-repeat: no-repeat;
        background-position: right top;
    }
    @media(max-width: 900px){
        body{
        background-position: right -120px ;
        }
    }
`;

export default GlobalStyle