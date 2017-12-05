import React from "react";
import { FormInput as Input } from "react-native-elements";

const FormInput = props => (
  <Input
    {...props}
    containerStyle={{
      backgroundColor: "#fff",
      ...props.containerStyle
    }}
    inputStyle={{
      paddingBottom: 18,
      paddingTop: 10,
      paddingHorizontal: 10,
      marginBottom: -10,
      fontSize: 16,
      ...props.inputStyle
    }}
  />
);

export default FormInput;
