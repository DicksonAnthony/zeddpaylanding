import React, { useState } from "react";
import { Data } from "./Data";
import Img from "../Design/phone2.png";
import Img2 from "../Design/phone3.png";
import Img3 from "../Design/phone4.png";
import Img4 from "../Design/phone1.png";
import Wman from "../Design/woman.svg";
import { FaPlus as Icon, FaMinus as Icon2 } from "react-icons/fa";
import {
  Ul,
  Cards,
  Head,
  Main,
  Image,
  Three,
  Lidiv,
  Icondiv,
  ImgWman,
  CardImg,
  Imgdiv,
  Imgdiv2,
  Button2,
  WomanDiv,
  CardsItem,
  Container,
  AccordianContainer,
} from "./styles/HeroTwo.styled";
import styled from "styled-components";

const HeroTwo = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      <Container>
        <div>
          <h1>Easily make purchases from your favourite services</h1>
          <p>
            Make purchases from your favourite services such as; Amazon, Spotify
            and Call Of Duty directly from your virtual wallet.
          </p>
          <div>
            <Button2>Get Started</Button2>
          </div>
        </div>
        <Imgdiv>
          <Image src={Img} />
        </Imgdiv>
      </Container>
      <Cards>
        <Head>
          <h1>Get started in 3 easy steps</h1>
          <p>
            Convert your airtime to cash and make purchase easily with Zeddpay
          </p>
        </Head>
        <Three>
          <CardsItem>
            <h1>Create a free account</h1>
            <p>
              Login to the Zeddpay app and create a free account in a few
              minutes.
            </p>
            <Imgdiv2>
              <CardImg src={Img2} />
            </Imgdiv2>
          </CardsItem>
          <CardsItem>
            <h1>Fund wallet</h1>
            <p>
              Login to the Zeddpay app and create a free account in a few
              minutes.
            </p>
            <Imgdiv2>
              <CardImg src={Img3} />
            </Imgdiv2>
          </CardsItem>
          <CardsItem>
            <h1>Make payments</h1>
            <p>
              Purchase hundreds of services directly on zeddpay, no credit card.
            </p>
            <Imgdiv2>
              <CardImg src={Img4} size="93%" />
            </Imgdiv2>
          </CardsItem>
        </Three>
      </Cards>
      <AccordianContainer>
        <Main>
          <h1>Here are some frequently asked questions</h1>
          <p>We answered some questions so you do not need to ask them</p>
          <Ul>
            {Data.map((item, index) => {
              return (
                <>
                  <li>
                    <Lidiv>
                      <P>
                        <p>{item.question}</p>
                      </P>
                      <Icondiv onClick={() => toggle(index)} key={index}>
                        {clicked === index ? <Icon2 /> : <Icon />}
                      </Icondiv>
                    </Lidiv>
                    {clicked === index ? (
                      <Wrap>
                        <p>{item.answer}</p>
                      </Wrap>
                    ) : null}
                  </li>
                </>
              );
            })}
          </Ul>
        </Main>
        <WomanDiv>
          <ImgWman src={Wman}></ImgWman>
        </WomanDiv>
      </AccordianContainer>
    </>
  );
};
const Wrap = styled.div`
  margin: 30px 0 0;
  padding-right: 50px;

  p {
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    color: var(--headingColor);
  }
`;
const P = styled.div`
  flex-basis: 70%;
  p {
    text-align: left;
    color: var(--headingColor);
  }
`;
export default HeroTwo;
