import { StyleSheet } from 'react-native';
import { Styles } from '../../constants/styles';
import { Colors } from '../../constants/colors';

export const SelectCategoryButtonStylesLight = StyleSheet.create({
    settingRow: {
        width: '96%',
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomStartRadius: 2,
        borderColor: Colors.light.dividerColor,
        backgroundColor: Colors.light.settingsBG,
    },

    wrapper: {
        flex: 1,
        flexDirection: 'row',
    },

    leftContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    rightContainerText: {
        fontFamily: Styles.defaultFont,
        color : Colors.light.text,
    },

    titleText: {
        fontFamily: Styles.defaultFont,
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10,
        color: Colors.light.accent,
    },

    descriptionText: {
        fontFamily: Styles.defaultFont,
        fontSize: 12,
        marginLeft: 10,
        color: Colors.light.descriptionText,

    },
});

export const SelectCategoryButtonStylesDark = StyleSheet.create({
    settingRow: {
        width: '96%',
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomStartRadius: 2,
        borderColor: Colors.dark.dividerColor,
        backgroundColor: Colors.dark.settingsBG,
    },

    wrapper: {
        flex: 1,
        flexDirection: 'row',
    },

    leftContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    rightContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 20,
    },

    
    rightContainerText: {
        fontFamily: Styles.defaultFont,
        color : Colors.dark.text,
    },

    titleText: {
        fontFamily: Styles.defaultFont,
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10,
        color: Colors.dark.accent,
    },

    descriptionText: {
        fontFamily: Styles.defaultFont,
        fontSize: 12,
        marginLeft: 10,
        color: Colors.dark.descriptionText,

    },
});