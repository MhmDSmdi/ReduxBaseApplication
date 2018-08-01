import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {TabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ScreenOne from './TabNavigator/ScreenOne';
import ScreenTwo from './TabNavigator/ScreenTwo';

export default class AppTabNavigator extends Component {

    static navigationOptions = ({navigation}) => {
        return{
            headerLeft : (
                <View style = {{padding : 10}}>
                    <Ionicons name = "md-menu" size = {30} onPress = {() => navigation.openDrawer()}/>
                </View>
            )
        }
    }

    render() {
        return (
            <HomeScreenTabNavigator/>
        )
    }
}

const HomeScreenTabNavigator = new TabNavigator({
    ScreenOne : {
        screen : ScreenOne,
        navigationOptions : {
            tabBarLabel : 'Feed', 
            tabBarIcon : () => (
                <Ionicons name= "md-cmpass" size = {24}/>
            )
        }
    },
    ScreenTwo : {
        screen : ScreenTwo,
        navigationOptions : {
            tabBarLabel : 'Feed', 
            tabBarIcon : () => (
                <Ionicons name= "md-cmpass" size = {24}/>
            )
        }
    },
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});