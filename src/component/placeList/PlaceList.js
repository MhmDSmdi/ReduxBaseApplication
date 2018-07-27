import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ListItem from '../listItem/ListItem';

const placeList = (props) => {

    const placesOutput = props.places.map((place, index) => (
        <ListItem 
            key={index} 
            placeName={place}
            onItemPressed = {() => props.onItemDeleted(index)}/>

      ));
    return (
        <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>
    );
}   


const styles = StyleSheet.create({
    listContainer : {
        width : '100%',
        marginTop: 12,
    }
});

export default placeList;
