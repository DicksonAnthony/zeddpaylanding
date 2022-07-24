import React from "react";
import Img from "../../Design/phone1.png";
import styled from "styled-components";
// import Img2 from "../../Design/finger.svg";
import { Cards, Cont, Image, Div, Wrapper } from "../styles/HeroOne.styled";

const Move = styled.div`
  top: 40%;
  left: 40%;
  position: absolute;
  color: var(--buttonText);
`;
const One = styled.p`
  margin-left: 5px;
  margin-bottom: 10px;
`;
const Two = styled(One)`
  margin-left: 15px;
`;
const Three = styled(One)`
  margin-left: 25px;
`;

const About = () => {
  return (
    <Wrapper>
      <Cards gap="60px">
        <Div>
          <Image src={Img}></Image>
        </Div>
        <Cont flex="95%">
          <h1>
            We're not just making life easy, We're solving a problem for the
            Gen-Z
          </h1>
          <p>
            We created Zeddpay because we want to solve a problem Gen-Z
            encountered while registering for a bank account, and couldn't
            purchase anything online without having a credit card. With Zeddpay
            you don't need a bank account to make purchases online.
            <br />
            <br />
            Our mission is to make sure you enjoy the most convenient, easiest &
            secure way of paying for products and services throughout the
            unicorn platform.
          </p>
        </Cont>
      </Cards>
      <Cards gap="60px">
        <Cont flex="95%">
          <h1>Our Vision</h1>
          <p>
            Making online purchasing as easy as possible: Zeddpay, is a
            distributed company of over eight individuals, that develops mobile
            and web platforms that provide consumers with the most convenient
            way to buy anything online and pay for it through airtime.
            <br />
            <br />
            We are a technologically driven young team of entrepreneurs who
            believe that our offering will revolutionize the African e-commerce
            industry as we endure to deliver excellent products, service and
            experiences to everyone on the continent.
            <br />
            <br />
            Purchase anything online with our Zeddcoin service: Zeddpay gives
            you the power to send and sppend airtime online with a simple,
            secure, and convenient way to buy internet services without
            requiring any deposits or bank accounts.
          </p>
        </Cont>
        <Div color="#00E8BE" justify="flex-end">
          <Move>
            <One>Giving</One>
            <Two>Airtime</Two>
            <Three>Superpowers</Three>
          </Move>
          <Image src={Img} />
        </Div>
      </Cards>
    </Wrapper>
  );
};

export default About;
