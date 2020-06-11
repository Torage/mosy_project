import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableNativeFeedback, Switch, AsyncStorage } from 'react-native';
import { Colors } from '../../constants/colors';
import { SelectCategoryStylesDark, SelectCategoryStylesLight } from '../SelectCategoryButtonComponent/SelectCategoryStyles';
import { SettingsContext } from '../../Data/settingsContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default SelectCategory = (props) => {
  const { theme, push, country, category } = useContext(SettingsContext);
  const [currentTheme, setCurrentTheme] = theme;
  const [sendPushNotification, setSendPushNotification] = push;
  const [currentCountry, setCurrentCountry] = country;
  const [currentCategoryuntry, setCurrentCategory] = category;

  const changeCategory = () => {
    setCurrentCategory(props.name);
    AsyncStorage.setItem('CategorySetting', props.name);
    props.setCategoryModalVisible(false);
  };

  return (
    <View style={currentTheme === 'light' ? SelectCategoryStylesLight.settingRow : SelectCategoryStylesDark.settingRow}>
      <TouchableNativeFeedback onPress={() => changeCategory()}>
        <View style={currentTheme === 'light' ? SelectCategoryStylesLight.wrapper : SelectCategoryStylesDark.wrapper}>
          <View style={currentTheme === 'light' ? SelectCategoryStylesLight.leftContainer : SelectCategoryStylesDark.leftContainer}>
            <MaterialCommunityIcons
              style={currentTheme === 'light' ? SelectCategoryStylesLight.icon : SelectCategoryStylesDark.icon}
              name={props.iconName}
              color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
              size={26}
            />
          </View>
          <View style={currentTheme === 'light' ? SelectCategoryStylesLight.rightContainer : SelectCategoryStylesDark.rightContainer}>
            <Text style={currentTheme === 'light' ? SelectCategoryStylesLight.titleText : SelectCategoryStylesDark.titleText}>{props.name}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
