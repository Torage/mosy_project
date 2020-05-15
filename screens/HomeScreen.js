import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Colors } from '../constants/colors';
import NewsCardComponent from '../components/NewsCardComponent'
export default HomeScreen = props => {
    const category = 'fussball';
    const title='Gelten gleiche Regeln für alle?'
    const description='Organisatorisch kann Fußball in der Pandemie funktionieren. Wenn die Bundesliga nun wieder startet, stellt sich aber die Kernfrage des Sports: die nach Gerechtigkeit'
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.lightBackground }}>
            <NewsCardComponent
                category={category}
                title={title}
                description={description}
                
            />
        </View>
    );
}