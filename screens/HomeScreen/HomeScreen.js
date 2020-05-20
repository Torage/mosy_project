import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './HomeScreen.styles';
import { NewsCardComponent } from '../../components/NewsCardComponent/NewsCard.component';
import { DUMMY_TOPNEWS } from '../../Data/data';

export default HomeScreen = () => {
    const [topNews] = useState(DUMMY_TOPNEWS);

    //logging the id's to the console
    topNews.articles.map((article) => {
        console.log('Article ID:', article.source.id);
    });
    console.log('Number of Articles', topNews.articles.length);

    return (
        <View style={styles.viewContainer}>
            <FlatList
                keyExtractor={(article) => article.source.id}
                data={topNews.articles}
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
