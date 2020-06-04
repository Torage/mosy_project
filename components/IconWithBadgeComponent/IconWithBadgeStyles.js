import { StyleSheet } from 'react-native';
import { Styles } from '../../constants/styles';
import { Colors } from '../../constants/colors';

export const IconWithBadgeStylesLight = StyleSheet.create({

    IconBadgeContainer: {
        position: 'absolute',
        right: -3,
        top: 0,
        backgroundColor: Colors.light.background,
        borderRadius: 6,
        width: 12,
        height: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconBadgeText:{
        fontFamily: Styles.defaultFont,
        fontSize: 10, 
        fontWeight: 'bold' ,
        marginBottom: 2,
    }



});

export const IconWithBadgeStylesDark = StyleSheet.create({

    IconBadgeContainer: {
        position: 'absolute',
        right: -3,
        top: 0,
        backgroundColor: Colors.dark.background,
        borderRadius: 6,
        width: 12,
        height: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconBadgeText:{
        fontFamily: Styles.defaultFont,
        fontSize: 10, 
        fontWeight: 'bold' ,
        marginBottom: 2,
    }

});
