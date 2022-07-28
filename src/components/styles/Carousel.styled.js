import styled from "styled-components";
import Slider from "react-slick";

export const CarouselSlide = styled(Slider)`
  margin-top: 30px;
  text-align: center;
  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
  .slick-dots {
    bottom: -35px;
  }
  .slick-dots li button:before {
    font-size: 15px;
    color: var(--hoverBtn);
  }
  .slick-dots li.slick-active button:before {
    color: var(--primaryColor);
  }
`;
export const Cont = styled.div`
  margin: 80px 80px 0;
  @media screen and (max-width: 964px) {
    margin: 80px 20px 0;
  }
`;
export const Flex2 = styled.div`
  display: block !important;
`;
export const Wrapper = styled.div`
  display: none;
  @media screen and (max-width: 964px) {
    display: block;
  }
`;
