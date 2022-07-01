import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import DetailPage from './pages/DetailPage/DetailPage';
import FoodPage from './pages/FoodPage/FoodPage';
import strings from './utils/strings';
import colors from './utils/colors';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTintColor: colors.header_tint_color,
            headerStyle: {backgroundColor: colors.header_background_color},
            headerTitle: strings.food_categories,
            headerTitleAlign: 'center',
          }}
          name="category-screen"
          component={CategoryPage}
        />
        <Stack.Screen
          options={({route}) => ({
            headerTintColor: colors.header_tint_color,
            headerStyle: {backgroundColor: colors.header_background_color},
            headerTitle: route.params.strCategory,
            headerTitleAlign: 'center',
          })}
          name="food-screen"
          component={FoodPage}
        />
        <Stack.Screen
          options={({route}) => ({
            headerTintColor: colors.header_tint_color,
            headerStyle: {backgroundColor: colors.header_background_color},
            headerTitle: route.params.strMeal,
            headerTitleAlign: 'center',
          })}
          name="detail-screen"
          component={DetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
