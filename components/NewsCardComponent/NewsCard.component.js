import React from 'react';
import { Text, View, TouchableOpacity, Image, Button, Share } from 'react-native';
import { Colors } from '../../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './NewsCard.styles';

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
                message:
                    props.category + '\n\n' +
                    props.title + '\n\n' +
                    props.description + '\n\n' +
                    'Read More: ' + '\n' +
                    props.url,
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

    return (
        <View style={styles.viewContainer}>
            <View style={styles.mainView}>
                <View style={styles.categoryView}>
                    <Text style={styles.categoryText}>{props.category}</Text>
                    <View style={styles.icons}>
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => alert('mark as favorite')}>
                            <MaterialCommunityIcons name='bookmark-outline' color={Colors.light.accent} size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => shareContent()}>
                            <MaterialCommunityIcons name='share-variant' color={Colors.light.accent} size={20} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.titleView}>
                    <Text style={styles.titleText}>{props.title}</Text>
                </View>

                <View style={styles.descriptionView}>
                    <Text style={styles.descriptionText} numberOfLines={3}>
                        {props.description}
                    </Text>
                </View>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={{ uri: props.imageUrl }} />
                </View>
            </View>
        </View>
    );
};
