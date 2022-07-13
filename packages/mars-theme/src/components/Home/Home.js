import React from "react";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import { connect, styled } from "frontity";

const Home = () => {
  return (
    <HomeElement>
      <Hero />
      <Skills />
    </HomeElement>
  );
};

const HomeElement = styled.div``;

export default connect(Home);
