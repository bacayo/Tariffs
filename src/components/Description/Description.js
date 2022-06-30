import React from 'react';
import {View, Text, Image, Pressable, Linking} from 'react-native';
import styles from './Description.Style';

const Description = ({meals}) => {
  const onLinkYoutube = () => {
    Linking.openURL(meals.strYoutube);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: meals.strMealThumb}} />
      <Text style={styles.title}>{meals.strMeal}</Text>
      <Text style={styles.area}>{meals.strArea}</Text>
      <View style={styles.line} />
      <View style={styles.desc}>
        <Text style={styles.descPara}>{meals.strInstructions}</Text>
      </View>
      <View style={styles.tubeContainer}>
        <Pressable onPress={onLinkYoutube}>
          <Text style={styles.youtubeTitle}>Wach on Youtube</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Description;
