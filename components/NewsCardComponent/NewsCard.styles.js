import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { Styles } from '../../constants/styles';

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
    },
    mainView: {
        backgroundColor: Colors.light.background,
        width: 350,
        borderRadius: 20,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginVertical: 15,
    },
    categoryView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
    },
    categoryText: {
        color: Colors.light.accent,
        textTransform: 'uppercase',
        fontSize: 13,
        fontFamily: Styles.secondFont,
        paddingTop: 5,
    },
    icons: {
        flexDirection: 'row',
    },
    titleView: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    titleText: {
        fontFamily: Styles.secondFont,
        fontSize: 14,
        color: Colors.light.primary,
    },
    descriptionView: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    descriptionText: {
        color: Colors.light.text,
        fontFamily: Styles.defaultFont,
        includeFontPadding: false,
        lineHeight: 14,
        fontSize: 12,
    },
    imageView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    image: {
        height: 170,
        width: 325,
        borderRadius: 20,
        marginBottom: 15,
    },
});
