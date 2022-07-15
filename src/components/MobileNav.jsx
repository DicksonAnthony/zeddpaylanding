import React, { useState } from "react";
import {
  Wrappermobile,
  WrapperNav,
  LeftdivMobile,
  RightdivMobile,
  Ulmobile,
  Image,
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
      <WrapperNav>
        <LeftdivMobile>
          <Image src={Img} />
          <h1>Zeddpay</h1>
        </LeftdivMobile>
        <RightdivMobile onClick={toggle}>
          <Menubtn />
        </RightdivMobile>
      </WrapperNav>
      <Ulmobile mobile={mobile}>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Rates</li>
      </Ulmobile>
    </Wrappermobile>
  );
};

export default MobileNav;
