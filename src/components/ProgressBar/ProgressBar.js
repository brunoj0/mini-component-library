/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": 8 + "px",
    "--padding": "0",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": 12 + "px",
    "--padding": "0",
  },
  large: {
    "--borderRadius": 8 + "px",
    "--height": 16 + "px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  if (value > 100) {
    value = 100;
  }
  const styles = SIZES[size];
  const ProgressBarContainer = styled.div`
    display: flex;
    align-items: center;
    width: 487px;
    justify-content: space-between;
    font-weight: bold;
    overflow: hidden;
  `;

  const ProgressContainer = styled.div`
    width: 370px;
    height: var(--height);
    box-shadow: inset 0px 2px 4px 0 ${COLORS.transparentGray35};
    background-color: ${COLORS.transparentGray15};
    padding: var(--padding);
    border-radius: var(--borderRadius);
    overflow: hidden;
  `;

  const ProgressBarValue = styled.div`
    width: ${value + `%`};
    height: 100%;
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
  `;
  const BarContainer = styled.div`
    border-radius: 4px;
    height: 100%;
    overflow: hidden;
  `;
  return (
    <ProgressBarContainer
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
    >
      <span>{value}%</span>
      <ProgressContainer style={styles}>
        <BarContainer>
          <ProgressBarValue value={value}></ProgressBarValue>
        </BarContainer>
      </ProgressContainer>
    </ProgressBarContainer>
  );
};
export default ProgressBar;
