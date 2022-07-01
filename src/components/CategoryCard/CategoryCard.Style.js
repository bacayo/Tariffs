import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.border_color,
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: colors.card_background_color,
  },
  image: {
    // width: 100,
    width: Dimensions.get('window').width / 4,
    // minHeight: 100,
    height: 75,
    resizeMode: 'contain',
    backgroundColor: colors.card_background_color,
  },
  title: {
    marginLeft: 5,
    fontWeight: '700',
    color: colors.title_color,
    fontSize: 18,
  },
});

/*TODO: style this page

https://colorhunt.co/palette/ffc7c7ffe2e2f6f6f68785a2 => colorHunt pallette

*/
