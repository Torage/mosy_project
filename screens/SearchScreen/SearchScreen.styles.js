import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const SearchScreenStylesLight = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.light.background,
        // backgroundColor:'green'
    },
    inputView: {
        backgroundColor: 'red',
        marginHorizontal: '10%',
        padding: 0,
    },
    input: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '80%',
        backgroundColor: 'red',
    },
});

export const SearchScreenStylesDark = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        // backgroundColor: 'red',
    },
    inputView: {
        height:50,
        marginHorizontal: '10%',
        // backgroundColor: 'red',
    },
    input: {
    },
});
