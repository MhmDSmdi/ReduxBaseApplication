import React, { Component } from 'react';
import { View, Modal, Text, Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
                    {/* <Button color = "rgba(170, 17, 17, 1)" title = "Delete" onPress = /> */}
                    <TouchableOpacity color = 'rgba(170, 17, 17, 1)' onPress = {props.onItemDeleted}>
                        <Icon size = {30} name = 'md-trash' color = 'white'/>
                    </TouchableOpacity>
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
     btnContainer : {
         marginTop: 20,
         marginHorizontal: 32,
     }
     
});

export default placeDetail;
