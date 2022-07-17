import React from "react";
import Img from "../Design/phone1.png";
import { GrCurrency as Swap } from "react-icons/gr";
import { RiCoupon3Fill as Buy } from "react-icons/ri";
import { RiShieldCheckFill as Safe } from "react-icons/ri";
import {
  Wrapper,
  Cards,
  Desc,
  Desc2,
  Div,
  Image,
  Realdiv,
  Cont,
  Head2,
  H2,
  Threecards,
  Three,
  Icondiv,
  Icondiv2,
  Icondiv3,
  ButtonC,
} from "./styles/Contents.styled";

const Contents = () => {
  return (
    <Wrapper>
      <Cards>
        <Cont>
          <h1>
            Purchase anything online
            <br /> with your airtime
          </h1>
          <Desc>
            Shop online, go premuim, get assets, pay for services and most
            importantly purchase that new Call of Duty weapon with airtime
          </Desc>
          <ButtonC>Get Started</ButtonC>
        </Cont>
        <Realdiv>
          <Div>
            <Image src={Img}></Image>
          </Div>
        </Realdiv>
      </Cards>
      <Head2>
        <H2>The easiest way to shop and make purchase online</H2>
        <Desc2>
          Shop online, go premium, get assets, pay for services and most
          importantly purchase that new Call of Duty weapon with airtime.
        </Desc2>
      </Head2>
      <Threecards>
        <Three>
          <Icondiv>
            <Swap />
          </Icondiv>
          <h4>Convert airtime to zeddcoin</h4>
          <p>Zeddpay converts your aitime to zeddcoin within minutes</p>
        </Three>
        <Three>
          <Icondiv2>
            <Buy />
          </Icondiv2>
          <h4>Make purchases with airtime</h4>
          <p>Zeddpay enables users to easily make purchases with airtime.</p>
        </Three>
        <Three>
          <Icondiv3>
            <Safe />
          </Icondiv3>
          <h4>Secured and safe transaction</h4>
          <p>Zeddpay offers a secure and safe transaction process</p>
        </Three>
      </Threecards>
    </Wrapper>
  );
};

export default Contents;
