import { styled } from "frontity";
import { font, stretch } from "../base/functions";

const WhiteButton = styled.button`
  color: var(--link-500);
  ${font(21, 36)};
  ${stretch(115)};
  letter-spacing: -0.01em;
  padding: 9px 20px;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  width: 100%;
  background: var(--white);
	cursor: pointer;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
`;

export default WhiteButton;
