import React, { useContext, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './HomeScreen.styles';
import { NewsCardComponent } from '../../components/NewsCardComponent/NewsCard.component';
import { NewsContext } from '../../Data/newsContext';

export const HomeScreen = () => {
    // Global State object
    const [newsData, setNewsData] = useContext(NewsContext);
    // called if topnews changes
    useEffect(() => {
        //logging the id's to the console
        console.log('news status:', newsData.liveTopnews.status, '\n');
        newsData.liveTopnews.articles.map((article) => {
            console.log('Article ID:', article.source.id);
        });
        console.log('Number of Articles', newsData.liveTopnews.articles.length);
    }, [newsData]);

    return (
        <View style={styles.viewContainer}>
            <FlatList
                keyExtractor={(article) => article.source.id}
                data={newsData.liveTopnews.articles}
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
