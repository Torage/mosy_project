import React, { useState } from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, Modal, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { styles } from './Header.styles';
import Constants from 'expo-constants';
import ToggleButton from '../ToggleButtonComponent/ToggleButton';

export function HeaderComponent() {
    
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.statusBarBG} />
            <Modal
                statusBarTranslucent='true'
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    console.log('modal closed');
                }}
            >
                <View style={styles.centeredView}>
                    <View>
                        <View style={styles.modalView}>
                            <View style={styles.modalViewHeader}>
                                <View style={styles.modalIconContainer}>
                                </View>
                                <View style={styles.modalTextContainer}>
                                    <Text style={styles.modalHeaderText} >Settings</Text>
                                </View>
                                <View style={styles.modalIconContainer}>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        <MaterialCommunityIcons name='close' color={'black'} size={24} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.modalViewContent}>
                               <ToggleButton title='Dark Theme' description='Change to the dark theme'></ToggleButton>
                            </View>
                            <View style={styles.modalViewFooter}>
                                <Text style={styles.modalFooterText} >{Constants.manifest.name} {Constants.manifest.version} </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                }}
            ></View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingStart: 10,
                }}
            >
                <Image style={{ width: 250, height: 30 }} source={require('../../assets/newscope_logo.png')} />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    paddingEnd: 10,
                }}
            >
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <MaterialCommunityIcons name='settings' color={Colors.secondary} size={26} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
