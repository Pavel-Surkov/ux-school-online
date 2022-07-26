import React from "react";
import P from "../../../constant/Paragraph";
import CourseItem from "./CourseItem/CourseItem";
import { styled } from "frontity";

import suitable1 from "../../../../assets/images/suitable-for-whom/suitable-for-whom-1.png";
import suitable1_2x from "../../../../assets/images/suitable-for-whom/suitable-for-whom-1@2x.png";
import suitable2 from "../../../../assets/images/suitable-for-whom/suitable-for-whom-2.png";
import suitable2_2x from "../../../../assets/images/suitable-for-whom/suitable-for-whom-2@2x.png";
import suitable3 from "../../../../assets/images/suitable-for-whom/suitable-for-whom-3.png";
import suitable3_2x from "../../../../assets/images/suitable-for-whom/suitable-for-whom-3@2x.png";
import suitable4 from "../../../../assets/images/suitable-for-whom/suitable-for-whom-4.png";
import suitable4_2x from "../../../../assets/images/suitable-for-whom/suitable-for-whom-4@2x.png";
import suitable5 from "../../../../assets/images/suitable-for-whom/suitable-for-whom-5.png";
import suitable5_2x from "../../../../assets/images/suitable-for-whom/suitable-for-whom-5@2x.png";
import suitable6 from "../../../../assets/images/suitable-for-whom/suitable-for-whom-6.png";
import suitable6_2x from "../../../../assets/images/suitable-for-whom/suitable-for-whom-6@2x.png";

const courseItems = [
  {
    id: 1,
    image: suitable1,
    image2x: suitable1_2x,
    content: "Кто вообще не знает о веб-дизайне",
  },
  {
    id: 2,
    image: suitable2,
    image2x: suitable2_2x,
    content: "Начинающим веб-дизайнерам",
  },
  {
    id: 3,
    image: suitable3,
    image2x: suitable3_2x,
    content: "Дизайнерам из смежных областей",
  },
  {
    id: 4,
    image: suitable4,
    image2x: suitable4_2x,
    content: "Менеджерам проектов",
  },
  {
    id: 5,
    image: suitable5,
    image2x: suitable5_2x,
    content: "Начинающим бизнесменам",
  },
  {
    id: 6,
    image: suitable6,
    image2x: suitable6_2x,
    content: "Любителям нового",
  },
];

const Course = () => {
  return (
    <CourseWrapper>
      <Question size="l">Кому подойдёт наш курс?</Question>
      <Content>
        {courseItems.map((item) => (
          <CourseItem
            key={item.id}
            image={item.image}
            image2x={item.image2x}
            content={item.content}
          />
        ))}
      </Content>
    </CourseWrapper>
  );
};

const Content = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Question = styled(P)`
  margin-bottom: 39px;
  text-align: center;
`;

const CourseWrapper = styled.div`
  padding-top: 65px;
`;

export default Course;
