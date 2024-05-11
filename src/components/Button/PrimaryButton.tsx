import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {sizeNormalize} from '@utils';
import {ThemeUtils} from '@themes';

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
    backgroundColor: ThemeUtils.primary[900],
    paddingVertical: sizeNormalize(8),
    paddingHorizontal: sizeNormalize(16),
    ...ThemeUtils.rounded_md,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: ThemeUtils.primary[900],
  },
  label: {
    ...ThemeUtils.text_lg_semi_bold,
    color: ThemeUtils.neutral[0],
  },
});
