import styled from 'styled-components';

export const StyledButton = styled.button`
  color: white;
  font-weight: 700;
  padding: 5px 20px;
  margin-right: 10px;

  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #ccc;
  box-shadow: inset 2px -1px 10px 5px #a7a4a4;

  text-shadow: -1px 0px 1px #959393;
  text-transform: capitalize;

  transition-property: text-shadow;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  &:hover {
    cursor: pointer;
    text-shadow: -1px 0px 1px #6e6c6c;
    background-color: #6e6c6c;
  }

  &:active {
    background-color: #d8b104;
  }
`;
