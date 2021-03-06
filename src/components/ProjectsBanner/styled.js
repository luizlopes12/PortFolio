import styled from "styled-components";

export const ProjectsBannerStyle = styled.section`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    h1{
        width: 500px;
        margin: auto;
        text-align: center;
        font-size: 3em;
        font-weight: 500;
        border-bottom: 2px solid #ccc;
        margin-bottom: 10px;
        padding-bottom: 5px;
    }
    @media(max-width: 900px){
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    h1{
        width: 250px;
        font-size: 2em;
    }
    }
`;
