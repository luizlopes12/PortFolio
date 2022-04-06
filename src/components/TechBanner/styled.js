import styled from 'styled-components'
const title = '#f0f0f0'
const text = '#c7c7c7'
export const TechStyles = styled.section`
    width: 80%;
    margin: auto;
    h2{
        color: ${title};
        margin-top: 20px;
        font-size: 3em;
        font-weight: 400;
        padding-bottom: 5px;
        border-bottom: 1px solid ${text};
        width: 320px;
    }
    h3{
        color: ${title};
        margin-top: 20px;
        font-size: 1.5em;
        font-weight: 300;
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
                }
            }
        }
    }
    p{
        font-size: 1.1em;
        margin-top: 5px;
        font-weight: 300;
        width: 45%;
    }
`;