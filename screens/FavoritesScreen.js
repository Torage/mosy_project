import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../constants/colors';

export default FavoritesScreen = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.lightBackground }}>
            <Text>Favorites!</Text>
        </View>
    );
}