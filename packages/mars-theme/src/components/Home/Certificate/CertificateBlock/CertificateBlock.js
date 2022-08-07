import React from "react";
import P from "../../../constant/Paragraph";
import PrimaryBtn from "../../../constant/PrimaryButton";
import { styled, connect } from "frontity";
import {
  flex,
  font,
  whiteRgba,
  grayRgba,
  stretch,
} from "../../../base/functions";
import { TitleM } from "../../../constant/Title";

import certificate from "../../../../assets/images/certificate.svg";
import certificateMobile from "../../../../assets/images/certificate-mobile.svg";

import emoji1 from "../../../../assets/images/emoji/Emoji1.png";
import emoji2 from "../../../../assets/images/emoji/Emoji2.png";
import emoji3 from "../../../../assets/images/emoji/Emoji3.png";
import emoji4 from "../../../../assets/images/emoji/Emoji4.png";
import emoji5 from "../../../../assets/images/emoji/Emoji5.png";
import emoji6 from "../../../../assets/images/emoji/Emoji6.png";

const CertificateBlock = ({ state }) => {
  return (
    <Wrapper>
      <CertificateTitle>Сертификат</CertificateTitle>
      <Subtitle>
        <P size="l">
          Cтуденты защитившие итоговую работу получают именной сертификат
          от UX Mind School
        </P>
      </Subtitle>
      <CertificateWrapper>
        <CertificateBorder>
          <CertificateBorderInner>
            <Certificate>
              <img
                src={state.theme.isMobile ? certificateMobile : certificate}
                alt="certificate"
              />
            </Certificate>
          </CertificateBorderInner>
          <CertificateCheck>
            <P>
              Мы внедрили <CheckBtn>проверку сертификатов</CheckBtn>. Вы можете
              посмотреть кому и когда выдавали
            </P>
          </CertificateCheck>
          {/* <Emoji
            transform="translate(calc(-50% - 722px)) rotate(-23deg)"
            top={195}
            zIndex={0}
          >
            <img src={emoji1} alt="emoji" />
          </Emoji>
          <Emoji
            transform="translate(calc(-50% - 483px)) rotate(10deg)"
            top={-16}
            zIndex={0}
          >
            <img src={emoji3} alt="emoji" />
          </Emoji>
          <Emoji
            transform="translate(calc(-50% - 352px)) rotate(-20deg)"
            top={371}
            zIndex={1}
          >
            <img src={emoji4} alt="emoji" />
          </Emoji>
          <Emoji
            transform="translate(calc(-50% + 348px)) rotate(11deg)"
            top={413}
            zIndex={1}
          >
            <img src={emoji5} alt="emoji" />
          </Emoji>
          <Emoji
            transform="translate(calc(-50% + 474px)) rotate(-26deg)"
            top={18}
            zIndex={0}
          >
            <img src={emoji6} alt="emoji" />
          </Emoji>
          <Emoji
            transform="translate(calc(-50% + 727px)) rotate(30deg)"
            top={225}
            zIndex={0}
          >
            <img src={emoji2} alt="emoji" />
          </Emoji> */}
        </CertificateBorder>
      </CertificateWrapper>
      <CourseBtnWrapper>
        <PrimaryBtn content="Записаться на курс" />
      </CourseBtnWrapper>
    </Wrapper>
  );
};

const Emoji = styled.div`
  position: absolute;
  width: 256px;
  height: 256px;
  top: ${({ top }) => (top ? `${top}px` : `0`)};
  left: 50%;
  transform: ${({ transform }) => (transform ? transform : "translateX(-50%)")};
  z-index: ${({ zIndex }) => `${zIndex}`};
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const CheckBtn = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  color: var(--link-500);
  text-decoration: underline;
  font-size: inherit;
  line-height: inherit;
  font-stretch: inherit;
  font-variation-settings: inherit;
  &:visited {
    color: var(--link-visited);
  }
  &:hover {
    color: var(--link-400);
  }
  &:focus {
    color: var(--link-500);
  }
  &:active {
    color: var(--link-700);
  }
  ${({ style }) =>
    style === "dark" &&
    `
  &:hover {
    color: var(--link-100);
  }
  &:focus {
    color: var(--link-200);
  }
  &:active {
    color: var(--link-500);
  }`}
`;

const CertificateCheck = styled.div`
  position: absolute;
  z-index: 3;
  right: -232px;
  top: 248px;
  padding: 8px 16px;
  background: ${whiteRgba(0.01)};
  backdrop-filter: blur(24px);
  max-width: 333px;
  box-sizing: border-box;
  border-radius: 12px;
  & p {
    color: var(--gray-800);
  }
  @media screen and (max-width: 1400px) {
    top: 290px;
    right: -150px;
  }
  @media screen and (max-width: 991px) {
    background: ${grayRgba(0.1)};
    right: auto;
    left: 8px;
    max-width: calc(100% - 16px);
    top: auto;
    bottom: -50px;
    padding: 9px 16px 7px;
    color: var(--white);
    & p {
      ${font(14, 20)};
      ${stretch(110)};
    }
  }
`;

const CourseBtnWrapper = styled.div`
  position: relative;
  margin-top: 72px;
  text-align: center;
  z-index: 2;
  & button {
    box-shadow: 0px 1px 1px rgba(55, 61, 67, 0.1),
      0px -30px 100px rgba(255, 255, 255, 0.3),
      0px 70px 90px rgba(55, 61, 67, 0.3),
      inset 0.5px 1px 0px rgba(255, 255, 255, 0.35);
  }
  @media screen and (max-width: 991px) {
    margin-top: 113px;
    & button {
      max-width: 257px;
      padding: 0.47em;
      border-radius: 12px;
    }
  }
`;

const Certificate = styled.div`
  max-width: inherit;
  box-sizing: inherit;
  & img {
    max-width: inherit;
    box-sizing: inherit;
  }
`;

const CertificateBorderInner = styled.div`
  padding: 33px;
  max-width: inherit;
  box-sizing: inherit;
  padding-bottom: 37px;
  background: var(--white);
  box-shadow: inset 0px 0px 1.09877px rgba(1, 56, 121, 0.2),
    inset 0px 0px 32.963px rgba(1, 56, 121, 0.1);
  @media screen and (max-width: 991px) {
    padding: 16px;
    padding-bottom: 18px;
  }
`;

const CertificateBorder = styled.div`
  ${flex()};
  margin: 0 auto;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  padding: 22px;
  padding-bottom: 28px;
  background: var(--white);
  box-shadow: 0px 1.09877px 1.09877px rgba(55, 61, 67, 0.1),
    0px 21.9753px 21.9753px rgba(55, 61, 67, 0.1);
  @media screen and (max-width: 991px) {
    padding: 11px;
    padding-bottom: 14px;
  }
`;

const CertificateWrapper = styled.div`
  ${flex()};
  z-index: 1;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    width: 433px;
    height: 432px;
    bottom: 64px;
    left: 50%;
    transform: translateX(-50%);
    background: #9d20ff;
    filter: blur(250px);
    border-radius: 120px;
  }
  @media screen and (max-width: 991px) {
    &::before {
      bottom: 61px;
      width: 226px;
      height: 226px;
      filter: blur(130px);
    }
  }
`;

const Subtitle = styled.div`
  text-align: center;
  max-width: 732px;
  margin: 0 auto 63px;
  z-index: 2;
  position: relative;
  @media screen and (max-width: 991px) {
    margin-bottom: 33px;
  }
`;

const CertificateTitle = styled(TitleM)`
  text-align: center;
  margin-bottom: 23px;
  z-index: 2;
  position: relative;
  @media screen and (max-width: 991px) {
    margin-bottom: 13px;
  }
`;

const Wrapper = styled.div`
  padding: 178px 0 88px;
  border-bottom: 1px dashed ${whiteRgba(0.3)};
  margin-bottom: -496px;
  @media screen and (max-width: 991px) {
    padding: 110px 0 104px;
    margin-bottom: -372px;
  }
`;

export default connect(CertificateBlock);
