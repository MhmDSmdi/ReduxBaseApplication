/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import PlaceInput from './src/component/placeInput/PlaceInput';
import PlaceList from './src/component/placeList/PlaceList'; 
import PlaceDetail from './src/component/placeDetail/PlaceDetail';
import { connect } from 'react-redux';
import HomeScreen from './src/screen/home/HomeScreen';
import LoginScreen from './src/screen/login/LoginScreen';
import WelcomeScreen from './src/screen/welcome/WelcomeScreen';
import {createStackNavigator} from 'react-navigation';
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/action/places'
import DrawerNavigator from './src/screen/home/DrawerNavigator';
class App extends Component {

  placeAddedHandler = placeName => {
   this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
   this.props.onDeletePlace();
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <PlaceDetail 
      //     selectedPlace = {this.props.selectedPlace} 
      //     onItemDeleted = {this.placeDeletedHandler} 
      //     onModalClosed = {this.modalClosedHandler}/>
      //   <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      //   <PlaceList places={this.props.places} onItemSelected = {this.placeSelectedHandler}/>
      // </View>
        <AppStackNavigator/>
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
 
});

const mapStateToProps = state => {
  return {
    places : state.places.places,
    selectedPlace : state.places.selectedPlace
  };
}; 

const AppStackNavigator = new createStackNavigator({
  WelcomeScreen: {screen : WelcomeScreen},
  LoginScreen : {screen : LoginScreen},
  DrawerNavigator : {screen : DrawerNavigator,
  navigationOptions : {
    header : null
  }}
}, {
  navigationOptions: {
    gesturesEnabled : false
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace : (name) => dispatch(addPlace(name)),
    onDeletePlace : () => dispatch(deletePlace()),
    onSelectPlace : (key) => dispatch(selectPlace(key)),
    onDeselectPlace : () => dispatch(deselectPlace())

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
