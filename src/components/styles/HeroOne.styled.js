import styled from "styled-components";
import Imgz from "../../Design/heroTop.svg";
import Img from "../../Design/heroDoodle.svg";

export const Wrapper = styled.div`
  margin: 112px 3% auto;
  padding: 32px 5%;

  @media screen and (max-width: 964px) {
    margin: 30px 3% auto;
  }
`;
export const Cards = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: ${({ gap }) => gap || "35px"};
  margin-bottom: ${({margin}) => margin || "auto"};

  @media screen and (max-width: 964px) {
    flex-direction: column;
  }
`;
export const Cont = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  flex-basis: ${({ flex }) => flex || null};

  h1 {
    font-size: 40px;
    padding-right: 30px;
  }
  p {
    font-size: 20px;
    margin: 30px auto;
    color: var(--paragraphColor);
  }
  @media screen and (max-width: 964px) {
    text-align: center;

    h1 {
      font-size: 25px;
      padding-right: 0;
    }
    p {
      font-size: 15px;
    }
  }
`;
export const ButtonC = styled.button`
  border: none;
  font-size: 15px;
  font-weight: 600;
  padding: 15px 70px;
  border-radius: 25px;
  color: var(--buttonText);
  background: var(--primaryColor);
  transition: all 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(0.935);
    background-color: var(--hoverBtn);
  }

  @media screen and (max-width: 964px) {
    width: 100%;
  }
`;
export const Div = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  min-height: 400px;
  border-radius: 15px;
  align-items: flex-end;
  justify-content: ${({ justify }) => justify || "center"};
  background-image: url(${Imgz});
  background-color: ${({ color }) => color || "var(--primaryColor)"};

  @media screen and (max-width: 964px) {
    min-height: 100%;
  }
`;
export const Image = styled.img`
  height: auto;
  max-width: 70%;
  @media screen and (max-width: 964px) {
    max-width: 100%;
  }
`;
export const Head2 = styled.div`
  max-width: 100%;
  margin-top: 160px;

  h1 {
    font-size: 35px;
    text-align: center;
  }
  p {
    font-size: 20px;
    margin: 30px auto;
    text-align: center;
    padding: 0 150px;
    color: var(--paragraphColor);
  }
  @media screen and (max-width: 964px) {
    margin-top: 140px;
    h1 {
      font-size: 25px;
    }
    p {
      padding: 0;
      font-size: 15px;
    }
  }
`;
export const Threecards = styled.div`
  gap: 3rem;
  display: flex;
  text-align: left;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 964px) {
    flex-direction: column;
  }
`;
export const Three = styled.div`
  width: 30%;
  border-radius: 10px;
  padding: 15px 5px 25px 15px;
  background-size: cover;
  background-color: #f9f9f9;
  background-position: center;
  background-image: url(${Img});

  p {
    color: var(--paragraphColor);
  }

  @media screen and (max-width: 964px) {
    width: 100%;
  }
`;
export const Icondiv = styled.div`
  color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  font-size: 20px;
  border-radius: 100%;
  align-items: center;
  margin-bottom: 10px;
  border: 2px solid #000;
  justify-content: center;
  background-color: var(--primaryColor);
`;
export const Icondiv2 = styled(Icondiv)`
  background-color: #e800a7;
`;
export const Icondiv3 = styled(Icondiv)`
  background-color: #c800e8;
`;
