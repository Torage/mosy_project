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

    const fillData = () => {
        
        // get the favorite last id
        AsyncStorage.getItem('FavoriteID').then((storedValue) => {

            let id = 0;

            if (storedValue != null) {

                id = parseInt(storedValue);
            } 


            for (var i = 0; i < id; i++) {

                AsyncStorage.getItem('Favorite' + i.toString()).then((storedValue) => {
                   
                    if (storedValue != null) {
                        
                        if(favData.length > 0){

                            var Counter = 0;
                            for (var j = 0; j < favData.length; j++) {
                           
                                if(JSON.parse(storedValue).title == favData[j].title){

                                    AsyncStorage.removeItem('Favorite' + id.toString());
                                    Counter++;
                                }

                            }

                            if(Counter > 0){

                            }

                            else{
                                favData.push(JSON.parse(storedValue));
                            }
                        }

                        else{
                            
                            favData.push(JSON.parse(storedValue));
                        }

                    }
                });
            }
        });

        setFavoriteData(favData);
    }

    return (
        <View style={currentTheme === 'light' ? FavoriteScreenStylesLight.viewContainer : FavoriteScreenStylesDark.viewContainer}>
            <FlatList
                refreshing={false}
                onRefresh={() => {
                    fillData();
                }}
                keyExtractor={data => data.id}
                data={favoriteData}
                renderItem={({ item }) => (
                    <NewsCardComponent
                        category={item.category}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.urlToImage}
                        url={item.url}
                        content={item.content}
                        screen = "Favorite"
                        id = {item.id}
                    />
                )}
            />
        </View>
    );
};
