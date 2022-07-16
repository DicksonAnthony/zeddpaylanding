import React from "react";
import Img from "../Design/phone1.png";
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
  Threeone,
  Threetwo,
  ThreeThree,
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
        <Threeone></Threeone>
        <Threetwo></Threetwo>
        <ThreeThree></ThreeThree>
      </Threecards>
    </Wrapper>
  );
};

export default Contents;
