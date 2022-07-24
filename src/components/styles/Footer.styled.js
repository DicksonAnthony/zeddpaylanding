import styled from "styled-components";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export const Wrapper = styled.div`
  margin-top: 50px;
  padding: 0 50px;
  @media screen and (max-width: 964px) {
    padding: 0 20px;
  }
`;
export const Container = styled.div`
  gap: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 2px solid #f6f6f7;

  h1 {
    font-size: 20px;
  }

  ul {
    list-style: none;
    color: var(--paragraphColor);
  }
  p {
    color: var(--paragraphColor);
  }

  @media screen and (max-width: 964px) {
    gap: 22px;
    align-items: flex-start;
    flex-direction: column;

    p {
      text-align: left;
    }
  }
`;
export const Image = styled.img``;
export const Head = styled.div`
  gap: 1px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  /* @media screen and (max-width: 964px) {
    justify-content: center;
  } */
`;
export const Div = styled.div`
  width: 25%;

  @media screen and (max-width: 964px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;
export const Icon = styled.div`
  gap: 10px;
  font-size: 20px;
  display: flex;
  margin-top: 20px;
  align-items: center;

  @media screen and (max-width: 964px) {
    display: none;
    justify-content: center;
  }
`;
export const Icon2 = styled.div`
  font-size: 20px;
  display: none;

  @media screen and (max-width: 964px) {
    gap: 10px;
    display: flex;
    margin-top: 20px;
    align-items: center;
  }
`;
export const Div1 = styled.div`
  @media screen and (max-width: 964px) {
    width: 100%;
    display: flex;
    text-align: left;
    margin-bottom: auto;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`;
export const Control = styled.div`
  gap: 50px;
  display: flex;
  flex-basis: 70%;
  align-items: center;
  justify-content: flex-start;
`;
export const Division = styled.div`
  gap: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 964px) {
    flex-direction: column;
  }
`;
export const Copy = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  justify-content: center;
  color: var(--paragraphColor);

  p {
    margin-left: 5px;
  }
  @media screen and (max-width: 964px) {
    font-size: 12px;
  }
`;
export const Fb = styled(FaFacebook)`
  color: #237df2;
`;
export const Twit = styled(FaTwitter)`
  color: #1da1f2;
`;
