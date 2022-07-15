import React from "react";
import Img from "../Design/zeddlogo.svg";
import {
  Wrapper,
  Leftdiv,
  MiddleDiv,
  Rightdiv,
  ButtonL,
  ButtonG,
  Image,
  Ul,
} from "./styles/Nav.styled";

const Nav = () => {
  return (
    <>
      <Wrapper>
        <Leftdiv>
          <Image src={Img} />
          <h1>Zeddpay</h1>
        </Leftdiv>
        <MiddleDiv>
          <Ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Rates</li>
          </Ul>
        </MiddleDiv>
        <Rightdiv>
          <ButtonL>Log in</ButtonL>
          <ButtonG>Get Started</ButtonG>
        </Rightdiv>
      </Wrapper>
    </>
  );
};

export default Nav;
