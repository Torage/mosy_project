import React, { useContext, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Share, Modal, SafeAreaView, AsyncStorage } from 'react-native';
import { WebView } from 'react-native-webview';
import { Colors } from '../../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NewsCardStylesDark, NewsCardStylesLight } from './NewsCard.styles';
import { SettingsContext } from '../../Data/settingsContext';
import { NewsModalStylesDark, NewsModalStylesLight } from './NewsModal.styles';
import Constants from 'expo-constants';
export const NewsCardComponent = (props) => {
    /* Values 
    category={item.source.name}
    title={item.title}
    description={item.description}
    imageUrl={item.urlToImage} 
    */

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

        // get the favorite last id
        AsyncStorage.getItem('FavoriteID').then((storedValue) => {

            let id = 0;

            if (storedValue != null) {

                id = parseInt(storedValue);
            } else {
                AsyncStorage.setItem('FavoriteID', id.toString());
            }


            //generate a json string with the data
            var jsonString = {
                id: id.toString(),
                category: props.category,
                title: props.title,
                description: props.description,
                url: props.url,
                urlToImage: props.imageUrl,
                content: props.content,
            };


            //save the data into the async storage
            AsyncStorage.setItem('Favorite' + id.toString(), JSON.stringify(jsonString));

            //increase id
            id = id + 1;

            // save new id
            AsyncStorage.setItem('FavoriteID', id.toString());

            console.log(JSON.stringify(jsonString));
        });


    }

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
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => saveAsFavorite()}>
                            <MaterialCommunityIcons
                                name='bookmark-plus'
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
                                console.log('missing image');
                                setImageStyle({});
                            }}
                            style={currentTheme === 'light' ? imageStyle.lightTheme : imageStyle.darkTheme}
                            source={{ uri: props.imageUrl }}
                        />
                    </View>
                </TouchableOpacity>

                <SafeAreaView>
                    <Modal animationType={'slide'} transparent={true} visible={showModal} statusBarTranslucent={true} onRequestClose={() => setShowModal(false)} >
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
