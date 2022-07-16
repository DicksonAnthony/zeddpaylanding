import styled from "styled-components";
import Img from "../../Design/heroTop.svg";

export const Wrapper = styled.div`
  padding: 110px 100px 0;
`;
export const Cards = styled.div`
  gap: 35px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;
export const Desc = styled.p`
  font-size: 15px;
  margin: 30px auto;
  color: var(--paragraphColor);
`;
export const Div = styled.div`
  min-height: 300px;
  max-width: 1000px;
  display: flex;
  border-radius: 15px;
  align-items: flex-end;
  justify-content: center;
  background-image: url(${Img});
  background-color: var(--primaryColor);
`;
export const Realdiv = styled.div`
  display: flex;
  min-width: 350px;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  height: auto;
  max-width: 70%;
`;
export const Cont = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
`;
export const H2 = styled.h2`
  text-align: center;
`;
export const Desc2 = styled.p`
  font-size: 15px;
  text-align: center;
  margin: 30px auto;
  color: var(--paragraphColor);
`;
export const Head2 = styled.div`
  max-width: 100%;
  margin-top: 100px;
`;
export const Threecards = styled.div``;
export const Threeone = styled.div``;
export const Threetwo = styled.div``;
export const ThreeThree = styled.div``;
