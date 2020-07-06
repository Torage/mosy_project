import React, { useContext, useEffect } from 'react';
import { View, FlatList, AsyncStorage } from 'react-native';
import { FavoriteScreenStylesDark, FavoriteScreenStylesLight } from './FavoritesScreen.styles';
import { SettingsContext } from '../../Data/settingsContext';
import { NewsContext } from '../../Data/newsContext';
import { NewsCardComponent } from '../../components/NewsCardComponent/NewsCard.component';
import { Colors } from '../../constants/colors';

export const FavoritesScreen = () => {

    // Global data states
    const { topNews, favoriteNews } = useContext(NewsContext);
    const [newsData, setNewsData] = topNews;
    const [favoriteData, setFavoriteData] = favoriteNews;

    // Global setting states
    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;

    // On open
    useEffect(() => {
        fillData();
    }, []);

    // Get stored favorites 
    const fillData = () => {
        AsyncStorage.getItem('Favorites').then((storedValue) => {
            if (storedValue != null) {
                setFavoriteData(JSON.parse(storedValue));
            }
        });

        setFavoriteData(favoriteData);
    };

    // Return FlatList with favorite NewsCards
    return (
        <View style={currentTheme === 'light' ? FavoriteScreenStylesLight.viewContainer : FavoriteScreenStylesDark.viewContainer}>
            <FlatList
                style={
                    currentTheme === 'light' ? { backgroundColor: Colors.light.background } : { backgroundColor: Colors.dark.background }
                }
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
