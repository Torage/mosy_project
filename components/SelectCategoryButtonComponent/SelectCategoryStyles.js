import { StyleSheet } from 'react-native';
import { Styles } from '../../constants/styles';
import { Colors } from '../../constants/colors';

export const SelectCategoryStylesLight = StyleSheet.create({
  settingRow: {
    width: '96%',
    height: 40,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomStartRadius: 2,
    borderColor: Colors.light.dividerColor,
    backgroundColor: Colors.light.settingsBG,
  },

  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },

  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  rightContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  titleText: {
    fontFamily: Styles.defaultFont,
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
    color: Colors.light.accent,
  },

  abbreviationText: {
    fontFamily: Styles.defaultFont,
    fontSize: 12,
    marginLeft: 10,
    color: Colors.light.descriptionText,
  },
});

export const SelectCategoryStylesDark = StyleSheet.create({
  settingRow: {
    width: '96%',
    height: 40,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomStartRadius: 2,
    borderColor: Colors.dark.dividerColor,
    backgroundColor: Colors.dark.settingsBG,
  },

  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },

  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  rightContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  titleText: {
    fontFamily: Styles.defaultFont,
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
    color: Colors.dark.accent,
  },

  abbreviationText: {
    fontFamily: Styles.defaultFont,
    fontSize: 12,
    marginLeft: 10,
    color: Colors.dark.descriptionText,
  },
});
