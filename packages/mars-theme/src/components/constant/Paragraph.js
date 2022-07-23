import { styled } from "frontity";
import { font } from "../base/functions";

const P = styled.p`
  margin: 0;
  ${({ size }) => (size === "l" ? `${font(21, 32)}` : `${font(16, 24)}`)};
  font-weight: 400;
  color: var(--gray-500);
  font-stretch: ${({ size }) => (size === "l" ? `109%` : `122%`)};
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  @media screen and (max-width: 991px) {
    ${font(16, 24)};
  }
`;

export default P;
