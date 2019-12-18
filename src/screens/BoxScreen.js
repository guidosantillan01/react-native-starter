import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <View style={styles.viewOne} />
      <View style={styles.viewTwo} />
      <View style={styles.viewThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOne: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  viewTwo: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    marginTop: 100
  },
  viewThree: {
    height: 100,
    width: 100,
    backgroundColor: 'purple'
  }
});

export default BoxScreen;
