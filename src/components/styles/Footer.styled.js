import styled from "styled-components";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export const Wrapper = styled.div`
  margin-top: 50px;
  padding: 0 50px;
  @media screen and (max-width: 964px) {
    padding: 0 15px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  padding-bottom: 30px;
  justify-content: space-between;
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
    flex-direction: column;

    p {
      text-align: center;
    }
  }
`;
export const Image = styled.img``;
export const Head = styled.div`
  gap: 1px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  @media screen and (max-width: 964px) {
    justify-content: center;
  }
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
  display: flex;
  margin-top: 20px;
  align-items: center;

  @media screen and (max-width: 964px) {
    justify-content: center;
  }
`;
export const Div1 = styled.div`
  @media screen and (max-width: 964px) {
    display: flex;
    margin-bottom: auto;
    text-align: center;
    align-items: center;
    justify-content: center;
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
