/* eslint-disable no-unused-vars */
import React, {useRef, useState} from 'react';
import {View, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import ReactNativeAnimatedSearchbox from 'react-native-animated-searchbox';
import {setSearch} from '../Redux/searchSlice';
import {useDispatch, useSelector} from 'react-redux';

function CustomNavigationBar({navigation, back, ...others}) {
  const refSearchBox = useRef();
  const [searchIconColor, setSearchIconColor] = useState('#fff');
  const [animatePress, setAnimatePress] = useState(new Animated.Value(1));
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.search);

  const openMenu = () => {
    navigation.openDrawer();
  };

  const closeSearchBox = () => refSearchBox.current.close();

  const animateIn = () => {
    Animated.timing(animatePress, {
      toValue: 0.5,
      duration: 500,
      width: 250,
      useNativeDriver: true, // Add This line
    }).start();
  };

  return (
    <Appbar.Header style={styles.container} onPress={closeSearchBox}>
      <Appbar.Action icon="menu" color="white" onPress={openMenu} />

      <Appbar.Content title={others?.options?.title || 'APP NAME'} />
      <View style={styles.search_container}>
        <Animated.View>
          <ReactNativeAnimatedSearchbox
            // width={120}
            ref={refSearchBox}
            placeholder={'Search...'}
            searchIconColor={searchIconColor}
            onPress={animateIn}
            value={searchValue.search}
            onChangeText={text => dispatch(setSearch(text))}
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
