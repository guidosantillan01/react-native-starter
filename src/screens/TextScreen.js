import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// TextInput has ZERO styles by default
// iOS capitalize input automatically

// We are ALWAYS going to use value, onChangeText and send a callback function.

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      {name.length !== 0 && <Text>Hi {name.trim()}!</Text>}

      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />

      {password.length < 6 && password.length !== 0 && (
        <Text>Password must be longer than 5 characters</Text>
      )}
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
