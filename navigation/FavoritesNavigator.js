import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import FavoritesScreen from '../screens/FavoritesScreen';

const FavoritesStack = createStackNavigator();

export default FavoritesNavigator = () => {
    return (
        <FavoritesStack.Navigator>
            <FavoritesStack.Screen name="Favorites" component={FavoritesScreen}/>
        </FavoritesStack.Navigator>
    );
}