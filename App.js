import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { MainNavigator } from './navigation/MainNavigator';
import { DUMMY_TOPNEWS } from './Data/data';
import { NewsContext } from './Data/newsContext';
import { Topnews } from './Models/TopnewsModel';
import { SettingsContext } from './Data/settingsContext';

export default function App() {
    const [newsData, setNewsData] = useState({
        liveTopnews: DUMMY_TOPNEWS,
    });
    const [currentTheme, setCurrentTheme] = useState('light');
    const [sendPushNotification, setSendPushNotification] = useState(false);
    const [currentCountry, setCurrentCountry] = useState('US');

    useEffect(() => {
        AsyncStorage.getItem('DarkSkinSetting').then((storedValue) => {
            if (storedValue != null) {
                if (JSON.parse(storedValue) === true ? setCurrentTheme('dark') : setCurrentTheme('light'));
            }
        });

        AsyncStorage.getItem('PushSetting').then((storedValue) => {
            if (storedValue != null) {
                setSendPushNotification(JSON.parse(storedValue));
            }
        });

        AsyncStorage.getItem('CountrySetting').then((storedValue) => {
            if (storedValue != null) {
                console.log(storedValue);
                setCurrentCountry(storedValue);
            }
        });
        // fetchNews();
    }, []);

    let [fontsLoaded] = useFonts({
        NoyhRBlack: require('./assets/fonts/NoyhRBlack.otf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });

    function fetchNews() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f4635151d8bf47af94cec511748e296e', true);
        xhr.onload = () => {
            setNewsData((newsData) => ({
                liveTopnews: new Topnews(JSON.parse(xhr.response)),
            }));
        };
        xhr.send();
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SettingsContext.Provider value={{theme : [currentTheme, setCurrentTheme], push : [sendPushNotification, setSendPushNotification], country : [currentCountry, setCurrentCountry]}}>
                <NewsContext.Provider value={[newsData, setNewsData]}>
                    <MainNavigator />
                </NewsContext.Provider>
            </SettingsContext.Provider>
        );
    }
}
