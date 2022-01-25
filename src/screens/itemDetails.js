/* eslint-disable react-native/no-inline-styles */ /* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {cocktails} from '../utils/cocktails';

function ItemsDetails({route, navigation}) {
  const [data, setData] = useState();
  const {itemId} = route.params;

  useEffect(() => {
    setData(cocktails.filter(item => item.idDrink === itemId));
  }, [itemId]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Pressable
          style={styles.back_btn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btn_text}>Back Home</Text>
        </Pressable>

        {data?.map((item, index) => {
          return (
            <View style={styles.item_container} key={index}>
              <Text style={styles.title_drink}>{item.strDrink}</Text>
              <View>
                <Image
                  style={styles.image_container}
                  source={{
                    uri: item.strDrinkThumb,
                  }}
                />
              </View>
              <View>
                <View
                  style={[
                    styles.item_desc,
                    {
                      flexDirection: 'row',
                    },
                  ]}>
                  <Text style={styles.item_title}>Name : </Text>
                  <Text style={styles.item_subTitle}>{item.strDrink}</Text>
                </View>
                <View
                  style={[
                    styles.item_desc,
                    {
                      flexDirection: 'row',
                    },
                  ]}>
                  <Text style={styles.item_title}>Category : </Text>
                  <Text style={styles.item_subTitle}>{item.strCategory}</Text>
                </View>
                <View
                  style={[
                    styles.item_desc,
                    {
                      flexDirection: 'row',
                    },
                  ]}>
                  <Text style={styles.item_title}>Info : </Text>
                  <Text style={styles.item_subTitle}>{item.strAlcoholic}</Text>
                </View>
                <View
                  style={[
                    styles.item_desc,
                    {
                      flexDirection: 'row',
                    },
                  ]}>
                  <Text style={styles.item_title}>Glass : </Text>
                  <Text style={styles.item_subTitle}>{item.strGlass}</Text>
                </View>
                <View
                  style={[
                    styles.item_desc,
                    {
                      flexDirection: 'row',
                    },
                  ]}>
                  <Text style={styles.item_title}>Instructons : </Text>
                  <Text style={styles.item_subTitle}>
                    {item.strInstructions}
                  </Text>
                </View>
                <View
                  style={[
                    styles.item_desc,
                    {
                      flexDirection: 'row',
                    },
                  ]}>
                  <Text style={styles.item_title}>Ingredients : </Text>
                  <Text style={styles.item_subTitle}>
                    {item.strIngredient1} {item.strIngredient2}
                    {item.strIngredient3} {item.strIngredient4}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 4,
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
  item_container: {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: 250,
  },
  title_drink: {
    fontSize: 26,
    textTransform: 'uppercase',
    letterSpacing: 3,
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 16,
  },
  image_container: {
    width: 280,
    height: 280,
    marginBottom: 36,
  },
  item_desc: {
    marginBottom: 16,
  },
  item_title: {
    fontWeight: '700',
    fontSize: 16,
    marginRight: 8,
    color: '#476a2e',
    backgroundColor: '#d4e6a5',
    padding: 3,
    alignSelf: 'flex-start',
    borderRadius: 3,
  },
  item_subTitle: {
    fontWeight: '700',
    textTransform: 'capitalize',
    fontSize: 16,
    maxWidth: 200,
  },
});

export default ItemsDetails;
