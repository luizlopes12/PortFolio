import styled from "styled-components";

const title = "#f0f0f0";
const text = "#c7c7c7";

export const ItemStyle = styled.div`
  display: flex;
  margin-bottom: 50px;
  img {
    width: 650px;
  }
  aside {
    h2 {
      color: ${title};
      font-size: 2.5em;
      font-weight: 400;
      margin-top: 20px;
    }
    p {
      color: ${text};
      font-weight: 300;
      margin-top: 20px;
      margin-bottom: 60px;
      font-size: 16px;
    }
    h3 {
      color: ${title};
      font-weight: 400;
    }
    span {
      color: ${text};
      font-weight: 300;
      font-size: 16px;

      margin-bottom: 50px;
    }
    div {
      display: flex;
      margin-top: 60px;
      justify-content: space-evenly;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    img {
      width: 300px;
      margin: auto;
    }
    aside {
      h2 {
        font-size: 2em;
        margin: 0;
      }
      p {
        color: ${text};
        margin-top: 10px;
        margin-bottom: 20px;
      }
      h3 {
        color: #f0f0f0;
        margin: 10px 0;
      }
      span {
        color: #c7c7c7;
        margin-bottom: 20px;
      }
      div {
        display: flex;
        margin-top: 40px;
        justify-content: space-between;
        button {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;
