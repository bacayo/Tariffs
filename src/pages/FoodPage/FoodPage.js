import React from 'react';
import {FlatList, View} from 'react-native';
import Config from 'react-native-config';
import FoodCard from '../../components/FoodCard/FoodCard';
import useFetch from '../../hooks/useFetch';
import styles from './FoodPage.Style';
import LoadingAnimation from '../../components/Animation/LoadingAnimation';
import ErrorAnimation from '../../components/Animation/ErrorAnimation';

const FoodPage = props => {
  //   console.log(props);
  const {strCategory} = props.route.params;
  const {data, loading, error} = useFetch(`${Config.API_FOOD}${strCategory}`);

  const HandleDetail = idMeal => {
    props.navigation.navigate('DetailPage', {idMeal});
  };
  //render food list
  const renderItem = ({item}) => (
    <FoodCard meal={item} onPress={() => HandleDetail(item.idMeal)} />
  );

  if (loading) {
    return <LoadingAnimation />;
  }
  if (error) {
    return <ErrorAnimation />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderItem} />
    </View>
  );
};

export default FoodPage;
