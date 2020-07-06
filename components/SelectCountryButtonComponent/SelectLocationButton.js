import React, { useContext } from 'react';
import { TouchableNativeFeedback, TouchableHighlight, View, Text, Alert, Platform } from 'react-native';
import { SettingsContext } from '../../Data/settingsContext';
import { FontAwesome } from '@expo/vector-icons';
import { SelectLocationButtonStylesLight, SelectLocationButtonStylesDark} from './SelectLocationButtonStyles';
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
            Alert.alert('Permission denied', "Can't access location service", [{title: 'ok'}]);
            return;
        }
        try {
            const location = await Location.getCurrentPositionAsync({timeout: 5000}).then((answer) => {
                console.log('loading position ...');
                let fetchedPosition = { coords: { latitude: answer.coords.latitude, longitude: answer.coords.longitude } };
                setCurrentLocation(fetchedPosition);
            });
        } catch (error) {
            Alert.alert("Can't get location", 'try again', [{title: 'ok'}]);
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
        <>
        {Platform.OS === 'android' ?
        <View style={currentTheme === 'light' ? SelectLocationButtonStylesLight.settingsRow : SelectLocationButtonStylesDark.settingsRow} >
        <TouchableNativeFeedback onPress={() => locationHandler()}>
            <View style={currentTheme === 'light' ? SelectLocationButtonStylesLight.wrapper : SelectLocationButtonStylesDark.wrapper}>
                <View style={currentTheme === 'light' ? SelectLocationButtonStylesLight.left : SelectLocationButtonStylesDark.left}>
                    <Text style={currentTheme === 'light' ? SelectLocationButtonStylesLight.text : SelectLocationButtonStylesDark.text}>Get your current position</Text>
                </View>
                <View style={currentTheme === 'light' ? SelectLocationButtonStylesLight.right : SelectLocationButtonStylesDark.right}>
                    <FontAwesome 
                        name="map-marker" 
                        size={24} 
                        color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                        />
                </View>
            </View>
        </TouchableNativeFeedback>
        </View>
        :
        <TouchableHighlight 
            onPress={() => locationHandler()}
            style={currentTheme === 'light' ? SelectLocationButtonStylesLight.iOSHighlight : SelectLocationButtonStylesDark.iOSHighlight}
            >
            <View style={currentTheme === 'light' ? SelectLocationButtonStylesLight.wrapper : SelectLocationButtonStylesDark.wrapper}>
                <View style={currentTheme === 'light' ? SelectLocationButtonStylesLight.left : SelectLocationButtonStylesDark.left}>
                    <Text style={currentTheme === 'light' ? SelectLocationButtonStylesLight.text : SelectLocationButtonStylesDark.text}>Get your current position</Text>
                </View>
                <View style={currentTheme === 'light' ? SelectLocationButtonStylesLight.right : SelectLocationButtonStylesDark.right}>
                    <FontAwesome 
                        name="map-marker" 
                        size={24} 
                        color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                        />
                </View>
            </View>
        </TouchableHighlight>
        }
        </>
    );
}
