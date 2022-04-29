import React from "react";
import {
  SpinnerContainer,
  SpinnerOverlayContainer,
} from "./spinner.styles";

const Spinner = () => (
  <SpinnerOverlayContainer>
    <SpinnerContainer />
  </SpinnerOverlayContainer>
);

export default Spinner;
