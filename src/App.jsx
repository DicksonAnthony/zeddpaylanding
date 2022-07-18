import React from "react";
import Accordian from "./components/Accordian";
import HeroOne from "./components/HeroOne";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { GlobalStyle } from "./GlobalStyle";
import HeroTwo from "./components/HeroTwo";

function App() {
  return (
    <>
      <Nav />
      <HeroOne />
      <HeroTwo />
      <Accordian />
      <Footer />
      <GlobalStyle />
    </>
  );
}
export default App;
