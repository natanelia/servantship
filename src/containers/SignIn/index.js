import React from "react";
import { Keyboard, Text, Image, View } from "react-native";
import { Card } from "react-native-elements";
import KeyboardSpacer from "../../components/KeyboardSpacer";
import { DangerButton, LinkButton } from "../../components/Button";
import { FormInput } from "../../components/Form";

import { signIn } from "../../modules/auth";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import styled from "styled-components/native";
import * as css from "../../style";
import lcss from "./style";

class SignIn extends React.Component {
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
    const { navigation, signIn, token } = this.props;
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
          </View>
          <View style={{ marginTop: 20 }}>
            <DangerButton
              title="Sign In"
              onPress={() => signIn("a", "b")}
              {...lcss.signInButton}
            />
            <LinkButton
              title="Don't have an account? Sign Up"
              onPress={() => navigation.navigate("SignUp")}
              {...lcss.signUpButton}
            />
          </View>
        </FormContainer>
        <KeyboardSpacer />
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ signIn }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

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
