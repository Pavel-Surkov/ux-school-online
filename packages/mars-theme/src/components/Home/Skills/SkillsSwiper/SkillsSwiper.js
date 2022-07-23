import React, { useState } from "react";
import P from "../../../constant/Paragraph";
import { TitleS } from "../../../constant/Title";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import {
  Pagination,
  EffectFade,
  Navigation,
  Controller,
  Autoplay,
} from "swiper";
import { connect, styled } from "frontity";
import { flex } from "../../../base/functions";

import interface1x from "../../../../assets/images/learn-slider/interface.png";
import interface2x from "../../../../assets/images/learn-slider/interface@2x.png";
import design from "../../../../assets/images/learn-slider/design.png";
import design2x from "../../../../assets/images/learn-slider/design@2x.png";
import figma from "../../../../assets/images/learn-slider/figma.png";
import figma2x from "../../../../assets/images/learn-slider/figma@2x.png";
import portfolio from "../../../../assets/images/learn-slider/portfolio.png";
import portfolio2x from "../../../../assets/images/learn-slider/portfolio@2x.png";
import job from "../../../../assets/images/learn-slider/job.png";
import job2x from "../../../../assets/images/learn-slider/job@2x.png";

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

const SkillsSwiper = ({ state }) => {
  const { isMobile } = state.theme;

  const [infoSwiper, setInfoSwiper] = useState(null);
  const [infoImgSwiper, setInfoImgSwiper] = useState(null);

  return (
    <Content>
      <Swiper
        className="info-slider"
        loop={true}
        modules={[Pagination, EffectFade, Navigation, Controller, Autoplay]}
        pagination={{ clickable: true }}
        effect="fade"
        controller={{ control: infoImgSwiper }}
        onSwiper={(swiper) => setInfoSwiper(swiper)}
        speed={1000}
        autoplay={{
          delay: 3000,
        }}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <SlideContent className="slide-content">
                <Note>
                  <SlideTitle>{slide.title}</SlideTitle>
                  <Text>
                    <P size="l">{slide.content}</P>
                  </Text>
                </Note>
                <ImageContainer>
                  {isMobile && (
                    <ImageWrapper>
                      <img wdith="400" height="400" src={slide.image} alt="" />
                    </ImageWrapper>
                  )}
                </ImageContainer>
              </SlideContent>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {!isMobile && (
        <ImageSwiperWrapper>
          <Swiper
            className="info-img-slider"
            loop={true}
            modules={[EffectFade, Controller]}
            effect="fade"
            controller={{ control: infoSwiper }}
            onSwiper={(swiper) => {
              setInfoImgSwiper(swiper);
            }}
          >
            {slides.map((slide) => {
              return (
                <SwiperSlide key={slide.id}>
                  <ImageWrapper>
                    <img wdith="400" height="400" src={slide.image} alt="" />
                  </ImageWrapper>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ImageSwiperWrapper>
      )}
    </Content>
  );
};

const ImageSwiperWrapper = styled.div`
  position: absolute;
  top: -70px;
  right: 10px;
  max-width: 400px;
`;

const Text = styled.div``;

const SlideTitle = styled(TitleS)`
  margin: 0;
  margin-bottom: 15px;
  @media screen and (max-width: 991px) {
    margin-bottom: 8px;
  }
`;

const Note = styled.div``;

const ImageWrapper = styled.div`
  background: var(--white);
`;

const ImageContainer = styled.div`
  position: relative;
`;

const SlideContent = styled.div`
  background: var(--white);
  display: grid;
  grid-template-columns: 288px 1fr;
  grid-gap: 46px;
  padding: 38px 48px 40px;
  min-height: 360px;
  box-sizing: border-box;
`;

const Content = styled.div`
  position: relative;
  border-radius: 48px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1),
    0px 48px 64px rgba(0, 0, 0, 0.05);
  & .info-slider {
    position: relative;
    border-radius: 48px;
  }
  & div.swiper-pagination {
    left: 48px;
    bottom: 40px;
    ${flex()};
    & .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: var(--gray-200);
      opacity: 1;
      margin: 0;
      margin-right: 20px;
      &:last-of-type {
        margin-right: 0;
      }
      &-active {
        background: var(--gradient-primary-btn);
      }
    }
  }
`;

export default connect(SkillsSwiper);
