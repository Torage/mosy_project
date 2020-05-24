import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const HomeScreenStylesLight = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
});

export const HomeScreenStylesDark = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.dark.background,
    },
});
