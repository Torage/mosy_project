import { StyleSheet, StatusBar } from 'react-native';
import { Colors } from '../../constants/colors';
import { Styles } from '../../constants/styles';

import {Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height) - StatusBar.currentHeight ;

export const NewsModalStylesLight = StyleSheet.create({
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
        backgroundColor: Colors.light.background,
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
        width: screenWidth,
        height: screenHeight,
    },

    modalViewHeader: {
        // flex: 1,
        width: '100%',
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: Colors.light.settingsBG,
    },

    modalViewContent: {
        flex: 8,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.light.settingsBG,
    },

    modalViewFooter: {
        // flex: 1,
        width: '100%',
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        backgroundColor: Colors.light.settingsBG,
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

    modalFooterText: {
        fontFamily: Styles.defaultFont,
        fontSize: 14,
        color: Colors.light.versionColor,
    },
});

export const NewsModalStylesDark = StyleSheet.create({
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
        width: screenWidth,
        height: screenHeight,
    },

    modalViewHeader: {
        // flex: 1,
        width: '100%',
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //borderTopRightRadius: 20,
        //borderTopLeftRadius: 20,
        backgroundColor: Colors.dark.settingsBG,
    },

    modalViewContent: {
        flex: 8,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.dark.settingsBG,
    },

    modalViewFooter: {
        // flex: 1,
        width: '100%',
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        backgroundColor: Colors.dark.settingsBG,
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

    modalFooterText: {
        fontFamily: Styles.defaultFont,
        fontSize: 14,
        color: Colors.dark.versionColor,
    },
});
