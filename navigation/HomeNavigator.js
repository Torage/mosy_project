import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { SettingsContext } from '../Data/settingsContext';
import { Colors } from '../constants/colors';

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    return (
        <HomeStack.Navigator
            headerMode='none'
            screenOptions={
                currentTheme === 'light'
                    ? { cardStyle: { backgroundColor: Colors.light.background } }
                    : { cardStyle: { backgroundColor: Colors.dark.background } }
            }
        >
            <HomeStack.Screen
                name='Home'
                options={
                    currentTheme === 'light'
                        ? { cardStyle: { backgroundColor: Colors.light.background } }
                        : { cardStyle: { backgroundColor: Colors.dark.background } }
                }
                component={HomeScreen}
            />
        </HomeStack.Navigator>
    );
};
