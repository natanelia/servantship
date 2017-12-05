import React from "react";
import Button from "./DefaultButton";
import { colors } from "../../style";

const WarningButton = props => (
  <Button
    {...props}
    backgroundColor={colors.warning}
    underlayColor={colors.warningDark}
  />
);
export default WarningButton;
