import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Colors.background,
        height: 300,
        width: 350,
        borderRadius: 20,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    categoryView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
    },
    categoryText: {
        color: Colors.accent,
        textTransform: 'uppercase',
        fontSize: 13,
        fontFamily: 'NoyhRBlack',
        paddingTop: 5
    },
    icons: {
        flexDirection: 'row',
    },
    titleView: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    titleText: {
        fontFamily: 'NoyhRBlack',
        textTransform: 'uppercase',
        fontSize: 18,
        color: Colors.primary
    },
    descriptionView: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    descriptionText: {
        color: Colors.text,
        fontFamily: 'Roboto-Regular',
        includeFontPadding: false,
        lineHeight: 14,
        fontSize: 12,
    },
    imageView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }, image: {
        maxHeight: 170,
        maxWidth: 325,
        borderRadius: 20
    }
})
