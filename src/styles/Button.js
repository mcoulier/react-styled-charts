import styled, { css } from "styled-components";

const Button = styled.button`
  background: #8884d8;
  border-radius: 10px;
  padding: 3px;

  ${(props) =>
    props.primary &&
    css`
      background: #82ca9d;
      color: white;
    `}
`;

export default Button;
