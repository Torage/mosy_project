import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableNativeFeedback, Switch, AsyncStorage, Modal, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/colors';
import { SelectCountryButtonStylesDark, SelectCountryButtonStylesLight } from '../SelectCountryButtonComponent/SelectCountryButtonStyle';
import { SettingsContext } from '../../Data/settingsContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default SelectCountryButton = props => {

    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;

    const [currentCountry, setCurrentCountry] = useState('');

    const changeLanguage = () =>{
        console.log("Change Language");
    }

    return (
        <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.settingRow : SelectCountryButtonStylesDark.settingRow} >
            <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.modalContainer : SelectCountryButtonStylesDark.modalContainer} >
            </View>
            <TouchableNativeFeedback onPress={() => changeLanguage()}>
                <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.wrapper :SelectCountryButtonStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.leftContainer : SelectCountryButtonStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? SelectCountryButtonStylesLight.titleText : SelectCountryButtonStylesDark.titleText}>{props.title}</Text>
                        <Text style={currentTheme === 'light' ? SelectCountryButtonStylesLight.descriptionText : SelectCountryButtonStylesDark.descriptionText}>{props.description}</Text>
                    </View>
                    <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.rightContainer : SelectCountryButtonStylesDark.rightContainer}>
                        
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>

    );

};