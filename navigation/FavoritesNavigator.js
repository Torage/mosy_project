import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoritesScreen } from '../screens/FavoritesScreen/FavoritesScreen';

const FavoritesStack = createStackNavigator();

export const FavoritesNavigator = () => {
    return (
        <FavoritesStack.Navigator headerMode='none'>
            <FavoritesStack.Screen name='Favorites' component={FavoritesScreen} />
        </FavoritesStack.Navigator>
    );
};
