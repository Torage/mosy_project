import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { Styles } from '../../constants/styles';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const NewsCardStylesLight = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
    },
    mainView: {
        backgroundColor: Colors.light.background,
        width: windowWidth - 50,
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
        color: Colors.light.categoryColor,
        textTransform: 'uppercase',
        fontSize: 16,
        fontFamily: Styles.secondFont,
        paddingTop: 5,
    },
    authorText: {
        color: Colors.light.categoryColor,
        textTransform: 'uppercase',
        fontSize: 12,
        fontFamily: Styles.secondFont,
        paddingTop: 5,
        maxWidth: 225
    },
    icons: {
        flexDirection: 'row',
        paddingTop: 4,
    },
    titleView: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    titleText: {
        fontFamily: Styles.secondFont,
        fontSize: 17,
        color: Colors.light.titleText,
        paddingTop: 4,
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
        paddingTop: 4,
    },
    imageView: {
        marginTop: 10,
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 170,
        width: windowWidth - 50,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
    },
});

export const NewsCardStylesDark = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
    },
    mainView: {
        backgroundColor: Colors.dark.background,
        width: windowWidth - 50,
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
        borderWidth: 1,
        borderColor: Colors.dark.accent,
    },
    categoryView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
    },
    categoryText: {
        color: Colors.dark.categoryColor,
        textTransform: 'uppercase',
        fontSize: 16,
        fontFamily: Styles.secondFont,
        paddingTop: 5,
    },
    authorText: {
        color: Colors.dark.categoryColor,
        textTransform: 'uppercase',
        fontSize: 12,
        fontFamily: Styles.secondFont,
        paddingTop: 5,
        maxWidth: 225
    },
    icons: {
        flexDirection: 'row',
        paddingTop: 4,
    },
    titleView: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    titleText: {
        fontFamily: Styles.secondFont,
        fontSize: 17,
        color: Colors.dark.titleText,
        paddingTop: 4,
    },
    descriptionView: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    descriptionText: {
        color: Colors.dark.text,
        fontFamily: Styles.defaultFont,
        includeFontPadding: false,
        lineHeight: 14,
        fontSize: 12,
        paddingTop: 4,
        // height:60
    },
    imageView: {
        marginTop: 10,
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 170,
        width: windowWidth - 53,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        // marginBottom: 15,
    },
});
