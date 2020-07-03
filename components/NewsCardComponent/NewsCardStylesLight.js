import { Colors } from '../../constants/colors';
import { Styles } from '../../constants/styles';
import { Dimensions } from 'react-native';
import createStyles from './NewsCardBaseStyles';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

export const NewsCardStylesLight = createStyles({
    mainView: {
        backgroundColor: Colors.light.background,
        width: fullWidth - 50,
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
    categoryText: {
        color: Colors.light.categoryColor,
        textTransform: 'uppercase',
        fontSize: 16,
        fontFamily: Styles.secondFont,
        paddingTop: 5,
    },
    authorText: {
        flex:2,
        color: Colors.light.categoryColor,
        textTransform: 'uppercase',
        fontSize: 12,
        fontFamily: Styles.secondFont,
        paddingTop: 5,
    },
    dateText: {
        flex:1,
        color: Colors.light.categoryColor,
        textTransform: 'uppercase',
        textAlign:'right',
        fontSize: 12,
        fontFamily: Styles.secondFont,
        paddingTop: 5,
    },
    titleText: {
        fontFamily: Styles.secondFont,
        fontSize: 17,
        color: Colors.light.titleText,
        paddingTop: 4,
    },
    descriptionText: {
        color: Colors.light.text,
        fontFamily: Styles.defaultFont,
        includeFontPadding: false,
        lineHeight: 14,
        fontSize: 12,
        paddingTop: 4,
    },
});
