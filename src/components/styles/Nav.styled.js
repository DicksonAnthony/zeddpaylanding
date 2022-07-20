import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  height: 85px;
  display: flex;
  padding: 0 35px;
  align-items: center;
  background: var(--navColor);
  justify-content: space-around;

  @media screen and (max-width: 964px) {
    display: none;
  }
`;
export const Leftdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    font-size: 20px;
    font-weight: 700px;
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--paragraphColor);
`;
export const Image = styled.img``;
export const Ul = styled.ul`
  gap: 50px;
  display: flex;
  list-style: none;
  font-size: 13px;
  align-items: center;
  color: rgba(18, 18, 18, 0.5);
  justify-content: space-between;

  li {
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(0.935);
    }
  }
  a {
    color: var(--paragraphColor);
    text-decoration: none;

    &:hover {
      color: var(--headingColor);
    }
  }
`;
export const Rightdiv = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ButtonL = styled.button`
  color: #00e8be;
  font-size: 12px;
  padding: 15px 45px;
  border-radius: 25px;
  background: transparent;
  border: 1px solid #00e8be;
  transition: all 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(0.935);
  }
`;
export const ButtonG = styled.button`
  border: none;
  font-size: 12px;
  padding: 16px 60px;
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
// Mobile nav styles
export const Wrappermobile = styled.nav`
  position: relative;

  @media screen and (max-width: 964px) {
    display: block;
  }
  @media screen and (min-width: 964px) {
    display: none;
  }
`;
export const WrapperNav = styled.div`
  width: 100%;
  height: 80px;
  z-index: 400;
  display: flex;
  padding: 0 35px;
  align-items: center;
  background: var(--navColor);
  justify-content: space-between;
  top: ${({ mobile }) => mobile && "0"};
  position: ${({ mobile }) => (mobile ? "fixed" : "relative")};
`;
export const LeftdivMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    font-size: 20px;
    font-weight: 700;
  }
`;
export const RightdivMobile = styled.div`
  display: flex;
  font-size: 25px;
  align-items: center;
  justify-content: flex-end;
  color: var(--primaryColor);
`;
export const Ulmobile = styled.ul`
  top: 0;
  gap: 60px;
  width: 100vw;
  display: flex;
  z-index: 300;
  height: 100%;
  list-style: none;
  position: fixed;
  padding-top: 100px;
  align-items: center;
  flex-direction: column;
  background: var(--buttonText);
  transition: all 0.8s ease-in-out;
  transform: ${({ mobile }) =>
    mobile ? "translateX(0)" : "translateX(-100%)"};
  opacity: ${({ mobile }) => (mobile ? "100%" : "30%")};

  li {
    margin-top: 20px;
  }
  a {
    text-decoration: none;
    color: var(--paragraphColor);
  }
`;
