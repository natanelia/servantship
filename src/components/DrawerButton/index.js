import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import styled from "styled-components/native";

class DrawerButton extends React.Component {
  render() {
    return (
        <Button
          icon={{ name: "menu" }}
          large
          buttonStyle={{ backgroundColor: "#222" }}
          containerViewStyle={{ marginRight: -10, marginLeft: -3 }}
        />
    );
  }
}

export default DrawerButton;
