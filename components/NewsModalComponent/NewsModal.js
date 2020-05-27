import React, { useContext, useState, useEffect } from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SettingsContext } from '../../Data/settingsContext';
import { NewsModalStylesDark, NewsModalStylesLight } from './NewsModal.styles';
import { Colors } from '../../constants/colors';
import Constants from 'expo-constants';
export const NewsModalComponent = (props) => {
    const [modalVisible, setModalVisible] = useState(true);
    const [currentTheme, setCurrentTheme] = useContext(SettingsContext);

    return (
        <Modal animationType='fade' transparent={true} visible={modalVisible}>
            <View style={currentTheme === 'light' ? NewsModalStylesLight.centeredView : NewsModalStylesDark.centeredView}>
                <View style={currentTheme === 'light' ? NewsModalStylesLight.modalView : NewsModalStylesDark.modalView}>
                    <View style={currentTheme === 'light' ? NewsModalStylesLight.modalViewHeader : NewsModalStylesDark.modalViewHeader}>
                        <View
                            style={
                                currentTheme === 'light' ? NewsModalStylesLight.modalIconContainer : NewsModalStylesDark.modalIconContainer
                            }
                        ></View>
                        <View
                            style={
                                currentTheme === 'light' ? NewsModalStylesLight.modalTextContainer : NewsModalStylesDark.modalTextContainer
                            }
                        >
                            <Text
                                style={
                                    currentTheme === 'light' ? NewsModalStylesLight.modalHeaderText : NewsModalStylesDark.modalHeaderText
                                }
                            >
                                Settings
                            </Text>
                        </View>
                        <View
                            style={
                                currentTheme === 'light' ? NewsModalStylesLight.modalIconContainer : NewsModalStylesDark.modalIconContainer
                            }
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            >
                                <MaterialCommunityIcons
                                    name='close'
                                    color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                                    size={24}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={currentTheme === 'light' ? NewsModalStylesLight.modalViewContent : NewsModalStylesDark.modalViewContent}
                    ></View>
                    <View style={currentTheme === 'light' ? NewsModalStylesLight.modalViewFooter : NewsModalStylesDark.modalViewFooter}>
                        <Text style={currentTheme === 'light' ? NewsModalStylesLight.modalFooterText : NewsModalStylesDark.modalFooterText}>
                            {Constants.manifest.name} {Constants.manifest.version}{' '}
                        </Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
