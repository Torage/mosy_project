import React, { useState, useContext } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import { Colors } from '../../constants/colors';
import { SelectCategoryButtonStylesDark, SelectCategoryButtonStylesLight } from '../SelectCategoryButtonComponent/SelectCategoryButtonStyles';
import { SettingsContext } from '../../Data/settingsContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default SelectCategoryButton = props => {

    const { theme, push, country, category } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;
    const [currentCategory, setCurrentCategory] = category

    return (
        <View style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.settingRow : SelectCategoryButtonStylesDark.settingRow} >
            <View style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.modalContainer : SelectCategoryButtonStylesDark.modalContainer} >
            </View>
            <TouchableNativeFeedback onPress={() => props.setCategoryModal(true)}>
                <View style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.wrapper : SelectCategoryButtonStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.leftContainer : SelectCategoryButtonStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.titleText : SelectCategoryButtonStylesDark.titleText}>{props.title}</Text>
                        <Text style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.descriptionText : SelectCategoryButtonStylesDark.descriptionText}>{props.description}</Text>
                    </View>
                    <View style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.rightContainer : SelectCategoryButtonStylesDark.rightContainer}>
                        <Text style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.rightContainerText : SelectCategoryButtonStylesDark.rightContainerText}>{currentCategory}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};