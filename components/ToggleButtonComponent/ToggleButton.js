import React, { useState, useEffect } from 'react';
import { Text, View, TouchableNativeFeedback, Switch, AsyncStorage } from 'react-native';
import { Colors } from '../../constants/colors';
import { ToggleButtonStylesDark, ToggleButtonStylesLight } from '../ToggleButtonComponent/ToggleButtonStyles';

export default ToggleButton = props => {


    const changeToggleValue = value => {
        setToggleEnabled(value);
        AsyncStorage.setItem('DarkSkinSetting', JSON.stringify(value));

        if (value === true ? setCurrentTheme('dark') : setCurrentTheme('light'));

    }


    const [toggleEnabled, setToggleEnabled] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('light');

    //get the value from async storage, if data in set the toogle, else, write the toggle value to the async storage
    useEffect(() => {
        AsyncStorage.getItem('DarkSkinSetting').then(storedValue => {
            if (storedValue != null) {
                console.log(storedValue);
                setToggleEnabled(JSON.parse(storedValue));

                if (JSON.parse(storedValue) === true ? setCurrentTheme('dark') : setCurrentTheme('light'));
            }
        });

    }, []);



    return (
        <View style={currentTheme === 'light' ? ToggleButtonStylesLight.settingRow : ToggleButtonStylesDark.settingRow} >
            <TouchableNativeFeedback onPress={() => changeToggleValue(!toggleEnabled)}>
                <View style={currentTheme === 'light' ? ToggleButtonStylesLight.wrapper : ToggleButtonStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? ToggleButtonStylesLight.leftContainer : ToggleButtonStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? ToggleButtonStylesLight.titleText : ToggleButtonStylesDark.titleText}>{props.title}</Text>
                        <Text style={currentTheme === 'light' ? ToggleButtonStylesLight.descriptionText : ToggleButtonStylesDark.descriptionText}>{props.description}</Text>
                    </View>
                    <View style={currentTheme === 'light' ? ToggleButtonStylesLight.rightContainer : ToggleButtonStylesDark.rightContainer}>
                        <Switch
                            trackColor={{ false: Colors.dark.trackColorDisabled, true: Colors.dark.accent }}
                            thumbColor={toggleEnabled ? '#ffffff' : '#ffffff'}
                            ios_backgroundColor='#3e3e3e'
                            value={toggleEnabled}
                            onValueChange={() => changeToggleValue(!toggleEnabled)}
                        />
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>

    );

};