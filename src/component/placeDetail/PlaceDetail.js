import React, { Component } from 'react';
import { View, Modal, Text, Button, Image, StyleSheet} from 'react-native';
 
const placeDetail = props => {
    let modalContent = null;

    if(props.selectedPlace) {
        modalContent = (
            <View style = {styles.modalContainer}> 
                <Image style = {styles.imageHolder} source = {props.selectedPlace.image}/>
                <Text style = {styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        )
    }
    return (
        <Modal onRequestClose = {props.onModalClosed} visible = {props.selectedPlace !== null} animationType = "slide">
            <View style = {{flex : 1}}>
                {modalContent}
                <View style = {styles.btnContainer}>
                    <Button style = {styles.btn} title = "Delete" onPress = {props.onItemDeleted}/>
                    <Button style = {styles.btn} title = "Close" onPress = {props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
     modalContainer : {
         margin: 22,
         alignItems: 'center',
     },
     imageHolder : {
         width : '100%',
         height : 300,
         borderRadius: 150,
     },
     placeName : {
         fontWeight: 'bold',
         fontSize: 18,
         textAlign : 'center'
     }, 
     btn : {
         marginVertical: 8,
         marginHorizontal: 32,
         padding: 20,
     },
     btnContainer : {
         justifyContent: 'space-between',
         backgroundColor: 'red',
     }
});

export default placeDetail;
