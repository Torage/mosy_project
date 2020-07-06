import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SettingsContext } from '../../Data/settingsContext';
import { IconWithBadgeStylesDark, IconWithBadgeStylesLight } from './IconWithBadgeStyles';


export const IconWithBadge = (props) => {

    // Global states
    const { theme} = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;

    // Return icon with counting badge based on props.data.length
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