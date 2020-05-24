import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { SearchScreenStylesDark, SearchScreenStylesLight } from './SearchScreen.styles';
import {SettingsContext} from '../../Data/settingsContext';

export const SearchScreen = () => {

    const [currentTheme, setCurrentTheme] = useContext(SettingsContext);

    return (
        <View style={currentTheme === 'light' ? SearchScreenStylesLight.viewContainer : SearchScreenStylesDark.viewContainer}>
        </View>
    );
};
