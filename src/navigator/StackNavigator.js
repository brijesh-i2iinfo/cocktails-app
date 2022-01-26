/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ItemsDetails from '../screens/itemDetails';
import Home from '../screens/Home';
import CustomNavigationBar from '../components/CustomNavigationBar';

const StackNavigator = ({}) => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" options={{title: 'Home'}} component={Home} />
        <Stack.Screen name="ItemsDetails" component={ItemsDetails} />
      </Stack.Navigator>
    </>
  );
};

StackNavigator.propTypes = {};

export default StackNavigator;
