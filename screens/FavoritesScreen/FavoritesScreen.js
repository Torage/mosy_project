import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, AsyncStorage } from 'react-native';
import { FavoriteScreenStylesDark, FavoriteScreenStylesLight } from './FavoritesScreen.styles';
import { SettingsContext } from '../../Data/settingsContext';
import { NewsCardComponent } from '../../components/NewsCardComponent/NewsCard.component';

export const FavoritesScreen = () => {

    var favData = [];

    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [favoriteData, setFavoriteData] = useState([]);

    useEffect(() => {
        fillData();
    }, []);

    function fillData() {

        // get the favorite last id
        AsyncStorage.getItem('FavoriteID').then((storedValue) => {

            let id = 0;

            if (storedValue != null) {

                id = parseInt(storedValue);
            } else {
                AsyncStorage.setItem('FavoriteID', id.toString());
            }

            var i;
            var k;
            var counter = 0;

            for (i = 0; i < id; i++) {

                AsyncStorage.getItem('Favorite' + i.toString()).then((storedValue) => {
                    if (storedValue != null) {

                        if (favData.length > 0) {

                            counter = 0;

                            for (k = 0; k < favData.length; k++) {

                                if (JSON.parse(storedValue).title == favData[k].title) {
                                    counter++;
                                }
                            }

                            if (counter > 0) {
                                //do nothing
                            }

                            else {
                                favData.push(JSON.parse(storedValue));
                            }
                        }

                        else {
                            favData.push(JSON.parse(storedValue));
                        }
                    }
                });
            }

            setFavoriteData(favData);
        });
    }

    return (
        <View style={currentTheme === 'light' ? FavoriteScreenStylesLight.viewContainer : FavoriteScreenStylesDark.viewContainer}>
            <FlatList
                refreshing={false}
                onRefresh={() => {
                    fillData();
                }}
                keyExtractor={(article) => article.id}
                data={favoriteData}
                renderItem={({ item }) => (
                    <NewsCardComponent
                        category={item.category}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.urlToImage}
                        url={item.url}
                        content={item.content}
                    />
                )}
            />
        </View>
    );
};
