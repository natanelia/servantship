import React from "react";
import { Keyboard, View } from "react-native";

class KeyboardSpacer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyboardShown: false };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () =>
      this.setState(() => ({ keyboardShown: true }))
    );
    this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () =>
      this.setState(() => ({ keyboardShown: false }))
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    return this.state.keyboardShown ? (
      <View style={{ height: "40%" }} />
    ) : (
      <View />
    );
  }
}
export default KeyboardSpacer;
