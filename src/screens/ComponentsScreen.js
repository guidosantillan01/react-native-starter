import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Guido Santillan';

  return (
    <View>
      <Text style={styles.title}>Getting started with React Native!</Text>
      <Text style={styles.subtitle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45
  },
  subtitle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
