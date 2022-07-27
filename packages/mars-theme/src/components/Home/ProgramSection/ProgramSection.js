import React from "react";
import Container from "../../constant/Container";
import Course from "./Course/Course";
import Program from "./Program/Program";
import { connect, styled } from "frontity";

import bg from "../../../assets/images/program-section-bg.png";

const ProgramSectionEl = () => {
  return (
    <ProgramSection>
      <Bg>
        <img src={bg} alt="background" />
      </Bg>
      <ProgramContainer>
        <Course />
        <Program />
      </ProgramContainer>
    </ProgramSection>
  );
};

const Bg = styled.div`
  position: absolute;
  width: 100%;
  top: 216px;
  left: 0;
  & img {
    width: inherit;
    height: 1440px;
  }
`;

const ProgramContainer = styled(Container)`
  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
  @media screen and (max-width: 576px) {
    padding: 0;
  }
`;

const ProgramSection = styled.section`
  position: relative;
`;

export default connect(ProgramSectionEl);
