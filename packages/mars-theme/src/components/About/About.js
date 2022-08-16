import React from "react";
import HeroVideo from "./HeroVideo/HeroVideo";
import TitleSection from "./TitleSection/TitleSection";
import { styled } from "frontity";

const About = () => {
  return (
    <AboutElement>
      <HeroVideo />
      <TitleSection />
    </AboutElement>
  );
};

const AboutElement = styled.div``;

export default About;
