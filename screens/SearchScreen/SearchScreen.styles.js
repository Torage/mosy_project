import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const SearchScreenStylesLight = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
});

export const SearchScreenStylesDark = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.dark.background,
    },
});
