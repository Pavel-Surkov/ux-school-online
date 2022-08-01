import React from "react";
import P from "../../../../constant/Paragraph";
import { styled, connect } from "frontity";
import { font, whiteRgba, grayRgba } from "../../../../base/functions";

import education from "../../../../../assets/images/svg/Education.svg";
import clock from "../../../../../assets/images/svg/Clock.svg";
import figma from "../../../../../assets/images/svg/Figma.svg";
import pc from "../../../../../assets/images/svg/PC.svg";
import mobileEducation from "../../../../../assets/images/svg/Education-mobile.svg";
import mobileClock from "../../../../../assets/images/svg/Clock-mobile.svg";
import mobileFigma from "../../../../../assets/images/svg/Figma-mobile.svg";
import mobilePC from "../../../../../assets/images/svg/PC-mobile.svg";

const additionalItems = [
  {
    id: 1,
    icon: education,
    mobileIcon: mobileEducation,
    content:
      "Учиться можно в своём темпе, а в среднем ученики проходят курс примерно за 2,5 месяца",
  },
  {
    id: 2,
    icon: clock,
    mobileIcon: mobileClock,
    content:
      "Чтобы получился хороший результат, в неделю надо выделять около 10 часов",
  },
  {
    id: 3,
    icon: figma,
    mobileIcon: mobileFigma,
    content: "Вы будете учиться в Figma и немножко Photoshop",
  },
  {
    id: 4,
    icon: pc,
    mobileIcon: mobilePC,
    content: `Сомневаетесь, подойдёт ли ваш компьютер для учёбы? Откройте этот <a target="_blank" rel="noopenner noreferrer" href="https://www.figma.com/file/0oN6YlYZd91ow76uH11put/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82-(%D0%9E%D0%BB%D1%8F-%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D0%B7%D0%B0)?node-id=162%3A124">Figma-файл</a>. Если компьютер не тормозит, значит можно нормально заниматься`,
  },
];

const AdditionalBlock = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <Additional>
      <Wrapper>
        {additionalItems.map((item) => {
          return (
            <AdditionalItem key={item.id}>
              <Icon>
                <img
                  width="24"
                  height="24"
                  src={isMobile ? item.mobileIcon : item.icon}
                  alt=""
                />
              </Icon>
              <Note>
                <P
                  color={isMobile ? `black` : `white`}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </Note>
            </AdditionalItem>
          );
        })}
      </Wrapper>
    </Additional>
  );
};

const Note = styled.div`
  & a {
    color: var(--link-200);
    text-decoration: underline;
    font-size: inherit;
    line-height: inherit;
    font-stretch: inherit;
    font-variation-settings: inherit;
    &:visited {
      color: var(--link-visited);
    }
    &:hover {
      color: var(--link-400);
    }
    &:focus {
      color: var(--link-500);
    }
    &:active {
      color: var(--link-700);
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const AdditionalItem = styled.div`
  position: relative;
  padding-left: 32px;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Wrapper = styled.div`
  border: 1px dashed ${whiteRgba(0.3)};
  border-radius: 48px;
  padding: 31px 64px 25px;
  @media screen and (max-width: 991px) {
    border: 1px dashed ${grayRgba(0.2)};
    padding: 31px 24px 25px;
    background: var(--white);
  }
`;

const Additional = styled.div``;

export default connect(AdditionalBlock);
