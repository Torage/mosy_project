import React, { useState } from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/colors'
import SettingsScreen from '../screens/SettingsScreen';


export function HeaderComponent() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={styles.SafeAreaView}>
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
                }}>
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingStart: 10
                }}>
                <Image
                    style={{ width: 250, height: 30 }}
                    source={require('../assets/newscope_logo.png')}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    paddingEnd: 10
                }}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <MaterialCommunityIcons name='settings' color={Colors.accent} size={30} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.lightBackground,
        maxHeight: 50,
        minHeight: 55,
        marginTop: 25,
        elevation: 0.5

    },
    modalIcon: {
        flex: 1,
        left: 165,
        top: 10,
        position: 'absolute',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 200,
        height: 400,

    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
});