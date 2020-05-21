import React, { useState, useContext, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './HomeScreen.styles';
import { NewsCardComponent } from '../../components/NewsCardComponent/NewsCard.component';
import { NewsContext } from '../../Data/newsContext';
import { Topnews } from '../../Models/TopnewsModel';

export const HomeScreen = () => {
    // Global State object
    const [newsState] = useContext(NewsContext);
    const [topnews, setTopnews] = useState(new Topnews(newsState.dummyTopnews));
    // called if topnews changes, set
    useEffect(() => {
        //logging the id's to the console
        topnews.articles.map((article) => {
            console.log('Article ID:', article.source.id);
        });
        console.log('Number of Articles', topnews.articles.length);
    }, [topnews]);

    return (
        <View style={styles.viewContainer}>
            <FlatList
                keyExtractor={(article) => article.source.id}
                data={topnews.articles}
                renderItem={({ item }) => (
                    <NewsCardComponent
                        category={item.source.name}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.urlToImage}
                    />
                )}
            />
        </View>
    );
};
