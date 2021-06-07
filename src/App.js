import { Content } from "./components/layout/Content/Content";
import { HeaderNav } from "./components/layout/Header/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Nunito Sans', sans-serif;
  background: #282828;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderNav />
      <Content />
    </>
  );
}

export default App;
