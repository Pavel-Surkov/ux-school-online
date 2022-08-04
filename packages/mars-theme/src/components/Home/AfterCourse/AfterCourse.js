import React from "react";
import Container from "../../constant/Container";
import AdditionalBlock from "./AdditionalBlock/AdditionalBlock";
import { TitleM } from "../../constant/Title";
import { styled } from "frontity";

import bg from "../../../assets/images/after-bg.png";

const AfterCourse = () => {
  return (
    <Section>
      <Container>
        <Content>
          <AfterTitleM color="white">Что будет после курса</AfterTitleM>
          <AdditionalBlock />
        </Content>
      </Container>
    </Section>
  );
};

const AfterTitleM = styled(TitleM)`
  grid-column-start: 2;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: calc(33% - 12px) calc(67% - 12px);
  padding: 178px 0 424px;
  @media screen and (max-width: 991px) {
    padding: 110px 0 132px;
  }
`;

const Section = styled.section`
  position: relative;
  background: url(${bg}) no-repeat 50% / cover;
`;

export default AfterCourse;
