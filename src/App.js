import { Content } from "./components/layout/Content/Content";
import { HeaderNav } from "./components/layout/Header/HeaderNav";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Nunito Sans', sans-serif;
  background: #282828;
}`;

const MainWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
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
