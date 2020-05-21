import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import MainNavigator from './navigation/MainNavigator';


export default function App() {
    let [fontsLoaded] = useFonts({
        NoyhRBlack: require('./assets/fonts/NoyhRBlack.otf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return <MainNavigator />;
    }
}
