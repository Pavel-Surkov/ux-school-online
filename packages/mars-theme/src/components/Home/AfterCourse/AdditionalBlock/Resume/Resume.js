import React from "react";
import Modal from "../../../../constant/CommonModal";
import P from "../../../../constant/Paragraph";
import { TitleS } from "../../../../constant/Title";
import { styled } from "frontity";

import resume from "../../../../../assets/images/resume-img-1.png";

const Resume = ({ isOpened, setIsOpened }) => {
  return (
    <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
      <Header>
        <ImageWrapper>
          <img width="64" height="64" src={resume} alt="" />
        </ImageWrapper>
        <Descrition>
          <JobTitle>Должность</JobTitle>
          <TitleS>UX/UI Designer</TitleS>
        </Descrition>
      </Header>
      <Info>
        <Skills>
          <ListTitle>Навыки</ListTitle>
        </Skills>
        <Apps>
          <ListTitle>Программы</ListTitle>
        </Apps>
      </Info>
    </Modal>
  );
};

const ListTitle = styled(P)`
  color: var(--gray-400);
  margin-bottom: 9px;
`;

const Apps = styled.div``;

const Skills = styled.div``;

const Info = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: calc(75.33% - 5px) calc(24.67% - 5px);
`;

const JobTitle = styled(P)`
  color: var(--gray-400);
  margin-bottom: -6px;
`;

const Descrition = styled.div``;

const ImageWrapper = styled.div`
  display: flex;
  & img {
    border-radius: 16px;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-gap: 20px;
  margin-bottom: 28px;
`;

export default Resume;
