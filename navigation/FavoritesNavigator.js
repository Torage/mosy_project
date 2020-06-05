import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoritesScreen } from '../screens/FavoritesScreen/FavoritesScreen';
import { SettingsContext } from '../Data/settingsContext';
import { Colors } from '../constants/colors';

const FavoritesStack = createStackNavigator();

export const FavoritesNavigator = () => {
    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    return (
        <FavoritesStack.Navigator
            headerMode='none'
            screenOptions={
                currentTheme === 'light'
                    ? { cardStyle: { backgroundColor: Colors.light.background } }
                    : { cardStyle: { backgroundColor: Colors.dark.background } }
            }
        >
            <FavoritesStack.Screen
                name='Favorites'
                options={
                    currentTheme === 'light'
                        ? { cardStyle: { backgroundColor: Colors.light.background } }
                        : { cardStyle: { backgroundColor: Colors.dark.background } }
                }
                component={FavoritesScreen}
            />
        </FavoritesStack.Navigator>
    );
};
