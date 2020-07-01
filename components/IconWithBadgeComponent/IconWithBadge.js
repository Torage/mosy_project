import React, { useContext, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Share, Modal, SafeAreaView, AsyncStorage, Alert } from 'react-native';
import { Colors } from '../../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SettingsContext } from '../../Data/settingsContext';
import { NewsContext } from '../../Data/newsContext';
import { IconWithBadgeStylesDark, IconWithBadgeStylesLight } from './IconWithBadgeStyles';
import Constants from 'expo-constants';
import NewsCard from '../../Models/NewscardModel';
import { color } from 'react-native-reanimated';

export const IconWithBadge = (props) => {

    const { theme} = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;


    return (
        <View style={{ width: 24, height: 24, margin: 0 }}>
          <MaterialCommunityIcons name={props.iconName} color={props.iconColor} size={props.iconSize} />
          {props.data.length > 0 && (
            <View
              style={currentTheme === 'light' ? IconWithBadgeStylesLight.IconBadgeContainer : IconWithBadgeStylesDark.IconBadgeContainer}
            >
              <Text style={[currentTheme === 'light' ? IconWithBadgeStylesLight.iconBadgeText : IconWithBadgeStylesDark.iconBadgeText,{color: props.iconColor,fontSize: 10, }]}>
                {props.data.length}
              </Text>
            </View>
          )}
        </View>
      );
      
};