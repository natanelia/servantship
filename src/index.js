import React from "react";
import { StyleSheet, View } from "react-native";
import { Font } from "expo";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

// import { Provider } from "react-redux";
// import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";

import { StackNavigator } from "react-navigation";

// import * as reducers from "./modules";
import Router from "./router";

import FontAssets from "./assets/fonts/index";

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
// const store = createStoreWithMiddleware(reducer);

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://192.168.1.108:5000/graphql" }),
  cache: new InMemoryCache()
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {
    await Font.loadAsync(FontAssets);
    this.setState({ fontLoaded: true });
  }
  render() {
    const routerComponent = this.state.fontLoaded ? <Router /> : <View />;

    // return <Provider store={store}>{routerComponent}</Provider>;
    return <ApolloProvider client={client}>{routerComponent}</ApolloProvider>;
  }
}

export default App;
