import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableNativeFeedback, Switch, AsyncStorage } from 'react-native';
import { Colors } from '../../constants/colors';
import { SelectLanguageStylesDark, SelectLanguageStylesLight } from './SelectLanguageStyles';
import { SettingsContext } from '../../Data/settingsContext';
import Flag from 'react-native-flags';

export default SelectLanguage = props => {

    const { theme, push, country} = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;
    const [lang, setLang] = useState(lang);


    return (
        <View style={currentTheme === 'light' ? SelectLanguageStylesLight.settingRow : SelectLanguageStylesDark.settingRow} >
            <TouchableNativeFeedback onPress={() => {props.setLang(props.id)}}>
                <View style={currentTheme === 'light' ? SelectLanguageStylesLight.wrapper : SelectLanguageStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? SelectLanguageStylesLight.leftContainer : SelectLanguageStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? SelectLanguageStylesLight.titleText : SelectLanguageStylesDark.titleText}>{props.id} - {props.name}</Text>
                    </View>
                    <View style={currentTheme === 'light' ? SelectLanguageStylesLight.rightContainer : SelectLanguageStylesDark.rightContainer}>
                        <Flag code={props.id} size={32} type="flat" />
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>

    );

};