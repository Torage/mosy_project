import { Colors } from '../../constants/colors';
import { Styles } from '../../constants/styles';
import { Dimensions } from 'react-native';
import createStyles from './NewsCardBaseStyles';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

export const NewsCardStylesDark = createStyles({
    mainView: {
        flex:1,
        backgroundColor: Colors.dark.background,
        width: fullWidth - 50,
        borderRadius: 20,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: Colors.dark.accent,
    },
    categoryText: {
        color: Colors.dark.categoryColor,
        textTransform: 'uppercase',
        fontSize: 16,
        fontFamily: Styles.secondFont,
        paddingTop: 5,
    },
    authorText: {
        flex: 2,
        color: Colors.dark.categoryColor,
        textTransform: 'uppercase',
        fontSize: 12,
        fontFamily: Styles.secondFont,
        paddingTop: 5,
    },
    dateText: {
        flex:1,
        color: Colors.dark.categoryColor,
        textTransform: 'uppercase',
        textAlign:'right',
        fontSize: 12,
        fontFamily: Styles.secondFont,
        paddingTop: 5,
    },
    titleText: {
        fontFamily: Styles.secondFont,
        fontSize: 17,
        color: Colors.dark.titleText,
        paddingTop: 4,
    },
    descriptionText: {
        color: Colors.dark.text,
        fontFamily: Styles.defaultFont,
        includeFontPadding: false,
        lineHeight: 14,
        fontSize: 12,
        paddingTop: 4,
    },
});