import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableNativeFeedback, Switch, AsyncStorage, Modal, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/colors';
import { SelectCountryButtonStylesDark, SelectCountryButtonStylesLight } from '../SelectCountryButtonComponent/SelectCountryButtonStyle';
import { SettingsContext } from '../../Data/settingsContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Flag from 'react-native-flags';

export default SelectCountryButton = props => {

    const { theme, push, country} = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;

    return (
        <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.settingRow : SelectCountryButtonStylesDark.settingRow} >
            <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.modalContainer : SelectCountryButtonStylesDark.modalContainer} >
            </View>
            <TouchableNativeFeedback onPress={() => props.setCountryModal(true)}>
                <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.wrapper :SelectCountryButtonStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.leftContainer : SelectCountryButtonStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? SelectCountryButtonStylesLight.titleText : SelectCountryButtonStylesDark.titleText}>{props.title}</Text>
                        <Text style={currentTheme === 'light' ? SelectCountryButtonStylesLight.descriptionText : SelectCountryButtonStylesDark.descriptionText}>{props.description}</Text>
                    </View>
                    <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.rightContainer : SelectCountryButtonStylesDark.rightContainer}>
                        <Flag code={currentCountry} size={32} type="flat"/>              
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>

    );

};