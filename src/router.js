import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";
import { Constants } from "expo";
import { colors } from "./style";

import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";

import * as css from "./style";

// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";

// import { signIn, signOut } from "./modules/auth";

import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import Events from "./containers/Events";
import Personnels from "./containers/Personnels";

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

export const EventNavigator = StackNavigator({
  Events: {
    screen: Events,
    navigationOptions: ({ navigation }) => {
      const { params = {} } = navigation.state;
      return {
        header: (
          <EventsHeader
            navigation={navigation}
            handleShowPhone={
              params.handleShowPhone ? params.handleShowPhone : () => null
            }
            handleShowWhatsapp={
              params.handleShowWhatsapp ? params.handleShowWhatsapp : () => null
            }
          />
        )
      };
    }
  }
});

export const SignedIn = TabNavigator(
  {
    Events: {
      screen: EventNavigator,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Events",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="event-note" iconStyle={{ color: tintColor }} />
          )
        };
      }
    },
    Personnels: {
      screen: Personnels,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Personnels",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="people" iconStyle={{ color: tintColor }} />
          )
        };
      }
    },
    Roles: {
      screen: Personnels,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Roles",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="library-books" iconStyle={{ color: tintColor }} />
          )
        };
      }
    },
    EventTypes: {
      screen: Personnels,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Event Types",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="dns" iconStyle={{ color: tintColor }} />
          )
        };
      }
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      backBehavior: "none",
      activeTintColor: css.colors.infoDark,
      inactiveTintColor: css.colors.backgroundSemiDark,
      indicatorStyle: { backgroundColor: css.colors.infoDark },
      style: { backgroundColor: css.colors.backgroundSuperDark },
      showLabel: false,
      showIcon: true
    }
  }
);

// const Router = props => {
//   return (
//     <View style={{ flex: 1 }}>
//       <View
//         style={{ backgroundColor: "#000", height: Constants.statusBarHeight }}
//       />
//       {props.auth.token === null ? <SignedOut /> : <SignedIn />}
//     </View>
//   );
// };

const Router = props => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ backgroundColor: "#000", height: Constants.statusBarHeight }}
      />
      <SignedIn />
    </View>
  );
};

// const mapStateToProps = state => ({
//   auth: {
//     token: state.auth.token
//   }
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ signIn, signOut }, dispatch);
// export default connect(mapStateToProps, mapDispatchToProps)(Router);

export default Router;
