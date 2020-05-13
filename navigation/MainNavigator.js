import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import SearchNavigator from './SearchNavigator';

const config = {
    headerMode: 'none',
    initialRouteName: 'Screen1',
    tabBarPosition: 'bottom' // <- add this line to your config
}
const Tab = createMaterialTopTabNavigator();
export default MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                barStyle={{ backgroundColor: 'white', borderStyle: 'dotted' }}
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
                tabBarPosition='bottom'
                tabBarOptions={{
                    labelStyle: { fontSize: 12 },
                    style: { backgroundColor: 'white' },
                    showIcon: true,
                    showLabel: false
                }}
            >
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesNavigator}
                    options={{
                        tabBarLabel: 'Favorites',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="bookmark-outline" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Home"
                    component={HomeNavigator}
                    options={{
                        tabBarLabel: 'home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchNavigator}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        )
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}