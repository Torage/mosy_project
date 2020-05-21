import React, { useState } from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { SettingsScreen } from '../../screens/SettingsScreen/SettingsScreen';
import { styles } from './Header.styles';

export function HeaderComponent() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={styles.safeAreaView}>
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
                            <View style={styles.modalIcon}>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                    <MaterialCommunityIcons name='close' color={'black'} size={20} />
                                </TouchableOpacity>
                            </View>
                            <SettingsScreen />
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
                    <MaterialCommunityIcons name='settings' color={Colors.secondary} size={30} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
