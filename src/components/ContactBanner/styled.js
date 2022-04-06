import styled from 'styled-components'

export const ContactBannerStyles = styled.section`
    width: 80%;
    margin: auto;
    h1{
        width: 400px;
        font-size: 3em;
        margin: auto;
        text-align: center;
        font-weight: 500;
        border-bottom: 2px solid #ccc;
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
            .email{
                margin-bottom: 15px;
            }
            p{
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 5px;
                img{
                    width: 50px;
                    filter: invert(100%);
                }
            }

            ul{
                list-style: none;
                display: flex;
                justify-content: center;
                gap: 20px;
                img{
                    filter: invert(100%);
                    width: 30px;
                }
            }
        }
    }
    @media(max-width: 900px){
    width: 90%;
    margin: auto;
    h1{
        width: 250px;
        font-size: 2em;
    }
    section{
        flex-direction: column;
        gap: 5px;
        div{
            width: 100%;
            padding: 30px 0;
            p{
                margin: 5px;
                img{
                    width: 50px;
                }
            }
            span{
                margin-top: 5px;
            }
            ul{
                margin-top: 20px;
                gap: 25px;
                img{
                    filter: invert(100%);
                    width: 40px;
                }
            }
        }
    }
    }
`;