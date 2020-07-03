import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, Modal, Text, StatusBar, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';
import { HeaderStylesDark, HeaderStylesLight } from './Header.styles';
import Constants from 'expo-constants';
import ToggleButtonTheme from '../ToggleButtonComponent/ToggleButtonTheme';
import ToggleButtonPush from '../ToggleButtonComponent/ToggleButtonPush';
import ContactButton from '../ContactButtonComponent/ContactButton';
import SelectCountry from '../SelectCountryButtonComponent/SelectCountry';
import SelectCountryButton from '../SelectCountryButtonComponent/SelectCountryButton';
import SelectLocationButton from '../SelectCountryButtonComponent/SelectLocationButton';
import SelectCategoryButton from '../SelectCategoryButtonComponent/SelectCategoryButton';
import SelectCategory from '../SelectCategoryButtonComponent/SelectCategory';
import { SettingsContext } from '../../Data/settingsContext';
import Toast from 'react-native-tiny-toast'
import { FlatList } from 'react-native-gesture-handler';
import { COUNTRIES } from '../../Data/countrys';
import { CATEGORIES } from '../../Data/categories';

export const HeaderComponent = (props) => {
  const countries = COUNTRIES;
  const categories = CATEGORIES;

  //global states
  const { theme, push, country, global } = useContext(SettingsContext);
  const [currentTheme, setCurrentTheme] = theme;
  const [sendPushNotification, setSendPushNotification] = push;
  const [currentCountry, setCurrentCountry] = country;
  const [globalTheme, setGlobalTheme] = global;

  //local States
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  //Modals
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  //simple validate function
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const clearInputData = () => {
    setContactName('');
    setContactEmail('');
    setContactSubject('');
    setContactMessage('');
  };

  const sendInputData = async () => {
    if (contactName === '' || contactSubject === '' || contactMessage === '') {
      Toast.show('Fields cant be empty.', Toast.LONG);
    } else {
      if (validateEmail(contactEmail)) {
        try {
          fetch('https://argames15.com/newsscopeSendMail.php', {
            method: 'POST',
            body: JSON.stringify({
              to: 'newsscope@argames15.com',
              name: contactName,
              email: contactEmail,
              subject: contactSubject,
              message: contactMessage,
              hash: 'okey',
            }),
          });
        } catch (error) {
          console.log(error);

          if (error != null) {
            Toast.show('Something went wrong. Please try again later.', Toast.LONG);
          }
        }

        clearInputData();
        setContactModalVisible(false);
        Toast.show('Thank you ' + contactName + '\nYour message has been sent.', Toast.LONG);
      } else {
        Toast.show('Please enter a valid email adresss.', Toast.LONG);
      }
    }
  };

  function getButtonTitle(){
    var message = '';
    if(globalTheme === true){
      message = 'System Theme'; 
    }else{
      if(currentTheme === 'light'){
        message = 'Switch to Dark' ;
      }else{
        message = 'Switch to Light';
      }
    }
    return message
  };

  function getDescription(){
    var description = '';
    if (globalTheme === true 
      ? description = 'Hold For Manual Theming'
      : description = 'Hold For Device Theming'
    )
    return description
  };

  return (
    <SafeAreaView style={currentTheme === 'light' ? HeaderStylesLight.safeAreaView : HeaderStylesDark.safeAreaView}>
      <Modal //settings modal
        animationType='fade'
        transparent={true}
        visible={settingsModalVisible}
        onRequestClose={() => setSettingsModalVisible(false)}
      >
        <View style={currentTheme === 'light' ? HeaderStylesLight.centeredView : HeaderStylesDark.centeredView}>
          <View>
            <View style={currentTheme === 'light' ? HeaderStylesLight.modalView : HeaderStylesDark.modalView}>
              <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewHeader : HeaderStylesDark.modalViewHeader}>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}></View>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalTextContainer : HeaderStylesDark.modalTextContainer}>
                  <Text style={currentTheme === 'light' ? HeaderStylesLight.modalHeaderText : HeaderStylesDark.modalHeaderText}>Settings</Text>
                </View>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}>
                  <TouchableOpacity onPress={() => setSettingsModalVisible(!settingsModalVisible)}>
                    <MaterialCommunityIcons name='close' color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent} size={24} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContent : HeaderStylesDark.modalViewContent}>
                <ToggleButtonTheme title={getButtonTitle()} description={getDescription()}></ToggleButtonTheme>
                <ToggleButtonPush title='Push Notification' description='Enable Push Notification'></ToggleButtonPush>
                <SelectCountryButton title='Select Country' description='Select your country for news' setCountryModal={setCountryModalVisible}></SelectCountryButton>
                <SelectCategoryButton title='Select Category' description='Category for home news' setCategoryModal={setCategoryModalVisible}></SelectCategoryButton>
                <ContactButton title='Send Feedback' description='Feedback, Questions? Good send us a mail.' setContactModal={setContactModalVisible}></ContactButton>
              </View>
              <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewFooter : HeaderStylesDark.modalViewFooter}>
                <Text style={currentTheme === 'light' ? HeaderStylesLight.modalFooterText : HeaderStylesDark.modalFooterText}>
                  {Constants.manifest.name} {Constants.manifest.version}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal //country modal
        statusBarTranslucent='true'
        animationType='fade'
        transparent={true}
        visible={countryModalVisible}
        onRequestClose={() => {
          console.log('modal closed');
        }}
      >
        <View style={currentTheme === 'light' ? HeaderStylesLight.centeredView : HeaderStylesDark.centeredView}>
          <View>
            <View style={currentTheme === 'light' ? HeaderStylesLight.modalView : HeaderStylesDark.modalView}>
              <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewHeader : HeaderStylesDark.modalViewHeader}>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}></View>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalTextContainer : HeaderStylesDark.modalTextContainer}>
                  <Text style={currentTheme === 'light' ? HeaderStylesLight.modalHeaderText : HeaderStylesDark.modalHeaderText}>Select Country</Text>
                </View>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}>
                  <TouchableOpacity onPress={() => setCountryModalVisible(!countryModalVisible)}>
                    <MaterialCommunityIcons name='close' color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent} size={24} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContent : HeaderStylesDark.modalViewContent}>
                <SelectLocationButton setCountryModalVisible={setCountryModalVisible}/>
                <FlatList
                  data={countries}
                  style={{ width: '100%' }}
                  contentContainerStyle={{ alignItems: 'center' }}
                  renderItem={(itemData) => <SelectCountry id={itemData.item.id} name={itemData.item.name} setCountryModalVisible={setCountryModalVisible} />}
                  keyExtractor={(item) => item.id}
                />
              </View>
              <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContactFooter : HeaderStylesDark.modalViewContactFooter}></View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal //category modal
        statusBarTranslucent='true'
        animationType='fade'
        transparent={true}
        visible={categoryModalVisible}
        onRequestClose={() => {
          console.log('modal closed');
        }}
      >
        <View style={currentTheme === 'light' ? HeaderStylesLight.centeredView : HeaderStylesDark.centeredView}>
          <View>
            <View style={currentTheme === 'light' ? HeaderStylesLight.modalView : HeaderStylesDark.modalView}>
              <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewHeader : HeaderStylesDark.modalViewHeader}>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}></View>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalTextContainer : HeaderStylesDark.modalTextContainer}>
                  <Text style={currentTheme === 'light' ? HeaderStylesLight.modalHeaderText : HeaderStylesDark.modalHeaderText}>Select Category</Text>
                </View>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}>
                  <TouchableOpacity onPress={() => setCategoryModalVisible(!categoryModalVisible)}>
                    <MaterialCommunityIcons name='close' color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent} size={24} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContent : HeaderStylesDark.modalViewContent}>
                <FlatList
                  data={categories}
                  style={{ width: '100%' }}
                  contentContainerStyle={{ alignItems: 'center' }}
                  renderItem={(itemData) => <SelectCategory id={itemData.item.id} name={itemData.item.name} iconName={itemData.item.iconName} setCategoryModalVisible={setCategoryModalVisible} />}
                  keyExtractor={(item) => item.id}
                />
              </View>
              <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContactFooter : HeaderStylesDark.modalViewContactFooter}></View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal //contact modal
        statusBarTranslucent='true'
        animationType='fade'
        transparent={true}
        visible={contactModalVisible}
        onRequestClose={() => {
          console.log('modal closed');
        }}
      >
        <View style={currentTheme === 'light' ? HeaderStylesLight.centeredView : HeaderStylesDark.centeredView}>
          <View>
            <View style={currentTheme === 'light' ? HeaderStylesLight.modalView : HeaderStylesDark.modalView}>
              <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewHeader : HeaderStylesDark.modalViewHeader}>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}></View>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalTextContainer : HeaderStylesDark.modalTextContainer}>
                  <Text style={currentTheme === 'light' ? HeaderStylesLight.modalHeaderText : HeaderStylesDark.modalHeaderText}>Send Feedback</Text>
                </View>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalIconContainer : HeaderStylesDark.modalIconContainer}>
                  <TouchableOpacity onPress={() => setContactModalVisible(!contactModalVisible)}>
                    <MaterialCommunityIcons name='close' color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent} size={24} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContent : HeaderStylesDark.modalViewContent}>
                <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputContainer : HeaderStylesDark.modalViewContentInputContainer}>
                  <Text style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputText : HeaderStylesDark.modalViewContentInputText}>Name</Text>
                  <TextInput
                    style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInput : HeaderStylesDark.modalViewContentInput}
                    onChangeText={(text) => setContactName(text)}
                    value={contactName}
                    placeholder={'Please enter your name:'}
                    maxLength={32}
                  />
                </View>

                <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputContainer : HeaderStylesDark.modalViewContentInputContainer}>
                  <Text style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputText : HeaderStylesDark.modalViewContentInputText}>Email</Text>
                  <TextInput
                    style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInput : HeaderStylesDark.modalViewContentInput}
                    onChangeText={(text) => setContactEmail(text)}
                    value={contactEmail}
                    placeholder={'Please enter your email:'}
                    maxLength={64}
                  />
                </View>

                <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputContainer : HeaderStylesDark.modalViewContentInputContainer}>
                  <Text style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputText : HeaderStylesDark.modalViewContentInputText}>Subject</Text>
                  <TextInput
                    style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInput : HeaderStylesDark.modalViewContentInput}
                    onChangeText={(text) => setContactSubject(text)}
                    value={contactSubject}
                    placeholder={'Please enter your subject:'}
                    maxLength={32}
                  />
                </View>

                <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputContainer : HeaderStylesDark.modalViewContentInputContainer}>
                  <Text style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputText : HeaderStylesDark.modalViewContentInputText}>Message</Text>
                  <TextInput
                    style={currentTheme === 'light' ? HeaderStylesLight.modalViewContentInputFull : HeaderStylesDark.modalViewContentInputFull}
                    onChangeText={(text) => setContactMessage(text)}
                    value={contactMessage}
                    placeholder={'Please enter your message:'}
                    maxLength={250}
                  />
                </View>
              </View>
              <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewContactFooter : HeaderStylesDark.modalViewContactFooter}>
                <TouchableOpacity onPress={() => clearInputData()}>
                  <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewFooterButton : HeaderStylesDark.modalViewFooterButton}>
                    <Text style={currentTheme === 'light' ? HeaderStylesLight.modalViewFooterButtonText : HeaderStylesDark.modalViewFooterButtonText}>Clear</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sendInputData()}>
                  <View style={currentTheme === 'light' ? HeaderStylesLight.modalViewFooterButton : HeaderStylesDark.modalViewFooterButton}>
                    <Text style={currentTheme === 'light' ? HeaderStylesLight.modalViewFooterButtonText : HeaderStylesDark.modalViewFooterButtonText}>Send</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={currentTheme === 'light' ? HeaderStylesLight.headerLeftContainer : HeaderStylesDark.headerLeftContainer}></View>
      <View style={currentTheme === 'light' ? HeaderStylesLight.headerMidContainer : HeaderStylesDark.headerMidContainer}>
        <Image style={{ width: 250, height: 30 }} source={currentTheme === 'light' ? require('../../assets/newscope_logo_light.png') : require('../../assets/newscope_logo_dark.png')} />
      </View>
      <View style={currentTheme === 'light' ? HeaderStylesLight.headerRightContainer : HeaderStylesDark.headerRightContainer}>
        <TouchableOpacity onPress={() => setSettingsModalVisible(!settingsModalVisible)}>
          <MaterialCommunityIcons name='settings' color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent} size={26} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
