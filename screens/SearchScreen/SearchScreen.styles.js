import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const SearchScreenStylesLight = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    inputView: {
        height: 50,
        marginHorizontal: '10%',
    },
    input: {},
    inputText: {
        color: Colors.light.accent,
    },
});

export const SearchScreenStylesDark = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.dark.background,
    },
    inputView: {
        height: 50,
        marginHorizontal: '10%',
    },
    input: {},
    inputText: {
        color: Colors.dark.accent,
    },
});
