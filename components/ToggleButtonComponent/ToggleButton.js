import React, { useState, useEffect } from 'react';
import { Text, View, TouchableNativeFeedback, Switch, AsyncStorage } from 'react-native';
import { Colors } from '../../constants/colors';
import { ToggleButtonStylesDark, ToggleButtonStylesLight } from '../ToggleButtonComponent/ToggleButtonStyles';

export default ToggleButton = props => {

    return (
        <View style={props.currentTheme === 'light' ? ToggleButtonStylesLight.settingRow : ToggleButtonStylesDark.settingRow} >
            <TouchableNativeFeedback onPress={() => props.toggleOnPress(!props.toggleValue)}>
                <View style={props.currentTheme === 'light' ? ToggleButtonStylesLight.wrapper : ToggleButtonStylesDark.wrapper}>
                    <View style={props.currentTheme === 'light' ? ToggleButtonStylesLight.leftContainer : ToggleButtonStylesDark.leftContainer}>
                        <Text style={props.currentTheme === 'light' ? ToggleButtonStylesLight.titleText : ToggleButtonStylesDark.titleText}>{props.title}</Text>
                        <Text style={props.currentTheme === 'light' ? ToggleButtonStylesLight.descriptionText : ToggleButtonStylesDark.descriptionText}>{props.description}</Text>
                    </View>
                    <View style={props.currentTheme === 'light' ? ToggleButtonStylesLight.rightContainer : ToggleButtonStylesDark.rightContainer}>
                        <Switch
                            trackColor={props.currentTheme === 'light' ? { false: Colors.light.trackColorDisabled, true: Colors.light.primary } : 
                                { false: Colors.dark.trackColorDisabled, true: Colors.dark.primary }}
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