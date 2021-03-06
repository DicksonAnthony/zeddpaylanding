import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --buttonText: #fff;
        --navColor: #fafafa;
        --hoverBtn: #3195EB;
        --headingColor: #121212;
        --primaryColor: #007de8;
        --paragraphColor: rgba(0,25,46,.5)!important;
        --backgroundGradient: linear-gradient(161.48deg,#007de8 -47.77%,rgba(0,232,190,0) 146.51%);
    }
    *{

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
`;
