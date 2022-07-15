import React from "react";
import Img from "../Design/zeddlogo.svg";
import {
  Wrapper,
  Leftdiv,
  Rightdiv,
  ButtonL,
  ButtonG,
  Image,
  Ul,
} from "./styles/Nav.styled";
import MobileNav from "../components/MobileNav";
const Nav = () => {
  return (
    <>
      <MobileNav />
      <Wrapper>
        <Leftdiv>
          <Image src={Img} />
          <h1>Zeddpay</h1>
        </Leftdiv>
        <Ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Rates</li>
        </Ul>
        <Rightdiv>
          <ButtonL>Log in</ButtonL>
          <ButtonG>Get Started</ButtonG>
        </Rightdiv>
      </Wrapper>
    </>
  );
};

export default Nav;
