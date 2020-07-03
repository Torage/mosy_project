import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export const fullWidth = Dimensions.get('window').width;
export const fullHeight = Dimensions.get('window').height;

const baseStyles = {
    viewContainer: {
        flex: 1,
        alignItems: 'center',
    },
    
    categoryView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
    },
    
    icons: {
        flexDirection: 'row',
        paddingTop: 4,
    },
    
    titleView: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    
    descriptionView: {
        paddingLeft: 15,
        paddingRight: 15,
    },

    imageView: {
        alignItems:'center',
        justifyContent:'center',
        marginTop: 10,
    },
    image: {
        resizeMode:'cover',
        overflow: 'hidden',
        height: 170,
        width: fullWidth - 52,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
};

export default function createStyles(overrides = {}) {
    return StyleSheet.create({...baseStyles, ...overrides})
  }