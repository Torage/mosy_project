import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableNativeFeedback, Switch, AsyncStorage } from 'react-native';
import { Colors } from '../../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SelectCountryStylesDark, SelectCountryStylesLight } from '../SelectCountryButtonComponent/SelectCountryStyles';
import { SettingsContext } from '../../Data/settingsContext';
import Flag from 'react-native-flags';

export default SelectCountry = props => {

    const { theme, push, country } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;

    const changeCountry = () => {
        setCurrentCountry(props.id);
        AsyncStorage.setItem('CountrySetting', props.id);
        props.setCountryModalVisible(false);
    }

    const selectedCounrty= () =>{
        if (currentCountry === props.id) {
            return <MaterialCommunityIcons 
                name="check"
                size={24} 
                color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent} />;
        }
    };


    return (
        <View style={currentTheme === 'light' ? SelectCountryStylesLight.settingRow : SelectCountryStylesDark.settingRow} >
            <TouchableNativeFeedback onPress={() => changeCountry()}>
                <View style={currentTheme === 'light' ? SelectCountryStylesLight.wrapper : SelectCountryStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? SelectCountryStylesLight.leftContainer : SelectCountryStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? SelectCountryStylesLight.titleText : SelectCountryStylesDark.titleText}>{props.id} - {props.name}</Text>
                    </View>
                    <View style={currentTheme === 'light' ? SelectCountryStylesLight.selectContainer : SelectCountryStylesDark.selectContainer}>{selectedCounrty()}</View>
                    <View style={currentTheme === 'light' ? SelectCountryStylesLight.rightContainer : SelectCountryStylesDark.rightContainer}>
                        <Flag code={props.id} size={32} type="flat" />
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>

    );

};