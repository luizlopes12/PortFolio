import styled from 'styled-components'

export const ContactBannerStyles = styled.section`
    width: 80%;
    margin: auto;
    h1{
        width: 400px;
        font-size: 3em;
        margin: auto;
        text-align: center;
        font-weight: 400;
        border-bottom: 1px solid #fff;
    }
    section{
        display: flex;
        justify-content: center;
        gap: 20px;
        div{
            width: 260px;
            padding: 40px 0;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            p{
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 5px;
                img{
                    width: 80px;
                    filter: invert(100%);
                }
            }
            span{
                margin-top: 10px;
            }
            ul{
                list-style: none;
                display: flex;
                justify-content: center;
                gap: 10px;
                img{
                    filter: invert(100%);
                    width: 30px;
                }
            }
        }
    }
`;