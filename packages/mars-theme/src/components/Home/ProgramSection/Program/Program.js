import React from "react";
import { TitleM } from "../../../constant/Title";
import ProgramBlock from "./ProgramBlock/ProgramBlock";
import AdditionalBlock from "./AdditionalBlock/AdditionalBlock";
import { connect, styled } from "frontity";

const Program = () => {
  return (
    <ProgramWrapper>
      <ProgramTitleM color="white">Программа обучения</ProgramTitleM>
      <ContentWrapper>
        <ProgramBlock />
        <AdditionalBlock />
      </ContentWrapper>
    </ProgramWrapper>
  );
};

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
