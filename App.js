import React, { useState } from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { MainNavigator } from './navigation/MainNavigator';
import { DUMMY_TOPNEWS, DUMMY_TOPNEWS_2 } from './Data/data';
import { NewsContext } from './Data/newsContext';

export default function App() {
    const [data, setData] = useState({ dummyTopnews: DUMMY_TOPNEWS, dummyTopnews2: DUMMY_TOPNEWS_2 });
    let [fontsLoaded] = useFonts({
        NoyhRBlack: require('./assets/fonts/NoyhRBlack.otf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <NewsContext.Provider value={[data, setData]}>
                <MainNavigator />
            </NewsContext.Provider>
        );
    }
}
