import React from "react";
import PropTypes from "prop-types";
import { FlatList, Text, View } from "react-native";
import KeyboardSpacer from "../../components/KeyboardSpacer";
import { FormInput } from "../../components/Form";

import styled from "styled-components/native";
import * as css from "../../style";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${css.colors.backgroundDark};
  margin-top: -1;
`;

class Personnels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Text>Yordle</Text>
        <KeyboardSpacer />
      </Container>
    );
  }
}

export default Personnels;
