import React from "react";
import Home from "./components/pages/Home";
import Nav from "./components/Nav";
import { GlobalStyle } from "./GlobalStyle";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </>
  );
}
export default App;
