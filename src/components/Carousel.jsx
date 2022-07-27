import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img2 from "../Design/phone3.png";
import Img3 from "../Design/phone4.png";
import Img4 from "../Design/phone1.png";
import { CardsItem, Head, Imgdiv2, CardImg } from "./styles/HeroTwo.styled";
import styled from "styled-components";

const Carousel = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slide = {
    div: {
      gap: "3rem",
      width: "95%",
      display: "flex",
      textAlign: "center",
      marginTop: "30px",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };
  const Flex = styled.div`
    margin: 80px 80px 0;
    @media screen and (max-width: 964px) {
      margin: 80px 20px 0;
    }
  `;
  const Flex2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <>
      <Flex>
        <Head>
          <h1>Get started in 3 easy steps</h1>
          <p>
            Convert your airtime to cash and make purchase easily with Zeddpay
          </p>
        </Head>
        <Flex2>
          <Slider {...settings} style={slide.div}>
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
                Purchase hundreds of services directly on zeddpay, no credit
                card.
              </p>
              <Imgdiv2>
                <CardImg src={Img4} size="93%" />
              </Imgdiv2>
            </CardsItem>
          </Slider>
        </Flex2>
      </Flex>
    </>
  );
};

export default Carousel;
