import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import DetailPage from './pages/DetailPage/DetailPage';
import FoodPage from './pages/FoodPage/FoodPage';
import strings from './utils/strings';
const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#F6F6F6'},
            headerTitle: strings.food_categories,
            headerTitleAlign: 'center',
            headerTintColor: '#8785A2',
          }}
          name="category-screen"
          component={CategoryPage}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#F6F6F6'},
            headerTitle: 'Meals',
            headerTitleAlign: 'center',
            headerTintColor: '#8785A2',
          }}
          name="food-screen"
          component={FoodPage}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#F6F6F6'},
            headerTitle: 'Detail',
            headerTitleAlign: 'center',
            headerTintColor: '#8785A2',
          }}
          name="detail-screen"
          component={DetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
