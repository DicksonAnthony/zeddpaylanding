import React from "react";
import Img from "../Design/phone2.png";
import Img2 from "../Design/phone3.png";
import Img3 from "../Design/phone4.png";
import Img4 from "../Design/phone1.png";
import Wman from "../Design/woman.svg";
import { FaPlus as Icon } from "react-icons/fa";
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

const HeroTwo = () => {
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
            <li>
              <Lidiv>
                Can i use my bonus airtime?
                <Icondiv>
                  <Icon />
                </Icondiv>
              </Lidiv>
            </li>
            <li>
              <Lidiv>
                Would the airtime you recharge be the some exact amount in your
                wallet?
                <Icondiv>
                  <Icon />
                </Icondiv>
              </Lidiv>
            </li>
            <li>
              <Lidiv>
                What is ZCN/ zedd coin?
                <Icondiv>
                  <Icon />
                </Icondiv>
              </Lidiv>
            </li>
            <li>
              <Lidiv>
                What can i purchase with ZCN?
                <Icondiv>
                  <Icon />
                </Icondiv>
              </Lidiv>
            </li>
            <li>
              <Lidiv>
                VPN, Urgh how, why??😤
                <Icondiv>
                  <Icon />
                </Icondiv>
              </Lidiv>
            </li>
            <li>
              <Lidiv>
                I am stuck😭, what should i do?
                <Icondiv>
                  <Icon />
                </Icondiv>
              </Lidiv>
            </li>
            <li>
              <Lidiv>
                To Change your MTN Share PIN
                <Icondiv>
                  <Icon />
                </Icondiv>
              </Lidiv>
            </li>
            <li>
              <Lidiv>
                To Change your Glo Share PIN
                <Icondiv>
                  <Icon />
                </Icondiv>
              </Lidiv>
            </li>
            <li>
              <Lidiv>
                To Change your Airtel Share PIN
                <Icondiv>
                  <Icon />
                </Icondiv>
              </Lidiv>
            </li>
            <li>
              <Lidiv>
                To Change your 9mobile Share PIN
                <Icondiv>
                  <Icon />
                </Icondiv>
              </Lidiv>
            </li>
          </Ul>
        </Main>
        <WomanDiv>
          <ImgWman src={Wman}></ImgWman>
        </WomanDiv>
      </AccordianContainer>
    </>
  );
};

export default HeroTwo;
