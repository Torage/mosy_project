import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { Styles } from '../../constants/styles';

export const SearchFilterScreenStylesLight = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    headerView: {
        marginHorizontal: '10%',
        flexDirection: 'row',
    },
    input: {},
    inputText: {
        color: Colors.light.accent,
    },
    headerText: {
        paddingTop: 3,
        color: Colors.light.categoryColor,
        fontFamily: Styles.defaultFont,
        textTransform: 'uppercase',
        fontSize: 14,
        marginVertical: 15,
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
        marginHorizontal: '10%',
        flexDirection: 'row',
    },
    input: {},
    inputText: {
        color: Colors.dark.accent,
    },
    headerText: {
        paddingTop: 3,
        color: Colors.dark.categoryColor,
        fontFamily: Styles.defaultFont,
        textTransform: 'uppercase',
        fontSize: 14,
        marginVertical: 15,
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
