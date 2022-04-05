import styled from "styled-components";

export const HeaderStyle = styled.header`
  padding: 10px 0;
  margin: 0 auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: #fff;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #fff;
    font-size: 1.4em;
    font-weight: 500;
    img {
      height: 60px;
    }
  }
  nav {
    ul {
      height: 60px;
      list-style: none;
      display: flex;
      align-items: center;
      li {
        a {
          text-decoration: none;
          color: #fff;
          margin: 0 30px;
          font-weight: 400;
          font-size: 1em;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease-in-out;
          &:hover {
            border-bottom: 2px solid #fff;
          }
        }
      }
    }
  }
  section {
    display: none;
  }
  @media (max-width: 900px) {
    width: 90%;
    margin-top: 0;
    padding-top: 10px;
    nav {
      position: fixed;
      top: 80px;
      right: 0;
      transform: ${(props) =>
        props.toggled ? "translateX(100vw)" : "translateX(0)"};
      transition: all 0.2s ease-in-out;
      ul {
        height: 100vh;
        width: 100vw;
        background-color: #0a0a0a;
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
          margin-top: 50px;
        }
      }
    }
    section {
      display: inherit;
    }
  }
`;

export const NavButton = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.toggled ? "5px" : "0")};
  transition: all 0.2s linear;
  div {
    border: 1px solid #fff;
    border-radius: 1px;
    width: 20px;
  }
  .bar1 {
    transform: ${(props) =>
      props.toggled ? "" : "rotate(45deg) translate(2px, 0px)"};
  }
  .bar2 {
    opacity: ${(props) => (props.toggled ? "1" : "0")};
  }
  .bar3 {
    transform: ${(props) =>
      props.toggled ? "" : "rotate(-45deg) translate(2px, -1px)"};
  }
`;
