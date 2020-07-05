import React, { useState, useContext } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View} from "react-native";

import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers} from 'react-native-popup-menu';
import { CATEGORIES } from '../../Data/categories';
import { SettingsContext } from '../../Data/settingsContext'


const CategoryPopUp = () =>{
    
    const categories = CATEGORIES;
    
    // global states
    const { theme, category } = useContext(SettingsContext);
    const [currentCategory, setCurrentCategory] = category;
    const [currentTheme, setCurrentTheme] = theme;
    
    // local states
    const [modalVisible, setModalVisible] = useState(false);

    // logic

    return (
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
    
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        
    );
};


   
     
   
   const styles = StyleSheet.create({
     centeredView: {
       flex: 1,
       justifyContent: "flex-end",
       alignItems: "center",
       marginTop: 22
     },
     modalView: {
       backgroundColor: "white",
       borderRadius: 20,
       padding: 35,
       alignItems: "center",
       elevation: 5
     },
     openButton: {
       backgroundColor: "#F194FF",
       borderRadius: 20,
       padding: 10,
       elevation: 2
     },
     textStyle: {
       color: "white",
       fontWeight: "bold",
       textAlign: "center"
     },
     modalText: {
       marginBottom: 15,
       textAlign: "center"
     }
   });
   
   export default CategoryPopUp;

    /*
    return(
            <Menu renderer={renderers.Popover} >
                <MenuTrigger triggerOnLongPress={true}/>
                <MenuOptions>
                    <FlatList
                        data={categories}
                        renderItem={({ itemData }) => (
                        <MenuOption value={itemData.item.name} text={itemData.item.name} />
                        )}
                        style={{ height: 200 }}
                    />
                </MenuOptions>
            </Menu>    
    );
    */
