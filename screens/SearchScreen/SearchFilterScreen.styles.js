import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { Styles } from '../../constants/styles';

export const SearchFilterScreenStylesLight = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    headerView: {
        marginHorizontal: '5%',
        flexDirection: 'row',
    },
    backButton: {
        paddingTop: 6,
        marginRight: 10,
    },
    headerText: {
        color: Colors.light.categoryColor,
        fontFamily: Styles.defaultFont,
        textTransform: 'uppercase',
        fontSize: 17,
        marginVertical: 15,
        marginLeft: 10,
    },
    searchText: {
        paddingLeft: 5,
        color: Colors.light.categoryColor,
        fontFamily: Styles.defaultFont,
        textTransform: 'uppercase',
        fontSize: 17,
        marginVertical: 15,
    },
});

export const SearchFilterScreenStylesDark = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.dark.background,
    },
    headerView: {
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    backButton: {
        paddingTop: 6,
        marginRight: 10,
    },
    headerText: {
        color: Colors.dark.categoryColor,
        fontFamily: Styles.defaultFont,
        textTransform: 'uppercase',
        fontSize: 17,
        marginVertical: 15,
        marginLeft: 10,
    },
    searchText: {
        paddingLeft: 5,
        color: Colors.dark.categoryColor,
        fontFamily: Styles.defaultFont,
        textTransform: 'uppercase',
        fontSize: 17,
        marginVertical: 15,
    },
});
