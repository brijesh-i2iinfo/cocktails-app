/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import ItemsDetails from '../screens/itemDetails';
import Home from '../screens/Home';

const NavigationDrawerStructure = props => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <></>
    // <View style={{flexDirection: 'row'}}>
    //   <TouchableOpacity onPress={toggleDrawer}>
    //     {/*Donute Button Image */}
    //     <Image
    //       source={{
    //         uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
    //       }}
    //       style={{width: 25, height: 25, marginLeft: 5}}
    //     />
    //   </TouchableOpacity>
    // </View>
  );
};
const StackNavigator = ({navigation}) => {
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
