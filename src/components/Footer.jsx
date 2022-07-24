import React from "react";
import { FaCopyright, FaInstagram as Insta } from "react-icons/fa";
import Img from "../Design/zeddlogo.svg";
import {
  Fb,
  Twit,
  Icon,
  Icon2,
  Copy,
  Div,
  Head,
  Div1,
  Image,
  Wrapper,
  Control,
  Division,
  Container,
} from "../components/styles/Footer.styled";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Div>
          <Head>
            <Image src={Img} />
            <h1>Zeddpay</h1>
          </Head>
          <p>
            Zeddpay is a payment platform that allows you pay for services with
            your airtime
          </p>
          <Icon>
            <Fb />
            <Twit />
            <Insta />
          </Icon>
        </Div>
        <Control>
          <Division>
            <Div1>
              <h1>Product</h1>
              <ul>
                <li>Create an Account</li>
                <li>Log in</li>
              </ul>
            </Div1>
            <Div1>
              <h1>Company</h1>
              <ul>
                <li>Home</li>
                <li>About Us</li>
              </ul>
            </Div1>
          </Division>
          <Division>
            <Div1>
              <h1>Legal</h1>
              <ul>
                <li>Terms of service</li>
                <li>Privacy Guidelines</li>
              </ul>
            </Div1>
            <Div1>
              <h1>Community</h1>
              <ul>
                <li>FAQs</li>
                <li>Blog</li>
              </ul>
            </Div1>
          </Division>
        </Control>
        <Icon2>
          <Fb />
          <Twit />
          <Insta />
        </Icon2>
      </Container>
      <Copy>
        <FaCopyright />
        <p>ZEDDPAY 2022, ALL RIGHTS RESERVED</p>
      </Copy>
    </Wrapper>
  );
};

export default Footer;
