import styled from "styled-components";

export const Title = styled.h2`
  color: #8884d8;
  text-align: center;
  letter-spacing: 0.2rem;
  border-bottom: 1px solid;
`;

export const ChartWrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  width: 100vw;

  @media only screen and (min-width: 1440px) {
    width: 60vw;
  }
`;

export const ToolsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const Paragraph = styled.p`
  color: #adbac7;
  width: 60%;
`;

export const ColorWrapper = styled.div`
  position: absolute;
  background: #636566;
  border: 1px solid #240090;
  border-radius: 0.3rem;
  padding: 5px;
  top: 400px;
  opacity: 0.96;
`;
