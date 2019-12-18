import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// TextInput has ZERO styles by default
// iOS capitalize input automatically

// We are ALWAYS going to use value, onChangeText and send a callback function.

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text>My name is {name}</Text>
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
