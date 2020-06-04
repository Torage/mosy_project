import React, { useContext, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Share, Modal, SafeAreaView, AsyncStorage, Alert, ToastAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
import { Colors } from '../../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NewsCardStylesDark, NewsCardStylesLight } from './NewsCard.styles';
import { SettingsContext } from '../../Data/settingsContext';
import { NewsContext } from '../../Data/newsContext';
import { NewsModalStylesDark, NewsModalStylesLight } from './NewsModal.styles';
import Constants from 'expo-constants';
import Toast from 'react-native-simple-toast';
import NewsCard from '../../Models/NewscardModel';

export const NewsCardComponent = (props) => {
    const { topNews, favoriteNews } = useContext(NewsContext);
    const [newsData, setNewsData] = topNews;
    const [favoriteData, setFavoriteData] = favoriteNews;
    const date = new Date(props.publishedAt);
    const parsedDate =
        date.getDay() +
        '.' +
        ( date.getMonth() + 1 ) +
        '.' +
        date.getFullYear() +
        ' | ' +
        (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
        ':' +
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        console.log(props.publishedAt, parsedDate)
    const shareContent = async () => {
        try {
            const result = await Share.share({
                message: props.category + '\n\n' + props.title + '\n\n' + props.description + '\n\n' + 'Read More: ' + '\n' + props.url,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const saveAsFavorite = async () => {
        var md5 = require('md5');

        AsyncStorage.getItem('Favorites').then((storedValue) => {
            let favoritesArray = [];

            if (storedValue != null) {
                favoritesArray = JSON.parse(storedValue);
            }

            let id = md5(props.title);
            favoritesArray.push(
                new NewsCard(
                    id,
                    props.category,
                    props.title,
                    props.description,
                    props.url,
                    props.imageUrl,
                    props.content,
                    props.author,
                    props.publishedAt
                )
            );

            let length = favoritesArray.filter((object) => object.id === id).length;

            //delete all duplicates
            const uniqueFavorites = Array.from(new Set(favoritesArray.map(object => object.id)))
                .map(id => {
                    return favoritesArray.find(object => object.id === id)
                })
                

            //save the data into the async storage
            AsyncStorage.setItem('Favorites', JSON.stringify(uniqueFavorites)).then(() => {

                setFavoriteData(uniqueFavorites);

                if(length >= 2){
                    Toast.show("This favorite is already in Favorites.", Toast.SHORT);
                }
                else{
                    Toast.show("Added to Favorites.", Toast.SHORT);
                }
                
            });
        });
    }

    const deleteFavorite = async () => {
        AsyncStorage.getItem('Favorites').then((storedValue) => {
            let favoritesArray = [];

            if (storedValue != null) {
                favoritesArray = JSON.parse(storedValue);
            }

            //delete value out of array
            const filteredArray = favoritesArray.filter((object) => object.id !== props.id);

            //save the data into the async storage
            AsyncStorage.setItem('Favorites', JSON.stringify(filteredArray)).then(() => {
                setFavoriteData(filteredArray);
                Toast.show('Favorite deleted.', Toast.SHORT);
            });
        });
    };

    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [imageStyle, setImageStyle] = useState({ lightTheme: NewsCardStylesLight.image, darkTheme: NewsCardStylesDark.image });
    // const [content, setContent] = useState({ content: props.description, pressed: true });
    const [showModal, setShowModal] = useState(false);

    return (
        <View style={currentTheme === 'light' ? NewsCardStylesLight.viewContainer : NewsCardStylesDark.viewContainer}>
            <View style={currentTheme === 'light' ? NewsCardStylesLight.mainView : NewsCardStylesDark.mainView}>
                <View style={currentTheme === 'light' ? NewsCardStylesLight.categoryView : NewsCardStylesDark.categoryView}>
                    <Text style={currentTheme === 'light' ? NewsCardStylesLight.categoryText : NewsCardStylesDark.categoryText}>
                        {props.category}
                    </Text>
                    <View style={currentTheme === 'light' ? NewsCardStylesLight.icons : NewsCardStylesDark.icons}>
                        <TouchableOpacity
                            style={{ marginRight: 5 }}
                            onPress={props.screen === 'Home' || props.screen === 'Search' ? () => saveAsFavorite() : () => deleteFavorite()}
                        >
                            <MaterialCommunityIcons
                                name={props.screen === 'Home' || props.screen === 'Search' ? 'bookmark-plus' : 'bookmark-minus'}
                                color={currentTheme === 'light' ? Colors.light.newsCardIcon : Colors.dark.newsCardIcon}
                                size={20}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => shareContent()}>
                            <MaterialCommunityIcons
                                name='share-variant'
                                color={currentTheme === 'light' ? Colors.light.newsCardIcon : Colors.dark.newsCardIcon}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={currentTheme === 'light' ? NewsCardStylesLight.categoryView : NewsCardStylesDark.categoryView}>
                    <Text style={currentTheme === 'light' ? NewsCardStylesLight.authorText : NewsCardStylesDark.authorText}>
                        {props.author?props.author:'no mention of an author'}
                    </Text>
                    <Text style={currentTheme === 'light' ? NewsCardStylesLight.authorText : NewsCardStylesDark.authorText}>
                        {parsedDate}
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        setShowModal(!showModal);
                    }}
                >
                    <View style={currentTheme === 'light' ? NewsCardStylesLight.titleView : NewsCardStylesDark.titleView}>
                        <Text style={currentTheme === 'light' ? NewsCardStylesLight.titleText : NewsCardStylesDark.titleText}>
                            {props.title}
                        </Text>
                    </View>

                    <View style={currentTheme === 'light' ? NewsCardStylesLight.descriptionView : NewsCardStylesDark.descriptionView}>
                        <Text style={currentTheme === 'light' ? NewsCardStylesLight.descriptionText : NewsCardStylesDark.descriptionText}>
                            {props.description}
                        </Text>
                    </View>
                    <View style={currentTheme === 'light' ? NewsCardStylesLight.imageView : NewsCardStylesDark.imageView}>
                        <Image
                            onLoad={() => {
                                // console.log('valid image', props.imageUrl);
                                if (!props.imageUrl) {
                                    setImageStyle({});
                                }
                            }}
                            onError={() => {
                                // console.log('missing image');
                                setImageStyle({});
                            }}
                            style={currentTheme === 'light' ? imageStyle.lightTheme : imageStyle.darkTheme}
                            source={{ uri: props.imageUrl }}
                        />
                    </View>
                </TouchableOpacity>

                <SafeAreaView>
                    <Modal
                        animationType={'slide'}
                        transparent={true}
                        visible={showModal}
                        statusBarTranslucent={true}
                        onRequestClose={() => setShowModal(false)}
                    >
                        <View style={currentTheme === 'light' ? NewsModalStylesLight.centeredView : NewsModalStylesDark.centeredView}>
                            <View style={currentTheme === 'light' ? NewsModalStylesLight.modalView : NewsModalStylesDark.modalView}>
                                <View
                                    style={
                                        currentTheme === 'light'
                                            ? NewsModalStylesLight.modalViewHeader
                                            : NewsModalStylesDark.modalViewHeader
                                    }
                                >
                                    <View
                                        style={
                                            currentTheme === 'light'
                                                ? NewsModalStylesLight.modalIconContainer
                                                : NewsModalStylesDark.modalIconContainer
                                        }
                                    ></View>
                                    <View
                                        style={
                                            currentTheme === 'light'
                                                ? NewsModalStylesLight.modalTextContainer
                                                : NewsModalStylesDark.modalTextContainer
                                        }
                                    >
                                        <Image
                                            style={{ width: 250, height: 30 }}
                                            source={
                                                currentTheme === 'light'
                                                    ? require('../../assets/newscope_logo_light.png')
                                                    : require('../../assets/newscope_logo_dark.png')
                                            }
                                        />
                                    </View>
                                    <View
                                        style={
                                            currentTheme === 'light'
                                                ? NewsModalStylesLight.modalIconContainer
                                                : NewsModalStylesDark.modalIconContainer
                                        }
                                    >
                                        <TouchableOpacity
                                            onPress={() => {
                                                setShowModal(!showModal);
                                            }}
                                        >
                                            <MaterialCommunityIcons
                                                name='close'
                                                color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                                                size={24}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View
                                    style={
                                        currentTheme === 'light'
                                            ? NewsModalStylesLight.modalViewContent
                                            : NewsModalStylesDark.modalViewContent
                                    }
                                >
                                    <WebView source={{ uri: props.url }} style={{ flex: 1, width: 380, backgroundColor: 'transparent' }} />
                                </View>
                                <View
                                    style={
                                        currentTheme === 'light'
                                            ? NewsModalStylesLight.modalViewFooter
                                            : NewsModalStylesDark.modalViewFooter
                                    }
                                >
                                    <Text
                                        style={
                                            currentTheme === 'light'
                                                ? NewsModalStylesLight.modalFooterText
                                                : NewsModalStylesDark.modalFooterText
                                        }
                                    >
                                        {Constants.manifest.name} {Constants.manifest.version}{' '}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </SafeAreaView>
            </View>
        </View>
    );
};
