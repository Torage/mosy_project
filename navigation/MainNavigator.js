import React, { useContext } from 'react';
import {StatusBar} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import { TabNavigator } from './TabNavigator';
import { ModalScreen } from '../screens/ModalScreen/ModalScreen';
import { HeaderComponent } from '../components/HeaderComponent/Header.component';
import { Colors } from '../constants/colors';
import { Styles } from '../constants/styles';
import { SettingsContext } from '../Data/settingsContext';


const RootStack = createStackNavigator();

export const MainNavigator = () => {

    const { theme} = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;

    function RootStackScreen() {

        return(
          <RootStack.Navigator mode="modal" headerMode="none" initialRouteName='Tab'>
            <RootStack.Screen name="Tab" component={TabNavigator}/>
            <RootStack.Screen name="MyModal" component={ModalScreen} />
          </RootStack.Navigator>
        )
    }

    return(
        <NavigationContainer
            theme={
                currentTheme === 'light' 
                ? { colors: { background: Colors.light.background } } 
                : { colors: { background: Colors.dark.background } } }>
            <StatusBar 
            barStyle='light-content' 
            backgroundColor={currentTheme === 'light' 
                ? Colors.light.statusBarBG 
                : Colors.dark.statusBarBG} />
            <HeaderComponent />
            <RootStackScreen/>
        </NavigationContainer>
    )

}
  

  
