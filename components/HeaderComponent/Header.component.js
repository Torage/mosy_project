import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, Modal, Text, StatusBar, AsyncStorage, TextInput, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { HeaderStylesDark, HeaderStylesLight } from './Header.styles';
import Constants from 'expo-constants';
import ToggleButtonTheme from '../ToggleButtonComponent/ToggleButtonTheme';
import ToggleButtonPush from '../ToggleButtonComponent/ToggleButtonPush';
import ContactButton from '../ContactButtonComponent/ContactButton';
import { SettingsContext } from '../../Data/settingsContext';
import RNSmtpMailer from 'react-native-smtp-mailer';

export const HeaderComponent = props => {

    //global states
    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;

    //local States
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactSubject, setContactSubject] = useState("");
    const [contactMessage, setContactMessage] = useState("");

    //Modals
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);
    const [contactModalVisible, setContactModalVisible] = useState(false);

    const clearInputData = () => {
        setContactName("");
        setContactEmail("");
        setContactSubject("");
        setContactMessage("");
    }

    const sendInputData = () => {

        Alert.alert("todo send mail");
    }

    return (
        <SafeAreaView style={currentTheme === 'light' ? HeaderStylesLight.safeAreaView : HeaderStylesDark.safeAreaView}>
            <StatusBar barStyle={'light-content'} backgroundColor={currentTheme === 'light' ? Colors.light.statusBarBG : Colors.dark.statusBarBG} />
            <Modal //settings modal
                statusBarTranslucent='true'
                animationType='fade'
                transparent={true}
                visible={settingsModalVisible}
                onRequestClose={() => {
                    console.log('modal closed');
                }}
            >
                <View style={currentTheme === 'light' ? HeaderStylesLight.centeredView : HeaderStylesDark.centeredView}>
                    <View>
                        <View style={currentTheme === 'light' ? HeaderStylesLight.modalView : HeaderStylesDark.modalView}>
                            <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewHeader : HeaderStylesDark.modalViewHeader}>
                                <View style={currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}>
                                </View>
                                <View style={currentTheme === 'light' ? HeaderStylesLight.modalTextContainer : HeaderStylesDark.modalTextContainer}>
                                    <Text style={currentTheme === 'light' ? HeaderStylesLight.modalHeaderText : HeaderStylesDark.modalHeaderText} >Settings</Text>
                                </View>
                                <View style={currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}>
                                    <TouchableOpacity onPress={() => setSettingsModalVisible(!settingsModalVisible)}>
                                        <MaterialCommunityIcons name='close' color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent} size={24} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContent : HeaderStylesDark.modalViewContent}>
                                <ToggleButtonTheme title='Dark Theme' description='Change to the dark theme'></ToggleButtonTheme>
                                <ToggleButtonPush title='Push Notification' description='Enable Push Notification'></ToggleButtonPush>
                                <ContactButton title='Send Feedback' description='Feedback, Questions? Good send us a mail.' setContactModal={setContactModalVisible}></ContactButton>
                            </View>
                            <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewFooter : HeaderStylesDark.modalViewFooter}>
                                <Text style={currentTheme === 'light' ? HeaderStylesLight.modalFooterText : HeaderStylesDark.modalFooterText} >{Constants.manifest.name} {Constants.manifest.version}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal //contact modal
                statusBarTranslucent='true'
                animationType='fade'
                transparent={true}
                visible={contactModalVisible}
                onRequestClose={() => {
                    console.log('modal closed');
                }}
            >
                <View style={currentTheme === 'light' ? HeaderStylesLight.centeredView : HeaderStylesDark.centeredView}>
                    <View>
                        <View style={currentTheme === 'light' ? HeaderStylesLight.modalView : HeaderStylesDark.modalView}>
                            <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewHeader : HeaderStylesDark.modalViewHeader}>
                                <View style={currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}>
                                </View>
                                <View style={currentTheme === 'light' ? HeaderStylesLight.modalTextContainer : HeaderStylesDark.modalTextContainer}>
                                    <Text style={currentTheme === 'light' ? HeaderStylesLight.modalHeaderText : HeaderStylesDark.modalHeaderText} >Contact</Text>
                                </View>
                                <View style={currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}>
                                    <TouchableOpacity onPress={() => setContactModalVisible(!contactModalVisible)}>
                                        <MaterialCommunityIcons name='close' color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent} size={24} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContent : HeaderStylesDark.modalViewContent}>
                                <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputContainer : HeaderStylesDark.modalViewContentInputContainer}>
                                    <Text style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputText : HeaderStylesDark.modalViewContentInputText}>Name</Text>
                                    <TextInput
                                        style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInput : HeaderStylesDark.modalViewContentInput}
                                        onChangeText={text => setContactName(text)}
                                        value={contactName}
                                        placeholder={'Please enter your name:'}
                                        maxLength={32}
                                    />

                                </View>

                                <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputContainer : HeaderStylesDark.modalViewContentInputContainer}>
                                    <Text style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputText : HeaderStylesDark.modalViewContentInputText}>Email</Text>
                                    <TextInput
                                        style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInput : HeaderStylesDark.modalViewContentInput}
                                        onChangeText={text => setContactEmail(text)}
                                        value={contactEmail}
                                        placeholder={'Please enter your email:'}
                                        maxLength={64}
                                    />

                                </View>

                                <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputContainer : HeaderStylesDark.modalViewContentInputContainer}>
                                    <Text style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputText : HeaderStylesDark.modalViewContentInputText}>Subject</Text>
                                    <TextInput
                                        style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInput : HeaderStylesDark.modalViewContentInput}
                                        onChangeText={text => setContactSubject(text)}
                                        value={contactSubject}
                                        placeholder={'Please enter your subject:'}
                                        maxLength={32}
                                    />

                                </View>

                                <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputContainer : HeaderStylesDark.modalViewContentInputContainer}>
                                    <Text style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputText : HeaderStylesDark.modalViewContentInputText}>Message</Text>
                                    <TextInput
                                        style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputFull : HeaderStylesDark.modalViewContentInputFull}
                                        onChangeText={text => setContactMessage(text)}
                                        value={contactMessage}
                                        placeholder={'Please enter your message:'}
                                        maxLength={250}
                                    />

                                </View>
                            </View>
                            <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContactFooter : HeaderStylesDark.modalViewContactFooter}>
                                <TouchableOpacity onPress={() => clearInputData()}>
                                    <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewFooterButton : HeaderStylesDark.modalViewFooterButton}>
                                        <Text style={currentTheme === 'light' ? HeaderStylesLight.modalViewFooterButtonText : HeaderStylesDark.modalViewFooterButtonText}>Clear</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => sendInputData()}>
                                    <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewFooterButton : HeaderStylesDark.modalViewFooterButton}>
                                        <Text style={currentTheme === 'light' ? HeaderStylesLight.modalViewFooterButtonText : HeaderStylesDark.modalViewFooterButtonText}>Send</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={currentTheme === 'light' ? HeaderStylesLight.headerLeftContainer : HeaderStylesDark.headerLeftContainer}></View>
            <View style={currentTheme === 'light' ? HeaderStylesLight.headerMidContainer : HeaderStylesDark.headerMidContainer}>
                <Image style={{ width: 250, height: 30 }} source={currentTheme === 'light' ? require('../../assets/newscope_logo_light.png') : require('../../assets/newscope_logo_dark.png')} />
            </View>
            <View style={currentTheme === 'light' ? HeaderStylesLight.headerRightContainer : HeaderStylesDark.headerRightContainer}>
                <TouchableOpacity onPress={() => setSettingsModalVisible(!settingsModalVisible)}>
                    <MaterialCommunityIcons name='settings' color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent} size={26} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
