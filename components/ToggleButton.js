import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Switch } from 'react-native';
import { Styles } from '../constants/styles';
import { Colors } from '../constants/colors';
import { Divider } from 'react-native-elements';

export default ToggleButton = props => {

    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={styles.settingRow} >
            <TouchableNativeFeedback onPress={() => setIsEnabled(!isEnabled)}>
                <View style={styles.wrapper}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.titleText}>{props.title}</Text>
                        <Text style={styles.descriptionText}>{props.description}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Switch
                            trackColor={{ false: Colors.trackColorDisabled, true: Colors.accent }}
                            thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
                            ios_backgroundColor='#3e3e3e'
                            onValueChange={() => setIsEnabled(!isEnabled)}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>

    );

};

const styles = StyleSheet.create({
    settingRow: {
        width: '96%',
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomStartRadius: 2,
        borderColor: Colors.dividerColor,
    },

    wrapper: {
        flex: 1,
        flexDirection: 'row',
    },

    leftContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleText: {
        fontFamily: Styles.defaultFont,
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10,
    },

    descriptionText: {
        fontFamily: Styles.defaultFont,
        fontSize: 12,
        marginLeft: 10,

    }
});