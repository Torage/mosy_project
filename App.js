import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { MainNavigator } from './navigation/MainNavigator';
import { NewsContext } from './Data/newsContext';
import { Topnews } from './Models/TopnewsModel';
import { SettingsContext } from './Data/settingsContext';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { COUNTRIES } from './Data/countrys';
import {AppearanceProvider, Appearance} from 'react-native-appearance';

export default function App() {
    
    // Our list of supported countrys 
    const countries = COUNTRIES;

    // Data states for news, favorites and search (initial newsCard while loading)
    const [newsData, setNewsData] = useState({
        liveTopnews: new Topnews({
            status: 'init',
            totalResults: 1,
            articles: [
                {
                    source: { id: 42, name: 'newscope' },
                    author: 'newscope',
                    title: 'Fetching Live Newsdata',
                    description: 'there is a problem with your network conectivity or something terrible has gone wrong',
                    url: 'https://www.youtube.com/watch?v=JQghgR9kbRs',
                    urlToImage:
                        'https://external-preview.redd.it/BWGcTEoCHnY5_wypxGb1zCgxJ_nhRwsZ7nB8Yt3V0b0.png?auto=webp&s=77143dd39e651c6634b97de775149d29fc9910bb',
                    publishedAt: '1982-10-16T07:23:00Z',
                    content: 'newscope',
                },
            ],
        }),
    });
    const [favoriteData, setFavoriteData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    // Settings states (initial values for push, country, category, location)
    const [currentTheme, setCurrentTheme] = useState(Appearance.getColorScheme());
    const [sendPushNotification, setSendPushNotification] = useState(false);
    const [currentCountry, setCurrentCountry] = useState('US');
    const [currentCategory, setCurrentCategory] = useState('General');
    const [currentLocation, setCurrentLocation] = useState({ coords: { latitude: 0, longitude: 0 } });
    const [globalTheme, setGlobalTheme] = useState();

    // On app start get stored settings > one time; 
    useEffect(() => {
        AsyncStorage.getItem('GlobalThemeSetting').then((storedValue) => {
            console.log('GlobalThemeSetting: ' + storedValue);
            if (storedValue != null) {
                if (JSON.parse(storedValue) === true){
                    setGlobalTheme(true);
                }else{
                    setGlobalTheme(false);
                    AsyncStorage.getItem('DarkSkinSetting').then((storedValue) => {
                        if (storedValue != null) {
                            if (JSON.parse(storedValue) === true ? setCurrentTheme('dark') : setCurrentTheme('light'));
                        }
                    
                    });
                }
            }
        });

        

        AsyncStorage.getItem('PushSetting').then((storedValue) => {
            if (storedValue != null) {
                setSendPushNotification(JSON.parse(storedValue));
            }
        });

        // Country settings; if none, ask for Location
        AsyncStorage.getItem('CountrySetting').then((storedValue) => {
            if (storedValue != null) {
                console.log(storedValue + ' restored')
                setCurrentCountry(storedValue);
            } else {
                getLocation();
            }
        });

        // Category settings; if none set default "general"
        AsyncStorage.getItem('CategorySetting').then((storedValue) => {
            if (storedValue != null) {
                setCurrentCategory(storedValue);

            }
            else{
                setCurrentCategory('General');
            }
        });

    }, []);

        // sets up a Listener and refreshes currentTheme if globalTheme is true
        useEffect(() =>{
            function handleThemeChange(change){
                //    console.log('trying to switch to: ' + change)
                setCurrentTheme(change)
            }
            
            const subscribtion = Appearance.addChangeListener(({ colorScheme }) => {
                if(globalTheme === true){
                handleThemeChange(colorScheme)
                }
            });
                return () => {
                    subscribtion.remove()
                }
        }, [globalTheme]);

    // everytime location changes with proper values, getCountrynameByGps() 
    useEffect(() => {
        if (currentLocation.coords.latitude != 0 && currentLocation.coords.longitude != 0) {
            // debug location
            // console.log('CurrentLocation:', 'lat', currentLocation.coords.latitude, 'lng', currentLocation.coords.longitude);
            getCountrynameByGps(currentLocation.coords.latitude, currentLocation.coords.longitude);
        }
    }, [currentLocation]);

    // Ask for location permission if granted get latitude and longitude and set them to location state
    const getLocation = async () => {
        let permissionRequest = 'denied';
        await Permissions.askAsync(Permissions.LOCATION).then((permissionResponse) => {
            permissionRequest = permissionResponse.status;
            // debug permission response
            //console.log('permissionRequest:', permissionRequest);
        });
        if (permissionRequest === 'granted') {
            console.log('getting current Position ...');
            await Location.getCurrentPositionAsync().then((res) => {
                const currentPosition = { coords: { latitude: res.coords.latitude, longitude: res.coords.longitude } };
                setCurrentLocation(currentPosition);
            });
        } else {
            // Error handling here (current just fetchNews)
            fetchNews();
            //console.log('no permission granted');
        }
    };
    // Load custom fonts
    let [fontsLoaded] = useFonts({
        NoyhRBlack: require('./assets/fonts/NoyhRBlack.otf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });

    // Api call using country and category state
    function fetchNews() {
        const xhr = new XMLHttpRequest();
        xhr.open(
            'GET',
            'http://newsapi.org/v2/top-headlines?country=' + currentCountry + '&category=' + currentCategory + '&pageSize=100&apiKey=f4635151d8bf47af94cec511748e296e',
            true
        );
        xhr.onload = () => {
            setNewsData((newsData) => ({
                liveTopnews: new Topnews(JSON.parse(xhr.response)),
            }));
        };
        xhr.send();
    }
    // Api call to get current country using latitude and longitude. 
    function getCountrynameByGps(lat, lng) {
        const xhr = new XMLHttpRequest();
        const url = 'http://api.geonames.org/findNearbyJSON?lat=' + lat + '&lng=' + lng + '&username=newscope';
        xhr.open('GET', url, true);
        xhr.onload = () => {
            // debug api response(whole object) and api response(key geonames) 
            // console.log(JSON.parse(xhr.response));
            // console.log('You are located in:', JSON.parse(xhr.response).geonames);
            
            // checks if returned country is supported, else sets default US
            JSON.parse(xhr.response).geonames.map((location) => {
                countries.filter((country) => country.id === location.countryCode).length > 0
                    ? setCurrentCountry(location.countryCode)
                    : setCurrentCountry('US');
                console.log(location.countryCode + ' located');
                AsyncStorage.setItem('CountrySetting', location.countryCode);
            });
        };
        xhr.send();
        // debug api call
        // console.log(url);
    }

    // Show AppLoading while fonts not loads,
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        // Start the app with MainNavigator, provide NewsContext, SettingsContext and Appearance
        return (
            <AppearanceProvider>
            <SettingsContext.Provider
                value={{
                    theme: [currentTheme, setCurrentTheme],
                    push: [sendPushNotification, setSendPushNotification],
                    country: [currentCountry, setCurrentCountry],
                    category: [currentCategory, setCurrentCategory],
                    location: [currentLocation, setCurrentLocation], 
                    global: [globalTheme, setGlobalTheme],
                }}
            >
                <NewsContext.Provider
                    value={{
                        theme: [currentTheme, setCurrentTheme],
                        push: [sendPushNotification, setSendPushNotification],
                        country: [currentCountry, setCurrentCountry],
                        category: [currentCategory, setCurrentCategory],
                    }}
                >
                    <MainNavigator />
                </NewsContext.Provider>
            </SettingsContext.Provider>
            </AppearanceProvider>
        );
    }
}
