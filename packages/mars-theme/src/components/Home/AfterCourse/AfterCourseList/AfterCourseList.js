import React, { useState } from "react";
import P from "../../../constant/Paragraph";
import { TitleS } from "../../../constant/Title";
import { grayRgba, flex, font, stretch } from "../../../base/functions";
import { styled } from "frontity";

const afterList = [
  {
    id: 1,
    title: "Защита итоговой работы",
    paragraphs: [
      "Помимо небольших заданий, вы будете делать один крупный проект который станет вашей выпускной работой. В конце курса защищаете эту работу чтобы получить сертификат. ",
      `На защите будут присутствовать эксперты которые дадут обратную связь по проекту. <a href="/">Пример</a>`,
    ],
  },
  {
    id: 2,
    title: "Закрытый чат выпускников",
    paragraphs: [
      "Всех успешно защитившихся выпускников мы добавляем в наш закрытый чат телеграмм, в котором мы вы можете спросить совета, поделиться своей новой работой, а также в этот чат часто публикуются вакансии для начинающих дизайнеров.",
    ],
  },
  {
    id: 3,
    title: "Рекомендуем к стажировке",
    paragraphs: [
      "Мы внимательно следим за успехами учащихся на курсах и отмечаем себе ребят которые здорово себя проявляют, которых мы в первую очередь рекомендую для работы нашим друзьям и компаниям партнёром.",
    ],
  },
  {
    id: 4,
    title: "Помогаем составить резюме",
    paragraphs: [
      "На курсе мы проходим то как составить своё резюме, и как только вы его сделаете, по вашей просьбе мы можем У вас проконсультировать как можно его скорректировать чтобы работодатель быстрее обратил на него внимание.",
    ],
  },
  {
    id: 5,
    title: "Помогаем пройти собеседование",
    paragraphs: [
      "Пройти собеседование это большая задача в которой мы можем вам помочь, проконсультировать вас как лучше подойти к конкретному работодателя а также как лучше отвечать на вопросы которые вам могут задать на этом собеседование",
    ],
  },
];

const AfterCourseList = () => {
  const [openedItem, setOpenedItem] = useState(1);

  return (
    <AfterList>
      {afterList.map((item, idx) => {
        const isOpened = openedItem === item.id;

        return (
          <AfterItem
            isOpened={isOpened}
            onClick={() => setOpenedItem(item.id)}
            key={item.id}
          >
            {!isOpened && (
              <ClosedItem>
                <Number>{item.id}</Number>
                <ClosedItemTitle>{item.title}</ClosedItemTitle>
              </ClosedItem>
            )}
            {isOpened && (
              <OpenedItem>
                <Number>{item.id}</Number>
                <OpenedItemContent>
                  <OpenedItemTitle>{item.title}</OpenedItemTitle>
                  <OpenedItemText>
                    {item.paragraphs.map((paragraph) => (
                      <P
                        size="l"
                        key={paragraph}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </OpenedItemText>
                </OpenedItemContent>
              </OpenedItem>
            )}
          </AfterItem>
        );
      })}
    </AfterList>
  );
};

const OpenedItemText = styled.div`
  & p {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const OpenedItemTitle = styled(TitleS)`
  margin-bottom: 19px;
`;

const OpenedItemContent = styled.div`
  margin-top: 16px;
  height: 100%;
  max-height: calc(100% - 40px - 16px);
  ${flex("column", "flex-end", "flex-end")};
`;

const OpenedItem = styled.div`
  padding: 24px 48px;
  height: 100%;
  box-sizing: border-box;
  position: relative;
`;

const ClosedItemTitle = styled(P)`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin: 0 auto;
  margin-top: 24px;
  color: var(--black-900);
`;

const Number = styled.div`
  height: 40px;
  width: 48px;
  border-radius: 12px;
  background: var(--gray-100);
  display: grid;
  place-items: center;
  ${font(28, 36)};
  ${stretch(122)};
  color: var(--gray-400);
`;

const ClosedItem = styled.div`
  padding: 24px 16px;
  height: 100%;
  box-sizing: border-box;
  position: relative;
`;

const AfterItem = styled.li`
  border-right: 1px dashed ${grayRgba(0.2)};
  flex-shrink: 0;
  ${({ isOpened }) =>
    isOpened &&
    `
			flex-grow: 1;
			max-width: calc(100% - (80px * 4));
		`}
  &:last-of-type {
    border-right: none;
  }
`;

const AfterList = styled.ul`
  list-style: none;
  margin: none;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1),
    0px 48px 64px rgba(0, 0, 0, 0.05);
  border-radius: 48px;
  background: var(--white);
  padding: 0;
  padding-right: 20px;
  ${flex("row", "stretch")};

  min-height: 576px;
`;

export default AfterCourseList;
