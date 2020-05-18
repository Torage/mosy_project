import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './HomeScreen.styles';
import { NewsCardComponent } from '../../components/NewsCardComponent/NewsCard.component';
import { TOPNEWS } from '../../Data/data';

export default HomeScreen = () => {
    const [topNews, setTopNews] = useState(TOPNEWS);
    let topNewsId = { category: 'Topnews', id: 0 };

    topNews.articles.map((articles) => {
        topNewsId.id += 1;
        articles.source.id = topNewsId.category + topNewsId.id;
        console.log('Key:', articles.source.id);
    });

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
