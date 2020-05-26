import React, { useContext, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Button, Share } from 'react-native';
import { Colors } from '../../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NewsCardStylesDark, NewsCardStylesLight } from './NewsCard.styles';
import { SettingsContext } from '../../Data/settingsContext';

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

    const [currentTheme, setCurrentTheme] = useContext(SettingsContext);
    const [imageStyle, setImageStyle] = useState({ lightTheme: NewsCardStylesLight.image, darkTheme: NewsCardStylesDark.image });
    const [content, setContent] = useState({ content: props.description, pressed: true });

    return (
        <View style={currentTheme === 'light' ? NewsCardStylesLight.viewContainer : NewsCardStylesDark.viewContainer}>
            <View style={currentTheme === 'light' ? NewsCardStylesLight.mainView : NewsCardStylesDark.mainView}>
                <View style={currentTheme === 'light' ? NewsCardStylesLight.categoryView : NewsCardStylesDark.categoryView}>
                    <Text style={currentTheme === 'light' ? NewsCardStylesLight.categoryText : NewsCardStylesDark.categoryText}>
                        {props.category}
                    </Text>
                    <View style={currentTheme === 'light' ? NewsCardStylesLight.icons : NewsCardStylesDark.icons}>
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => alert('mark as favorite')}>
                            <MaterialCommunityIcons
                                name='bookmark-outline'
                                color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                                size={20}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => shareContent()}>
                            <MaterialCommunityIcons
                                name='share-variant'
                                color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        content.pressed
                            ? setContent({ content: props.content, pressed: false })
                            : setContent({ content: props.description, pressed: true });
                    }}
                >
                    <View style={currentTheme === 'light' ? NewsCardStylesLight.titleView : NewsCardStylesDark.titleView}>
                        <Text style={currentTheme === 'light' ? NewsCardStylesLight.titleText : NewsCardStylesDark.titleText}>
                            {props.title}
                        </Text>
                    </View>

                    <View style={currentTheme === 'light' ? NewsCardStylesLight.descriptionView : NewsCardStylesDark.descriptionView}>
                        <Text style={currentTheme === 'light' ? NewsCardStylesLight.descriptionText : NewsCardStylesDark.descriptionText}>
                            {content.content}
                        </Text>
                    </View>
                    <View style={currentTheme === 'light' ? NewsCardStylesLight.imageView : NewsCardStylesDark.imageView}>
                        <Image
                            onLoad={() => {
                                console.log('valid image', props.imageUrl);
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
            </View>
        </View>
    );
};
