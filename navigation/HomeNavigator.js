import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { SettingsContext } from '../Data/settingsContext';
import { Colors } from '../constants/colors';

import { useNavigation } from '@react-navigation/native';

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {

const navigation = useNavigation();

useEffect(() => {
    const unsubscribe = navigation.addListener('tabLongPress', e => {
      console.log('go somewhere');
      // navigation.navigate('ModalScreen')}
    });
  
    return unsubscribe;
  }, [navigation]);

    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;

    return (
        <HomeStack.Navigator
            headerMode='none'
            screenOptions={
                currentTheme === 'light'
                    ? { cardStyle: { backgroundColor: Colors.light.background } }
                    : { cardStyle: { backgroundColor: Colors.dark.background } }
            }
        >
            <HomeStack.Screen
                name='Home'
                options={
                    currentTheme === 'light'
                        ? { cardStyle: { backgroundColor: Colors.light.background } }
                        : { cardStyle: { backgroundColor: Colors.dark.background } }
                }
                component={HomeScreen}
            />
        </HomeStack.Navigator>
    );
};
