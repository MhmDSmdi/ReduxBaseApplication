import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class WelcomeScreeen extends Component {
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
        <Button title = "Login Screen" onPress = {() => this.props.navigation.navigate
        ('LoginScreen')}/>
      </View>
    );
  }
}

export default WelcomeScreeen;
