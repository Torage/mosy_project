import React, { useContext, useState, createContext } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { SearchScreenStylesLight, SearchScreenStylesDark } from './SearchScreen.styles';
import SelectLanguage from '../../components/SelectLanguageComponent/SelectLanguage';
import { NewsContext } from '../../Data/newsContext';
import { SettingsContext } from '../../Data/settingsContext';
import { Input } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { LANGUAGE } from '../../Data/language';
import { ScrollView } from 'react-native-gesture-handler';


export const SearchScreen = ({navigation}) => {

    const language = LANGUAGE;

    // Global State object
    const { theme, push, country } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [sendPushNotification, setSendPushNotification] = push;
    const [currentCountry, setCurrentCountry] = country;
    const { topNews, favoriteNews, searchNews } = useContext(NewsContext);
    const [searchData, setSearchData] = searchNews;
    const [activeButton, setActiveButton] = useState(2);
    const [languageModalVisible, setLanguageModalVisible] = useState(false);
    const [filter, setFilter] = useState(false);
    const [qWord, setQWord] = useState('')
    const [domains, setDomains] = useState('');
    const [exDomains, setExDomains] = useState('');
    const [sortBy, setSortBy] = useState('publishedAt');
    const [lang, setLang] = useState('DE');

    return (
        <View style={currentTheme === 'light' ? SearchScreenStylesLight.viewContainer : SearchScreenStylesDark.viewContainer}>
            <Modal //language modal
                statusBarTranslucent='true'
                animationType='fade'
                transparent={true}
                visible={languageModalVisible}
                onRequestClose={() => setLanguageModalVisible(false)}
            >
                <View style={currentTheme === 'light' ? SearchScreenStylesLight.centeredView : SearchScreenStylesDark.centeredView}>
                    <View>
                        <View style={currentTheme === 'light' ? SearchScreenStylesLight.modalView : SearchScreenStylesDark.modalView}>
                            <View style={currentTheme === 'light' ? SearchScreenStylesLight.modalViewHeader : SearchScreenStylesDark.modalViewHeader}>
                                <View style={currentTheme === 'light' ? SearchScreenStylesLight.modalIconContainer : SearchScreenStylesDark.modalIconContainer} />
                                <View style={currentTheme === 'light' ? SearchScreenStylesLight.modalTextContainer : SearchScreenStylesDark.modalTextContainer}>
                                    <Text style={currentTheme === 'light' ? SearchScreenStylesLight.modalHeaderText : SearchScreenStylesDark.modalHeaderText}>
                                        Select Language
                                    </Text>
                                </View>
                                <View style={currentTheme === 'light' ? SearchScreenStylesLight.modalIconContainer : SearchScreenStylesDark.modalIconContainer}>
                                    <TouchableOpacity onPress={() => setLanguageModalVisible(!languageModalVisible)}>
                                        <MaterialCommunityIcons 
                                            name='close' 
                                            color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent} 
                                            size={24} 
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={currentTheme === 'light' ? SearchScreenStylesLight.modalViewContent : SearchScreenStylesDark.modalViewContent}>
                            <FlatList
                                    data={language}
                                    style={{ width: '100%' }}
                                    contentContainerStyle={{ alignItems: 'center'}}
                                    renderItem={(itemData) => (<SelectLanguage id={itemData.item.id} name={itemData.item.name} flag={itemData.item.flag} currentlang={lang} setLang={setLang} setLanguageModalVisible={setLanguageModalVisible}/>)}
                                    keyExtractor={(item) => item.id}
                                />
                            </View>
                            <View style={currentTheme === 'light' ? SearchScreenStylesLight.modalViewContactFooter : SearchScreenStylesDark.modalViewContactFooter} />
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={currentTheme === 'light' ? SearchScreenStylesLight.searchInputView : SearchScreenStylesDark.searchInputView}>
                <Input
                    inputStyle={currentTheme === 'light' ? SearchScreenStylesLight.searchInputText : SearchScreenStylesDark.searchInputText}
                    inputContainerStyle={currentTheme === 'light' ? SearchScreenStylesLight.searchInput : SearchScreenStylesDark.searchInput}
                    placeholder='Search for News...'
                    leftIcon={
                        <MaterialCommunityIcons
                            name='magnify'
                            color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                            size={24}
                        />
                    }
                    rightIcon={
                        <TouchableOpacity
                            onPress={() => 
                                qWord === '' ? console.log('wrong') : navigation.navigate('SearchFilter', {
                                    qWord: qWord,
                                    domain: domains,
                                    exDomain: exDomains,
                                    sortBy: sortBy,
                                    lang: lang,
                                })
                            }
                        >    
                            <MaterialCommunityIcons
                                name='arrow-right-bold'
                                color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                                size={38}
                            />
                        </TouchableOpacity>
                    }
                    onChange={(value) => {
                        setQWord(value.nativeEvent.text)
                    }}
                    onSubmitEditing={(value) => {
                        console.log(filter)
                        navigation.navigate('SearchFilter', {
                            qWord: qWord,
                            domain: domains,
                            exDomain: exDomains,
                            sortBy: sortBy,
                            lang: lang,
                        });
                    }}
                />
            </View>
            <View style={currentTheme === 'light' ? SearchScreenStylesLight.extendedSearchView : SearchScreenStylesDark.extendedSearchView}>
                <TouchableOpacity
                    style={currentTheme === 'light' ? SearchScreenStylesLight.extendedSearchButton : SearchScreenStylesDark.extendedSearchButton}
                    onPress={() => setFilter(!filter)}
                >
                    <MaterialCommunityIcons 
                        name={filter ? "arrow-down-drop-circle-outline" : "arrow-right-drop-circle-outline"} 
                        size={18}
                        color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                        style={{marginTop: 17}}
                    />
                    <Text style={currentTheme === 'light' ? SearchScreenStylesLight.extendedSearchText : SearchScreenStylesDark.extendedSearchText}>
                        Advanced Search
                    </Text>
                </TouchableOpacity>
            </View>
            {filter ? (
                <ScrollView>
                    <View style={currentTheme === 'light' ? SearchScreenStylesLight.inputView : SearchScreenStylesDark.inputView}>
                        <Text style={currentTheme === 'light' ? SearchScreenStylesLight.description : SearchScreenStylesDark.description}>
                            Sort By:
                        </Text>
                        <View style={currentTheme === 'light' ? SearchScreenStylesLight.sortView : SearchScreenStylesDark.sortView}>
                            <TouchableOpacity  
                                style={(sortBy === 'relevancy') ? (
                                    currentTheme === 'light' ? SearchScreenStylesLight.sortFilter : SearchScreenStylesDark.sortFilter
                                ) : (
                                    currentTheme === 'light' ? SearchScreenStylesLight.sortFilter2 : SearchScreenStylesDark.sortFilter2
                                )}
                                onPress={
                                    () => {
                                        setSortBy('relevancy')
                                        console.log(sortBy)
                                    }
                                }
                                >
                                    <Text style={currentTheme === 'light' ? SearchScreenStylesLight.sortButtonText : SearchScreenStylesDark.sortButtonText}>
                                        Relevance
                                    </Text>                    
                            </TouchableOpacity>
                            <TouchableOpacity  
                                style={(sortBy === 'publishedAt') ? (
                                    currentTheme === 'light' ? SearchScreenStylesLight.sortFilter : SearchScreenStylesDark.sortFilter
                                ) : (
                                    currentTheme === 'light' ? SearchScreenStylesLight.sortFilter2 : SearchScreenStylesDark.sortFilter2
                                )}
                                onPress={
                                    () => {
                                        setSortBy('publishedAt')
                                        console.log(sortBy)
                                    }
                                }
                            >
                                <Text style={currentTheme === 'light' ? SearchScreenStylesLight.sortButtonText : SearchScreenStylesDark.sortButtonText}>
                                    Date
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  
                                style={(sortBy === 'popularity') ? (
                                    currentTheme === 'light' ? SearchScreenStylesLight.sortFilter : SearchScreenStylesDark.sortFilter
                                ) : (
                                    currentTheme === 'light' ? SearchScreenStylesLight.sortFilter2 : SearchScreenStylesDark.sortFilter2
                                )}
                                onPress={
                                    () => {
                                        setSortBy('popularity')
                                        console.log(sortBy)
                                    }
                                }
                            >
                                <Text style={currentTheme === 'light' ? SearchScreenStylesLight.sortButtonText : SearchScreenStylesDark.sortButtonText}>
                                    Popularity
                                </Text>
                            </TouchableOpacity>   
                        </View>
                    </View>
                    <View style={currentTheme === 'light' ? SearchScreenStylesLight.inputView : SearchScreenStylesDark.inputView}>
                        <Text style={currentTheme === 'light' ? SearchScreenStylesLight.description : SearchScreenStylesDark.description}>
                            Search in Domains:
                        </Text>
                        <Input
                            inputStyle={currentTheme === 'light' ? SearchScreenStylesLight.inputText : SearchScreenStylesDark.inputText}
                            inputContainerStyle={currentTheme === 'light' ? SearchScreenStylesLight.input : SearchScreenStylesDark.input}
                            placeholder='Examples...'
                            leftIcon={
                                <MaterialCommunityIcons
                                    name='magnify'
                                    color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                                    size={24}
                                />
                            }
                            onChange={(value) => {
                                setDomains(value.nativeEvent.text)
                            }}
                        />
                    </View>
                    <View style={currentTheme === 'light' ? SearchScreenStylesLight.inputView : SearchScreenStylesDark.inputView}>
                        <Text style={currentTheme === 'light' ? SearchScreenStylesLight.description : SearchScreenStylesDark.description}>
                            Exclude Domains:
                        </Text>
                        <Input
                            inputStyle={currentTheme === 'light' ? SearchScreenStylesLight.inputText : SearchScreenStylesDark.inputText}
                            inputContainerStyle={currentTheme === 'light' ? SearchScreenStylesLight.input : SearchScreenStylesDark.input}
                            placeholder='Examples...'
                            leftIcon={
                                <MaterialCommunityIcons
                                    name='magnify'
                                    color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                                    size={24}
                                />
                            }
                            onChange={(value) => {
                                setExDomains(value.nativeEvent.text)
                            }}
                        />
                    </View>
                    <View style={currentTheme === 'light' ? SearchScreenStylesLight.buttonView : SearchScreenStylesDark.buttonView}>
                        <TouchableOpacity  
                            style={currentTheme === 'light' ? SearchScreenStylesLight.button : SearchScreenStylesDark.button}
                            onPress={() => setLanguageModalVisible(!languageModalVisible)}
                        >
                            <Text style={currentTheme === 'light' ? SearchScreenStylesLight.buttonText : SearchScreenStylesDark.buttonText}>
                                Select Language : {lang}
                            </Text>                    
                        </TouchableOpacity>
                    </View>
                </ ScrollView>
            ) : (
                <View />
            )}
        </View>
    );
};
