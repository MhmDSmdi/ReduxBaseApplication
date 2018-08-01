import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    header : null
  }

  render() {
    return (
      <View>
        <Text> HOME SCREEN </Text>
      </View>
    );
  }
}

export default HomeScreen;
