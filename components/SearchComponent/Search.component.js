import React from 'react'
import { View, Text, Button } from 'react-native'
import {searchStyles} from './Search.styles'
import { TextInput } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default SearchComponent = () => {
    return (
    <View style={searchStyles.viewContainer}>
        <View style={searchStyles.mainView}>
            <View style={searchStyles.titleView}>
                <Text style={searchStyles.titleText}>
                    Find Your News here
                </Text>
                <TextInput 
                    placeholder="Type here"
                    style={searchStyles.inputStyle} 
                />
                <TouchableOpacity style={searchStyles.btnContainer}>
                <Text style={searchStyles.btnText}>
                    Search
                </Text>
                </TouchableOpacity>        
            </View>
        </View>
    </View>
    )
}