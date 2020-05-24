import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const FavoriteScreenStylesLight = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
});

export const FavoriteScreenStylesDark = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.dark.background,
    },
});
