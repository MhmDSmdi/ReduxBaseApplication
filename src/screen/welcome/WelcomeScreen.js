import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class WelcomeScreeen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Button title = "Login Screen" onPress = {() => this.props.navigation.navigate
        ('LoginScreen')}/>
        <Button title = "Home Screen" onPress = {() => this.props.navigation.navigate
        ('HomeScreen')}/>
      </View>
    );
  }
}

export default WelcomeScreeen;
