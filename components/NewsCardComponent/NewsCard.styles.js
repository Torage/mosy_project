import Colors from '../../constants/colors'

export default {
    mainView: {
        backgroundColor: Colors.backgroundColor,
        height: 300,
        width: 350,
        borderRadius: 20,
        elevation: 10,

    },
    categoryView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        backgroundColor: 'transparent',
    },
    categoryText: {
        color: Colors.accent,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
        fontFamily: 'Roboto-Regular'
    },
    icons: {
        flexDirection: 'row',
        // backgroundColor:'red'
    },
    titleView: {
        paddingLeft: 15,
        paddingRight: 15,
        // backgroundColor:'red'
    },
    titleText: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 17,
        color: Colors.primary
    },
    descriptionView: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    descriptionText: {
        color: Colors.text,
        fontFamily: 'NoyhRBlack',
        includeFontPadding: false,
        lineHeight: 13,
        fontSize: 14,
        // textAlign:'justify'
        letterSpacing: 1
    },
    imageView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor: 'red'
    }, image: {
        maxHeight: 170,
        maxWidth: 325,
        borderRadius: 20
    }
}