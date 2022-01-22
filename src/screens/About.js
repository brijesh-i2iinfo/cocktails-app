/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function About() {
  return (
    <View>
      <Text style={styles.about_title}>About Us</Text>
      <View style={styles.about_subtitle}>
        <Text style={styles.subtitle_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          repudiandae architecto qui adipisci in officiis, aperiam sequi atque
          perferendis eos, autem maiores nisi saepe quisquam hic odio
          consectetur nobis veritatis quasi explicabo obcaecati doloremque?
          Placeat ratione hic aspernatur error blanditiis?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  about_title: {
    fontSize: 32,
    letterSpacing: 3,
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 20,
    fontWeight: '700',
  },
  about_subtitle: {
    padding: 16,
  },
  subtitle_text: {
    lineHeight: 26,
    fontWeight: '400',
    letterSpacing: 2.5,
  },
});

export default About;
