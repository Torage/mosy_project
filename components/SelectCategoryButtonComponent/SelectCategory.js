import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableNativeFeedback, Switch, AsyncStorage } from 'react-native';
import { Colors } from '../../constants/colors';
import { SelectCategoryStylesDark, SelectCategoryStylesLight } from '../SelectCategoryButtonComponent/SelectCategoryStyles';
import { SettingsContext } from '../../Data/settingsContext';
import Flag from 'react-native-flags';

export default SelectCategory = props => {

    const { theme, push, country, category } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;
    const [currentCategoryuntry, setCurrentCategory] = category;

    const changeCategory = () => {
        setCurrentCategory(props.name);
        AsyncStorage.setItem('CategorySetting', props.name);
        props.setCategoryModalVisible(false);
    }


    return (
        <View style={currentTheme === 'light' ? SelectCategoryStylesLight.settingRow : SelectCategoryStylesDark.settingRow} >
            <TouchableNativeFeedback onPress={() => changeCategory()}>
                <View style={currentTheme === 'light' ? SelectCategoryStylesLight.wrapper : SelectCategoryStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? SelectCategoryStylesLight.leftContainer : SelectCategoryStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? SelectCategoryStylesLight.titleText : SelectCategoryStylesDark.titleText}>{props.id} - {props.name}</Text>
                    </View>
                    <View style={currentTheme === 'light' ? SelectCategoryStylesLight.rightContainer : SelectCategoryStylesDark.rightContainer}>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>

    );

};