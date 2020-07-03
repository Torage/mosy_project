import React, { useContext } from 'react';
import { Text, View,TouchableNativeFeedback, TouchableHighlight, Platform } from 'react-native';
import { SelectCountryButtonStylesDark, SelectCountryButtonStylesLight } from '../SelectCountryButtonComponent/SelectCountryButtonStyle';
import { SettingsContext } from '../../Data/settingsContext';

import Flag from 'react-native-flags';

export default SelectCountryButton = props => {

    const { theme, push, country} = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;

    return (
        <>
            {Platform.OS === 'android' ? 
                <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.settingRow : SelectCountryButtonStylesDark.settingRow} >
                    <TouchableNativeFeedback 
                        onPress={() => {
                            props.setCountryModal(true)
                            props.setSettingsModalVisible(false)
                        }}
                    >
                        <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.wrapper :SelectCountryButtonStylesDark.wrapper}>
                            <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.leftContainer : SelectCountryButtonStylesDark.leftContainer}>
                                <Text style={currentTheme === 'light' ? SelectCountryButtonStylesLight.titleText : SelectCountryButtonStylesDark.titleText}>{props.title}</Text>
                                <Text style={currentTheme === 'light' ? SelectCountryButtonStylesLight.descriptionText : SelectCountryButtonStylesDark.descriptionText}>
                                    {props.description}
                                </Text>
                            </View>
                            <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.rightContainer : SelectCountryButtonStylesDark.rightContainer}>
                                <Flag code={currentCountry} size={32} type="flat"/>              
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </ View>
            :
                <TouchableHighlight 
                    style={currentTheme === 'light' ? SelectCountryButtonStylesLight.iOSHighlight : SelectCountryButtonStylesDark.iOSHighlight}
                    onPress={() => {
                        props.setCountryModal(true)
                        props.setSettingsModalVisible(false)
                    }}
                >
                    <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.wrapper :SelectCountryButtonStylesDark.wrapper}>
                        <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.leftContainer : SelectCountryButtonStylesDark.leftContainer}>
                            <Text style={currentTheme === 'light' ? SelectCountryButtonStylesLight.titleText : SelectCountryButtonStylesDark.titleText}>{props.title}</Text>
                            <Text style={currentTheme === 'light' ? SelectCountryButtonStylesLight.descriptionText : SelectCountryButtonStylesDark.descriptionText}>
                                {props.description}
                            </Text>
                        </View>
                        <View style={currentTheme === 'light' ? SelectCountryButtonStylesLight.rightContainer : SelectCountryButtonStylesDark.rightContainer}>
                            <Flag code={currentCountry} size={32} type="flat"/>              
                        </View>
                    </View>
                </TouchableHighlight>
            }
        </>
    );
};
