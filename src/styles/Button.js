import styled, { css } from "styled-components";

export const Button = styled.button`
  background: #3500d3;
  border-radius: 0.3rem;
  width: 100px;
  height: 30px;
  padding: 3px;
  font-size: 15px;
  border: none;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    
  }

  ${(props) =>
    props.primary &&
    css`
      background: #8884d8;
    `}
`;
