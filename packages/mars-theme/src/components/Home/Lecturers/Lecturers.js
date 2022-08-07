import React from "react";
import Container from "../../constant/Container";
import { styled } from "frontity";

import bg from "../../../assets/images/lecturers-bg.png";

const Lecturers = () => {
  return (
    <Section>
      <Container></Container>
    </Section>
  );
};

const Section = styled.section`
  padding-top: 594px;
  background: url(${bg}) no-repeat 50% / cover;
  @media screen and (max-width: 991px) {
    padding-top: 486px;
  }
`;

export default Lecturers;
