import React from "react";
import P from "../../../../constant/Paragraph";
import { whiteRgba, flex } from "../../../../base/functions";
import { styled } from "frontity";

const CourseItem = ({ image, image2x, content }) => {
  return (
    <Item>
      <ImageWrapper>
        <img
          src={image}
          srcset={`${image} 1x, ${image2x ? image2x : image} 2x`}
          width="256"
          height="256"
          alt=""
        />
      </ImageWrapper>
      <ContentWrapper>
        <Content>{content}</Content>
      </ContentWrapper>
    </Item>
  );
};

const Content = styled(P)`
  color: var(--white);
  text-align: center;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  background: ${whiteRgba(0.01)};
  backdrop-filter: blur(12px);
  border: 1px solid ${whiteRgba(0.1)};
  border-radius: 50px;
  padding: 8px 20px;
  ${flex("row", "center", "center")};
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
`;

const Item = styled.div`
  background: ${whiteRgba(0.1)};
  box-shadow: inset 1px 1px 0px ${whiteRgba(0.35)};
  backdrop-filter: blur(50px);
  border-radius: 48px;
  padding: 24px 32px 24px;
  min-height: 304px;
  box-sizing: border-box;
  position: relative;
  ${flex("column", "center", "flex-end")}
`;

export default CourseItem;
