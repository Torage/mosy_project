import { StyleSheet, Platform, } from 'react-native';
import { Colors } from '../../constants/colors';
import { Styles } from '../../constants/styles';

export const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        maxHeight: 50,
        minHeight: 55,
        marginTop: 0,
        elevation: 0.5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalView: {
        backgroundColor: 'white',
        //borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 20,
        width: 300,
        height: 480,
    },

    modalViewHeader:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    modalViewContent:{
        flex: 8,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.settingsBG,
    },

    modalViewFooter:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    modalIconContainer: {
        flex:1,
        marginRight:5,
    },

    modalTextContainer: {
        flex:8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalHeaderText:{
        fontFamily: Styles.defaultFont,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.accent,
    },

    modalFooterText:{
        fontFamily: Styles.defaultFont,
        fontSize: 14,
        color: Colors.secondary,
    },

    
});
