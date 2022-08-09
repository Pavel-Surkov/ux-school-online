import React, { useState } from "react";
import Container from "../../constant/Container";
import Additional from "./Additional/Additional";
import FaqItem from "./FaqItem/FaqItem";
import { TitleM } from "../../constant/Title";
import { styled } from "frontity";

import bg from "../../../assets/images/faq-bg.png";

const faq = [
  {
    id: 1,
    question: "Я никогда не занимался дизайном. Получится ли у меня?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 2,
    question: "А что с дипломом?",
    answer: ["Я никогда не занимался дизайном. Получится ли у меня?"],
  },
  {
    id: 3,
    question:
      "Как проходит дистанционное обучение и чем оно отличается от живого?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 4,
    question: "Если я не из Беларуси, могу ли я обучаться на ваших курсах?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 5,
    question: "Можно ли оплатить частями — в рассрочку?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 6,
    question: "Я хочу сменить сферу деятельности, но сомневаюсь, что смогу",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 7,
    question: "Гарантируете ли вы трудоустройство?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 8,
    question: "Сколько зарабатывают дизайнеры?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 9,
    question: "Смогу ли я работать на фрилансе после прохождения курсов?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 10,
    question: "Гарантируете ли вы трудоустройство?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
];

const Faq = () => {
  const [isAllFaqShown, setIsAllFaqShown] = useState(false);

  return (
    <Section>
      <Container>
        <Content>
          <FaqTitleM color="white">Часто задаваемые вопросы</FaqTitleM>
          <Additional />
          <FaqBlock>
            {faq.map((item, idx) => {
              if (!isAllFaqShown && idx > 8) {
                return null;
              }

              return <FaqItem key={item.id} data={item} />;
            })}
          </FaqBlock>
        </Content>
      </Container>
    </Section>
  );
};

const FaqBlock = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 48px;
  background: var(--white);
  overflow: hidden;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1),
    0px 48px 64px rgba(0, 0, 0, 0.05);
  @media screen and (max-width: 991px) {
    border-radius: 32px;
  }
`;

const FaqTitleM = styled(TitleM)`
  grid-column-start: 2;
  max-width: 651px;
`;

const Content = styled.div`
  padding: 178px 0 184px;
  display: grid;
  grid-template-columns: calc((4 / 12) * 100% - 12px) calc(
      (8 / 12) * 100% - 12px
    );
  grid-column-gap: 24px;
  grid-row-gap: 46px;
`;

const Section = styled.section`
  background: url(${bg}) no-repeat 50% 0;
  background-size: 100% 936px;
`;

export default Faq;
