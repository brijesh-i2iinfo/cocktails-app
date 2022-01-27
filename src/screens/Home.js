/* eslint-disable react-native/no-inline-styles */ /* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {fatchProducts} from '../Redux/productSlice';

function Home({navigation}) {
  const [SearchResults, setSearchResults] = useState('');
  const [Data, setData] = useState({});

  const products = useSelector(state => state.products);
  const searchValue = useSelector(state => state.search);

  useEffect(() => {
    setData(products);
  }, [products]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchProducts());
  }, []);

  useEffect(() => {
    const {search} = searchValue;
    try {
      const results = Data.products.filter(item => {
        return item.strDrink?.toLowerCase().includes(search.toLowerCase());
      });
      setSearchResults(results);
    } catch (error) {
      console.log('error');
    }
  }, [Data, searchValue]);

  return (
    <>
      <View>
        <View style={[styles.container]}>
          <FlatList
            data={SearchResults}
            renderItem={({item}) => (
              <View style={{flex: 1, flexDirection: 'column', margin: 5}}>
                <Card elevation={2}>
                  <Card.Cover source={{uri: item.strDrinkThumb}} />
                  <View style={styles.all_items}>
                    <Text style={styles.drink_item}>{item.strDrink}</Text>
                    <Text style={styles.glass_item}>{item.strGlass}</Text>
                    <Text style={styles.alco_item}>{item.strAlcoholic}</Text>
                    <Pressable
                      style={styles.back_btn}
                      onPress={() => {
                        navigation.navigate('MainPage', {
                          screen: 'ItemsDetails',
                          params: {
                            itemId: item.idDrink,
                          },
                        });
                      }}>
                      <Text style={styles.btn_text}>Details</Text>
                    </Pressable>
                  </View>
                </Card>
              </View>
            )}
            numColumns={2}
            keyExtractor={item => item.idDrink}
          />
        </View>
        {/* </ScrollView> */}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
  back_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#476a2e',
  },
  btn_text: {
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: 2,
    color: 'white',
  },
});
export default Home;
