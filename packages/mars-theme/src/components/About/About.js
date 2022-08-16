import React from "react";
import HeroVideo from "./HeroVideo/HeroVideo";
import { styled } from "frontity";

const About = () => {
  return (
    <AboutElement>
      <HeroVideo />
    </AboutElement>
  );
};

const AboutElement = styled.div``;

export default About;
