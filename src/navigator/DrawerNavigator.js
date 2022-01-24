/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import Home from '../screens/Home';
import About from '../screens/About';
import ItemsDetails from '../screens/itemDetails';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  // To show permanent drawer when screen is rotated
  const {width, height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={{flex: 4}}>
        <Drawer.Navigator
          screenOptions={{
            drawerType: width >= height ? 'permanent' : 'front',
            drawerPosition: 'left',
            headerShown: 10,
          }}>
          <Drawer.Screen
            name="Home"
            options={{title: 'Home'}}
            component={Home}
          />
          <Drawer.Screen
            name="About"
            options={{title: 'About'}}
            component={About}
          />
          <Drawer.Screen
            name="ItemsDetails"
            component={ItemsDetails}
            // options={{title: 'ItemsDetails'}}
          />
        </Drawer.Navigator>
      </View>
      {/* <View style={{flex: 1}}>
        <Text>Hello</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    flexDirection: 'row',
  },
});
