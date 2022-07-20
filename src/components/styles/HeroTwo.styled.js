import styled from "styled-components";
import Img from "../../Design/heroDoodle.svg";

export const Container = styled.div`
  display: flex;
  padding-top: 50px;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  margin: 50px 50px auto;
  color: var(--buttonText);
  justify-content: flex-end;
  background: var(--backgroundGradient);

  h1 {
    margin-bottom: 20px;
    padding: 0 200px;
  }
  p {
    font-size: 15px;
    margin-bottom: 20px;
    padding: 0 300px;
  }
  @media screen and (max-width: 964px) {
    margin: 50px 10px auto;
    h1 {
      font-size: 20px;
      padding: 0 20px;
    }
    p {
      font-size: 13px;
      padding: 0 20px;
    }
  }
`;
export const Button2 = styled.button`
  min-width: 45%;
  border: none;
  font-size: 15px;
  font-weight: 600;
  padding: 15px 70px;
  margin-bottom: 20px;
  border-radius: 25px;
  color: var(--primaryColor);
  background: var(--buttonText);
  transition: all 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(0.935);
    background-color: var(--navColor);
  }
`;
export const Image = styled.img`
  max-width: 100%;
`;
export const Imgdiv = styled.div`
  max-width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 964px) {
    max-width: 60%;
  }
`;
export const Cards = styled.div`
  margin: 80px 80px 0;
  @media screen and (max-width: 964px) {
    margin: 80px 20px 0;
  }
`;
export const Head = styled.div`
  text-align: center;
  h1 {
    margin-bottom: 15px;
  }

  p {
    color: var(--paragraphColor);
  }
  @media screen and (max-width: 964px) {
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 15px;
      padding: 0 30px;
    }
  }
`;
export const Three = styled.div`
  gap: 3rem;
  display: flex;
  text-align: center;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 964px) {
    flex-direction: column;
  }
`;
export const CardsItem = styled.div`
  width: 30%;
  display: flex;
  border-radius: 10px;
  padding: 15px 10px 0;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f9;
  justify-content: flex-end;
  background-position: center;
  background-image: url(${Img});

  h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
    color: var(--paragraphColor);
  }

  @media screen and (max-width: 964px) {
    width: 100%;
  }
`;
export const Imgdiv2 = styled.div`
  display: flex;
  max-width: 80%;
  align-items: flex-end;
  justify-content: center;
`;
export const CardImg = styled.img`
  max-width: ${({ size }) => size || "100%"};
`;
// Accordian
export const AccordianContainer = styled.div`
  display: flex;
  margin: 80px 40px auto;
  justify-content: space-between;

  @media screen and (max-width: 964px) {
    flex-direction: column;
  }
`;
export const Main = styled.div`
  h1 {
    margin-bottom: 15px;
  }

  p {
    color: var(--paragraphColor);
  }
  @media screen and (max-width: 964px) {
    h1 {
      font-size: 25px;
      text-align: center;
    }
    p {
      font-size: 16px;
      text-align: center;
    }
  }
`;
export const Ul = styled.ul`
  list-style: none;
  li {
    padding: 35px 0 15px;
    border-bottom: 2px solid #f6f6f7;
  }
`;
export const Lidiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Icondiv = styled.div`
  width: 25px;
  height: 25px;
  color: #0a82e8;
  display: flex;
  font-size: 12px;
  align-items: center;
  border-radius: 100%;
  background: #cce5fb;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
export const WomanDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgWman = styled.img`
  max-width: 80%;
`;
