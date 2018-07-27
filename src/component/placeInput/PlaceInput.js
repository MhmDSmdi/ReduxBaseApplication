import React, { Component } from 'react';
import {  View, Button, StyleSheet, TextInput } from 'react-native';

class PlaceInput extends Component {
  state = {
      placeName : ''
  };

  placeNameChangeHandler = (val) => {
      this.setState({
          placeName : val
      });
  };

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }
  
    this.props.onPlaceAdded(this.state.placeName);
    this.setState({
        placeName : ''
    });

  };

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
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
      width : '20%',
      padding: 8,
    },

  });

export default PlaceInput;
