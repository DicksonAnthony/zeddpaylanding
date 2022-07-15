import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  height: 90px;
  background: var(--navColor);
  justify-content: space-around;
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
`;
export const MiddleDiv = styled.div``;
export const Rightdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ButtonL = styled.button``;
export const ButtonG = styled.button``;
