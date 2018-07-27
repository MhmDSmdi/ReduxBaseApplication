import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ListItem from '../listItem/ListItem';

const placeList = (props) => {

    const placesOutput = props.places.map((place, index) => (
        <ListItem 
            key={index} 
            placeName={place}
            onItemPressed = {() => {
               
            }}/>

      ));
    return (
        <View style={styles.listContainer}>{placesOutput}</View>
    );
}   


const styles = StyleSheet.create({
    listContainer : {
        width : '100%',
        marginTop: 12,
    }
});

export default placeList;
