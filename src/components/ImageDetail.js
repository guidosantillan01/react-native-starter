import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImageDetail = ({ title, description }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
