import React from "react";
import Container from "../../constant/Container";
import { styled } from "frontity";

const Collaboration = () => {
  return (
    <section>
      <Container>
        <Content></Content>
      </Container>
    </section>
  );
};

const Content = styled.div`
  padding-top: 298px;
  padding-bottom: 169px;
`;

export default Collaboration;
