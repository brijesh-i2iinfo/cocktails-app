/* eslint-disable no-unused-vars */
import React, {useRef, useState} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';
import {Appbar, Menu, TextInput} from 'react-native-paper';
import {IconButton} from 'react-native-paper';
import ReactNativeAnimatedSearchbox from 'react-native-animated-searchbox';

function CustomNavigationBar({navigation, back, ...others}) {
  const [visible, setVisible] = useState(false);
  const refSearchBox = useRef();
  const [searchIconColor, setSearchIconColor] = useState('#fff');
  const [animatePress, setAnimatePress] = useState(new Animated.Value(1));
  const [searchTerm, setSearchTerm] = useState('');

  console.log('searchTerm', searchTerm);

  const openMenu = () => {
    navigation.openDrawer();
  };

  const animateIn = () => {
    Animated.timing(animatePress, {
      toValue: 0.5,
      duration: 500,
      useNativeDriver: true, // Add This line
    }).start();
  };

  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Action icon="menu" color="white" onPress={openMenu} />

      <Appbar.Content title={others?.options?.title || 'APP NAME'} />

      <View style={styles.search_container}>
        <Animated.View>
          <ReactNativeAnimatedSearchbox
            ref={refSearchBox}
            placeholder={'Search...'}
            searchIconColor={searchIconColor}
            onPress={animateIn}
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
          />
        </Animated.View>
      </View>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  search_container: {
    flex: 1,
  },
  searchbar: {
    width: 60,
    height: 20,
  },
});

export default CustomNavigationBar;
