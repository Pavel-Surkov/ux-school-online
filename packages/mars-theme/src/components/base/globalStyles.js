import { css } from "frontity";
import RobotoVariableFont from "../../assets/fonts/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.woff2";

const globalStyles = css`
  @font-face {
    font-family: "Roboto Flex";
    src: url(${RobotoVariableFont}) format("woff2 supports variations"),
      url(${RobotoVariableFont}) format("woff2-variations");
    font-weight: 100 1000;
    font-stretch: 25% 151%;
  }

  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    font-family: "Roboto Flex", Roboto, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export default globalStyles;
