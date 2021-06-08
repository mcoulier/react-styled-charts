import styled, { css } from "styled-components";

export const Button = styled.button`
  background: #3500d3;
  border-radius: 0.3rem;
  height: 30px;
  padding: 5px;
  font-size: 15px;
  border: none;
  margin-left: 5px;
  margin-right: 5px;

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
