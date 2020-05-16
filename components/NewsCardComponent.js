import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
                    <TouchableOpacity style={{marginRight:5}}>
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
        fontSize: 12,
        fontFamily: 'Roboto-Regular'
    },
    icons: {
        flexDirection: 'row',
        // backgroundColor:'red'
    },
    titleView: {
        paddingLeft: 15,
        paddingRight: 15,
        // backgroundColor:'red'
    },
    titleText: {
        fontFamily: 'Roboto-Regular',
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
        fontFamily: 'NoyhRBlack',
        includeFontPadding: false,
        lineHeight: 13,
        fontSize: 14,
        // textAlign:'justify'
        letterSpacing: 1
    },
    imageView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor: 'red'
    }, image: {
        maxHeight: 170,
        maxWidth: 325,
        borderRadius: 20
    }
});