import { css } from "frontity";
import RobotoVariableFont from "../../assets/fonts/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.woff2";

const globalStyles = css`
  :root {
    --white: #fff;
    --black-900: #0e1029;
    --gray-500: #454859;
    --gray-400: #80859a;
    --gray-300: #b0b5cb;
    --gray-200: #d8dcec;
    --gray-100: #ebedf5;

    --gradient-youtube-btn: linear-gradient(180deg, #ff5938 0%, #d31a10 100%);
    --gradient-primary-btn: linear-gradient(180deg, #37c9fe 0%, #0077ff 100%);
    --gradient-primary-btn-hover: linear-gradient(
      180deg,
      #37c9fe 0%,
      #3392ff 100%
    );
    --gradient-header: linear-gradient(90.29deg, #6b5cf8 5.37%, #2c93fe 71.74%);
    --dark-item-gradient: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    --link-500: #289ef3;
    --link-200: #75faff;
  }

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
    font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 509, "XOPQ" 96,
      "YOPQ" 79, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  ul,
  li {
    list-style-type: none;
  }
  button {
    cursor: pointer;
  }
`;

export default globalStyles;
