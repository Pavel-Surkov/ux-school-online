import React from "react";
import Container from "../constant/Container";
import Link from "../constant/TextLink";
import { flex, font, grayRgba, stretch } from "../base/functions";
import { TitleM } from "../constant/Title";
import { styled, connect } from "frontity";
import P from "../constant/Paragraph";

import telegram from "../../assets/images/social/Telegram-large.svg";
import tel from "../../assets/images/social/Phone-large.svg";
import whatsapp from "../../assets/images/social/Whatsapp-large.svg";
import viber from "../../assets/images/social/Viber-large.svg";
import linked from "../../assets/images/social/linkedin-large.svg";

const socials = [
  {
    id: 1,
    icon: telegram,
    link: "t.me/ux_mind_school",
    content: "t.me/ux_mind_school",
  },
  {
    id: 2,
    icon: tel,
    link: "tel:+375(29)863-06-57",
    content: "+375 (29) 863-06-57",
  },
  {
    id: 3,
    icon: whatsapp,
    link: "https://wa.me/375298630657",
    content: "+375 (29) 863-06-57",
  },
  {
    id: 4,
    icon: viber,
    link: "viber://chat?number=%2B375298630657",
    content: "+375 (29) 863-06-57",
  },
  {
    id: 5,
    icon: linked,
    link: "linkedin.com/company/ux-mind-school",
    content: "linkedin.com/company/ux-mind-school",
  },
];

const Contact = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <ContactsWrapper>
      <Content>
        <TitleM mb={isMobile ? 30 : 46}>Контакты</TitleM>
        <MapBlock>
          <Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.540784751345!2d27.58559125944169!3d53.904365597695424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfb6cb6a50c3%3A0x823a68a49cd1d602!2z0YPQu9C40YbQsCDQp9Cw0L_QsNC10LLQsCAzLCDQnNC40L3RgdC6LCDQkdC10LvQsNGA0YPRgdGM!5e0!3m2!1sru!2sru!4v1660890169287!5m2!1sru!2sru"
              width="100%"
              height="272"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Map>
          <Address>
            <Office>Головной офис</Office>
            <P size="l">
              Республика Беларусь. <br />
              г. Минск. ул. Чапаева, д. 3, оф. 237
            </P>
          </Address>
          <SocialList>
            {socials.map((item) => {
              return (
                <SocialItem key={item.id}>
                  <Icon>
                    <img width="24" height="24" src={item.icon} alt="icon" />
                  </Icon>
                  <SocialLink link={item.link}>{item.content}</SocialLink>
                </SocialItem>
              );
            })}
          </SocialList>
        </MapBlock>
      </Content>
    </ContactsWrapper>
  );
};

const SocialLink = styled(Link)`
  ${font(21, 32)};
  ${stretch(109)};
  position: relative;
`;

const Icon = styled.div`
  background: var(--white);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  margin-right: 16px;
`;

const SocialItem = styled.li`
  ${flex("row", "center")};
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SocialList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 32px 52px 40px;
`;

const Office = styled.span`
  ${font(12, 16)};
  display: block;
  margin-bottom: 5px;
  color: var(--gray-400);
`;

const Address = styled.div`
  padding: 28px 51px 30px;
  border-bottom: 1px dashed ${grayRgba(0.2)};
`;

const Map = styled.div``;

const MapBlock = styled.div`
  background: var(--gray-50);
  border-radius: 12px;
  overflow: hidden;
`;

const Content = styled(Container)`
  max-width: 588px;
`;

const ContactsWrapper = styled.div`
  padding: 98px 0 184px;
`;

export default connect(Contact);
