import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, AsyncStorage } from 'react-native';
import { FavoriteScreenStylesDark, FavoriteScreenStylesLight } from './FavoritesScreen.styles';
import { SettingsContext } from '../../Data/settingsContext';
import { NewsContext } from '../../Data/newsContext';
import { NewsCardComponent } from '../../components/NewsCardComponent/NewsCard.component';

export const FavoritesScreen = () => {
    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;

    const { topNews, favoriteNews } = useContext(NewsContext);
    const [newsData, setNewsData] = topNews;
    const [favoriteData, setFavoriteData] = favoriteNews;
    console.log(favoriteData);

    useEffect(() => {
        fillData();
    }, []);

    const fillData = () => {
        AsyncStorage.getItem('Favorites').then((storedValue) => {
            if (storedValue != null) {
                setFavoriteData(JSON.parse(storedValue));
            }
        });

        setFavoriteData(favoriteData);
    };

    return (
        <View style={currentTheme === 'light' ? FavoriteScreenStylesLight.viewContainer : FavoriteScreenStylesDark.viewContainer}>
            <FlatList
                refreshing={false}
                onRefresh={() => {
                    fillData();
                }}
                keyExtractor={(data) => data.id}
                data={favoriteData}
                renderItem={({ item }) => (
                    <NewsCardComponent
                        category={item.category}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.urlToImage}
                        url={item.url}
                        content={item.content}
                        screen='Favorite'
                        publishedAt={item.publishedAt}
                        author={item.author}
                        id={item.id}
                    />
                )}
            />
        </View>
    );
};
