import React from "react";
import Button from "./DefaultButton";
import { colors } from "../../style";

const SuccessButton = props => (
  <Button
    {...props}
    backgroundColor={colors.success}
    underlayColor={colors.successDark}
  />
);
export default SuccessButton;
