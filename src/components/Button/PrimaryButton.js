import React from "react";
import Button from "./DefaultButton";
import { colors } from "../../style";

const PrimaryButton = props => (
  <Button
    {...props}
    backgroundColor={colors.primary}
    underlayColor={colors.primaryDark}
  />
);
export default PrimaryButton;