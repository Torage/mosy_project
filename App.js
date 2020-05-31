import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { MainNavigator } from './navigation/MainNavigator';
import { DUMMY_TOPNEWS } from './Data/data';
import { NewsContext } from './Data/newsContext';
import { Topnews } from './Models/TopnewsModel';
import { SettingsContext } from './Data/settingsContext';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { COUNTRIES } from './Data/countrys';

export default function App() {

    const countries = COUNTRIES;

    const [newsData, setNewsData] = useState({
        liveTopnews: DUMMY_TOPNEWS,
    });
    const [currentTheme, setCurrentTheme] = useState('light');
    const [sendPushNotification, setSendPushNotification] = useState(false);
    const [currentCountry, setCurrentCountry] = useState('US');
    const [currentLocation, setCurrentLocation] = useState({ coords: { latitude: 0, longitude: 0 } });

    useEffect(() => {
        AsyncStorage.getItem('DarkSkinSetting').then((storedValue) => {
            if (storedValue != null) {
                if (JSON.parse(storedValue) === true ? setCurrentTheme('dark') : setCurrentTheme('light'));
            }
        });

        AsyncStorage.getItem('PushSetting').then((storedValue) => {
            if (storedValue != null) {
                setSendPushNotification(JSON.parse(storedValue));
            }
        });

        AsyncStorage.getItem('CountrySetting').then((storedValue) => {
            if (storedValue != null) {
                setCurrentCountry(storedValue);
            } else {
                getLocation();
            }
        });
        // fetchNews();
    }, []);

    useEffect(() => {
        if (currentLocation.coords.latitude != 0 && currentLocation.coords.longitude != 0) {
           // console.log('CurrentLocation:', 'lat', currentLocation.coords.latitude, 'lng', currentLocation.coords.longitude);
            getCountrynameByGps(currentLocation.coords.latitude, currentLocation.coords.longitude);
        }
    }, [currentLocation]);

    const getLocation = async () => {
        let permissionRequest = 'denied';
        await Permissions.askAsync(Permissions.LOCATION).then((permissionResponse) => {
            permissionRequest = permissionResponse.status;
            //console.log('permissionRequest:', permissionRequest);
        });
        if (permissionRequest === 'granted') {
           // console.log('getting current Position ...');
            await Location.getCurrentPositionAsync().then((res) => {
                const currentPosition = { coords: { latitude: res.coords.latitude, longitude: res.coords.longitude } };
                setCurrentLocation(currentPosition);
            });
        } else {
            //console.log('no permission granted');
        }
    };

    let [fontsLoaded] = useFonts({
        NoyhRBlack: require('./assets/fonts/NoyhRBlack.otf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });

    function fetchNews() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f4635151d8bf47af94cec511748e296e', true);
        xhr.onload = () => {
            setNewsData((newsData) => ({
                liveTopnews: new Topnews(JSON.parse(xhr.response)),
            }));
        };
        xhr.send();
    }
    function getCountrynameByGps(lat, lng) {
        const xhr = new XMLHttpRequest();
        const url = 'http://api.geonames.org/findNearbyJSON?lat=' + lat + '&lng=' + lng + '&username=newscope';
        xhr.open('GET', url, true);
        xhr.onload = () => {
            //console.log(JSON.parse(xhr.response));
            // console.log('You are located in:', JSON.parse(xhr.response).geonames);
            JSON.parse(xhr.response).geonames.map((location) => {
                  countries.filter(country => country.id === location.countryCode).length > 0 ? setCurrentCountry(location.countryCode) : setCurrentCountry('US');
            });
        };
        xhr.send();
        // console.log(url);
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SettingsContext.Provider
                value={{
                    theme: [currentTheme, setCurrentTheme],
                    push: [sendPushNotification, setSendPushNotification],
                    country: [currentCountry, setCurrentCountry],
                }}
            >
                <NewsContext.Provider value={[newsData, setNewsData]}>
                    <MainNavigator />
                </NewsContext.Provider>
            </SettingsContext.Provider>
        );
    }
}
