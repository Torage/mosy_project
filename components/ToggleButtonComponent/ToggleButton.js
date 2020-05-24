import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableNativeFeedback, Switch, AsyncStorage } from 'react-native';
import { Colors } from '../../constants/colors';
import { ToggleButtonStylesDark, ToggleButtonStylesLight } from '../ToggleButtonComponent/ToggleButtonStyles';
import {SettingsContext} from '../../Data/settingsContext';

export default ToggleButton = props => {

    const [currentTheme, setCurrentTheme] = useContext(SettingsContext);

    return (
        <View style={currentTheme === 'light' ? ToggleButtonStylesLight.settingRow : ToggleButtonStylesDark.settingRow} >
            <TouchableNativeFeedback onPress={() => props.toggleOnPress(!props.toggleValue)}>
                <View style={currentTheme === 'light' ? ToggleButtonStylesLight.wrapper : ToggleButtonStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? ToggleButtonStylesLight.leftContainer : ToggleButtonStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? ToggleButtonStylesLight.titleText : ToggleButtonStylesDark.titleText}>{props.title}</Text>
                        <Text style={currentTheme === 'light' ? ToggleButtonStylesLight.descriptionText : ToggleButtonStylesDark.descriptionText}>{props.description}</Text>
                    </View>
                    <View style={currentTheme === 'light' ? ToggleButtonStylesLight.rightContainer : ToggleButtonStylesDark.rightContainer}>
                        <Switch
                            trackColor={currentTheme === 'light' ? { false: Colors.light.trackColorDisabled, true: Colors.light.primary } : 
                                { false: Colors.dark.trackColorDisabled, true: Colors.dark.accent }}
                            thumbColor={props.toggleValue ? '#ffffff' : '#ffffff'}
                            ios_backgroundColor='#3e3e3e'
                            value={props.toggleValue}
                            onValueChange={() => props.toggleOnPress(!props.toggleValue)}
                        />
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>

    );

};