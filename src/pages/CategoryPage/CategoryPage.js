import React from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import styles from './CategoryPage.Style';
import useFetch from '../../hooks/useFetch';
import LoadingAnimation from '../../components/Animation/LoadingAnimation';
import ErrorAnimation from '../../components/Animation/ErrorAnimation';

const CategoryPage = props => {
  const {loading, error, data} = useFetch(Config.API_CATEGORY);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <ErrorAnimation />;
  }

  const renderList = ({item}) => <CategoryCard item={item} />;

  return (
    <View style={styles.container}>
      <FlatList renderItem={renderList} data={data.categories} />
    </View>
  );
};

export default CategoryPage;
