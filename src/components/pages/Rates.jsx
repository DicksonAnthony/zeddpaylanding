import React from "react";
import GLO from "../../Design/glo-brand.svg";
import MTN from "../../Design/mtn-brand.svg";
import AIRTEL from "../../Design/airtel-brand.svg";
import MOBILE from "../../Design/9mobile-brand.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 5px 3% auto;
  padding: 32px 5%;

  @media screen and (max-width: 964px) {
    padding: 32px 2%;
    margin: 5px 2% auto;
  }
`;
const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    padding: 0 0 25px;
  }
  h1 {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--paragraphColor);
  }
  @media screen and (max-width: 964px) {
    gap: 27px;
    p {
      font-size: 12px;
    }
    h1 {
      font-size: 15px;
    }
  }
`;
const One = styled.p`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 28.125rem;
  color: var(--paragraphColor);
  @media screen and (max-width: 964px) {
    padding-right: 20px;
  }
`;
const Img = styled.img`
  display: block;
`;
const Flex = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
`;

const Rates = () => {
  return (
    <Wrapper>
      <h1>Rates 🤑</h1>
      <One>
        it is important to note that you do not get 100% fiat value back from
        airtime deposit, as airtime is not fiat, however we do our best to offer
        the best rates.
      </One>
      <Cont>
        <div>
          <h1>Service Provider</h1>
          <p>
            <Flex>
              <Img src={GLO} alt="" />
              GLO
            </Flex>
          </p>
          <p>
            <Flex>
              <Img src={MTN} alt="" />
              MTN
            </Flex>
          </p>
          <p>
            <Flex>
              <Img src={AIRTEL} alt="" />
              AIRTEL
            </Flex>
          </p>
          <p>
            <Flex>
              <Img src={MOBILE} alt="" />
              9MOBILE
            </Flex>
          </p>
        </div>
        <div>
          <h1>Price</h1>
          <p>NGN100</p>
          <p>NGN100</p>
          <p>NGN100</p>
          <p>NGN100</p>
        </div>
        <div>
          <h1>Value Back(Naira)</h1>
          <p>NGN75.00/0.75ZCN</p>
          <p>NGN90.00/0.90ZCN</p>
          <p>NGN75.00/0.75ZCN</p>
          <p>NGN75.00/0.75ZCN</p>
        </div>
      </Cont>
    </Wrapper>
  );
};

export default Rates;
