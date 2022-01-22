/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Button, Card} from 'react-native-paper';
import {cocktails} from '../utils/cocktails';
import SearchbarHeader from './searchbarHeader';

function Home() {
  return (
    <>
      <View>
        <SearchbarHeader />
        <ScrollView>
          <View style={styles.container}>
            <FlatList
              data={cocktails}
              renderItem={({item}) => (
                <View style={{flex: 1, flexDirection: 'column', margin: 5}}>
                  <Card elevation={2}>
                    <Card.Cover source={{uri: item.strDrinkThumb}} />
                    <View style={styles.all_items}>
                      <Text style={styles.drink_item}>{item.strDrink}</Text>
                      <Text style={styles.glass_item}>{item.strGlass}</Text>
                      <Text style={styles.alco_item}>{item.strAlcoholic}</Text>
                      <Button
                        style={styles.details_btn}
                        mode="contained"
                        onPress={() => console.log('Pressed')}>
                        Details
                      </Button>
                    </View>
                  </Card>
                </View>
              )}
              numColumns={2}
              keyExtractor={(item, index) => index}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  all_items: {
    margin: 15,
  },
  drink_item: {
    fontSize: 32,
    letterSpacing: 2,
    marginBottom: 5,
    fontWeight: '600',
  },
  glass_item: {
    marginBottom: 5,
    letterSpacing: 2,
    fontSize: 16,
    fontWeight: '600',
  },
  alco_item: {
    color: '#afafaf',
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '300',
  },
  details_btn: {
    backgroundColor: '#476a2e',
    fontSize: 13,
    letterSpacing: 2,
    padding: 4,
  },
});
export default Home;
