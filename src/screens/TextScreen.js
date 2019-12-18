import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// TextInput has ZERO styles by default
// iOS capitalize input automatically

const TextScreen = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
