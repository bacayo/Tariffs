import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './CategoryCard.Style';

const CategoryCard = ({item}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('food-page', {strCategory: item.strCategory});
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.strCategoryThumb}} />
        <Text style={styles.title}>{item.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CategoryCard;
