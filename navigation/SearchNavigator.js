import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../screens/SearchScreen/SearchScreen';
import {SearchFilterScreen} from '../screens/SearchScreen/SearchFilterScreen'
import { SettingsContext } from '../Data/settingsContext';
import { Colors } from '../constants/colors';

const SearchStack = createStackNavigator();

export const SearchNavigator = () => {
    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    return (
        <SearchStack.Navigator
            headerMode='none'
            screenOptions={
                currentTheme === 'light'
                    ? { cardStyle: { backgroundColor: Colors.light.background } }
                    : { cardStyle: { backgroundColor: Colors.dark.background } }
            }
        >
            <SearchStack.Screen
                name='Search'
                options={
                    currentTheme === 'light'
                        ? { cardStyle: { backgroundColor: Colors.light.background } }
                        : { cardStyle: { backgroundColor: Colors.dark.background } }
                }
                component={SearchScreen}
            />
            <SearchStack.Screen
                name='SearchFilter'
                options={
                    currentTheme === 'light'
                        ? { cardStyle: { backgroundColor: Colors.light.background } }
                        : { cardStyle: { backgroundColor: Colors.dark.background } }
                }
                component={SearchFilterScreen}
            />
        </SearchStack.Navigator>
    );
};
