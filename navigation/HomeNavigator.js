import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const HomeStack = createStackNavigator();

export default HomeNavigator = () => {
    return (
        <HomeStack.Navigator
            headerMode='none'
        >
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    );
}