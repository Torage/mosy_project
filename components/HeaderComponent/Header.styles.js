import { StyleSheet, Platform, } from 'react-native';
import { Colors } from '../../constants/colors';
import { Styles } from '../../constants/styles';

export const HeaderStylesLight = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.background,
        maxHeight: 50,
        minHeight: 55,
        marginTop: 0,
        elevation: 0.5,
    },

    headerLeftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    headerMidContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    headerRightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalView: {
        backgroundColor: Colors.light.settingsBG,
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

    modalViewHeader: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    modalViewContent: {
        flex: 8,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.light.settingsBG,
    },

    modalViewContentInput: {
        width: 250,
        height: 30,
        paddingTop: 4,
        paddingLeft: 6,
        paddingBottom: 2,
        color: Colors.light.text,
        borderWidth:1,
        borderRadius:10,
        borderColor: Colors.light.accent,
    },

    modalViewContentInputFull: {
        width: 250,
        height: 150,
        paddingTop: 4,
        paddingLeft: 6,
        paddingBottom: 115,
        color: Colors.light.text,
        borderWidth:1,
        borderRadius:10,
        borderColor: Colors.light.accent,
    },

    modalViewContentInputContainer: {

    },

    modalViewContentInputText: {
        paddingTop: 12,
        fontFamily: Styles.defaultFont,
        color: Colors.light.accent,
        paddingLeft: 6,

    },

    modalViewFooter: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderTopWidth: 1,
        borderColor: Colors.light.dividerColor,
    },

    modalViewContactFooter: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    modalIconContainer: {
        flex: 1,
        marginRight: 5,
    },

    modalTextContainer: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light.settingsBG,
    },

    modalHeaderText: {
        fontFamily: Styles.defaultFont,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light.accent,
    },

    modalFooterText: {
        fontFamily: Styles.defaultFont,
        fontSize: 14,
        color: Colors.light.versionColor,
    },

    modalViewFooterButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 122,
        height: 32,
        marginHorizontal: 4,
        marginBottom: 10,
        backgroundColor: Colors.light.accent,
        borderRadius: 10,
    },

    modalViewFooterButtonText: {
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.light.buttonText,
        textTransform: 'uppercase',

    },


});


export const HeaderStylesDark = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark.background,
        maxHeight: 50,
        minHeight: 55,
        marginTop: 0,
        elevation: 0.5,
    },

    headerLeftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: Colors.dark.background,
    },

    headerMidContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    headerRightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalView: {
        backgroundColor: Colors.dark.settingsBG,
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

    modalViewHeader: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    modalViewContent: {
        flex: 8,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.dark.settingsBG,
    },

    modalViewContentInput: {
        width: 250,
        height: 30,
        paddingTop: 4,
        paddingLeft: 6,
        paddingBottom: 2,
        color: Colors.dark.text,
        borderWidth:1,
        borderRadius:10,
        borderColor: Colors.dark.accent,
    },

    modalViewContentInputFull: {
        width: 250,
        height: 150,
        paddingTop: 4,
        paddingLeft: 6,
        paddingBottom: 115,
        color: Colors.dark.text,
        borderWidth:1,
        borderRadius:10,
        borderColor: Colors.dark.accent,
    },

    modalViewContentInputContainer: {

    },

    modalViewContentInputText: {
        paddingTop: 12,
        fontFamily: Styles.defaultFont,
        color: Colors.dark.accent,
        paddingLeft: 6,

    },

    modalViewFooter: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderTopWidth: 1,
        borderColor: Colors.dark.dividerColor,
    },

    modalViewContactFooter: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    modalIconContainer: {
        flex: 1,
        marginRight: 5,
    },

    modalTextContainer: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.dark.settingsBG,
    },

    modalHeaderText: {
        fontFamily: Styles.defaultFont,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.dark.accent,
    },

    modalFooterText: {
        fontFamily: Styles.defaultFont,
        fontSize: 14,
        color: Colors.dark.versionColor,
    },

    modalViewFooterButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 122,
        height: 32,
        marginHorizontal: 4,
        marginBottom: 10,
        backgroundColor: Colors.dark.accent,
        borderRadius: 10,
    },

    modalViewFooterButtonText: {
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.dark.buttonText,
        textTransform: 'uppercase',

    },


});

