import React from "react";
import { StyleSheet, View } from "react-native";
import { Font } from "expo";

import { Provider } from "react-redux";

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import * as reducers from "./modules";

import { StackNavigator } from "react-navigation";

import Router from "./router";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {
    await Font.loadAsync({
      Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
      "Montserrat-LightItalic": require("./assets/fonts/Montserrat-LightItalic.ttf"),
      "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    const routerComponent = this.state.fontLoaded ? <Router /> : <View />;

    return <Provider store={store}>{routerComponent}</Provider>;
  }
}

export default App;
