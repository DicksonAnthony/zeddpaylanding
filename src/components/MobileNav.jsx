import React, { useState } from "react";
import {
  Wrappermobile,
  WrapperNav,
  LeftdivMobile,
  RightdivMobile,
  Ulmobile,
  Image,
  Link,
} from "./styles/Nav.styled";
import Img from "../Design/zeddlogo.svg";
import { FaBars as Menubtn } from "react-icons/fa";

const MobileNav = () => {
  const [mobile, setMobile] = useState(false);
  const toggle = () => {
    setMobile((prev) => !prev);
  };

  return (
    <Wrappermobile>
      <WrapperNav mobile={mobile}>
        <LeftdivMobile>
          <Image src={Img} />
          <h1>Zeddpay</h1>
        </LeftdivMobile>
        <RightdivMobile onClick={toggle}>
          <Menubtn />
        </RightdivMobile>
      </WrapperNav>
      <Ulmobile mobile={mobile} onClick={toggle}>
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
      </Ulmobile>
    </Wrappermobile>
  );
};

export default MobileNav;
