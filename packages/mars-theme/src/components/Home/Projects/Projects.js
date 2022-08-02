import React from "react";
import { TitleM } from "../../constant/Title";
import { styled, connect } from "frontity";

import archi from "../../../assets/images/projects/archi.png";

const projects = [
  {
    id: 1,
    title: "Archi.Cultuta",
    image: archi,
    link: "https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F143116149%2FAnother-Country-Furniture-shop-website-concept",
  },
  {
    id: 2,
    title: "Chigunka Mobile App",
    image: archi,
    link: "https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F143116149%2FAnother-Country-Furniture-shop-website-concept",
  },
  {
    id: 3,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F143116149%2FAnother-Country-Furniture-shop-website-concept",
  },
  {
    id: 4,
    title: "MUR. Beauty Salon",
    image: archi,
    link: "https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F143116149%2FAnother-Country-Furniture-shop-website-concept",
  },
  {
    id: 5,
    title: "COSRX. Cosmetics Shop",
    image: archi,
    link: "https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F143116149%2FAnother-Country-Furniture-shop-website-concept",
  },
  {
    id: 6,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 7,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 8,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 9,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 10,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 11,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 12,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 13,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 14,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 15,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
];

const Projects = () => {
  return (
    <Section>
      <ProjectsTitle>Проекты наших выпускников</ProjectsTitle>
      <Content>
        {projects.map((project) => (
          <ProjectBlock key={project.id}></ProjectBlock>
        ))}
      </Content>
    </Section>
  );
};

const ProjectBlock = styled.div`
  min-width: 384px;
  &:nth-child(1),
  &:nth-child(3),
  &:nth-child(5) {
    margin-top: 62px;
  }
`;

const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  left: 50%;
  transform: translateX(-50%);
`;

const ProjectsTitle = styled(TitleM)`
  text-align: center;
  max-width: 407px;
  margin-bottom: 53px;
`;

const Section = styled.section`
  padding-top: 179px;
  position: relative;
  @media screen and (max-width: 991px) {
    padding-top: 110px;
  }
`;

export default connect(Projects);
