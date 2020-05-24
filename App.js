import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { MainNavigator } from './navigation/MainNavigator';
import { DUMMY_TOPNEWS, DUMMY_TOPNEWS_2 } from './Data/data';
import { NewsContext } from './Data/newsContext';
import { SettingsContext } from './Data/settingsContext';


export default function App() {
    const [data, setData] = useState({ dummyTopnews: DUMMY_TOPNEWS, dummyTopnews2: DUMMY_TOPNEWS_2 });
    const [currentTheme, setCurrentTheme] = useState('light');

    useEffect(() => {
        AsyncStorage.getItem('DarkSkinSetting').then(storedValue => {
            if (storedValue != null) {

                if (JSON.parse(storedValue) === true ? setCurrentTheme('dark') : setCurrentTheme('light'));
            }
        });

    }, []);

    let [fontsLoaded] = useFonts({
        NoyhRBlack: require('./assets/fonts/NoyhRBlack.otf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SettingsContext.Provider value={[currentTheme, setCurrentTheme]}>
                <NewsContext.Provider value={[data, setData]}>
                    <MainNavigator />
                </NewsContext.Provider>
            </SettingsContext.Provider>

        );
    }
}
