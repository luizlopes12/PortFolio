import styled, { keyframes } from "styled-components";
const upAnimation = keyframes`
  0% { opacity: 0; margin-top: 50px;}
  100% { opacity: 1; margin-top: 0px;}
`;

export const ProjectsStyle = styled.section`
  animation-name: ${upAnimation};
  animation-duration: 1.2s;
  min-height: 100vh;
  margin: auto;
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    background-position: right -200px;
  }
`;
