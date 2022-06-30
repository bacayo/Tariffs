import React from 'react';
import {View, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Description from '../../components/Description/Description';
import LoadingAnimation from '../../components/Animation/LoadingAnimation';
import ErrorAnimation from '../../components/Animation/ErrorAnimation';
import styles from './Detail.Style';

const DetailPage = props => {
  const {idMeal} = props.route.params;

  console.log(idMeal);

  const {loading, error, data} = useFetch(`${Config.API_FOOD_DESC}${idMeal}`);

  if (loading) {
    return <LoadingAnimation />;
  }
  if (error) {
    return <ErrorAnimation />;
  }
  const renderItem = ({item}) => <Description meals={item} />;

  return (
    <View style={styles.container}>
      <FlatList renderItem={renderItem} data={data.meals} />
    </View>
  );
};
export default DetailPage;
