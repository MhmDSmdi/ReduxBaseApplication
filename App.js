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
// import placeImage from './src/assets/images.png'
import PlaceDetail from './src/component/placeDetail/PlaceDetail'

export default class App extends Component {

  state = {
    places : [],
    selectedPlace : null
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name : placeName,
          image : {
            uri : "https://i.pinimg.com/736x/8b/b4/1c/8bb41cd3738254e52808707eb737c43f.jpg"
          }
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places : prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace : null
      };
    });
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace : prevState.places.find(place => {
          return place.key === key;
        })
      }
    })
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace : null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace = {this.state.selectedPlace} onItemDeleted = {this.placeDeletedHandler} onModalClosed = {this.modalClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemSelected = {this.placeSelectedHandler}/>
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
 
});
