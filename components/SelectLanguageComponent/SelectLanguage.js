import React, { useState, useContext } from 'react';
import { Text, View, TouchableNativeFeedback, TouchableHighlight, Platform } from 'react-native';
import { SelectLanguageStylesDark, SelectLanguageStylesLight } from './SelectLanguageStyles';
import { SettingsContext } from '../../Data/settingsContext';
import Flag from 'react-native-flags';

export default SelectLanguage = (props) => {

    const { theme, push, country} = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;
    const [lang, setLang] = useState(lang);


    return (
        <>
        {Platform.OS === 'android' ?
            <View style={currentTheme === 'light' ? SelectLanguageStylesLight.settingRow : SelectLanguageStylesDark.settingRow} >
                <TouchableNativeFeedback 
                    onPress={() => {
                        props.setLang(props.id)
                        props.setLanguageModalVisible(false)
                    }}
                >
                    <View style={currentTheme === 'light' ? SelectLanguageStylesLight.wrapper : SelectLanguageStylesDark.wrapper}>
                        <View style={currentTheme === 'light' ? SelectLanguageStylesLight.leftContainer : SelectLanguageStylesDark.leftContainer}>
                            <Text style={currentTheme === 'light' ? SelectLanguageStylesLight.titleText : SelectLanguageStylesDark.titleText}>
                                {props.id} - {props.name}
                            </Text>
                        </View>
                        <View style={currentTheme === 'light' ? SelectLanguageStylesLight.rightContainer : SelectLanguageStylesDark.rightContainer}>
                            <Flag code={props.flag} size={32} type="flat" />
                        </View>
                    </View>
                </TouchableNativeFeedback> 
            </View>
            :
            <TouchableHighlight 
                style={currentTheme === 'light' ? SelectLanguageStylesLight.iOSHighlight : SelectLanguageStylesDark.iOSHighlight}
                onPress={() => {
                    props.setLang(props.id)
                    props.setLanguageModalVisible(false)
                }}
                >
                <View style={currentTheme === 'light' ? SelectLanguageStylesLight.wrapper : SelectLanguageStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? SelectLanguageStylesLight.leftContainer : SelectLanguageStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? SelectLanguageStylesLight.titleText : SelectLanguageStylesDark.titleText}>
                            {props.id} - {props.name}
                        </Text>
                    </View>
                    <View style={currentTheme === 'light' ? SelectLanguageStylesLight.rightContainer : SelectLanguageStylesDark.rightContainer}>
                        <Flag code={props.flag} size={32} type="flat" />
                    </View>
                </View>
            </TouchableHighlight>
        }
    </>
    );

};