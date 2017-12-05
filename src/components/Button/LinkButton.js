import React from "react";
import Button from "./DefaultButton";
import { colors } from "../../style";

const LinkButton = props => (
  <Button
    {...props}
    textStyle={{ color: "#000", fontWeight: "normal", ...props.textStyle }}
    backgroundColor="transparent"
    underlayColor="transparent"
  />
);
export default LinkButton;
