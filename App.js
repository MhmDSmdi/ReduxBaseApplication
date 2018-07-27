/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends Component {

  state = {
    placeName : '',
    places : []
  }

  placeNameChangeHandler = (val) => {
    this.setState({
      placeName : val
    });
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }

    this.setState(prevState => {
     return{
        places : prevState.places.concat(prevState.placeName)
     };
    });
  };

  render() {
    const placesOutput = this.state.places.map(place => {
      <Text>{place}</Text>
    });
    return (
      <View style={styles.container}>
        <View style = {styles.inputContainer}>
        <TextInput 
          style = {styles.placeInput}
          placeholder = 'Awesome Location'
          value = {this.state.placeName} 
          onChangeText = {this.placeNameChangeHandler}
        />
        <Button 
          style = {styles.placeButton}
          title = 'Add'
          onPress = {this.placeSubmitHandler}
        />
        </View>
        {/* <View style = {{height : 10, width : 10 , backgroundColor: 'red'}}>
          {placesOutput}
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer : {
    //flex : 1,
    width : '100%',
    flexDirection: 'row',
    justifyContent : 'space-between',
    alignItems: 'center',
  },
  placeInput : {
    width : '80%',
    borderColor: 'rgba(85, 7, 190, 1)',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 4,
  },
  placeButton : {
    width : '20%'
  }
});
