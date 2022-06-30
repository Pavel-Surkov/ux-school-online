import { styled } from "frontity";
import { font, grayRgba } from "../base/functions";

export const ListButton = styled.button`
  color: var(--black-900);
  background: var(--white);
  ${font(21, 32)}
  padding: 0.952em 2.2857em;
  border: none;
  border-bottom: 1px dashed ${grayRgba(0.2)};
`;
