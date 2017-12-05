import React from "react";
import { Button } from "react-native-elements";
import { colors } from "../../style";

const DefaultButton = props => (
  <Button
    {...props}
    buttonStyle={{
      elevation: 3,
      ...props.buttonStyle
    }}
    textStyle={{
      fontSize: 15,
      ...props.textStyle
    }}
    backgroundColor={
      props.backgroundColor ? props.backgroundColor : colors.default
    }
    underlayColor={
      props.underlayColor ? props.underlayColor : colors.defaultDark
    }
  />
);
export default DefaultButton;
