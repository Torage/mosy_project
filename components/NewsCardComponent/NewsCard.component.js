import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './NewsCard.styles';

export default NewsCardComponent = (props) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.categoryView}>
                <Text style={styles.categoryText}>{props.category}</Text>
                <View style={styles.icons}>
                    <TouchableOpacity style={{ marginRight: 5 }} onPress={() => alert('mark as favorite')}>
                        <MaterialCommunityIcons name='bookmark-outline' color={Colors.accent} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('share it with your friends')}>
                        <MaterialCommunityIcons name='share-variant' color={Colors.accent} size={20} />
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
                <Image style={styles.image} source={require('../../assets/dummyNewsImage.png')} />
            </View>
        </View>
    );
};
