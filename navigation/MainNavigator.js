import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderComponent } from '../components/HeaderComponent/Header.component';
import { HomeNavigator } from './HomeNavigator';
import { FavoritesNavigator } from './FavoritesNavigator';
import { SearchNavigator } from './SearchNavigator';
import { Colors } from '../constants/colors';
import { Styles } from '../constants/styles';
import { SettingsContext } from '../Data/settingsContext';
import { NewsContext } from '../Data/newsContext';
import { IconWithBadge } from '../components/IconWithBadgeComponent/IconWithBadge';

const Tab = createMaterialTopTabNavigator();
export const MainNavigator = () => {

    // Global states
    const { theme, push } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;

    const { topNews, favoriteNews } = useContext(NewsContext);
    const [newsData, setNewsData] = topNews;
    const [favoriteData, setFavoriteData] = favoriteNews;

    // Return tabNavigator with icons and header. favoriteTab with badgeIcon  init = HomeNavigator
    return (
        <NavigationContainer
            theme={
                currentTheme === 'light' ? { colors: { background: Colors.light.background } } : { colors: { background: Colors.dark.background } }
            }
        >
            <StatusBar barStyle='light-content' backgroundColor={currentTheme === 'light' ? Colors.light.statusBarBG : Colors.dark.statusBarBG}/>
            <HeaderComponent />
            <Tab.Navigator
                initialRouteName='Home'
                tabBarPosition='bottom'
                tabBarOptions={{
                    labelStyle: {
                        fontSize: 10,
                        fontFamily: Styles.defaultFont,
                        alignSelf: 'center',
                    },
                    style: currentTheme === 'light' ? { backgroundColor: Colors.light.background } : { backgroundColor: Colors.dark.background },
                    showIcon: true,
                    showLabel: true,
                    activeTintColor: currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent,
                    inactiveTintColor: currentTheme === 'light' ? Colors.light.secondary : Colors.dark.secondary,
                }}
            >
                <Tab.Screen
                    name='Favorites'
                    component={FavoritesNavigator}
                    options={{
                        tabBarLabel: 'Favorites',
                        tabBarIcon: ({ color }) => <IconWithBadge iconName={'bookmark-check'} iconColor={color} iconSize={26} data={favoriteData} />,
                    }}
                />
                <Tab.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        tabBarLabel: 'home',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name='home' color={color} size={26} />,
                    }}
                    initialParams
                />
                <Tab.Screen
                    name='Search'
                    component={SearchNavigator}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name='magnify' color={color} size={26} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
