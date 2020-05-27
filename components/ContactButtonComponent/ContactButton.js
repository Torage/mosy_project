import React, { useContext } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { ContactButtonStylesDark, ContactButtonStylesLight } from '../ContactButtonComponent/ContactButtonStyles';
import { SettingsContext } from '../../Data/settingsContext';

export default ContactButton = (props) => {
    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;

    return (
        <View style={currentTheme === 'light' ? ContactButtonStylesLight.settingRow : ContactButtonStylesDark.settingRow}>
            <View
                style={currentTheme === 'light' ? ContactButtonStylesLight.modalContainer : ContactButtonStylesDark.modalContainer}
            ></View>
            <TouchableHighlight
                style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', width: '100%' }}
                underlayColor='transparent'
                onPress={() => props.setContactModal(true)}
            >
                <View style={currentTheme === 'light' ? ContactButtonStylesLight.wrapper : ContactButtonStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? ContactButtonStylesLight.leftContainer : ContactButtonStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? ContactButtonStylesLight.titleText : ContactButtonStylesDark.titleText}>
                            {props.title}
                        </Text>
                        <Text
                            style={
                                currentTheme === 'light'
                                    ? ContactButtonStylesLight.descriptionText
                                    : ContactButtonStylesDark.descriptionText
                            }
                        >
                            {props.description}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    );
};
