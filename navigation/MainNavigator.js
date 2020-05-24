import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Button, Share, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderComponent } from '../components/HeaderComponent/Header.component';
import { HomeNavigator } from './HomeNavigator';
import { FavoritesNavigator } from './FavoritesNavigator';
import { SearchNavigator } from './SearchNavigator';
import { Colors } from '../constants/colors';
import { Styles } from '../constants/styles';

const Tab = createMaterialTopTabNavigator();
export const MainNavigator = () => {

    const changeToggleValue = value => {

        console.log("test");
        setToggleEnabled(value);
        AsyncStorage.setItem('DarkSkinSetting', JSON.stringify(value));

        if (value === true ? setCurrentTheme('dark') : setCurrentTheme('light'));

    }

    const [toggleEnabled, setToggleEnabled] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('light');

    useEffect(() => {
        AsyncStorage.getItem('DarkSkinSetting').then(storedValue => {
            if (storedValue != null) {
                changeToggleValue(JSON.parse(storedValue));
            }
        });

    }, []);


    return (
        <NavigationContainer>
            <HeaderComponent toggleValue={toggleEnabled} toggleOnPress={changeToggleValue} currentTheme={currentTheme} />
            <Tab.Navigator
                initialRouteName='Home'
                tabBarPosition='bottom'
                tabBarOptions={{
                    labelStyle: {
                        fontSize: 10,
                        fontFamily: Styles.defaultFont,
                        alignSelf: 'center',
                    },
                    style: currentTheme === 'light' ? { backgroundColor: Colors.light.background } : { backgroundColor: Colors.dark.background },
                    showIcon: true,
                    showLabel: true,
                    activeTintColor: currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent,
                    inactiveTintColor: currentTheme === 'light' ? Colors.light.secondary : Colors.dark.secondary,
                }}
            >
                <Tab.Screen
                    name='Favorites'
                    component={FavoritesNavigator}
                    options={{
                        tabBarLabel: 'Favorites',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name='bookmark-outline' color={color} size={26} />,
                    }}
                />
                <Tab.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        tabBarLabel: 'home',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name='home-outline' color={color} size={26} />,
                    }}
                    initialParams
                />
                <Tab.Screen
                    name='Search'
                    component={SearchNavigator}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name='magnify' color={color} size={26} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
