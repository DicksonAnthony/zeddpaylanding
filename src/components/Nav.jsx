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
  Link,
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Contact
            </a>
          </li>
          <li>
            <Link to="/rates">Rates</Link>
          </li>
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
