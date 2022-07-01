import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {},
  image: {
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.title_color,
    margin: 5,
  },
  area: {
    fontSize: 18,
    color: colors.title_color,
    margin: 5,
    fontWeight: '400 ',
  },
  line: {
    borderColor: colors.border_color,
    borderBottomWidth: 1,
    marginBottom: 5,
    marginTop: 5,
  },
  desc: {
    margin: 5,
  },
  descPara: {
    color: colors.p_color,
    fontSize: 18,
  },
  tubeContainer: {
    width: 250,
    height: 40,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    flexDirection: 'row',
  },
  youtubeTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
