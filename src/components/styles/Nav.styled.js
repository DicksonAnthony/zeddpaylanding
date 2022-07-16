import styled from "styled-components";

export const Wrapper = styled.nav`
  height: 90px;
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
export const Image = styled.img``;
export const Ul = styled.ul`
  gap: 50px;
  display: flex;
  list-style: none;
  font-size: 0.9rem;
  align-items: center;
  color: rgba(18, 18, 18, 0.5);
  justify-content: space-between;

  li {
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(0.935);
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
  padding: 15px 43px;
  border-radius: 25px;
  background: transparent;
  border: 1px solid #00e8be;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(0.935);
  }
`;
export const ButtonG = styled.button`
  border: none;
  padding: 15px 60px;
  border-radius: 25px;
  color: var(--buttonText);
  background: var(--primaryColor);
  transition: all 0.4s ease-in-out;

  &:hover {
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
  height: 80px;
  display: flex;
  padding: 0 35px;
  align-items: center;
  background: var(--navColor);
  justify-content: space-between;
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
  gap: 60px;
  width: 100vw;
  display: flex;
  z-index: 100;
  height: 100vh;
  list-style: none;
  position: absolute;
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
`;
