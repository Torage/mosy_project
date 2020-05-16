import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen/SearchScreen';

const SearchStack = createStackNavigator();

export default SearchNavigator = () => {
    return (
        <SearchStack.Navigator headerMode='none'>
            <SearchStack.Screen name='Search' component={SearchScreen} />
        </SearchStack.Navigator>
    );
};
