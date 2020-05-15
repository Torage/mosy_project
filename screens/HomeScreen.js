import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../constants/colors';

export default HomeScreen = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.lightBackground }}>
            <Text>Home!</Text>
        </View>
    );
}