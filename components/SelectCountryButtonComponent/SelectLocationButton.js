import React, { useContext } from 'react';
import { TouchableNativeFeedback, View, StyleSheet, AsyncStorage, Text, Alert } from 'react-native';
import { SettingsContext } from '../../Data/settingsContext';
import { FontAwesome } from '@expo/vector-icons';

import { Styles } from '../../constants/styles';
import { Colors } from '../../constants/colors';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';


export default SelectCountryButton = props => {

    const { location, theme }  = useContext(SettingsContext);
    const [currentLocation, setCurrentLocation] = location;
    const [currentTheme, setCurrentTheme] = theme;

    const getLocation = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission){
            return;
            // error handling
        }
        try {
            const location = await Location.getCurrentPositionAsync({timeout: 5000}).then((answer) => {
                console.log('loading position ...');
                let fetchedPosition = { coords: { latitude: answer.coords.latitude, longitude: answer.coords.longitude } };
                setCurrentLocation(fetchedPosition);
            });
        } catch (error) {
            Alert.alert('Cant get location', 'try again', [{title: 'ok'}]);
        }
    };

    
const verifyPermissions = async () =>{
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if(result.status !== 'granted'){
      console.log('no');
        return false;
    } else {
      return true;
    }
  };

    const locationHandler = () => {
        getLocation();
        props.setCountryModalVisible(false);
    }

    return(
        <View style={styles.settingsRow} >
        <TouchableNativeFeedback onPress={() => locationHandler()}>
            <View style={styles.wrapper}>
                <View style={styles.left}>
                    <Text style={styles.text}>Get your current position</Text>
                </View>
                <View style={styles.right}>
                    <FontAwesome 
                        name="map-marker" 
                        size={24} 
                        color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                        />
                </View>
            </View>
        </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    settingsRow: {
        width: '96%',
        marginVertical: 5,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.dark.dividerColor,
        backgroundColor: Colors.dark.background,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
    },
        left:{
            flex: 4,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        right:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text:{
            fontFamily: Styles.defaultFont,
            fontWeight: 'bold',
            fontSize: 14,
            marginLeft: 10,
            color: Colors.dark.accent,
        },

});
