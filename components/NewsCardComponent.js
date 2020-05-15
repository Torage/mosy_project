import React from 'react';
import { Text, View, ColorPropType, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default NewsCardComponent = props => {
    return (
        <View style={styles.mainView}>
            <View style={styles.categoryView}>
                <Text style={styles.categoryText}>
                    {props.category}
                </Text>
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons
                            name='bookmark-outline'
                            color={Colors.accent}
                            size={20}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons
                            name='share-variant'
                            color={Colors.accent}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.titleView}>
                <Text style={styles.titleText}>
                    {props.title}
                </Text>
            </View>

            <View style={styles.descriptionView}>
                <Text style={styles.descriptionText}
                    numberOfLines={3}>
                    {props.description}
                </Text>
            </View>
            <View style={styles.imageView}>
                <Image style={styles.image}
                    source={
                        require('../assets/dummyNewsImage.png')
                    }
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Colors.lightBackground,
        height: 300,
        width: 350,
        borderRadius: 20,
        elevation: 10,

    },
    categoryView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        backgroundColor: 'transparent',
    },
    categoryText: {
        color: Colors.accent,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12
    },
    icons: {
        flexDirection: 'row'
    },
    titleView: {
        paddingLeft: 15,
        paddingRight: 15,
        // backgroundColor:'red'
    },
    titleText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 17,
        color: Colors.primary
    },
    descriptionView: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    descriptionText: {
        color: Colors.text,
    },
    imageView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        height: 170,
        // backgroundColor: 'red'
    }, image: {
        maxHeight: 170,
        maxWidth: 325,
        borderRadius: 20
    }
});