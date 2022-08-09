import React from "react";
import P from "../../../constant/Paragraph";
import Link from "../../../constant/Link.js";
import AdditionalBlock from "../../../constant/AdditionalBlock";
import { font, stretch, flex } from "../../../base/functions";
import { styled } from "frontity";

import poster from "../../../../assets/images/faq-poster.png";
import poster2x from "../../../../assets/images/faq-poster@2x.png";
import faqIcon from "../../../../assets/images/svg/Question.svg";
import faqIconMobile from "../../../../assets/images/svg/Question-mobile.svg";

const Additional = () => {
  return (
    <Wrapper>
      <YtBlock>
        <Poster>
          <img
            src={poster}
            srcSet={`${poster} 1x, ${poster2x ? poster2x : poster} 2x`}
            alt="youtube poster"
          />
        </Poster>
        <YtContent>
          <P>Видео-ответы на частые вопросы по обучению</P>
          <YtBtnWrapper>
            <YtBtn link="https://www.youtube.com/playlist?list=PLj21x_Lp9NV3zGrj1Jfzs2CwzGqE4GC2y">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.351 6.68386C18.351 6.68386 18.1864 5.5402 17.6795 5.03802C17.0377 4.37709 16.3202 4.37385 15.9911 4.33498C13.6344 4.1665 10.0962 4.1665 10.0962 4.1665H10.0896C10.0896 4.1665 6.5514 4.1665 4.19477 4.33498C3.86563 4.37385 3.14811 4.37709 2.50629 5.03802C1.99942 5.5402 1.83814 6.68386 1.83814 6.68386C1.83814 6.68386 1.66699 8.02839 1.66699 9.36969V10.6267C1.66699 11.968 1.83485 13.3126 1.83485 13.3126C1.83485 13.3126 1.99942 14.4562 2.503 14.9584C3.14482 15.6193 3.98741 15.5967 4.36263 15.6679C5.7121 15.7943 10.0929 15.8332 10.0929 15.8332C10.0929 15.8332 13.6344 15.8267 15.9911 15.6615C16.3202 15.6226 17.0377 15.6193 17.6795 14.9584C18.1864 14.4562 18.351 13.3126 18.351 13.3126C18.351 13.3126 18.5188 11.9713 18.5188 10.6267V9.36969C18.5188 8.02839 18.351 6.68386 18.351 6.68386ZM8.35178 12.1527V7.49058L12.9038 9.82974L8.35178 12.1527Z"
                    fill="white"
                  />
                </svg>
              </div>
              Смотреть
            </YtBtn>
          </YtBtnWrapper>
        </YtContent>
      </YtBlock>
      <AdditionalBlock
        additionalItems={[
          {
            icon: faqIcon,
            mobileIcon: faqIconMobile,
            content: `Мы ответим на все ваши вопросы лично <br /><a href="/">Связаться с нами</a>`,
          },
        ]}
      />
    </Wrapper>
  );
};

const YtBtnWrapper = styled.div`
  text-align: center;
`;

const YtBtn = styled(Link)`
  background: var(--gradient-youtube-btn);
  ${font(16, 24)};
  font-weight: 500;
  ${stretch(122)};
  color: var(--white);
  ${flex("row", "center")};
  max-width: min-content;
  border: none;
  border-radius: 8px;
  padding: 0.5em 1.25em;
  margin: 0 auto;
  & div {
    ${flex()};
    margin-right: 10px;
  }
`;

const YtContent = styled.div`
  padding: 23px 48px 32px;
  background: var(--white);
  & p {
    text-align: center;
    margin-bottom: 9px;
  }
  @media screen and (max-width: 991px) {
    padding: 15px 24px 24px;
  }
`;

const Poster = styled.div`
  margin-bottom: -3px;
  & img {
    width: 100%;
  }
`;

const YtBlock = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 48px;
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 991px) {
    border-radius: 32px;
    margin-bottom: 48px;
    box-shadow: 0 4px 50px rgba(0, 0, 0, 0.08);
  }
`;

const Wrapper = styled.div``;

export default Additional;
