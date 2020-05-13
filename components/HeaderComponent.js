import React from 'react';
import { SafeAreaView, View, Image, Alert, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function HeaderComponent() {
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', maxHeight: 50, minHeight: 55, marginTop: 25 }}>
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
                    style={{ width: 50, height: 50 }}
                    source={require('../assets/icon.png')}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    paddingEnd: 10
                }}>
                <TouchableOpacity onPress={() => showSettings()}>
                    <MaterialCommunityIcons name="settings" color={'black'} size={30} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

function showSettings() {
    alert('Settings')
}