import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from '../../src/screens/Home';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});