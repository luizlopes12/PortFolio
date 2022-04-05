import styled from 'styled-components'

export const ItemStyle = styled.div`
  border-radius: 8px;
  display: flex;
  margin-bottom: 50px;
  img {
    width: 650px;
  }
  aside {
    h2 {
      color: #dedede;
      font-size: 2.5em;
      margin-top: 20px;
    }
    p {
      color: #959595;
      margin-top: 20px;
      margin-bottom: 60px;
    }
    h3{
        color: #dedede;
    }
    span{
        color: #959595;
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
`;