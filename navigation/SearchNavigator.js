import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen';

const SearchStack = createStackNavigator();

export default SearchNavigator = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" component={SearchScreen}/>
        </SearchStack.Navigator>
    );
}