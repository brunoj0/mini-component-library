import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <OriginalSelect value={value} onChange={onChange}>
        {children}
      </OriginalSelect>
      <CustomSelect>
        <SelectValue>{displayedValue}</SelectValue>
        <Icon id="chevron-down"></Icon>
      </CustomSelect>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 43px;
  width: max-content;
`;
const SelectValue = styled.span`
  display: flex;
  padding-right: 16px;
`;

const OriginalSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
const CustomSelect = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  padding: 12px 16px;
  ${OriginalSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto ${COLORS.primary};
  }

  ${OriginalSelect}:hover + & {
    color: ${COLORS.black};
  }
`;
export default Select;
