import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderComponent } from '../components/HeaderComponent/Header.component';
import { HomeNavigator } from './HomeNavigator';
import { FavoritesNavigator } from './FavoritesNavigator';
import { SearchNavigator } from './SearchNavigator';
import { Colors } from '../constants/colors';

const Tab = createMaterialTopTabNavigator();
export const MainNavigator = () => {
    return (
        <NavigationContainer>
            <HeaderComponent />
            <Tab.Navigator
                initialRouteName='Home'
                tabBarPosition='bottom'
                tabBarOptions={{
                    labelStyle: { fontSize: 12 },
                    style: { backgroundColor: 'white' },
                    showIcon: true,
                    showLabel: false,
                    activeTintColor: Colors.light.primary,
                    inactiveTintColor: Colors.light.secondary,
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
