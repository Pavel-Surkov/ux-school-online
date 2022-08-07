import React from "react";
import P from "../../../constant/Paragraph";
import PrimaryBtn from "../../../constant/PrimaryButton";
import { styled } from "frontity";
import { flex, whiteRgba } from "../../../base/functions";
import { TitleM } from "../../../constant/Title";

import certificate from "../../../../assets/images/certificate.svg";

const CertificateBlock = () => {
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
              <img src={certificate} alt="certificate" />
            </Certificate>
          </CertificateBorderInner>
        </CertificateBorder>
      </CertificateWrapper>
      <CourseBtnWrapper>
        <PrimaryBtn content="Записаться на курс" />
      </CourseBtnWrapper>
    </Wrapper>
  );
};

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
`;

const Certificate = styled.div``;

const CertificateBorderInner = styled.div`
  padding: 33px;
  padding-bottom: 37px;
  background: var(--white);
  box-shadow: inset 0px 0px 1.09877px rgba(1, 56, 121, 0.2),
    inset 0px 0px 32.963px rgba(1, 56, 121, 0.1);
`;

const CertificateBorder = styled.div`
  ${flex()};
  margin: 0 auto;
  position: relative;
  padding: 22px;
  padding-bottom: 28px;
  background: var(--white);
  box-shadow: 0px 1.09877px 1.09877px rgba(55, 61, 67, 0.1),
    0px 21.9753px 21.9753px rgba(55, 61, 67, 0.1);
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
`;

const Subtitle = styled.div`
  text-align: center;
  max-width: 732px;
  margin: 0 auto 63px;
`;

const CertificateTitle = styled(TitleM)`
  text-align: center;
  margin-bottom: 23px;
`;

const Wrapper = styled.div`
  padding: 178px 0 88px;
  border-bottom: 1px dashed ${whiteRgba(0.3)};
  margin-bottom: -300px;
  @media screen and (max-width: 991px) {
    padding: 110px 0 104px;
  }
`;

export default CertificateBlock;
