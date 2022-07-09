import React from "react";
import Container from "../../constant/Container";
import { TitleSizeL } from "../../constant/Title";
import PrimaryButton from "../../constant/PrimaryButton";
import { connect, styled } from "frontity";
import { font } from "../../base/functions";

import bg from "../../../assets/images/Bg.png";
import check from "../../../assets/images/svg/list-check.svg";

const advantages = [
  "Простым языком и для начинающих",
  "Учись в своём темпе",
  "От 5000₽ одним платёжом, или рассрочка",
];

const Hero = ({ state }) => {
  return (
    <HeroWrapper>
      <Container>
        <Content>
          <HeroTitle>
            Профессия <br />
            UX/UI-дизайнер
          </HeroTitle>
          <AdvantagesList>
            {advantages && advantages.map((text) => <li key={text}>{text}</li>)}
          </AdvantagesList>
          <PrimaryButton content={"Записаться на курс"} />
        </Content>
      </Container>
    </HeroWrapper>
  );
};

const AdvantagesList = styled.ul`
  margin: 0;
  margin-bottom: 50px;
  padding: 0;
  & li {
    margin: 0;
    margin-bottom: 8px;
    padding-left: 28px;
    position: relative;
    color: var(--white);
    ${font(16, 24)};
    font-stretch: 122%;
    font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96,
      "YOPQ" 79, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
    &:last-child {
      margin-bottom: 0;
    }
    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background: url(${check}) no-repeat 50%;
    }
  }
`;

const HeroTitle = styled(TitleSizeL)`
  line-height: calc(128 / 112);
  position: relative;
  z-index: 2;
  margin-bottom: 16px;
`;

const Content = styled.div`
  position: relative;
  padding-top: 182px;
  padding-bottom: 416px;
`;

const HeroWrapper = styled.div`
  background: url(${bg}) 50% / cover;
`;

export default connect(Hero);
