import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { Styles } from '../../constants/styles';

export const SearchScreenStylesLight = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.light.background,
        justifyContent: 'flex-start',
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
    modalViewContactFooter: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    filter: {
        paddingTop: 0,
    },
    searchInputView: {
        marginTop: 10,
        marginHorizontal: '10%',
    },
    searchInput: {},
    searchInputText: {
        marginBottom: 0,
        color: Colors.light.accent,
        fontFamily: Styles.defaultFont,
    },
    description: {
        color: Colors.light.categoryColor,
        fontFamily: Styles.defaultFont,
        textTransform: 'uppercase',
        fontSize: 12,
        marginVertical: 15,
    },
    extendedSearchView: {
        margin: 0,
    },
    extendedSearchButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "center"
    },
    extendedSearchText: {
        paddingLeft: 5,
        color: Colors.light.categoryColor,
        fontFamily: Styles.defaultFont,
        textTransform: 'uppercase',
        fontSize: 17,
        marginVertical: 15,
    },
    sortView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    sortFilter: {
        backgroundColor: Colors.light.primary,
        borderRadius: 10,
        textAlign: 'center',
    },
    sortFilter2: {
        backgroundColor: Colors.light.secondary,
        borderRadius: 10,
        textAlign: 'center',
    },
    sortButtonText: {
        color: Colors.light.text,
        fontFamily: Styles.defaultFont,
        fontSize: 15,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    inputView: {
        marginHorizontal: '10%',
    },
    input: {},
    inputText: {
        color: Colors.light.accent,
        fontFamily: Styles.defaultFont,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    button: {
        backgroundColor: Colors.light.primary,
        borderRadius: 10,
    },
    buttonText: {
        color: Colors.light.text,
        fontFamily: Styles.defaultFont,
        fontSize: 15,
        paddingVertical: 5,
        paddingHorizontal: 15,
        textAlign: 'center',
    },
});

export const SearchScreenStylesDark = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        justifyContent: 'flex-start',
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
    modalViewContactFooter: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    filter: {
        paddingTop: 0,
    },
    searchInputView: {
        marginTop: 10,
        marginHorizontal: '10%',
    },
    searchInput: {},
    searchInputText: {
        marginBottom: 0,
        color: Colors.dark.accent,
        fontFamily: Styles.defaultFont,
    },
    description: {
        color: Colors.dark.categoryColor,
        fontFamily: Styles.defaultFont,
        textTransform: 'uppercase',
        fontSize: 12,
        marginVertical: 15,
    },
    extendedSearchView: {
        margin: 0,
    },
    extendedSearchButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "center"
    },
    extendedSearchText: {
        paddingLeft: 5,
        color: Colors.dark.categoryColor,
        fontFamily: Styles.defaultFont,
        textTransform: 'uppercase',
        fontSize: 17,
        marginVertical: 15,
    },
    sortView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    sortFilter: {
        backgroundColor: Colors.dark.primary,
        borderRadius: 10,
        textAlign: 'center',
    },
    sortFilter2: {
        backgroundColor: Colors.dark.secondary,
        borderRadius: 10,
        textAlign: 'center',
    },
    sortButtonText: {
        color: Colors.dark.text,
        fontFamily: Styles.defaultFont,
        fontSize: 15,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    inputView: {
        marginHorizontal: '10%',
    },
    input: {},
    inputText: {
        color: Colors.dark.accent,
        fontFamily: Styles.defaultFont,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    button: {
        backgroundColor: Colors.dark.primary,
        borderRadius: 10,
    },
    buttonText: {
        color: Colors.dark.text,
        fontFamily: Styles.defaultFont,
        fontSize: 15,
        paddingVertical: 5,
        paddingHorizontal: 15,
        textAlign: 'center',
    },
});