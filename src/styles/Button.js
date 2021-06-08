import styled, { css } from "styled-components";

export const Button = styled.button`
  background: #3500d3;
  border-radius: 0.3rem;
  padding: 5px 15px 5px 15px;
  font-size: 15px;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-transform: capitalize;
  
  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translateY(1px);
  }

  ${(props) =>
    props.primary &&
    css`
      background: #8884d8;
    `}
`;
