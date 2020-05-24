import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, Modal, Text, StatusBar, AsyncStorage } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { HeaderStylesDark, HeaderStylesLight } from './Header.styles';
import Constants from 'expo-constants';
import ToggleButton from '../ToggleButtonComponent/ToggleButton';

export const HeaderComponent = props => {

    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <SafeAreaView style={props.currentTheme === 'light' ? HeaderStylesLight.safeAreaView : HeaderStylesDark.safeAreaView}>
            <StatusBar barStyle={'light-content'} backgroundColor={props.currentTheme === 'light' ? Colors.light.statusBarBG : Colors.dark.statusBarBG} />
            <Modal
                statusBarTranslucent='true'
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    console.log('modal closed');
                }}
            >
                <View style={props.currentTheme === 'light' ? HeaderStylesLight.centeredView : HeaderStylesDark.centeredView}>
                    <View>
                        <View style={props.currentTheme === 'light' ? HeaderStylesLight.modalView : HeaderStylesDark.modalView}>
                            <View style={props.currentTheme === 'light' ? HeaderStylesLight.modalViewHeader : HeaderStylesDark.modalViewHeader}>
                                <View style={props.currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}>
                                </View>
                                <View style={props.currentTheme === 'light' ? HeaderStylesLight.modalTextContainer : HeaderStylesDark.modalTextContainer}>
                                    <Text style={props.currentTheme === 'light' ? HeaderStylesLight.modalHeaderText : HeaderStylesDark.modalHeaderText} >Settings</Text>
                                </View>
                                <View style={props.currentTheme === 'light' ? HeaderStylesLight.modalIconContainer: HeaderStylesDark.modalIconContainer}>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        <MaterialCommunityIcons name='close' color={props.currentTheme === 'light' ? Colors.light.accent: Colors.dark.accent} size={24} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={props.currentTheme === 'light' ? HeaderStylesLight.modalViewContent : HeaderStylesDark.modalViewContent}>
                               <ToggleButton title='Dark Theme' description='Change to the dark theme' toggleValue={props.toggleValue} toggleOnPress={props.toggleOnPress} currentTheme={props.currentTheme}></ToggleButton>
                            </View>
                            <View style={props.currentTheme === 'light' ? HeaderStylesLight.modalViewFooter : HeaderStylesDark.modalViewFooter}>
                                <Text style={props.currentTheme === 'light' ? HeaderStylesLight.modalFooterText : HeaderStylesDark.modalFooterText} >{Constants.manifest.name} {Constants.manifest.version} </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={props.currentTheme === 'light' ? HeaderStylesLight.headerLeftContainer : HeaderStylesDark.headerLeftContainer}></View>
            <View style={props.currentTheme === 'light' ? HeaderStylesLight.headerMidContainer : HeaderStylesDark.headerMidContainer}>
                <Image style={{ width: 250, height: 30 }} source={ props.currentTheme === 'light' ? require('../../assets/newscope_logo_light.png') : require('../../assets/newscope_logo_dark.png')} />
            </View>
            <View style={props.currentTheme === 'light' ? HeaderStylesLight.headerRightContainer : HeaderStylesDark.headerRightContainer}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <MaterialCommunityIcons name='settings' color={props.currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent} size={26} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
