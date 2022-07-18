import React from "react";
import HeroOne from "./components/HeroOne";
import Nav from "./components/Nav";
import { GlobalStyle } from "./GlobalStyle";
import HeroTwo from "./components/HeroTwo";

function App() {
  return (
    <>
      <Nav />
      <HeroOne />
      <HeroTwo />
      <GlobalStyle />
    </>
  );
}
export default App;
