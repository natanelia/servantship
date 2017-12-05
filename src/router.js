import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { Constants } from "expo";
import { colors } from "./style";

import { StackNavigator, TabNavigator } from "react-navigation";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { signIn, signOut } from "./modules/auth";

import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import Events from "./containers/Events";

import EventsHeader from "./components/Events/EventsHeader";

export const SignedOut = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: "Sign In",
        header: null
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: "Sign Up",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: "#fff"
      }
    }
  },
  {
    headerMode: "screen",
    mode: "modal"
  }
);

export const SignedIn = StackNavigator({
  Events: {
    screen: Events,
    navigationOptions: {
      header: <EventsHeader />,
    }
  }
});

const Router = props => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ backgroundColor: "#000", height: Constants.statusBarHeight }}
      />
      {props.auth.token === null ? <SignedOut /> : <SignedIn />}
    </View>
  );
};

const mapStateToProps = state => ({
  auth: {
    token: state.auth.token
  }
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ signIn, signOut }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Router);
