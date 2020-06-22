import React, { useContext, useState, useLayoutEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { SearchFilterScreenStylesLight, SearchFilterScreenStylesDark } from './SearchFilterScreen.styles';
import { NewsCardComponent } from '../../components/NewsCardComponent/NewsCard.component';
import { NewsContext } from '../../Data/newsContext';
import { Topnews } from '../../Models/TopnewsModel';
import { SettingsContext } from '../../Data/settingsContext';
import { useFocusEffect } from '@react-navigation/native';
import { Input } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { HomeScreen } from '../HomeScreen/HomeScreen';
import { SearchNavigator } from '../../navigation/SearchNavigator';



export const SearchFilterScreen = ({route, navigation}) => {
    // Global State object
    const { theme, push, country } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;
    const { topNews, favoriteNews, searchNews } = useContext(NewsContext);
    const [searchData, setSearchData] = searchNews;
    const [filter, setFilter] = useState(filter);


    const { qWord } = route.params;
    const { domain } = route.params;
    const { sortBy } = route.params;
    const { lang } = route.params;
    console.log(qWord);
    console.log(domain);
    console.log(sortBy);
    console.log(lang);

    const searchQuery = qWord + "&domains=" + domain + "&sortBy=" + sortBy;
    console.log(searchQuery);



    function fetchNews(query) {
        const xhr = new XMLHttpRequest();
        if (query == '' || query == null) {
            xhr.open(
                'GET',
                'http://newsapi.org/v2/top-headlines?country=' + currentCountry + '&pageSize=100&apiKey=f4635151d8bf47af94cec511748e296e',
                true
            );
        } else {
            xhr.open('GET', 'https://newsapi.org/v2/everything?q=' + query + '&pageSize=100&apiKey=f4635151d8bf47af94cec511748e296e', true);
        }        xhr.onload = () => {
            setSearchData(new Topnews(JSON.parse(xhr.response)));
        };
        xhr.send();
    }
 
    useFocusEffect(
        React.useCallback(() => {
            fetchNews(searchQuery);

          return () => console.log("clean");
        }, [])
      );
    
    return (
        <View style={currentTheme === 'light' ? SearchFilterScreenStylesLight.viewContainer : SearchFilterScreenStylesDark.viewContainer}>
            <View style={currentTheme === 'light' ? SearchFilterScreenStylesLight.headerView : SearchFilterScreenStylesDark.headerView}>
                <Text style={currentTheme === 'light' ? SearchFilterScreenStylesLight.headerText : SearchFilterScreenStylesDark.headerText}>
                    You Searched for:
                </Text>
                <Text style={currentTheme === 'light' ? SearchFilterScreenStylesLight.searchText : SearchFilterScreenStylesDark.searchText}>
                    {qWord}
                </Text>
            </View>
            <FlatList
                refreshing={false}
                onRefresh={() => {
                    !searchQuery === '' ?  fetchNews(searchQuery) : fetchNews();
                }}
                keyExtractor={(article) => article.source.id}
                data={searchData.articles}
                renderItem={({ item }) => (
                    <NewsCardComponent
                        category={item.source.name}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.urlToImage}
                        url={item.url}
                        content={item.content}
                        publishedAt={item.publishedAt}
                        author={item.author}
                        screen='Search'
                        id='0'
                    />
                )}
            />
        </View>
    );
};
