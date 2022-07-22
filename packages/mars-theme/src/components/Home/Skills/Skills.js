import React from "react";
import Container from "../../constant/Container";
import P from "../../constant/Paragraph";
import { TitleM, TitleS } from "../../constant/Title";
import { connect, styled, css } from "frontity";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Pagination, EffectFade } from "swiper";

import poster from "../../../assets/images/about-video.png";

import interface1x from "../../../assets/images/learn-slider/interface.png";
import interface2x from "../../../assets/images/learn-slider/interface@2x.png";
import design from "../../../assets/images/learn-slider/design.png";
import design2x from "../../../assets/images/learn-slider/design@2x.png";
import figma from "../../../assets/images/learn-slider/figma.png";
import figma2x from "../../../assets/images/learn-slider/figma@2x.png";
import portfolio from "../../../assets/images/learn-slider/portfolio.png";
import portfolio2x from "../../../assets/images/learn-slider/portfolio@2x.png";
import job from "../../../assets/images/learn-slider/job.png";
import job2x from "../../../assets/images/learn-slider/job@2x.png";

const slides = [
  {
    id: 1,
    title: "Проектировать интерфейсы",
    content: "От сбора требований и постановки проблемы, до реализации",
    image: interface1x,
    image2x: interface2x,
  },
  {
    id: 2,
    title: "Визуальный дизайн",
    content:
      "Вы научитесь выстраивать композицию. Освоите типографику и работу с цветом",
    image: design,
    image2x: design2x,
  },
  {
    id: 3,
    title: "Figma",
    content:
      "Это главный инструмент веб-дизайнера на сегодня у которого есть свои особенности, о которых мы расскажем",
    image: figma,
    image2x: figma2x,
  },
  {
    id: 4,
    title: "Оформлять портфолио",
    content:
      "Вы узнаете как правильно подать результат, чтобы он был высоко оценён",
    image: portfolio,
    image2x: portfolio2x,
  },
  {
    id: 5,
    title: "Как найти первую работу",
    content:
      "Мы расскажем о том, как быстро найти первую работу и не совершить ошибок",
    image: job,
    image2x: job2x,
  },
];

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsContainer>
        <VideoWrapper>
          <div
            css={css`
              position: relative;
            `}
          >
            <video width="100%" poster={poster}>
              <source src="" type="video/mp4" />
            </video>
            <Play aria-label="play video">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="72"
                  height="72"
                  rx="36"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M46.3487 35.5951C46.6252 35.7946 46.6252 36.2064 46.3487 36.406L31.3395 47.2376C31.0088 47.4763 30.5469 47.24 30.5469 46.8322V25.1689C30.5469 24.7611 31.0088 24.5248 31.3395 24.7634L46.3487 35.5951Z"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="71"
                  height="71"
                  rx="35.5"
                  stroke="white"
                  stroke-opacity="0.3"
                />
              </svg>
            </Play>
          </div>
        </VideoWrapper>
        <SkillsBlock>
          <TitleM>Чему вы&nbsp;научитесь</TitleM>
          <Content>
            <Swiper
              className="info-slider"
              loop={true}
              modules={[Pagination, EffectFade]}
              pagination={{ clickable: true }}
              effect="fade"
            >
              {slides.map((slide) => {
                return (
                  <SwiperSlide key={slide.id}>
                    <SlideContent className="slide-content">
                      <Note>
                        <SlideTitle>{slide.title}</SlideTitle>
                        <Text>
                          <P>{slide.content}</P>
                        </Text>
                      </Note>
                      <ImageContainer>
                        <ImageWrapper>
                          <img
                            wdith="400"
                            height="400"
                            src={slide.image}
                            alt=""
                          />
                        </ImageWrapper>
                      </ImageContainer>
                    </SlideContent>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Content>
        </SkillsBlock>
      </SkillsContainer>
    </SkillsSection>
  );
};

const Text = styled.div``;

const SlideTitle = styled(TitleS)`
  margin-bottom: 15px;
  @media screen and (max-width: 991px) {
    margin-bottom: 8px;
  }
`;

const Note = styled.div``;

const ImageWrapper = styled.div`
  transform: translateY(-111px);
`;

const ImageContainer = styled.div`
  position: relative;
`;

const SlideContent = styled.div`
  background: var(--white);
  border-radius: 48px;
  padding: 38px 48px 40px;

  display: grid;
  grid-template-columns: 288px 1fr;
  grid-gap: 46px;
`;

const Content = styled.div`
  & .info-slider {
    padding: 30px;
    background: var(--white);
    position: relative;
    & .swiper-slide-active {
      & .slide-content {
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03),
          0px 1px 1px rgba(0, 0, 0, 0.1), 0px 48px 64px rgba(0, 0, 0, 0.05);
      }
    }
  }
`;

const Play = styled.button`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  border: none;
  transition: transform 0.2s;
  &:hover {
    transform: translate(-50%, -50%) scale(1.08);
  }
  &:active {
    transform: translate(-50%, -50%);
  }
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: -272px;
  left: 0;
  & video {
    position: relative;
    border-radius: 48px;
  }
  @media screen and (max-width: 991px) {
    top: -88px;
    & video {
      border-radius: 32px;
    }
  }
  @media screen and (max-width: 576px) {
    width: calc(100vw - 48px);
    left: 50%;
    transform: translateX(-50%);
  }
`;

const SkillsBlock = styled.div`
  display: grid;
  grid-template-columns: calc((408 / 1200) * 100%) calc((792 / 1200) * 100%);
  padding-top: 552px;
  padding-bottom: 200px;
  border-bottom: 1px solid #0e102933;
`;

const SkillsContainer = styled(Container)`
  position: relative;
`;

const SkillsSection = styled.section`
  position: relative;
`;

export default connect(Skills);
