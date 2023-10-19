import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <IconWrapper style={{ "--size": size === "large" ? "24px" : "16px" }}>
        <Icon id={icon} size={size === "large" ? "24px" : "16px"}></Icon>
      </IconWrapper>
      <NativeInput
        style={{
          "--width": width + "px",
          "--height": size === "large" ? "36px" : "24px",
          "--font-size": size === "large" ? "16px" : "14px",
          "--padding": size === "large" ? "36px" : "24px",

        }}
        placeholder={placeholder}
      ></NativeInput>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  font-weight: bold;
  color: ${COLORS.gray700};
  border: 0;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: var(--padding);
  &:focus,
  &:focus-visible {
    border: 0;
    outline: 0;
    border-bottom: 1px solid ${COLORS.black};
    outline-offset: 4px;
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  &:hover {
    color: ${COLORS.black};
  }
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 6px;
  left: 0px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;
export default IconInput;
