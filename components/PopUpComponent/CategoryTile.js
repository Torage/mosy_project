// imports
import { View, TouchableNativeFeedback, StyleSheet, Text } from 'react-native';
import {MenuOption} from 'react-native-popup-menu';
import { Styles } from '../../constants/styles';

// generate a CategoryTile props are: id, name, iconName
export default CategoryTile = (props) => {
    
    // states
    const { theme, category } = useContext(SettingsContext);
    const [currentTheme, setCurrentTheme] = theme;
    const [currentCategory, setCurrentCategory] = category;

    // logic
    const changeCategory = () => {
        setCurrentCategory(props.name);
        AsyncStorage.setItem('CategorySetting', props.name);
    };

    return(
        <MenuOption>
            <TouchableNativeFeedback style={Styles.button} onPress={changeCategory()}>
                <View style={Styles.content}>
                    <View style={Styles.iconContainer}>
                        <MaterialCommunityIcons
                        style={currentTheme === 'light' ? SelectCategoryStylesLight.icon : SelectCategoryStylesDark.icon}
                        name={props.iconName}
                        color={currentTheme === 'light' ? Colors.light.accent : Colors.dark.accent}
                        size={26}
                        />
                    </View>
                <Text style={Styles.title}>{props.name}</Text>
                </View>
            </TouchableNativeFeedback>
        </MenuOption>
    )
    // return
}

const Styles = StyleSheet.create({

    button:{},
    content:{},
    iconContainer:{},
    title:{},

});