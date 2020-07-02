import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableHighlight, Switch, AsyncStorage } from 'react-native';
import { Colors } from '../../constants/colors';
import { ToggleButtonStylesDark, ToggleButtonStylesLight } from '../ToggleButtonComponent/ToggleButtonStyles';
import { SettingsContext } from '../../Data/settingsContext';
import {Appearance} from 'react-native-appearance';

export default ToggleButton = (props) => {

    const { theme, push, country, category, global } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;
    const [currentCategory, setCurrentCategory] = category
    const [toggleEnabled, setToggleEnabled] = useState(false);
    const [globalTheme, setGlobalTheme] = global;

    const changeToggleValue = (value) => {
        console.log('press');
        if(globalTheme === false){
            setToggleEnabled(value);
            if (value === true ? setCurrentTheme('dark') : setCurrentTheme('light'));
            AsyncStorage.setItem('DarkSkinSetting', JSON.stringify(value));
        }
    };

    const globalHandler = (value) => {
        console.log('Global Theming ' + value)
        setGlobalTheme(value);
        if (value === true){
            var toSwitch = Appearance.getColorScheme();
            setCurrentTheme(toSwitch);
            if(toSwitch === 'dark' ? setToggleEnabled(true):setToggleEnabled(false))
            AsyncStorage.setItem('GlobalThemeSetting', JSON.stringify(value));
        }
    };

//  Get current value
    useEffect(() => {
        AsyncStorage.getItem('DarkSkinSetting').then((storedValue) => {
            if (storedValue != null) {
                changeToggleValue(JSON.parse(storedValue));
            }
        });
    }, []);

    return (
        <View style={currentTheme === 'light' ? ToggleButtonStylesLight.settingRow : ToggleButtonStylesDark.settingRow}>
            <TouchableHighlight
                style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', width: '100%' }}
                underlayColor='transparent'
                onPress={() => changeToggleValue(!toggleEnabled)}
                onLongPress={() => globalHandler(!globalTheme)}
            >
                <View style={currentTheme === 'light' ? ToggleButtonStylesLight.wrapper : ToggleButtonStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? ToggleButtonStylesLight.leftContainer : ToggleButtonStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? ToggleButtonStylesLight.titleText : ToggleButtonStylesDark.titleText}>
                            {props.title}
                        </Text>
                        <Text
                            style={
                                currentTheme === 'light' ? ToggleButtonStylesLight.descriptionText : ToggleButtonStylesDark.descriptionText
                            }
                        >
                            {props.description}
                        </Text>
                    </View>
                    <View style={currentTheme === 'light' ? ToggleButtonStylesLight.rightContainer : ToggleButtonStylesDark.rightContainer}>
                        <Switch
                            trackColor={
                                currentTheme === 'light'
                                    ? { false: Colors.light.trackColorDisabled, true: Colors.light.accent }
                                    : { false: Colors.dark.trackColorDisabled, true: Colors.dark.accent }
                            }
                            thumbColor={toggleEnabled ? '#ffffff' : '#ffffff'}
                            ios_backgroundColor='#3e3e3e'
                            value={toggleEnabled}
                            onValueChange={() => changeToggleValue(!toggleEnabled)}
                        />
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    );
};
