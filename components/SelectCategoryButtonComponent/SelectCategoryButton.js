import React, { useContext } from 'react';
import { Text, View, TouchableNativeFeedback, TouchableHighlight, Platform } from 'react-native';
import { SelectCategoryButtonStylesDark, SelectCategoryButtonStylesLight } from '../SelectCategoryButtonComponent/SelectCategoryButtonStyles';
import { SettingsContext } from '../../Data/settingsContext';

export default SelectCategoryButton = props => {

    const { theme, push, country, category } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;
    const [currentCategory, setCurrentCategory] = category

    return (
            <>
            {Platform.OS === 'android' ?
            <View style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.settingRow : SelectCategoryButtonStylesDark.settingRow} >
                <TouchableNativeFeedback onPress={() => props.setCategoryModal(true)}>
                    <View style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.wrapper : SelectCategoryButtonStylesDark.wrapper}>
                        <View style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.leftContainer : SelectCategoryButtonStylesDark.leftContainer}>
                            <Text style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.titleText : SelectCategoryButtonStylesDark.titleText}>
                                {props.title}
                            </Text>
                            <Text style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.descriptionText : SelectCategoryButtonStylesDark.descriptionText}>
                                {props.description}
                            </Text>
                        </View>
                        <View style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.rightContainer : SelectCategoryButtonStylesDark.rightContainer}>
                            <Text style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.rightContainerText : SelectCategoryButtonStylesDark.rightContainerText}>
                                {currentCategory}
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </ View>
            :
            <TouchableHighlight onPress={() => {
                props.setCategoryModal(true)                
                props.setSettingsModalVisible(false)
                }}
                style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.iOSHighlight : SelectCategoryButtonStylesDark.iOSHighlight}
            >
                <View style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.wrapper : SelectCategoryButtonStylesDark.wrapper}>
                    <View style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.leftContainer : SelectCategoryButtonStylesDark.leftContainer}>
                        <Text style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.titleText : SelectCategoryButtonStylesDark.titleText}>
                            {props.title}
                        </Text>
                        <Text style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.descriptionText : SelectCategoryButtonStylesDark.descriptionText}>
                            {props.description}
                        </Text>
                    </View>
                    <View style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.rightContainer : SelectCategoryButtonStylesDark.rightContainer}>
                        <Text style={currentTheme === 'light' ? SelectCategoryButtonStylesLight.rightContainerText : SelectCategoryButtonStylesDark.rightContainerText}>
                            {currentCategory}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
            }
        </>
    );
};