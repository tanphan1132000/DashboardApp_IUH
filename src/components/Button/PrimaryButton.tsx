import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {sizeNormalize} from '@utils';

type Props = {
  label: string;
  onPress: () => void;
};

export const PrimaryButton = ({label, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1639c4',
    paddingVertical: sizeNormalize(12),
    paddingHorizontal: sizeNormalize(32),
    borderRadius: 8,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
