import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Box Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 3,
    borderColor: 'black'
  },
  text: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 20
  }
});

export default BoxScreen;
