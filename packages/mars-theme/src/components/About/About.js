import React from "react";
import HeroVideo from "./HeroVideo/HeroVideo";
import TitleSection from "./TitleSection/TitleSection";
import Lecturers from "./Lecturers/Lecturers";
import AboutSlider from "./AboutSlider/AboutSlider";
import { styled } from "frontity";

const About = () => {
  return (
    <AboutElement>
      <HeroVideo />
      <TitleSection />
      <Lecturers />
      <AboutSlider />
      <History />
    </AboutElement>
  );
};

const AboutElement = styled.div``;

export default About;
