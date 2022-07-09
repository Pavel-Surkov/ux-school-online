import React from "react";
import Hero from "./Hero/Hero";
import { connect, styled } from "frontity";

const Home = () => {
  return (
    <HomeElement>
      <Hero />
    </HomeElement>
  );
};

const HomeElement = styled.div``;

export default connect(Home);
