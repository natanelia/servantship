import React from "react";
import { View } from "react-native";
import { Header, Icon, SearchBar } from "react-native-elements";
import styled from "styled-components/native";

import DrawerButton from "../DrawerButton";

class EventsHeader extends React.Component {
  render() {
    return (
      <View style={{ height: 60, backgroundColor: "#000" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Icon
            name="menu"
            containerStyle={{ flexBasis: 50, flexGrow: 0, flexShrink: 0 }}
            iconStyle={{color: "#fff"}}
          />
          <SearchBar
            containerStyle={{ flex: 1, height: 60, backgroundColor: "#000" }}
          />
          <Icon
            name="phone"
            containerStyle={{ flexBasis: 50, flexGrow: 0, flexShrink: 0 }}
            iconStyle={{color: "#fff"}}
          />
          <Icon
            name="mode-edit"
            containerStyle={{ flexBasis: 50, flexGrow: 0, flexShrink: 0 }}
            iconStyle={{color: "#fff"}}
          />
        </View>
      </View>
    );
  }
}

export default EventsHeader;
