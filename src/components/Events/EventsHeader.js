import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Header, Icon, SearchBar } from "react-native-elements";
import styled from "styled-components/native";
import * as css from "../../style";

import DrawerButton from "../DrawerButton";

class EventsHeader extends React.Component {
  render() {
    const { navigation, handleShowPhone, handleShowWhatsapp } = this.props;
    const showWhatsapp =
      navigation.state.params && navigation.state.params.showWhatsapp;
    const showPhone =
      navigation.state.params && navigation.state.params.showPhone;

    return (
      <View style={{ height: 60, backgroundColor: "#000" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          {/* <Icon
            name="menu"
            containerStyle={{ flexBasis: 50, flexGrow: 0, flexShrink: 0 }}
            iconStyle={{ color: "#fff" }}
          /> */}
          <SearchBar
            placeholder="Search event..."
            containerStyle={{ flex: 1, height: 60, backgroundColor: "#000" }}
          />
          <Icon
            name="phone"
            component={TouchableOpacity}
            onPress={handleShowPhone}
            containerStyle={{ flexBasis: 50, flexGrow: 0, flexShrink: 0 }}
            iconStyle={{ color: showPhone ? css.colors.backgroundMedium : "#fff" }}
          />
          <Icon
            name="whatsapp"
            type="font-awesome"
            component={TouchableOpacity}
            onPress={handleShowWhatsapp}
            containerStyle={{ flexBasis: 50, flexGrow: 0, flexShrink: 0 }}
            iconStyle={{ color: showWhatsapp ? css.colors.success : "#fff" }}
          />
        </View>
      </View>
    );
  }
}

export default EventsHeader;
