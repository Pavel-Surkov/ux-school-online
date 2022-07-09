import React from "react";
import Container from "../../constant/Container";
import { connect, styled } from "frontity";

import bg from "../../../assets/images/Bg.png";

const Hero = ({ state }) => {
  return (
    <HeroWrapper>
      <Container>
        <Content></Content>
      </Container>
    </HeroWrapper>
  );
};

const Content = styled.div`
  position: relative;
  padding-top: 182px;
  padding-bottom: 416px;
`;

const HeroWrapper = styled.div`
  background: url(${bg}) 50% / cover;
`;

export default connect(Hero);
