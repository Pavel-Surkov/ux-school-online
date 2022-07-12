export const font = (size, lh) => {
  const sizeInRem = size / 10;

  return `
		font-size: ${sizeInRem}rem;
		line-height: calc(${lh}/${size});
	`;
};

export const flex = (fd, ai, jc, fw) => {
  return `
		display: flex;
		flex-direction: ${fd ? fd : "row"};
		align-items: ${ai ? ai : "flex-start"};
		justify-content: ${jc ? jc : "flex-start"};
		flex-wrap: ${fw ? fw : "nowrap"};
	`;
};

export const whiteRgba = (opacity) => {
  return `rgba(255, 255, 255, ${opacity});`;
};

export const grayRgba = (opacity) => {
  return `rgba(14, 16, 41, ${opacity});`;
};

export const stretch = (stretch) => {
  return `font-stretch: ${stretch}%;
	font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96,
		"YOPQ" 79, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;`;
};
