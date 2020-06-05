import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { Styles } from '../../constants/styles';

export const searchStyles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
    },
    mainView: {
        backgroundColor: Colors.light.background,
        width: 350,
        borderRadius: 20,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginVertical: 15,
        padding: 10,
    },
    titleView: {
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    titleText: {
        textAlign: 'center',
        fontFamily: Styles.secondFont,
        fontSize: 30,
        color: Colors.light.titleText,
    },
    inputStyle: {
        padding: 0,
        margin: 0,
        backgroundColor: '#FFF',
        color: '#222',
    },
    btnContainer: {
        backgroundColor: Colors.light.accent,
        borderRadius: 10,
        marginHorizontal: 40,
        marginTop: 10,
        borderRadius: 10,
        shadowColor: 'darkgrey',
        shadowOpacity: 0.16,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 10,
    },
    btnText:{
        textAlign: "center",
        color: Colors.light.buttonText,
        fontSize: 18,
        fontWeight: '400',
        padding: 10,
    },
});
