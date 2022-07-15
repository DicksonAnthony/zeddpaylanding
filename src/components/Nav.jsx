import React from "react";

const Nav = () => {
  return (
    <>
      <Wrapper>
        <Leftdiv>
          <Image />
          <h1></h1>
        </Leftdiv>
        <MiddleDiv>
          <Ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Rates</li>
          </Ul>
        </MiddleDiv>
        <Rightdiv>
          <ButtonL>Log in</ButtonL>
          <ButtonG>Get Started</ButtonG>
        </Rightdiv>
      </Wrapper>
    </>
  );
};

export default Nav;
