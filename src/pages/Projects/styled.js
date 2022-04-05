import styled from 'styled-components'

export const ProjectsStyle = styled.section`
  background-image: url(${require("../../img/bg-shape.svg").default});
  background-repeat: no-repeat;
  background-position: 200px top;
  max-width: 80%;
  min-height: 98vh;
  margin: auto;

  @media (min-width: 1440px) {
    max-width: 1100px;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    background-position: right -200px;
  }
`;