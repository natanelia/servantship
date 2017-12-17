import React from "react";
import PropTypes from "prop-types";
import { FlatList, Text, View } from "react-native";
import KeyboardSpacer from "../../components/KeyboardSpacer";
import { FormInput } from "../../components/Form";
import { EventCard } from "../../components/Events";

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

const StatusContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  font-size: 20;
  color: ${css.colors.backgroundSemiDark};
`;

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleShowPhone: this._handleShowPhone,
      handleShowWhatsapp: this._handleShowWhatsapp
    });
  }

  _handleShowPhone = () => {
    const { navigation } = this.props;
    navigation.setParams({
      showPhone: !navigation.state.params.showPhone,
      showWhatsapp: false,
    });
  };

  _handleShowWhatsapp = () => {
    const { navigation } = this.props;
    navigation.setParams({
      showWhatsapp: !navigation.state.params.showWhatsapp,
      showPhone: false,
    });
  };

  renderEventList = (events, loading, refetch) => {
    if (loading) {
      return (
        <StatusContainer>
          <StatusText>Loading...</StatusText>
        </StatusContainer>
      );
    }

    if (events) {
      const { params } = this.props.navigation.state;
      return (
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <EventCard
              event={item}
              showPhone={params && params.showPhone}
              showWhatsapp={params && params.showWhatsapp}
            />
          )}
          keyExtractor={(item, index) => index}
          onRefresh={() => refetch()}
          refreshing={loading}
        />
      );
    } else {
      return (
        <StatusContainer>
          <StatusText>No Events</StatusText>
        </StatusContainer>
      );
    }
  };

  render() {
    const { navigation, loading, events, refetch } = this.props;
    const { renderEventList } = this;
    return (
      <Container>
        {renderEventList(events, loading, refetch)}
        <KeyboardSpacer />
      </Container>
    );
  }
}

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      eventType: PropTypes.shape({
        name: PropTypes.string,
        timeStarted: PropTypes.string,
        timeEnded: PropTypes.string
      }),
      rolePersonnels: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          availablePersonnels: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.int
            })
          ),
          personnels: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.int
            })
          )
        })
      )
    })
  )
};

export default Events;
