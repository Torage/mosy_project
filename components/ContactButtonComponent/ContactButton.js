import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableNativeFeedback, Switch, AsyncStorage, Modal, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/colors';
import { ContactButtonStylesDark, ContactButtonStylesLight } from '../ContactButtonComponent/ContactButtonStyles';
import { SettingsContext } from '../../Data/settingsContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default ContactButton = props => {

    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;

    return (
        <View style={currentTheme === 'light' ? ContactButtonStylesLight.settingRow : ContactButtonStylesDark.settingRow} >
            <View style={currentTheme === 'light' ? ContactButtonStylesLight.modalContainer : ContactButtonStylesDark.modalContainer} >
            </View>
            <TouchableNativeFeedback onPress={() => props.setContactModal(true)}>
                <View style={currentTheme === 'light' ? ContactButtonStylesLight.wrapper : ContactButtonStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? ContactButtonStylesLight.leftContainer : ContactButtonStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? ContactButtonStylesLight.titleText : ContactButtonStylesDark.titleText}>{props.title}</Text>
                        <Text style={currentTheme === 'light' ? ContactButtonStylesLight.descriptionText : ContactButtonStylesDark.descriptionText}>{props.description}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>

    );

};