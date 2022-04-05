import styled from 'styled-components'

export const ButtonStyle = styled.button`
      display: flex;
      gap: 5px;
      justify-content: center;
      background-color: #6441a5;
      border: 0;
      padding: 15px 15px;
      width: 150px;
      border-radius: 8px;
      font-size: .9em;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        box-shadow: 0px 0px 25px 0px #6a4ba6;
      }
      img{
          width: 22px;
          filter: invert(100%);
      }
`;