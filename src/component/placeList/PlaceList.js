import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ListItem from '../listItem/ListItem';

const placeList = (props) => {
    return (
        <FlatList 
            style={styles.listContainer}
            data = {props.places} 
            renderItem = {(info) => (
                <ListItem 
                    placeName = {info.item.name}
                    placeImage = {info.item.image}
                    onItemPressed = {() => props.onItemSelected(info.item.key)}/>
            )}
        />
    );
}   


const styles = StyleSheet.create({
    listContainer : {
        width : '100%',
        marginTop: 12,
    }
});

export default placeList;
