import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen'

const AppDrawerNavigator = new DrawerNavigator ({
    HomeScreen : {screen : HomeScreen}
}) 
export default AppDrawerNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});