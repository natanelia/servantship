import React from "react";
import { Linking, View, Picker, Text, TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import styled from "styled-components/native";
import call from "react-native-phone-call";

import * as css from "../../style";

const RoleText = styled.Text`
  font-size: 11px;
  color: ${css.colors.warning};
`;

const PersonnelNameText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;

const PersonnelPhoneText = styled.Text`
  font-size: 9px;
  color: ${css.colors.backgroundLight};
`;

const PersonnelWhatsappText = styled.Text`
  font-size: 9px;
  color: ${css.colors.success};
`;

class EventCardPersonnels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleNumberPress = (personnel, showPhone, showWhatsapp) => {
    if (showPhone) {
      call({ number: personnel.phone, prompt: true });
    } else if (showWhatsapp) {
      let phone;
      if (personnel.phone.startsWith('0')) {
        phone = '62' + personnel.phone.substr(1);
      } else {
        phone = personnel.phone;
      }
      Linking.openURL("whatsapp://send?phone=" + phone);
    }
  };

  render() {
    const {
      roleName,
      personnels,
      availablePersonnels,
      showPhone,
      showWhatsapp
    } = this.props;
    const personnel = personnels ? personnels[0] : {};

    const _availablePersonnels = availablePersonnels.map(({ id, name }) => ({
      label: name,
      value: id
    }));

    return (
      <View
        style={{
          flexDirection: "column",
          paddingBottom: 8,
          padding: 2,
          width: 100 / 4 + "%"
        }}
      >
        {!showPhone && !showWhatsapp ? (
          <Dropdown
            data={_availablePersonnels}
            label={roleName}
            value={personnel.id}
            onChangeText={(itemValue, itemLabel) =>
              this.setState({ language: itemValue })
            }
            animationDuration={150}
            baseColor={css.colors.warning}
            textColor="#fff"
            itemColor={css.colors.backgroundSemiLight}
            selectedItemColor="#fff"
            fontSize={12}
            labelFontSize={11}
            labelHeight={12}
            rippleInsets={{ top: 0, bottom: -4 }}
            pickerStyle={{
              backgroundColor: css.colors.backgroundDark,
              elevation: 6,
              height: 162
            }}
          />
        ) : (
          <View>
            <RoleText>{roleName}</RoleText>
            <TouchableOpacity
              onPress={() =>
                this.handleNumberPress(personnel, showPhone, showWhatsapp)
              }
            >
              <PersonnelNameText>{personnel.name}</PersonnelNameText>
              {showPhone && (
                <PersonnelPhoneText>{personnel.phone}</PersonnelPhoneText>
              )}
              {showWhatsapp && (
                <PersonnelWhatsappText>{personnel.phone}</PersonnelWhatsappText>
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default EventCardPersonnels;
