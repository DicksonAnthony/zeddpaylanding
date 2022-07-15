import React from "react";
import Accordian from "./components/Accordian";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <Nav />
      <Contents />
      <Accordian />
      <Footer />
      <GlobalStyle />
    </>
  );
}
export default App;
