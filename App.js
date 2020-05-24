import React, { useState, useEffect } from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { MainNavigator } from './navigation/MainNavigator';
import { DUMMY_TOPNEWS } from './Data/data';
import { NewsContext } from './Data/newsContext';
import { Topnews } from './Models/TopnewsModel';

export default function App() {
    const [newsData, setNewsData] = useState({
        liveTopnews: DUMMY_TOPNEWS,
    });

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

    useEffect(() => {
        fetchNews();
    }, []);

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <NewsContext.Provider value={[newsData, setNewsData]}>
                <MainNavigator />
            </NewsContext.Provider>
        );
    }
}
