import React from "react";
import { Text, Image, View } from "react-native";
import { List, Card } from "react-native-elements";
import KeyboardSpacer from "../../components/KeyboardSpacer";
import { DangerButton, LinkButton } from "../../components/Button";
import { FormInput } from "../../components/Form";

import { EventCard } from "../../components/Events";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import styled from "styled-components/native";
import * as css from "../../style";
// import lcss from "./style";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${css.colors.backgroundDark};
  margin-top: -1;
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

class Events extends React.Component {
  render() {
    const { navigation, signIn } = this.props;

    return <Container>
        <List containerStyle={{marginTop: 0, backgroundColor: "transparent"}}>
          <EventCard />
          <EventCard />
          <EventCard />
        </List>
        <KeyboardSpacer />
      </Container>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Events);
