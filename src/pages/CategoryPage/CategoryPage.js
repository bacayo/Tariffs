// // import {React, useState, useEffect} from 'react';
// import React from 'react';
// import {useState, useEffect} from 'react';
// import {View, Text, FlatList} from 'react-native';
// import Config from 'react-native-config';
// import CategoryCard from '../../components/CategoryCard/CategoryCard';
// import axios from 'axios';

// const CategoryPage = () => {
//   const [data, setData] = useState([]);

//   //   useEffect(() => {
//   //     fetchData();
//   //   }, []);

//   const fetchData = async () => {
//     // const {data: categoryData} = await axios.get(Config.API_CATEGORY);
//     const {data: categoryData} = await axios.get(Config.API_CATEGORY);
//     setData(categoryData);
//     console.log(categoryData);
//   };

//   const renderCategory = ({item}) => <CategoryCard category={item} />;

//   return (
//     <View>
//       {/* <FlatList data={data} renderItem={renderCategory} />; */}
//       <Text>Test</Text>
//     </View>
//   );
// };

// export default CategoryPage;

import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Config from 'react-native-config';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import axios from 'axios';
import styles from './CategoryPage.Style';

const CategoryPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data: categoryData} = await axios.get(Config.API_CATEGORY);
    setData(categoryData);
    console.log(categoryData);
  };

  const renderList = ({item}) => <CategoryCard category={item} />;

  return (
    <View style={styles.container}>
      <FlatList renderItem={renderList} data={data.categories} />
    </View>
  );
};

export default CategoryPage;
