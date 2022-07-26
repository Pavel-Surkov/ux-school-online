import React from "react";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Program from "./ProgramSection/ProgramSection";
import { connect, styled } from "frontity";

const Home = () => {
  return (
    <HomeElement>
      <Hero />
      <Skills />
      <Program />
    </HomeElement>
  );
};

const HomeElement = styled.div``;

export default connect(Home);
