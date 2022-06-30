import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './FoodCard.Style';
import {useNavigation} from '@react-navigation/native';

const FoodCard = ({meal}) => {
  const navigation = useNavigation();
  const onPressFoodDetail = () => {
    navigation.navigate('detail-screen', {
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onPressFoodDetail}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: meal.strMealThumb}} />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{meal.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default FoodCard;
