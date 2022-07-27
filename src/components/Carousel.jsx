import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img2 from "../Design/phone3.png";
import Img3 from "../Design/phone4.png";
import Img4 from "../Design/phone1.png";
import { CardsItem, Head, Imgdiv2, CardImg } from "./styles/HeroTwo.styled";
import { Cont, Flex2, Wrapper, CarouselSlide } from "./styles/Carousel.styled";

const Carousel = () => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Cont>
        <Head>
          <h1>Get started in 3 easy steps</h1>
          <p>
            Convert your airtime to cash and make purchase easily with Zeddpay
          </p>
        </Head>
        <Flex2>
          <CarouselSlide {...settings}>
            <CardsItem>
              <h1>Create a free account</h1>
              <p>
                Login to the Zeddpay app and create a free account in a few
                minutes.
              </p>
              <Imgdiv2>
                <CardImg src={Img2} alt="" />
              </Imgdiv2>
            </CardsItem>
            <CardsItem>
              <h1>Fund wallet</h1>
              <p>
                Login to the Zeddpay app and create a free account in a few
                minutes.
              </p>
              <Imgdiv2>
                <CardImg src={Img3} alt="" />
              </Imgdiv2>
            </CardsItem>
            <CardsItem>
              <h1>Make payments</h1>
              <p>
                Purchase hundreds of services directly on zeddpay, no credit
                card.
              </p>
              <Imgdiv2>
                <CardImg src={Img4} size="93%" alt="" />
              </Imgdiv2>
            </CardsItem>
          </CarouselSlide>
        </Flex2>
      </Cont>
    </Wrapper>
  );
};

export default Carousel;
