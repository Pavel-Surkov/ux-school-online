import React, { useState, useEffect } from "react";
import Container from "../constant/Container";
import P from "../constant/Paragraph";
import CheckboxItem from "../constant/CheckboxItem";
import TextLink from "../constant/TextLink";
import PrimaryBtn from "../constant/PrimaryButtonSmall";
import Input from "../constant/Input";
import { font, stretch, flex } from "../base/functions";
import { TitleM, TitleS } from "../constant/Title";
import { styled, connect } from "frontity";

import envelope from "../../assets/images/svg/Envelope.svg";

const Payment = ({ state }) => {
  const { isMobile } = state.theme;

  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [selectedRate, setSelectedRate] = useState(null);
  const [priceInRubles, setPriceInRubles] = useState(29500);
  const [priceString, setPriceString] = useState("29 500");
  const [installmentCheckbox, setInstallmentCheckbox] = useState(false);
  const [graduateCheckbox, setGraduateCheckbox] = useState(false);
  const [name, setName] = useState("");
  const [isUserAgree, setIsUserAgree] = useState(true);

  useEffect(() => {
    const priceString = priceInRubles.toString();

    const newPrice = priceString
      .split("")
      .reverse()
      .map((num, index) => {
        if (!((index + 1) % 3)) {
          return ` ${num}`;
        }

        return num;
      })
      .reverse()
      .join("");

    setPriceString(newPrice);
  }, [priceInRubles]);

  return (
    <PaymentWrapper>
      <Content>
        <TitleM color="black" mb={isMobile ? 30 : 46}>
          Оплатить курс
        </TitleM>
        <Select onClick={() => setDropdownOpened((prev) => !prev)}>
          {selectedRate ? (
            selectedRate
          ) : (
            <span data-span="placeholder">Тариф</span>
          )}
          <Drop rotated={dropdownOpened}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.1704 8.3295C19.6098 8.76884 19.6098 9.48116 19.1704 9.92049L12.7955 16.2954C12.3562 16.7348 11.6438 16.7348 11.2045 16.2954L4.8295 9.92049C4.39017 9.48116 4.39017 8.76884 4.8295 8.3295C5.26884 7.89017 5.98116 7.89017 6.42049 8.3295L12 13.909L17.5795 8.3295C18.0189 7.89017 18.7311 7.89017 19.1704 8.3295Z"
                fill="#B0B5CB"
              />
            </svg>
          </Drop>
        </Select>
        <PaymentBlock>
          <Price>
            <SumTitle>Сумма для оплаты</SumTitle>
            <Sum color="black">{`${priceString} ₽`}</Sum>
            <Promocode htmlFor="switch">
              <SwitchInput type="checkbox" id="switch" />
              <Toggle />
              <P>У меня есть промокод</P>
            </Promocode>
          </Price>
          <Info>
            <Checkboxes>
              <CheckboxWrapper>
                <CheckboxItem
                  checked={installmentCheckbox}
                  setChecked={() => setInstallmentCheckbox((prev) => !prev)}
                >
                  Рассрочка на 3 месяца от UX Mind School
                </CheckboxItem>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <CheckboxItem
                  checked={graduateCheckbox}
                  setChecked={() => setGraduateCheckbox((prev) => !prev)}
                >
                  Скидка 10% выпускникам UX Mind School
                </CheckboxItem>
              </CheckboxWrapper>
            </Checkboxes>
            <MailNote>
              <img width="24" height="24" src={envelope} alt="envelope" />
              <P>
                После внесения платежа, отправьте копию квитанции на 
                <TextLink link="mailto:hello@ux-school.by">
                  hello@ux-school.by
                </TextLink>
              </P>
            </MailNote>
            <InputWrapper>
              <Input
                placeholder="Имя и фамилия ученика"
                value={name}
                onChange={(evt) => setName(evt.target.value)}
              />
            </InputWrapper>
            <BtnWrapper>
              <PrimaryBtn content="Перейти к оплате" />
            </BtnWrapper>
            <CheckboxWrapper>
              <CheckboxItem
                checked={isUserAgree}
                setChecked={() => setIsUserAgree((prev) => !prev)}
              >
                Я согласен с условиями обработки{" "}
                <a href="/">персональных данных</a>
              </CheckboxItem>
            </CheckboxWrapper>
          </Info>
        </PaymentBlock>
      </Content>
    </PaymentWrapper>
  );
};

const BtnWrapper = styled.div`
  margin-bottom: 15px;
  & button {
    width: 100%;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const MailNote = styled.div`
  ${flex("row", "center")}
  max-width: 350px;
  margin-bottom: 31px;
  & img {
    margin-right: 12px;
  }
  & p {
    ${font(14, 20)};
  }
`;

const Checkboxes = styled.div`
  margin-bottom: 26px;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Toggle = styled.div`
  cursor: pointer;
  text-indent: -9999px;
  width: 34px;
  height: 18px;
  background: var(--gray-300);
  display: block;
  border-radius: 26px;
  position: relative;
  margin-right: 11px;
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    background: var(--white);
    border-radius: 50%;
    transition: 0.3s;
  }
  &:active::after {
    width: 18px;
  }
`;

const SwitchInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
  &:checked + div {
    background: var(--link-500);
  }
  &:checked + div::after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const Promocode = styled.label`
  ${flex("row", "center")}
`;

const Sum = styled(TitleS)`
  margin-bottom: 16px;
`;

const SumTitle = styled(P)`
  margin-bottom: 1px;
  ${font(14, 20)};
  ${stretch(110)};
`;

const Info = styled.div`
  padding: 31px 52px 50px;
`;

const Price = styled.div`
  border-bottom: 1px dashed var(--gray-300);
  padding: 25px 52px 30px;
`;

const PaymentBlock = styled.div`
  margin-top: 32px;
  background: var(--gray-50);
  border-radius: 12px;
  overflow: hidden;
`;

const Drop = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  right: 16px;
  top: 50%;
  transform: ${({ rotated }) =>
    rotated ? "translateY(-50%) rotate(180deg)" : "translateY(-50%);"};
`;

const Select = styled.div`
  position: relative;
  cursor: pointer;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  padding: 12px 16px;
  ${font(21, 32)};
  ${stretch(109)};
  color: var(--black-900);
  & span {
    color: var(--gray-300);
  }
`;

const Content = styled(Container)`
  && {
    max-width: 588px;
  }
`;

const PaymentWrapper = styled.div`
  padding: 98px 0 256px;
  @media screen and (max-width: 991px) {
    padding: 54px 0 248px;
  }
`;

export default connect(Payment);
