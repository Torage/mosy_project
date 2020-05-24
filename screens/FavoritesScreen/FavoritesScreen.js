import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { FavoriteScreenStylesDark, FavoriteScreenStylesLight } from './FavoritesScreen.styles';
import {SettingsContext} from '../../Data/settingsContext';

export const FavoritesScreen = () => {

    const [currentTheme, setCurrentTheme] = useContext(SettingsContext);

    return (
        <View style={currentTheme === 'light' ? FavoriteScreenStylesLight.viewContainer : FavoriteScreenStylesDark.viewContainer}>
        </View>
    );
};
