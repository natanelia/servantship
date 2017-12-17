import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import styled from "styled-components/native";

import { getFormattedDateTimeSpan } from "../../util/date";

import * as css from "../../style";

import EventCardPersonnels from "./EventCardPersonnels";

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
  font-family: Montserrat;
  font-size: 9.5px;
`;

const EventTitleText = styled.Text`
  font-family: Montserrat-SemiBold;
  font-size: 16px;
  color: ${css.colors.info};
`;

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      title,
      timeStarted,
      timeEnded,
      eventType,
      rolePersonnels
    } = this.props.event;
    const { showPhone, showWhatsapp } = this.props;

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
              <EventTypeText>
                {eventType && eventType.name.toUpperCase()}
              </EventTypeText>
              <EventTimeText>
                {timeStarted &&
                  timeEnded &&
                  getFormattedDateTimeSpan(
                    timeStarted,
                    timeEnded
                  ).toUpperCase()}
              </EventTimeText>
            </EventDetailView>
            <View style={{ flex: 50, padding: 8 }}>
              <EventTitleText>{title}</EventTitleText>
            </View>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
            {rolePersonnels.map((role, i) => {
              return (
                <EventCardPersonnels
                  key={i}
                  roleName={role.name}
                  personnels={role.personnels}
                  availablePersonnels={role.availablePersonnels}
                  showPhone={showPhone}
                  showWhatsapp={showWhatsapp}
                />
              );
            })}
          </View>
        </View>
      </Card>
    );
  }
}

export default EventCard;
