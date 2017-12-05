import React from "react";
import { Keyboard, Text, Image, View } from "react-native";
import { Card } from "react-native-elements";
import { PrimaryButton, LinkButton } from "../../components/Button";
import KeyboardSpacer from "../../components/KeyboardSpacer";
import { FormInput } from "../../components/Form";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import styled from "styled-components/native";
import * as css from "../../style";
import lcss from "./style";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyboardShown: false };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () =>
      this.setState({ keyboardShown: true })
    );
    this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () =>
      this.setState({ keyboardShown: false })
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    const { navigation } = this.props;
    const { keyboardShown } = this.state;

    return (
      <Container>
        <Image
          style={css.global.backgroundImage}
          source={require("../../assets/images/sign-bg.png")}
        />
        <FormContainer isAvoidingKeyboard={keyboardShown}>
          <View style={{ padding: 15 }}>
            <Title isAvoidingKeyboard={keyboardShown}>
              Church Service Manager
            </Title>
            {!this.state.keyboardShown && (
              <Subtitle>
                Easily manage church service schedule like a pro!
              </Subtitle>
            )}
          </View>
          <View>
            <FormInput placeholder="Email" />
            <FormInput
              secureTextEntry
              placeholder="Password"
              containerStyle={{ marginTop: 2 }}
            />
            <FormInput
              placeholder="Phone Number"
              containerStyle={{ marginTop: 2 }}
            />
          </View>
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <PrimaryButton
              title="Sign Up"
              {...lcss.SignUpButton}
            />
          </View>
        </FormContainer>
        <KeyboardSpacer />
      </Container>
    );
  }
}

// const mapStateToProps = state => ({
//   count: state.counter.count,
//   isIncrementing: state.counter.isIncrementing,
//   isDecrementing: state.counter.isDecrementing
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {

//     },
//     dispatch
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default SignUp;

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-end;
`;

const FormContainer = styled.View`
  flex: 1;
  align-self: center;
  justify-content: flex-end;
  padding: 10px;
  width: 90%;
`;

const Title = styled.Text`
  font-family: Montserrat-Light;
  color: #fff;
  font-size: ${props => (props.isAvoidingKeyboard ? "24px" : "40px")};
`;

const Subtitle = styled.Text`
  font-family: Montserrat-LightItalic;
  font-size: 14px;
  color: #fff;

  padding-right: 50px;
`;
