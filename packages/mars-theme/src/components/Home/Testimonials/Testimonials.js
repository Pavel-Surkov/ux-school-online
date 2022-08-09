import React, { useState } from "react";
import Container from "../../constant/Container";
import P from "../../constant/Paragraph";
import Additional from "./Additional/Additional";
import WhiteBtn from "../../constant/WhiteButton";
import { TitleM } from "../../constant/Title";
import { styled } from "frontity";

import pasha from "../../../assets/images/testimonials/testimonial1.png";
import pasha2x from "../../../assets/images/testimonials/testimonial1@2x.png";
import tanya from "../../../assets/images/testimonials/testimonial2.png";
import tanya2x from "../../../assets/images/testimonials/testimonial2@2x.png";
import nikita from "../../../assets/images/testimonials/testimonial3.png";
import nikita2x from "../../../assets/images/testimonials/testimonial3@2x.png";
import sasha from "../../../assets/images/testimonials/testimonial4.png";
import sasha2x from "../../../assets/images/testimonials/testimonial4@2x.png";

const testimonials = [
  {
    id: 1,
    name: "Паша Абраменков",
    age: "25 лет",
    shortText:
      "Очень рад, что выбрал UX mind. Все было организовано замечательно…",
    paragraphs: [
      "С радостью оставляю положительной отзыв!",
      "Пройдя курс «Дизайн: Старт» я с остался полностью доволен, что мой выбор пал именно на данную школу. Отдельная благодарность заслуживает преподаватель Александр Берновик, который вёл данный курс.",
      "Обучаясь в разных школах и в разных стезях, я не встречал более терпеливого и грамотного преподавателя, с которым ты всегда «на связи», который готов ещё раз тебе все объяснить, к которому можно обратиться за помощью даже после окончания обучения. Если вы выберите данную школу — вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
    ],
    avatar: pasha,
    avatar2x: pasha2x,
  },
  {
    id: 2,
    name: "Таня Мамчиц",
    shortText:
      "Мне казалось, что меня сложно чем-то удивить в плане преподавания и ведения курсов…",
    paragraphs: [
      "Мне казалось, что меня сложно чем-то удивить в плане преподавания и ведения курсов…",
    ],
    avatar: tanya,
    avatar2x: tanya2x,
  },
  {
    id: 3,
    name: "Никита Добровольский",
    shortText:
      "Как сейчас помню свои мысли после окончания: «Так, сертификат на руках, а что дальше? Что-что? Начало положено, двигаемся дальше!»…",
    paragraphs: [
      "Как сейчас помню свои мысли после окончания: «Так, сертификат на руках, а что дальше? Что-что? Начало положено, двигаемся дальше!»…",
    ],
    avatar: nikita,
    avatar2x: nikita2x,
  },
  {
    id: 4,
    name: "Саша Груша",
    agee: "25 лет",
    shortText:
      "Выбрал вас и ни разу не пожалел. Уже после первого занятия понял, что это моё. Вы даёте не только крутой пинок (я горел этим делом все два месяца обучения)",
    paragraphs: [
      "Выбрал вас и ни разу не пожалел. Уже после первого занятия понял, что это моё. Вы даёте не только крутой пинок (я горел этим делом все два месяца обучения)",
    ],
    avatar: sasha,
    avatar2x: sasha2x,
  },
  {
    id: 5,
    name: "Саша Груша",
    agee: "25 лет",
    shortText:
      "Выбрал вас и ни разу не пожалел. Уже после первого занятия понял, что это моё. Вы даёте не только крутой пинок (я горел этим делом все два месяца обучения)",
    paragraphs: [
      "Выбрал вас и ни разу не пожалел. Уже после первого занятия понял, что это моё. Вы даёте не только крутой пинок (я горел этим делом все два месяца обучения)",
    ],
    avatar: sasha,
    avatar2x: sasha2x,
  },
];

const Testimonials = () => {
  const [allTestimonialsShown, setAllTestimonialsShown] = useState(false);

  return (
    <Section>
      <Container>
        <TestimonialsTitle>Отзывы выпускников</TestimonialsTitle>
        <Content>
          <TestimonialsBlock>
            <TestimonialsList>
              {testimonials.map((testimonial, idx) => {
                if (!allTestimonialsShown && idx > 3) {
                  return null;
                }

                return (
                  <TestimonialItem key={testimonial.id}>
                    <Avatar>
                      <img
                        src={testimonial.avatar}
                        srcSet={`${testimonial.avatar} 1x, ${
                          testimonial.avatar2x
                            ? testimonial.avatar2x
                            : testimonial.avatar
                        } 2x`}
                        alt="avatar"
                      />
                    </Avatar>
                    <Info>
                      <InfoText>
                        <P size="l">{testimonial.shortText}</P>
                      </InfoText>
                      <Name>
                        {testimonial.age ? (
                          <P>{`${testimonial.name}, ${testimonial.age}`}</P>
                        ) : (
                          <P>{testimonial.name}</P>
                        )}
                      </Name>
                    </Info>
                  </TestimonialItem>
                );
              })}
            </TestimonialsList>
            {!allTestimonialsShown && (
              <ShowMore>
                <WhiteBtn onClick={() => setAllTestimonialsShown(true)}>
                  Показать еще
                </WhiteBtn>
              </ShowMore>
            )}
          </TestimonialsBlock>
          <Additional />
        </Content>
      </Container>
    </Section>
  );
};

const ShowMore = styled.div`
  margin-top: 64px;
`;

const TestimonialsBlock = styled.div``;

const Name = styled.div`
  & p {
    color: var(--gray-400);
  }
`;

const InfoText = styled.div`
  margin-bottom: 6px;
`;

const Info = styled.div``;

const Avatar = styled.div`
  overflow: hidden;
  max-width: 192px;
  border-radius: 48px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialItem = styled.li`
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: 192px 1fr;
  grid-gap: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const TestimonialsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: calc((8 / 12) * 100% - 12px) calc(
      (4 / 12) * 100% - 12px
    );
  grid-gap: 24px;
`;

const TestimonialsTitle = styled(TitleM)`
  margin-bottom: 78px;
  max-width: 350px;
`;

const Section = styled.div`
  background: var(--white);
  padding-top: 322px;
`;

export default Testimonials;
