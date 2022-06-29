import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#8785A2',
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#F6F6F6',
  },
  image: {
    // width: 100,
    width: Dimensions.get('window').width / 4,
    minHeight: 100,
    resizeMode: 'contain',
  },
  title: {},
});

/*TODO: style this page 

https://colorhunt.co/palette/ffc7c7ffe2e2f6f6f68785a2 => colorHunt pallette

*/
