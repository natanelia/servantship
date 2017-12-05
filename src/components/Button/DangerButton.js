import React from "react";
import Button from "./DefaultButton";
import { colors } from "../../style";

const DangerButton = props => (
  <Button
    {...props}
    backgroundColor={colors.danger}
    underlayColor={colors.dangerDark}
  />
);
export default DangerButton;
