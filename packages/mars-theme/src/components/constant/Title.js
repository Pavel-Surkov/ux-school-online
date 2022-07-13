import { styled } from "frontity";
import { font } from "../base/functions";

export const TitleSizeL = styled.h1`
  margin: 0;
  color: var(--white);
  ${font(112, 120)};
  font-weight: 653;
  letter-spacing: -0.035em;
  font-stretch: 140%;
  font-variation-settings: "GRAD" -43, "slnt" 0, "XTRA" 468, "XOPQ" 96,
    "YOPQ" 63, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738,
    "opsz" 70;
  @media screen and (max-width: 991px) {
    ${font(36, 44)};
    letter-spacing: -0.01em;
    font-stretch: 120%;
  }
`;
