import React from "react";
import P from "./Paragraph";
import { styled } from "frontity";

const CheckboxItem = ({ checked, setChecked, children }) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput checked={checked} onChange={setChecked} />
      <Checkbox checked={checked}>
        {checked && (
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 5L5 8L11 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Checkbox>
      <P>{children}</P>
    </CheckboxWrapper>
  );
};

const CheckboxInput = styled.input`
  display: none;
`;

const Checkbox = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  border: 2px solid var(--gray-300);
  border-radius: 4px;
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.35);
  background: var(--white);
  display: grid;
  place-items: center;
  ${({ checked }) =>
    checked && `background: var(--gradient-primary-btn); border: none;`};
`;

const CheckboxWrapper = styled.label`
  padding-left: 32px;
  position: relative;
`;

export default CheckboxItem;
