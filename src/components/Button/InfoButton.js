import React from "react";
import Button from "./DefaultButton";
import { colors } from "../../style";

const InfoButton = props => (
  <Button
    backgroundColor={colors.info}
    underlayColor={colors.infoDark}
    {...props}
  />
);
export default InfoButton;
