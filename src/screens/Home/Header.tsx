import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {sizeNormalize} from '@utils';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1639c4',
    height: sizeNormalize(56),
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
});
