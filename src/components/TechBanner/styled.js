import styled, {keyframes} from 'styled-components'
const title = '#f0f0f0'
const text = '#c7c7c7'

const grayEffect = keyframes`
0% { filter: grayscale(0%); }
50% { filter: grayscale(50%); }
100% { filter: grayscale(100%); }
`
export const TechStyles = styled.section`
    width: 80%;
    margin: auto;
    h2{
        margin-top: 20px;
        font-size: 3em;
        font-weight: 500;
        padding-bottom: 5px;
        border-bottom: 2px solid #ccc;
        width: 320px;
    }
    h3{
        margin-top: 20px;
        font-size: 1.5em;
        font-weight: 400;
    }
    section{
        display: flex;
        justify-content: space-between;
        ul{
            list-style: none;
            display: flex;
            gap: 5px;
            max-width: 40%;
            flex-wrap: wrap;
            li{
                img{
                    width: 90px;
                    filter: grayscale(100%);
                    transition: all .3s ease-in-out;
                    animation-name: ${grayEffect};
                    animation-duration: 5s;
                    &:hover{
                    filter: grayscale(0%);
                    }
                }
            }
        }
    }
    p{
        color: ${text};
        font-size: 1.1em;
        margin-top: 5px;
        font-weight: 300;
        width: 45%;
    }
    @media(max-width: 900px){
    width: 90%;
    margin: auto;
    h2{
        margin: auto;
        text-align: center;
        font-size: 2em;
        width: 200px;
    }
    h3{
        color: ${title};
        margin-top: 20px;
        font-size: 1.5em;
    }
    section{
        flex-direction: column;
        ul{
            justify-content: center;
            max-width: 100%;
            li{
                img{
                    width: 60px;
                }
            }
        }
    }
    p{
        margin-top: 10px;
        width: 100%;
        margin-bottom: 10px;
    }
    }
`;
