import { Content } from "./components/layout/Content/Content";
import { HeaderNav } from "./components/layout/Header/HeaderNav";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Nunito Sans', sans-serif;
  background: #282828;
}`;

const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-flow: column;
`;

function App() {
  return (
    <MainWrapper>
      <GlobalStyle />
      <HeaderNav />
      <Content />
    </MainWrapper>
  );
}

export default App;
