import React from 'react'
import { View, Text } from 'react-native'
import {searchStyles} from './Search.styles'
import { TextInput } from 'react-native-paper'

export default SearchComponent = () => {
    return (
    <View style={searchStyles.mainView}>
                    <View style={searchStyles.categoryView}>
        <Text style={searchStyles.categoryText}>
            Search
        </Text>
        <TextInput></TextInput>
        </View>
        </View>
    )
}