import { StyleSheet} from 'react-native';
import { Styles } from '../../constants/styles';
import { Colors} from '../../constants/colors';

export const SelectCountryStylesLight = StyleSheet.create({
    settingRow: {
        width: '96%',
        height: 40,
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
    
    selectContainer:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },

    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleText: {
        fontFamily: Styles.defaultFont,
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10,
        color: Colors.light.accent,
    },

    abbreviationText: {
        fontFamily: Styles.defaultFont,
        fontSize: 12,
        marginLeft: 10,
        color: Colors.light.descriptionText,

    },
});

export const SelectCountryStylesDark = StyleSheet.create({
    settingRow: {
        width: '96%',
        height: 40,
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
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    selectContainer:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },

    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleText: {
        fontFamily: Styles.defaultFont,
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10,
        color: Colors.dark.accent,
    },

    abbreviationText: {
        fontFamily: Styles.defaultFont,
        fontSize: 12,
        marginLeft: 10,
        color: Colors.dark.descriptionText,

    }
});