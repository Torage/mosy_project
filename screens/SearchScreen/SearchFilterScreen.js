import React, { useContext, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { SearchFilterScreenStylesLight, SearchFilterScreenStylesDark } from './SearchFilterScreen.styles';
import { NewsCardComponent } from '../../components/NewsCardComponent/NewsCard.component';
import { NewsContext } from '../../Data/newsContext';
import { Topnews } from '../../Models/TopnewsModel';
import { SettingsContext } from '../../Data/settingsContext';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';

export const SearchFilterScreen = ({route, navigation}) => {

    // Global data states
    const { searchNews } = useContext(NewsContext);
    const [searchData, setSearchData] = searchNews;

    // Global setting states
    const { theme, push, country } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;
    
    // Local states
    const [filter, setFilter] = useState(filter);

    const { qWord } = route.params;
    const { domain } = route.params;
    const { exDomain } = route.params;
    const { sortBy } = route.params;
    const { lang } = route.params;

    // Construct query for api call 
    const searchQuery = "&domains=" + domain.toLowerCase() + "&excludeDomains=" + exDomain.toLowerCase() + "&sortBy=" + sortBy + "&language=" + lang.toLowerCase();
    console.log(qWord + searchQuery)

    // Api call with search term and query. default call with country if query not provided
    function fetchNews(query) {
        const xhr = new XMLHttpRequest();
        if (query == '' || query == null) {
            xhr.open(
                'GET',
                'http://newsapi.org/v2/top-headlines?country=' + currentCountry + '&pageSize=100&apiKey=f4635151d8bf47af94cec511748e296e',
                true
            );
        } else {
            xhr.open('GET', 'https://newsapi.org/v2/everything?q=' + qWord + query +'&pageSize=100&apiKey=f4635151d8bf47af94cec511748e296e', true);
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
    
    // Returns FlatList of NewsCards provides goBack button.
    return (
        <View style={currentTheme === 'light' ? SearchFilterScreenStylesLight.viewContainer : SearchFilterScreenStylesDark.viewContainer}>
            <View style={currentTheme === 'light' ? SearchFilterScreenStylesLight.headerView : SearchFilterScreenStylesDark.headerView}>
                <TouchableOpacity
                    onPress= {() => navigation.goBack()}
                    style = {currentTheme === 'light' ? SearchFilterScreenStylesLight.backButton : SearchFilterScreenStylesDark.backButton}
                >    
                    <MaterialCommunityIcons
                        name='arrow-left-bold'
                        color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                        size={38}
                    />
                </TouchableOpacity>
                <Text style={currentTheme === 'light' ? SearchFilterScreenStylesLight.headerText : SearchFilterScreenStylesDark.headerText}>
                    Results for:
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
