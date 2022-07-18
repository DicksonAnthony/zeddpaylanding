import React from "react";
import Img from "../Design/phone2.png";
import Img2 from "../Design/phone3.png";
import Img3 from "../Design/phone4.png";
// import Img4 from "../Design/phone5.png";

import {
  Container,
  Cards,
  CardsItem,
  Image,
  CardImg,
} from "./styles/HeroTwo.styled";

const HeroTwo = () => {
  return (
    <>
      <Container>
        <h1>Easily make purchases from your favourite services</h1>
        <p>
          Make purchases from your favourite services such as; Amazon, Spotify
          and Call Of Duty directly from your virtual wallet.
        </p>
        <Image src={Img} />
      </Container>
      <Cards>
        <h1>Get started in 3 easy steps</h1>
        <p>
          Convert your airtime to cash and make purchase easily with Zeddpay
        </p>
        <CardsItem>
          <h1>Create a free account</h1>
          <p>
            Login to the Zeddpay app and create a free account in a few minutes.
          </p>
          <CardImg src={Img2} />
        </CardsItem>
        <CardsItem>
          <h1>Fund wallet</h1>
          <p>
            Login to the Zeddpay app and create a free account in a few minutes.
          </p>
          <CardImg src={Img3} />
        </CardsItem>
        <CardsItem>
          <h1>Make payments</h1>
          <p>
            Purchase hundreds of services directly on zeddpay, no credit card.
          </p>
          <CardImg src={Img} />
        </CardsItem>
      </Cards>
    </>
  );
};

export default HeroTwo;
