import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Child #1</Text>
      <Text style={styles.text}>Child #2</Text>
      <Text style={styles.text}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    borderWidth: 3,
    borderColor: 'red'
  }
});

export default BoxScreen;
