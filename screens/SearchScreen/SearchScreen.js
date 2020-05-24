import React, {useContext} from 'react';
import { View} from 'react-native';
import { SearchScreenStylesDark, SearchScreenStylesLight } from './SearchScreen.styles';
import {SettingsContext} from '../../Data/settingsContext';

export const SearchScreen = () => {

    const {theme, push} = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;

    return (
        <View style={currentTheme === 'light' ? SearchScreenStylesLight.viewContainer : SearchScreenStylesDark.viewContainer}>
        </View>
    );
};
