import React from "react";
import Home from "./components/pages/Home";
import Nav from "./components/Nav";
import { GlobalStyle } from "./GlobalStyle";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Rates from "./components/pages/Rates";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rates" element={<Rates />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </>
  );
}
export default App;
