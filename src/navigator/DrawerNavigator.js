/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import {StyleSheet, View} from 'react-native';
import About from '../screens/About';
import StackNavigator from './StackNavigator';
import CustomNavigationBar from '../components/CustomNavigationBar';

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
            header: props => <CustomNavigationBar {...props} />,
          }}>
          <Drawer.Screen
            name="MainPage"
            options={{title: 'Home'}}
            component={StackNavigator}
          />
          {/* StackNavigator */}
          <Drawer.Screen
            name="About"
            options={{title: 'About'}}
            component={About}
          />
        </Drawer.Navigator>
      </View>
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
