import React from "react";
import Img from "../Design/phone1.png";
import {
  Wrapper,
  Cards,
  Desc,
  H1,
  Div,
  Image,
  Text,
} from "./styles/Contents.styled";

const Contents = () => {
  return (
    <Wrapper>
      <Cards>
        <Text>
          <H1>
            Purchase anything online
            <br /> with your airtime
          </H1>
          <Desc>
            Shop online, go premuim, get assets, pay for services and most
            importantly purchase that new Call of Duty weapon with airtime
          </Desc>
        </Text>
        <Div>
          <Image src={Img}></Image>
        </Div>
      </Cards>
    </Wrapper>
  );
};

export default Contents;
