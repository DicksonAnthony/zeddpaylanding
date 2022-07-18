import styled from "styled-components";
import Img from "../../Design/heroDoodle.svg";

export const Wrapper = styled.div`
  margin: 7rem 3% auto;
  padding: 2rem 5%;
`;
export const Cards = styled.div`
  gap: 35px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
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

  h1 {
    font-size: 40px;
  }
`;
export const H2 = styled.h1`
  font-size: 35px;
  text-align: center;
`;
export const Desc2 = styled.p`
  font-size: 20px;
  margin: 30px auto;
  text-align: center;
  padding: 0 150px;
  color: var(--paragraphColor);
`;
export const Head2 = styled.div`
  max-width: 100%;
  margin-top: 160px;
`;
export const Threecards = styled.div`
  display: flex;
  text-align: left;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
`;
export const Three = styled.div`
  gap: 3rem;
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
