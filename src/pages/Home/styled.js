import styled from "styled-components";

export const HomeStyle = styled.section`
  background-image: url(${require("../../img/bg-shape.svg").default});
  background-repeat: no-repeat;
  background-position: right top;
  max-width: 100%;
  min-height: 98vh;
  margin: auto;

  @media (min-width: 1440px) {
    max-width: 1200px;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    background-position: right -200px;
  }
`;
