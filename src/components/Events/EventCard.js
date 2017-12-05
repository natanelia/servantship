import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import styled from "styled-components/native";

import * as css from "../../style";

const EventDetailView = styled.View`
  flex: 11;
  background-color: ${css.colors.info};
  padding: 8px;
`;

const EventTypeText = styled.Text`
  font-family: Montserrat-SemiBold;
  font-size: 9.5px;
`;

const EventTimeText = styled.Text`
  font-family: Montserrat-Light;
  font-size: 9.5px;
`;

const EventTitleText = styled.Text`
  font-family: Montserrat;
  font-size: 16px;
  color: ${css.colors.info};
`;

const RoleText = styled.Text`
  font-size: 10px;
  color: #fff;
`;

const PersonnelText = styled.Text`
  font-size: 10px;
  color: #fff;
  font-weight: bold;
`;

class EventCard extends React.Component {
  render() {
    const { title, type, time, personnels } = eventData;
    return (
      <Card
        containerStyle={{
          marginVertical: 5,
          marginHorizontal: 0,
          backgroundColor: css.colors.backgroundSemiDark,
          borderWidth: 0,
          elevation: 2,
          paddingVertical: 5,
          paddingHorizontal: 0
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <EventDetailView>
              <EventTypeText>{type.toUpperCase()}</EventTypeText>
              <EventTimeText>{time.toUpperCase()}</EventTimeText>
            </EventDetailView>
            <View style={{ flex: 50, padding: 8 }}>
              <EventTitleText>{title}</EventTitleText>
            </View>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
            {eventData.personnels.map(role => {
              return (
                <EventPersonnels
                  role={role.roleName}
                  name={role.personnel.name}
                  phone={role.personnel.phone}
                />
              );
            })}
          </View>
        </View>
      </Card>
    );
  }
}

class EventPersonnels extends React.Component {
  render() {
    const { role, name, phone } = this.props;
    return (
      <View
        style={{
          flexDirection: "column",
          paddingBottom: 8,
          padding: 2,
          width: "16.66%"
        }}
      >
        <RoleText>{role}</RoleText>
        <PersonnelText>{name}</PersonnelText>
      </View>
    );
  }
}

export default EventCard;

const eventData = {
  title: "Penasihat yang Ajaib, Allah yang Perkasa",
  type: "Kebaktian",
  time: "3 Des 2017 09:00-11:00",
  personnels: [
    {
      roleName: "Liturgos",
      personnel: {
        name: "Endy",
        phone: "081ENDY12345"
      }
    },
    {
      roleName: "Singer 1",
      personnel: {
        name: "Joseph",
        phone: "081JOSE12345"
      }
    },
    {
      roleName: "Singer 2",
      personnel: {
        name: "Valerina",
        phone: "081VALE12345"
      }
    },
    {
      roleName: "Piano",
      personnel: {
        name: "Gian",
        phone: "081212060212"
      }
    },
    {
      roleName: "Keyboard",
      personnel: {
        name: "Felicia",
        phone: "081212060212"
      }
    },
    {
      roleName: "Gitar",
      personnel: {
        name: "Victor",
        phone: "081212060212"
      }
    },
    {
      roleName: "Bass",
      personnel: {
        name: "Agung",
        phone: "081212060212"
      }
    },
    {
      roleName: "Drum",
      personnel: {
        name: "Cindy",
        phone: "081212060212"
      }
    },
    {
      roleName: "Mulmed",
      personnel: {
        name: "Lusiana",
        phone: "081212060212"
      }
    },
    {
      roleName: "PJ/Sound",
      personnel: {
        name: "Raymond",
        phone: "081212060212"
      }
    },
    {
      roleName: "Kopen 1",
      personnel: {
        name: "Aan",
        phone: "081212060212"
      }
    },
    {
      roleName: "Kopen 2",
      personnel: {
        name: "Ching Yin",
        phone: "081212060212"
      }
    }
  ]
};