import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetail title="Forest" description="This is the description" />
      <ImageDetail title="Jungle" description="This is the description" />
      <ImageDetail title="Beach" description="This is the description" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
