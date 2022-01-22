/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

function SearchbarHeader() {
  const [searchTerm, setSearchTerm] = useState('');

  // console.log(searchTerm);

  return (
    <>
      <View>
        <View style={styles.search_bar}>
          <View>
            <Text style={styles.search_leble}>
              Search Your Favorite Cocktail
            </Text>
          </View>
          <View style={styles.searchbar_icon}>
            <TextInput
              value={searchTerm}
              onChangeText={text => setSearchTerm(text)}
            />
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  search_bar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    padding: 25,
    backgroundColor: '#f1f5f8',
  },
  search_leble: {
    marginBottom: 20,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#476a2e',
  },
  searchbar_icon: {
    width: 220,
  },
});
export default SearchbarHeader;
