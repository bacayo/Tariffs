import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    // padding: 5,
    margin: 10,
    elevation: 20,
  },
  innerContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    width: '100%',
    backgroundColor: colors.screen_background_color,
    opacity: 0.7,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    textAlign: 'right',
    color: colors.meal_title_color,
  },
});
