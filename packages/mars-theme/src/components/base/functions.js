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

// function hexToRgb(hex) {
//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null;
// }

export const whiteRgba = (opacity) => {
  return `rgba(255, 255, 255, ${opacity});`;
};

export const grayRgba = (opacity) => {
  return `rgba(14, 16, 41, ${opacity});`;
};
