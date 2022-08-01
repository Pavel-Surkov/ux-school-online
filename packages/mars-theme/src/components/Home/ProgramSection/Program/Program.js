import React from "react";
import { TitleM } from "../../../constant/Title";
import AdditionalBlock from "./AdditionalBlock/AdditionalBlock";
import ProgramItem from "./ProgramItem/ProgramItem";
import { connect, styled } from "frontity";

const program = [
  {
    id: 1,
    title: "Введение. Базовая информация для старта курса",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Проектирование пользовательского опыта (UX)",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Методы и артефакты проектирования пользовательского опыта (UX)",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Информационная архитектура",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
  {
    id: 5,
    title: "Курс по Figma",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
  {
    id: 6,
    title: "Прототипирование",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
  {
    id: 7,
    title: "UI. Композиция",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
];

const Program = () => {
  return (
    <ProgramWrapper>
      <ProgramTitleM color="white">Программа обучения</ProgramTitleM>
      <ContentWrapper>
        <Block>
          <ProgramList>
            {program.map((item) => {
              return <ProgramItem key={item.id} data={item} />;
            })}
          </ProgramList>
        </Block>
        <AdditionalBlock />
      </ContentWrapper>
    </ProgramWrapper>
  );
};

const ProgramList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Block = styled.div`
  border-radius: 48px;
  background: var(--white);
  overflow: hidden;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1),
    0px 48px 64px rgba(0, 0, 0, 0.05);
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: calc(67% - 12px) calc(33% - 12px);
`;

const ProgramTitleM = styled(TitleM)`
  margin-bottom: 46px;
`;

const ProgramWrapper = styled.div`
  padding-top: 178px;
  position: relative;
`;

export default connect(Program);
