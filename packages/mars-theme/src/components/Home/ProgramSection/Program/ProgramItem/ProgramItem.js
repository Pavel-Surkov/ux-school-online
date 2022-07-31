import React from "react";
import P from "../../../../constant/Paragraph";
import { font, flex, grayRgba } from "../../../../base/functions";
import { styled } from "frontity";

const ProgramItem = ({ data }) => {
  return (
    <Item>
      <Title>
        <P size="l">{data.title}</P>
      </Title>
      <Drop>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.1704 8.3295C19.6098 8.76884 19.6098 9.48116 19.1704 9.92049L12.7955 16.2954C12.3562 16.7348 11.6438 16.7348 11.2045 16.2954L4.8295 9.92049C4.39017 9.48116 4.39017 8.76884 4.8295 8.3295C5.26884 7.89017 5.98116 7.89017 6.42049 8.3295L12 13.909L17.5795 8.3295C18.0189 7.89017 18.7311 7.89017 19.1704 8.3295Z"
            fill="#B0B5CB"
          />
        </svg>
      </Drop>
    </Item>
  );
};

const Drop = styled.div``;

const Title = styled.div`
  max-width: calc(100% - 24px - 16px);
`;

const Item = styled.li`
  padding: 20px 48px;
  ${flex("row", "center", "space-between")};
  border-bottom: 1px dashed ${grayRgba(0.2)};
`;

export default ProgramItem;
