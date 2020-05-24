import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableNativeFeedback, Switch, AsyncStorage } from 'react-native';
import { Colors } from '../../constants/colors';
import { ToggleButtonStylesDark, ToggleButtonStylesLight } from '../ToggleButtonComponent/ToggleButtonStyles';
import {SettingsContext} from '../../Data/settingsContext';

export default ToggleButton = props => {

    const {theme, push} = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [toggleEnabled, setToggleEnabled] = useState(false);

    const changeToggleValue = value => {

        setToggleEnabled(value);
        AsyncStorage.setItem('DarkSkinSetting', JSON.stringify(value));

        if (value === true ? setCurrentTheme('dark') : setCurrentTheme('light'));

    }

    useEffect(() => {
        AsyncStorage.getItem('DarkSkinSetting').then(storedValue => {
            if (storedValue != null) {
                changeToggleValue(JSON.parse(storedValue));
            }
        });

    }, []);

    //
    return (
        <View style={currentTheme === 'light' ? ToggleButtonStylesLight.settingRow : ToggleButtonStylesDark.settingRow} >
            <TouchableNativeFeedback onPress={() => changeToggleValue(!toggleEnabled)}>
                <View style={currentTheme === 'light' ? ToggleButtonStylesLight.wrapper : ToggleButtonStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? ToggleButtonStylesLight.leftContainer : ToggleButtonStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? ToggleButtonStylesLight.titleText : ToggleButtonStylesDark.titleText}>{props.title}</Text>
                        <Text style={currentTheme === 'light' ? ToggleButtonStylesLight.descriptionText : ToggleButtonStylesDark.descriptionText}>{props.description}</Text>
                    </View>
                    <View style={currentTheme === 'light' ? ToggleButtonStylesLight.rightContainer : ToggleButtonStylesDark.rightContainer}>
                        <Switch
                            trackColor={currentTheme === 'light' ? { false: Colors.light.trackColorDisabled, true: Colors.light.accent } : 
                                { false: Colors.dark.trackColorDisabled, true: Colors.dark.accent }}
                            thumbColor={toggleEnabled ? '#ffffff' : '#ffffff'}
                            ios_backgroundColor='#3e3e3e'
                            value={toggleEnabled}
                            onValueChange={() => changeToggleValue(!toggleEnabled)}
                        />
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>

    );

};