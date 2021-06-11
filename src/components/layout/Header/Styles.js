import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  background: #240090;
  display: flex;
  align-items: center;
  padding-left: 10px;
  box-shadow: 0px 15px 10px -15px #111;
`;

export const Title = styled.h2`
  padding-left: 5px;
  color: #8884d8;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`;

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`;

export const TopIcon = styled.image`
  &:hover {
    animation: ${rotate} 5s linear infinite;
    opacity: 0.9;
  }
`;
