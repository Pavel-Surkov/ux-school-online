import React from "react";
import P from "../../constant/Paragraph";
import Container from "../../constant/Container";
import RateItem from "./RateItem/RateItem";
import { TitleM } from "../../constant/Title";
import { styled } from "frontity";

const freeContent = ["Базовые уроки", "Некоторые дополнительные материалы"];

const maxContent = [
  "Все уроки",
  "Все дополнительные материалы",
  "Проверка домашних заданий",
  "Видео-разборы домашних работ",
  "Живые вебинары раз в неделю",
  "Доступ в чат выпускников",
  "Чат с куратором",
  "Сертификат об окончании",
];

const selfContent = [
  "Все уроки",
  "Все дополнительные материалы",
  "Сертификат об окончании",
];

const Rates = () => {
  return (
    <Section>
      <Container>
        <TitleM align="center" mb={23}>
          Тарифы
        </TitleM>
        <Subtitle>
          <P align="center" size="l">
            Обучение в нашей школе доступно всем, вне зависимости от количества
            свободного времени и доступных средств
          </P>
        </Subtitle>
        <Content>
          <RateItem type="free" availableContent={freeContent} />
          <RateItem type="max" availableContent={maxContent} />
          <RateItem type="self" availableContent={selfContent} />
        </Content>
      </Container>
    </Section>
  );
};

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    width: 323px;
    height: 447px;
    top: calc((100 / 608) * 100%);
    left: 50%;
    transform: translateX(-50%);
    background: #fb64f5;
    filter: blur(128px);
    pointer-events: none;
  }
`;

const Subtitle = styled.div`
  max-width: 842px;
  margin: 0 auto;
  margin-bottom: 55px;
`;

const Section = styled.section`
  padding: 178px 0 264px;
`;

export default Rates;
