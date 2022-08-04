import React from "react";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Program from "./ProgramSection/ProgramSection";
import Roadmap from "./Roadmap/Roadmap";
import Projects from "./Projects/Projects";
import AfterCourse from "./AfterCourse/AfterCourse";
import { connect, styled } from "frontity";

const Home = () => {
  return (
    <HomeElement>
      <Hero />
      <Skills />
      <Program />
      <Roadmap />
      <Projects />
      <AfterCourse />
    </HomeElement>
  );
};

const HomeElement = styled.div``;

export default connect(Home);
