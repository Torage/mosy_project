import { StyleSheet } from 'react-native';
import { Styles } from '../../constants/styles';
import { Colors } from '../../constants/colors';



export const SelectLocationButtonStylesLight = StyleSheet.create({
    settingsRow: {
        width: '96%',
        marginVertical: 5,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.light.dividerColor,
        backgroundColor: Colors.light.background,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
    },
        left:{
            flex: 4,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        right:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text:{
            fontFamily: Styles.defaultFont,
            fontWeight: 'bold',
            fontSize: 14,
            marginLeft: 10,
            color: Colors.light.accent,
        },

});

export const SelectLocationButtonStylesDark = StyleSheet.create({
    settingsRow: {
        width: '96%',
        marginVertical: 5,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.dark.dividerColor,
        backgroundColor: Colors.dark.background,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
    },
        left:{
            flex: 4,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        right:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text:{
            fontFamily: Styles.defaultFont,
            fontWeight: 'bold',
            fontSize: 14,
            marginLeft: 10,
            color: Colors.dark.accent,
        },

});